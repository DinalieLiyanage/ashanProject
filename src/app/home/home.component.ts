import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { SafeStyle, DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],

})
export class HomeComponent implements OnInit {


  constructor(private router: Router, private sanitizer: DomSanitizer) { }

  open = false;
  timer;
  private interval: any;

  ngOnInit() {

    setInterval(() => {
      this.img1 = this.sanitizer.bypassSecurityTrustStyle('url(../../assets/assets/wallpaper/cards/png/' + Number(this.getRandomArbitrary(1, 27)).toFixed(0) + '.png)');
    }, 5000);
    setInterval(() => {
      this.img2 = this.sanitizer.bypassSecurityTrustStyle('url(../../assets/assets/wallpaper/cards/png/' + Number(this.getRandomArbitrary(1, 27)).toFixed(0) + '.png)');
    }, 3000);
    setInterval(() => {
      this.img3 = this.sanitizer.bypassSecurityTrustStyle('url(../../assets/assets/wallpaper/cards/png/' + Number(this.getRandomArbitrary(1, 27)).toFixed(0) + '.png)');
    }, 3000);
    setInterval(() => {
      this.img4 = this.sanitizer.bypassSecurityTrustStyle('url(../../assets/assets/wallpaper/cards/png/' + Number(this.getRandomArbitrary(1, 27)).toFixed(0) + '.png)');
    }, 3000);
    setInterval(() => {
      this.img5 = this.sanitizer.bypassSecurityTrustStyle('url(../../assets/assets/wallpaper/cards/png/' + Number(this.getRandomArbitrary(1, 27)).toFixed(0) + '.png)');
    }, 3000);
    setInterval(() => {
      this.img6 = this.sanitizer.bypassSecurityTrustStyle('url(../../assets/assets/wallpaper/cards/png/' + Number(this.getRandomArbitrary(1, 27)).toFixed(0) + '.png)');
    }, 3000);

    /*setInterval(() => {
      this.img2 = this.sanitizer.bypassSecurityTrustHtml('url(../../assets/assets/wallpaper/cards/png/' + Number(this.getRandomArbitrary(1, 27)).toFixed(0) + '.png)');
    }, 4000);
*/
  }
  // tslint:disable-next-line:member-ordering
  private img1: SafeStyle;
  // tslint:disable-next-line:member-ordering
  private img2: SafeStyle;
  private img3: SafeStyle;
  private img4: SafeStyle;
  private img5: SafeStyle;
  private img6: SafeStyle;

  getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }



  move() {
    // tslint:disable-next-line:no-unused-expression
    this.router.navigate(['auth/registration']);
    console.log('inside move');
  }
}
