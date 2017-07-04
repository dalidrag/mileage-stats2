import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule} from '@angular/http';

import { AppComponent } from './app.component';
import { CarCardComponent } from './car-card/car-card.component';

// The class which handles AJAX data services
import { DataService } from './data.service';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data-service';
import { CarCardsComponent } from './car-cards/car-cards.component';
import { AddCarButtonComponent } from './add-car-button/add-car-button.component';

@NgModule({
  declarations: [
    AppComponent,
    CarCardComponent,
    CarCardsComponent,
    AddCarButtonComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService)
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
