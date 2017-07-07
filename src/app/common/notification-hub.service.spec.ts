import { TestBed, inject } from '@angular/core/testing';

import { NotificationHubService, HubNotificationType } from './notification-hub.service';

describe('NotificationHubService', () => {
  let service: NotificationHubService;

  beforeEach(() => {
    const injector= TestBed.configureTestingModule({
      providers: [NotificationHubService]
    });
    service = injector.get(NotificationHubService)
  });

  it('should instantiate', () => {
    expect(service).toBeTruthy();
  });

  describe('emit method', () => {
  	it('should properly emit events when called', (done) => {
  		service.eventStream.subscribe(value => {
  			expect(value).toBe('Hello!');
  			done();
  		});
  		service.emit(HubNotificationType.AppState, 'Hello!')
  	});
  });
});
