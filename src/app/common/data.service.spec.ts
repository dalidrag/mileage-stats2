/* tslint:disable:no-unused-variable */

import { TestBed, inject, getTestBed } from '@angular/core/testing';
import { HttpModule } from '@angular/http';

import { DataService } from './data.service';

describe('DataService', () => {
  let service: DataService;
  let carId, fillUpId, reminderId: string;

  beforeEach(() => {
    const injector = TestBed.configureTestingModule({
      imports: [
       HttpModule
      ],
      providers: [DataService]
    });
    service = injector.get(DataService);
  });

  it('should be a service', () => {
    expect(service).toBeTruthy();
  });

  describe('getCars method', () => { //
   it('should return a Promise resolved to correct car data', (done) => {
    service.getCars().then((data) => {
     expect(data[0].name).toBe('Hot Rod');  // because the test base's first car are named 'Hot Rod'
     carId = data[0].id.toString();
     done();
    });
   });
  });

  describe('getCarById() method', () => {
   it('should return a Promise resolved to correct car data', (done) => {
    service.getCarById(carId).then((data) => {
     expect(data.name).toBe('Hot Rod');  // because the test base's first car are named 'Hot Rod'
     done();
    });
   });
  });
  
  describe('getFillUps() method', () => {
   it('should return a Promise resolved to an array with 3 elements', (done) => {
    service.getFillUps(carId).then((data) => {
     expect(data.length).toBe(3);  // because the test base's first car have 3 FillUps entries
     fillUpId = data[0].id.toString();
     done();
    });
   });
  });
  describe('getFillUpById() method', () => {
   it('should return a Promise resolved to a correct FillUp object', (done) => {
    service.getFillUpById(carId, fillUpId).then((data) => {
     expect(data.quantity).toBe(11);  // first fill up of first car has quantity 11
     done();
    });
   });
  });
  describe('getAllFillUps() method', () => {
   it('should return a Promise resolved to correct values', (done) => {
    service.getAllFillUps().then((data) => {
     expect(data[carId][0].odometer).toBe(15455);  // odometer of the first fill up from the test base
     done();
    });
   });
  });
  describe('getReminders() method', () => {
   it('should return a Promise resolved to an array with 1 element', (done) => {
    service.getReminders(carId).then((data) => {
     expect(data.length).toBe(1);  // because the test base's first car have 4 FillUps entries
     reminderId = data[0].id.toString();
     done();
    });
   });
  });
  describe('getReminderById() method', () => {
   it('should return a Promise resolved to a correct Reminder object', (done) => {
    service.getReminderById(carId, reminderId).then((data) => {
     expect(data.text).toBe('Check Fluid');  // first fill up of first car has quantity 11
     done();
    });
   });
  });
});