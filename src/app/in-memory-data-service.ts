import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
	createDb() {
   let cars = [
     {id: 1, name: "Hot Rod", model: "BMW 330xi", year:"2003"},
     {id: 2, name: "Soccer Mom's Ride", model: "Honda Accord LX", year: "1997"},
     {id: 3, name: "Mud Lover", model: "Jeep Wrangler", year: "2011"},
   ];
   return {cars};
  }
}
