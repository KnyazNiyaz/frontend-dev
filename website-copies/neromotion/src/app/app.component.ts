import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
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
  oldScroll;

  @ViewChild('bg') elem;
  @ViewChild('main') main;

  constructor(private _scrollToService: ScrollToService,
              private elementRef: ElementRef) {
    document.body.style.backgroundColor = 'black';
  }

  @HostListener('window:scroll', ['$event']) onWindowScroll(event) {
    const scrollTo = window.pageYOffset;
    const scrollHeight = this.elem.nativeElement.offsetHeight;
    const scrollPercent = (scrollTo / (this.getHeight() - scrollHeight)) * 100;

    this.newWidth = 50 + (scrollPercent * 2);
    const calc = 1 - ((scrollTo - 250) / 100);
    this.elem.nativeElement.style.opacity = calc;
    if ((this.oldScroll > window.scrollY) && calc > 0) {
      this.main.nativeElement.style.zIndex = -1;
    }
    this.oldScroll = window.scrollY;

    if (calc > 1) {
      this.elem.nativeElement.style.opacity = 1;
    } else if (calc < 0) {
      this.elem.nativeElement.style.opacity = 0;
      this.main.nativeElement.style.zIndex = 1;
    }
  }

  ngOnInit() {
  }

  getHeight() {
    const D = document;
    return Math.max(Math.max(D.body.scrollHeight, D.documentElement.scrollHeight),
      Math.max(D.body.offsetHeight, D.documentElement.offsetHeight),
      Math.max(D.body.clientHeight, D.documentElement.clientHeight));
  }

  public triggerScrollToOffsetOnly(offset: number = 0) {
    this.elementRef.nativeElement.ownerDocument.body.style.background = 'none';
    this.isOpen = true;
    this.isClicked = true;
    this.isTrue = true;
    // const config: ScrollToConfigOptions = {
    //   duration: 1000,
    //   // easing: 'easeOutElastic',
    //   offset
    // };

    // this._scrollToService.scrollTo(config);
  }


  trig() {
      this.triggerScrollToOffsetOnly(800);
  }

}
