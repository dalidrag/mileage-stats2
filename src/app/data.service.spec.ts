import { TestBed, inject } from '@angular/core/testing';
import { HttpModule } from '@angular/http';

import { DataService } from './data.service';

import { Car } from './car';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data-service';

describe('DataService', () => {
  let service: DataService;

  beforeEach(() => {
    const injector = TestBed.configureTestingModule({
      imports: [
      	HttpModule,
      	InMemoryWebApiModule.forRoot(InMemoryDataService)
      ],
      providers: [DataService]
    });
    service = injector.get(DataService);
  });

  it('should be created', inject([DataService], (service: DataService) => {
    expect(service).toBeTruthy();
  }));

  describe('getCars method', () => {
  	it('should return an array of 3 items', (done) => {
  	 service.getCars().then(function (data) {
  	  expect(data.length).toBe(3); // because the fake http server initializes Car 											 
  	  														 // collection with 3 entries
  	 	done();
  	 });
  	});
  });

  describe('addCars method', () => {
  	it('should add a car to cars collection', (done) => {
  	 let newCar = new Car();
  	 service.addCar(newCar)
  	 .then(() => service.getCars())
  	 .then((data) => {
  	  expect(data.length).toBe(4); // because the fake http server initializes Car 											 
  	  														 // collection with 3 entries
  	 	done();
  	 });
  	});
  });

  describe('updateCar() method', () => {
   it('should update car with id 1', (done) => {
    let updatedCar = new Car();
    updatedCar.id = '1';
    updatedCar.model = 'Yugo';
    updatedCar.name = 'Loud Lawnmower';
    updatedCar.year = '1992';

    service.updateCar(updatedCar)
    .then(() => service.getCars())
    .then((data) => {
    	expect(data[0].name).toBe('Loud Lawnmower');
    	done();
    })
   });
  });

  describe('deleteCar() method', () => {
   it('should delete car with id 1', (done) => {
    service.deleteCar('2')
    	.then(() => service.getCars())
    	.then((data) => {
    		expect(data.length).toBe(2);
    		done();
    	});
   });
  });
});
