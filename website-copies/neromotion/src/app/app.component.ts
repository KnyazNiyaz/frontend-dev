import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { ScrollToConfigOptions, ScrollToService } from '@nicky-lenaers/ngx-scroll-to';

declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  newWidth = 50;
  isClicked = false;
  isOpen = false;
  isTrue = false;

  @ViewChild('bg') elem;
  @ViewChild('main') main;

  constructor(private _scrollToService: ScrollToService) {
  }

  @HostListener('window:scroll', ['$event']) onWindowScroll(event) {
    const scrollTo = window.pageYOffset;
    const docHeight = document.documentElement.scrollHeight;
    const scrollHeight = this.elem.nativeElement.offsetHeight;
    const scrollPercent = (scrollTo / (docHeight - scrollHeight)) * 100;
    this.newWidth = 50 + (scrollPercent * 2);
    const calc = 1 - ((scrollTo - 250) / 100);
    this.elem.nativeElement.style.opacity = calc;
    if (calc > 1) {
      this.elem.nativeElement.style.opacity = 1;
      this.main.nativeElement.style.zIndex = -1;
    } else if (calc < 0) {
      this.elem.nativeElement.style.opacity = 0;
      this.main.nativeElement.style.zIndex = 1;
    }
  }

  ngOnInit() {
  }

  public triggerScrollToOffsetOnly(offset: number = 0) {
    this.isOpen = true;
    // this.isClicked = true;
    this.isTrue = true;
    const config: ScrollToConfigOptions = {
      duration: 7000,
      easing: 'easeOutElastic',
      offset
    };

    this._scrollToService.scrollTo(config);
  }
}
