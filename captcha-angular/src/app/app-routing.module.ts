import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { YamiCodeCaptchaComponent } from './components/yami-code-captcha/yami-code-captcha.component';

const routes: Routes = [
  { path: '', component: YamiCodeCaptchaComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
