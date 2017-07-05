import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule} from '@angular/http';
import { RouterModule }   from '@angular/router';
import { FormsModule } from '@angular/forms';

import { RoutingModule } from './routing/routing.module';
import { AddCarModule } from './add-car/add-car.module';
import { DashboardModule } from './dashboard/dashboard.module';

import { AppComponent } from './app.component';

// The class which handles AJAX data services
import { DataService } from './data.service';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data-service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    RoutingModule,
    DashboardModule,
    AddCarModule,
    BrowserModule,
    HttpModule,
    FormsModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService)
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
