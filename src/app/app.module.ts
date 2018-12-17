import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { Toast } from 'ng-zorro-antd-mobile';
import {ToastComponent} from 'ng-zorro-antd-mobile';
import { IndexComponent } from './index/index.component';

import { ShareModule} from './share/share.module';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    ShareModule,
  ],
  providers: [Toast],
  entryComponents: [ToastComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
