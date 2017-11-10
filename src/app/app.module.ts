import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule} from '@angular/http';
import { RouterModule }   from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AddCarModule } from './add-car/add-car.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { AuthModule } from './auth/auth.module';

import { CarDetailViewComponent } from './car-detail-view/car-detail-view.component';
import { StatusBarComponent } from './status-bar/status-bar.component';
import { CarsListComponent } from './car-detail-view/cars-list/cars-list.component';
import { WellcomeComponent } from './wellcome/wellcome.component';
import { ChromeComponent } from './chrome/chrome.component';
import { DropDownMenuComponent } from './chrome/drop-down-menu/drop-down-menu.component';

import { CarDetailModule } from './car-detail/car-detail.module';

import { RoutingModule } from './routing/routing.module';

import { AppComponent } from './app.component';

// The class which handles AJAX data services
import { DataService } from './common/data.service';

import { NotificationHubService } from './common/notification-hub.service';
import { UtilitiesService } from './common/utilities.service';
import { AuthService } from './common/auth.service';

import { createStore, Store } from 'redux';
import { rootReducer } from './redux-store/index';
import { FillUpActionCreators } from './redux-action-creators/fill-up-action-creators';
import { ReminderActionCreators } from './redux-action-creators/reminder.action-creators';
import { SystemActionCreators } from './redux-action-creators/system.action-creators';
import { UserActionCreators } from './redux-action-creators/user.action-creators';


export function appStoreFactory() {
 return createStore(rootReducer);
}

/**
 * Main application module
 *
 * @module AppModule
 */
@NgModule({
  declarations: [
    AppComponent,
    StatusBarComponent,
    CarDetailViewComponent,
    CarsListComponent,
    WellcomeComponent,
    ChromeComponent,
    DropDownMenuComponent
  ],
  imports: [
    RoutingModule,
    DashboardModule,
    CarDetailModule,
    AddCarModule,
    AuthModule,
    BrowserModule,
    HttpModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [
    DataService, NotificationHubService, UtilitiesService, AuthService,
    { provide: 'AppStore', useFactory: appStoreFactory },
    FillUpActionCreators, ReminderActionCreators, UserActionCreators, SystemActionCreators
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
