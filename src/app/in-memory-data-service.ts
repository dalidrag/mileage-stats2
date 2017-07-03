import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
	createDb() {
   const cars = [
     {id: 1, name: 'Hot Rod', model: 'BMW 330xi', year:'2003'},
     {id: 2, name: "Soccer Mom's Ride", model: 'Honda Accord LX', year: '1997'},
     {id: 3, name: 'Mud Lover', model: 'Jeep Wrangler', year: '2011'},
   ];
   const fillUps = [
   	{id: 1, quantity: 11, pricePerGalon: 2.81, date:'2016-04-28', station: 'Fabrikam', odometer: 15455},
   	{id: 2, quantity: 7, pricePerGalon: 3, date:'2016-06-12', station: 'Joe', odometer: 15843},
   	{id: 3, quantity: 10, pricePerGalon: 2.81, date:'2016-08-12', station: 'Fabrikam', odometer: 16223},
   	{id: 4, quantity: 4, pricePerGalon: 2.61, date:'2016-09-23', station: 'Cheepo', odometer: 16589}
   ];
   const reminders = [
   	{id: 1, text: 'Check Fluid', date:'2016-05-07'},
   	{id: 2, text: 'Vacuum Car', date:'2016-06-03'},
   	{id: 3, text: 'Change Tires', date:'2030-09-23'},
   	{id: 4, text: 'Vacuum Car', date:'2030-10-01'},
   	{id: 5, text: 'Check Fluid', date:'2030-11-05'}
   ];
   return {cars, fillUps, reminders};
  }
}
