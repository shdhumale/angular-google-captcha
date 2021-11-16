import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  //templateUrl: './app.component.html',
  template: `<re-captcha (resolved)="resolved($event)" siteKey="YOUR_SIKE_KEY"></re-captcha>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-google-captcha';
  resolved(captchaResponse: string) {
    console.log(`Resolved captcha with response: ${captchaResponse}`);
  }
}
