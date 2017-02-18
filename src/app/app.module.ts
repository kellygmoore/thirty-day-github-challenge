import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }	 from '@angular/forms';

import { AppComponent }  from './app.component';
import { CollectibleFormComponent } from './collectible-form.component';

@NgModule({
  imports:      [ 
  	BrowserModule,
  	FormsModule 
  ],
  declarations: [ 
  	AppComponent,
  	CollectibleFormComponent 
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
