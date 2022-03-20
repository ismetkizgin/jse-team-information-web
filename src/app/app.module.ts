import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileCardComponent, ProfileCardListComponent } from './components';

@NgModule({
  declarations: [
    AppComponent,
    ProfileCardComponent,
    routingComponents,
    ProfileCardListComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
