import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from '../app.component';
import { HeroesComponent } from '../heroes/heroes.component';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';
import { MessagesComponent } from '../messages/messages.component';
import { AppRoutingModule } from '../app-routing.module';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from '../in-memory-data.service';
import { HeroSearchComponent } from '../hero-search/hero-search.component';
import { VillainsComponent } from '../villains/villains.component';
import { VillainDetailsComponent } from '../villain-details/villain-details.component';
import { VillainSearchComponent } from '../villain-search/villain-search.component';
import { CompareComponent } from '../compare/compare.component';
import { NgChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent,
    HeroSearchComponent,
    VillainsComponent,
    VillainDetailsComponent,
    VillainSearchComponent,
    CompareComponent
    // AppRoutingModule
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    NgChartsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
      dataEncapsulation: false,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
