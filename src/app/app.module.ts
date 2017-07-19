import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule} from '@angular/http';
import { RouterModule }   from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AddCarModule } from './add-car/add-car.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { CarDetailViewComponent } from './car-detail-view/car-detail-view.component';
import { StatusBarComponent } from './status-bar/status-bar.component';
import { CarsListComponent } from './car-detail-view/cars-list/cars-list.component';

import { CarDetailModule } from './car-detail/car-detail.module';

import { RoutingModule } from './routing/routing.module';

import { AppComponent } from './app.component';

// The class which handles AJAX data services
import { DataService } from './common/data.service';
import { NotificationHubService } from './common/notification-hub.service';
import { UtilitiesService } from './common/utilities.service';

import { createStore, Store } from 'redux';
import { rootReducer } from './redux-store/index';
import { FillUpActionCreators } from './redux-action-creators/fill-up-action-creators';
import { ReminderActionCreators } from './redux-action-creators/reminder.action-creators';
import { WindowResizeActionCreators } from './redux-action-creators/window-resize.action-creators';

export function appStoreFactory() {
 return createStore(rootReducer);
}

@NgModule({
  declarations: [
    AppComponent,
    StatusBarComponent,
    CarDetailViewComponent,
    CarsListComponent
  ],
  imports: [
    RoutingModule,
    DashboardModule,
    CarDetailModule,
    AddCarModule,
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [
    DataService, NotificationHubService, UtilitiesService,
    { provide: 'AppStore', useFactory: appStoreFactory },
    FillUpActionCreators, ReminderActionCreators, WindowResizeActionCreators
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
