import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule} from '@angular/http';
import { RouterModule }   from '@angular/router';
import { FormsModule } from '@angular/forms';

import { RoutingModule } from './routing/routing.module';
import { AddCarModule } from './add-car/add-car.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { CarDetailModule } from './car-detail/car-detail.module';

import { AppComponent } from './app.component';

// The class which handles AJAX data services
import { DataService } from './common/data.service';
import { NotificationHubService } from './common/notification-hub.service';
import { UtilitiesService } from './common/utilities.service';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './common/in-memory-data-service';
import { StatusBarComponent } from './status-bar/status-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    StatusBarComponent
  ],
  imports: [
    RoutingModule,
    DashboardModule,
    CarDetailModule,
    AddCarModule,
    BrowserModule,
    HttpModule,
    FormsModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService)
  ],
  providers: [DataService, NotificationHubService, UtilitiesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
