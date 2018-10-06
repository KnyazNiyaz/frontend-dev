import {Component, HostListener, ViewChild} from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  newWidth: number;
  opacity: number;

  @ViewChild('bg') elem;

  @HostListener('window:scroll', ['$event']) onWindowScroll(event) {
    const scrollTo = window.pageYOffset;
    const docHeight = document.documentElement.scrollHeight;
    const scrollHeight = this.elem.nativeElement.offsetHeight;
    const scrollPercent = (scrollTo / (docHeight - scrollHeight)) * 100;
    this.newWidth = 50 + (scrollPercent * 2);

    const calc = 1 - ((scrollTo - 150) / 100);
    this.elem.nativeElement.style.opacity = calc;
    if (calc > 1) {
      this.elem.nativeElement.style.opacity = 1;
    } else if (calc < 0) {
      this.elem.nativeElement.style.opacity = 0;
    }
  }

}
