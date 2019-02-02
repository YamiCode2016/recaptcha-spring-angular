import { Component, OnInit } from '@angular/core';
import { CaptchaService } from 'src/app/services/captcha.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-yami-code-captcha',
  templateUrl: './yami-code-captcha.component.html',
  styleUrls: ['./yami-code-captcha.component.css']
})
export class YamiCodeCaptchaComponent implements OnInit {
  token: String = '';
  constructor(private captchaService: CaptchaService, private toastr: ToastrService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.captchaService.post(this.token)
      .subscribe(
        () => { this.toastr.success('form sent correctly'); },
        (error) => {
          this.toastr.error('invalid token');
        }
      );
  }


  resolved(captchaResponse: string) {
    this.token = captchaResponse;
    console.log(`Resolved captcha with response ${captchaResponse}:`);
  }

}
