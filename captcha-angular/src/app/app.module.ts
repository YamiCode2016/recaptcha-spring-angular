import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { YamiCodeCaptchaComponent } from './components/yami-code-captcha/yami-code-captcha.component';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { RecaptchaModule } from 'ng-recaptcha';

@NgModule({
  declarations: [
    AppComponent,
    YamiCodeCaptchaComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    RecaptchaModule,
    ToastrModule.forRoot({ timeOut: 3000 }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
