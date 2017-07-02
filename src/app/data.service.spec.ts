import { TestBed, inject } from '@angular/core/testing';
import { HttpModule } from '@angular/http';

import { DataService } from './data.service';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data-service';

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
  	  expect(data.length).toBe(3); // because the fake http server initializes Car 											 // collection with 3 entries
  	 	done();
  	 });
  	});
  });
});
