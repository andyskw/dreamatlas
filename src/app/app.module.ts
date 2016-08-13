import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { DreamsComponent } from './dreams/dreams.component';
import { DreamCardComponent } from './dreams/dream-card/dream-card.component';
import { DreamListComponent } from './dreams/dream-list/dream-list.component';
import { DreamBalanceComponent } from './dreams/dream-balance/dream-balance.component';
import {LocalStorageService} from "angular2-localstorage/LocalStorageEmitter";

@NgModule({
  declarations: [
    AppComponent,
    DreamsComponent,
    DreamBalanceComponent,

    DreamCardComponent,
    DreamListComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule
  ],
  providers: [LocalStorageService],
  entryComponents: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {

}
