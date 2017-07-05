import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule} from '@angular/http';
import { RouterModule }   from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CarCardComponent } from './car-card/car-card.component';
import { CarCardsComponent} from './car-cards/car-cards.component';
import { AddCarButtonComponent } from './add-car-button/add-car-button.component';
import { AddCarComponent } from './add-car/add-car.component';

// The class which handles AJAX data services
import { DataService } from './data.service';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data-service';

@NgModule({
  declarations: [
    AppComponent,
    CarCardComponent,
    CarCardsComponent,
    AddCarButtonComponent,
    AddCarComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot([
    {
      path: '',
      redirectTo: '/dashboard',
      pathMatch: 'full'
    },
    {
      path: 'dashboard',
      component: CarCardsComponent
    },
    {
      path: 'addCar',
      component: AddCarComponent
    }
    ]),
    InMemoryWebApiModule.forRoot(InMemoryDataService)
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
