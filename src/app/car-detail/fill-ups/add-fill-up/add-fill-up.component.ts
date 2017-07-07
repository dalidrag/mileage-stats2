import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute, UrlSegment } from '@angular/router';

import { FillUp } from '../../../common/fillUp';
import { DataService } from '../../../common/data.service';

@Component({
  selector: 'app-add-fill-up',
  templateUrl: './add-fill-up.component.html',
  styleUrls: ['./add-fill-up.component.css']
})
export class AddFillUpComponent implements OnInit {
	addFillUpForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private route: ActivatedRoute, private dataService: DataService) { }

  ngOnInit() {
  	this.addFillUpForm = this.fb.group({
  	  		'quantity': ['', Validators.required], 'price': ['', Validators.compose([Validators.required, Validators.pattern('[0-9]*.?[0-9]+')])], 'odometer': ['', Validators.required], 'station': ['', Validators.maxLength(20)], 'date': ['', Validators.required]
  	  	});
  }

  onSubmit(formValues: any): void {  
  	let newFillup = new FillUp;
  	newFillup.quantity = formValues.quantity;
  	newFillup.pricePerGalon = +formValues.price;
  	newFillup.odometer = formValues.odometer;
  	newFillup.station = formValues.station;
  	newFillup.date = formValues.date.toString();

  	this.dataService.addFillUp(newFillup).then((addedFillUp: FillUp) => {
  		this.router.navigate(['../', addedFillUp.id], { relativeTo: this.route }); // Go up to parent route
  	}).
  	catch((error) => {
  		console.log(error); // TODO: delete for production
  	});
	}

}
