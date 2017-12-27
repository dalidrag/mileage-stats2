/***********************************************************************************/
import { Component, OnInit, OnDestroy, ViewChild, HostBinding, Inject } from '@angular/core';
import { Router, ActivatedRoute }   from '@angular/router';
import { FormControl, Validators, FormGroup } from '@angular/forms';

import { ImageCropperComponent, CropperSettings } from 'ng2-img-cropper';

import { Car } from '../common/car';

import { DataService } from '../common/data.service';
import { NotificationHubService, HubNotificationType } from '../common/notification-hub.service';
import { UtilitiesService} from '../common/utilities.service';

import { slideFromLeftToRightAnimation } from '../common/componentAnimations';
/***********************************************************************************/

/**
 * Presents form for adding new car
 *
 * @class AddCarComponent
 */
@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css'],
  animations: [ slideFromLeftToRightAnimation ]
})
export class AddCarComponent implements OnInit, OnDestroy {
	@ViewChild(ImageCropperComponent) cropper:ImageCropperComponent;
  data: any;
  cropperSettings: CropperSettings;

  car: Car;
  static cars: Car[] = [{id: '0', model: '', name: '', year:''}];
  imageValid = false;

  sub;
  unsubscribeStore;

  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display')   display = 'block';
  @HostBinding('style.position')  position = 'absolute';
  @HostBinding('style.top')  top = '0px';

  carModelCtrl = new FormControl('', Validators.compose([Validators.required, Validators.maxLength(20)]));
  carNameCtrl = new FormControl('', Validators.compose([Validators.required, Validators.maxLength(20), AddCarComponent.carUnique]));
  carYearCtrl = new FormControl('', Validators.compose([Validators.required, Validators.pattern('[0-9]+'), Validators.minLength(4), Validators.maxLength(4)]));
  addCarForm: FormGroup;

  constructor(@Inject('AppStore') private appStore, private dataService: DataService, private utilitiesService: UtilitiesService, private notificationHubService: NotificationHubService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  	this.car = new Car;
    this.notificationHubService.emit(HubNotificationType.AppState, "Adding a new car ('ESC' to cancel)");

    this.addCarForm = new FormGroup({first: this.carModelCtrl, second: this.carNameCtrl, third: this.carYearCtrl});

    this.sub = this.route.data
    .subscribe((data: { cars: Car[] }) => {
      AddCarComponent.cars = data.cars;
    });

    // Listens for escape key pressed to quit the component
    //subscribe to Redux store state changes
    this.unsubscribeStore = this.appStore.subscribe(() => {
      let state = this.appStore.getState();
      if (state.system.escKeyPressed)
        this.cancel();
    });

    let element = document.getElementsByClassName("add-car-view")[0];
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

    this.data = {}
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
    this.unsubscribeStore();
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

    this.dataService.addCar(this.car, base64Image).then(() => {
  		this.notificationHubService.emit(HubNotificationType.Success, 'New car added');  // Notify of success via event hub service
      this.router.navigate(['dashboard']);
  	})
    .catch(error => this.utilitiesService.handleError(error));
  }

 /**
  * Used to send the car image to image cropper
  *
  * @param $event
  * @method fileChangeListener
  */
  fileChangeListener($event) {
    let imageCache:any = new Image();

     let file:File = $event.target.files[0];
     let myReader:FileReader = new FileReader();
     let image = document.getElementById('uploadedImage') as HTMLImageElement;
    
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
      }

     myReader.readAsDataURL(file);
  }

  /**
   * Quits the component by routing away
   *
   * @method cancel
   */
   cancel() {
      // Simply navigate back to dashboard
      this.router.navigate(['dashboard']);
   }

  /**
   * A validator for a nick-name input field
   *
   * @method carUnique
   * @param control A form control to validate
   * @return {StringMap<string:boolean>} Returns the result of validation in the form {'carNameNotUnique': true}
   */
  static carUnique(control: FormControl): { [s: string]: boolean } {
    for (let i = 0; i < AddCarComponent.cars.length; ++i)
        if (control.value === AddCarComponent.cars[i].name)
          return {carNameNotUnique: true};
  }
}
