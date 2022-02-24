import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { simpleReducer } from './simple.reducer';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // initilizes the Store with the object passed into .forRoot()
    StoreModule.forRoot({ message: simpleReducer }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
