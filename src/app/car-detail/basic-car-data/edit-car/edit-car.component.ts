/***********************************************************************************/
import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Router, ActivatedRoute }   from '@angular/router';
import { FormControl, Validators, FormGroup } from '@angular/forms';

import { ImageCropperComponent, CropperSettings } from 'ng2-img-cropper';

import { Car } from '../../../common/car';

import { DataService } from '../../../common/data.service';
import { NotificationHubService, HubNotificationType } from '../../../common/notification-hub.service';
import { UtilitiesService} from '../../../common/utilities.service';
/***********************************************************************************/

/**
 * Presents form for editing a car
 *
 * @class EditCarComponent
 */

@Component({
  selector: 'app-edit-car',
  templateUrl: './edit-car.component.html',
  styleUrls: ['./edit-car.component.css']
})
export class EditCarComponent implements OnInit {
	@ViewChild(ImageCropperComponent)
  cropper: ImageCropperComponent;
  imageValid = false;
  data: any;
  cropperSettings: CropperSettings;

  car: Car = new Car;
  pristineCar: Car = new Car;  // used to reset values
  static cars: Car[] = [{id: '0', model: '', name: '', year:''}];
	static carId:string;

  sub;

  carModelCtrl: FormControl;
  carNameCtrl: FormControl;
  carYearCtrl: FormControl;
  editCarForm: FormGroup;

  constructor(private dataService: DataService, private utilitiesService: UtilitiesService, private notificationHubService: NotificationHubService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.route.data
    .subscribe((data: { cars: Car[] }) => {
      EditCarComponent.cars = data.cars;
    
		  EditCarComponent.carId = this.route.parent.snapshot.params['carId'];
			for (let car of EditCarComponent.cars)
				if (car.id.toString() === EditCarComponent.carId) {
	    		this.car = car;
          this.pristineCar.model = this.car.model;
          this.pristineCar.name = this.car.name;
          this.pristineCar.year = this.car.year;

	    		break;
				}

			this.carModelCtrl = new FormControl('', Validators.compose([Validators.required, Validators.maxLength(20)]));
	  	this.carNameCtrl = new FormControl('', Validators.compose([Validators.required, Validators.maxLength(20), EditCarComponent.carUnique]));
  		this.carYearCtrl = new FormControl('', Validators.compose([Validators.required, Validators.pattern('[0-9]+'), Validators.minLength(4), Validators.maxLength(4)]));

			this.editCarForm = new FormGroup({first: this.carModelCtrl, second: this.carNameCtrl, third: this.carYearCtrl});

      // Get width of container element
      let element = document.getElementsByClassName("edit-car-view")[0] as HTMLElement;
      let width = parseInt(window.getComputedStyle(element,"").width);

      // Setting for the cropper component
      this.cropperSettings = new CropperSettings();
      this.cropperSettings.canvasWidth = width * 0.9;
      this.cropperSettings.canvasHeight = width * 0.4;

      this.cropperSettings.width = width * 0.1;
      this.cropperSettings.height = width * 0.1;

      this.cropperSettings.croppedWidth = 110;
      this.cropperSettings.croppedHeight = 110;

      this.cropperSettings.rounded = false;

      this.cropperSettings.cropperDrawSettings.strokeColor = 'rgba(255,255,255,1)';
      this.cropperSettings.cropperDrawSettings.strokeWidth = 2;

      this.cropperSettings.noFileInput = true;
      this.cropperSettings.fileType = 'png';

      this.data = {};

      this.notificationHubService.emit(HubNotificationType.AppState, 'Editing ' + this.car.name + " ('ESC' to cancel)");
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  /**
    * Writes the new car data to the database
    * and then navigates away to show all the cars.
    * 
    * @method writeCarData
    */
  writeCarData(): void {
  	let base64Image: string;
    if (this.imageValid) base64Image = this.data.image;

    this.car.model = this.car.model.trim();
    this.car.name = this.car.name.trim();
    this.car.year = this.car.year.trim();

    this.dataService.updateCar(this.car, base64Image).then(() => {
  		// the following is a string which will be appended to image src URL in car component
      this.utilitiesService.avatarURLFragment = '?' + Date.now().toString(); // image cache busting fragment
      this.notificationHubService.emit(HubNotificationType.Success, 'Car updated');  // Notify of success via event hub service
      this.router.navigate(['dashboard']);
  	})
    .catch(error => this.utilitiesService.handleError(error));
  }

  /**
     * Used to send image to the image cropper component
     * 
     * @method fileChangeListener
     * @param $event
     */
    fileChangeListener($event) {
      let imageCache:any = new Image();
      let file:File = $event.target.files[0];
      let myReader:FileReader = new FileReader();
      myReader.onloadend = (loadEvent:any) => {
          imageCache.src = loadEvent.target.result;
          imageCache.onload = () => {
            if (imageCache.width < 110 || imageCache.height < 110)
              this.imageValid = false;
            else {
              this.imageValid = true;
              this.cropper.setImage(imageCache);
            }
          }
      };
      myReader.readAsDataURL(file);
    }

   /**
    * Trims input fields on losing focus
    *
    * @method onBlur
    * @param event:any
    */
    onBlur(event: any) {
      event.target.value = event.target.value.trim();
    }
    
  /**
   * Listens for escape key pressed to quit the component
   *
   * @method onKey
   * @param event:any
   */
   onKey(event:any): void { // without type info
     if (event.key === 'Escape') {  // escape key was pressed
        this.cancel();    
     } 
   }
   /**
   * Quits the component by routing away
   *
   * @method cancel
   */
   cancel() {
      this.car.model = this.pristineCar.model;
      this.car.year = this.pristineCar.year;
      this.car.name = this.pristineCar.name;
      // Simply navigate back
      this.router.navigate(['../'], { relativeTo: this.route }); // Go up to parent route          
   }

  /**
   * A validator for a nick-name input field
   *
   * @method carUnique
   * @param control A form control to validate
   * @return {StringMap<string:boolean>} Returns the result of validation in the form {'carNameNotUnique': true}
   */
  static carUnique(control: FormControl): { [s: string]: boolean } {
    for (let i = 0; i < EditCarComponent.cars.length; ++i)
      if (EditCarComponent.cars[i].id.toString() !== EditCarComponent.carId && control.value === EditCarComponent.cars[i].name)
        return {carNameNotUnique: true};
  }

}
