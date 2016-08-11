import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { DreamsComponent } from './dreams/dreams.component';
import { DreamCardComponent } from './dreams/dream-card/dream-card.component';
import { DreamListComponent } from './dreams/dream-list/dream-list.component';

@NgModule({
  declarations: [
    AppComponent,
    DreamsComponent,
    DreamCardComponent,
    DreamListComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule
  ],
  providers: [],
  entryComponents: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {

}
