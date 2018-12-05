import {Component, HostListener, ViewChild} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('table') table;

  @HostListener('scroll', ['$event'])
  public scrolled($event: Event) {
    console.log($event);
  }

  arr = [['asd', 12], ['asd', 12], ['asd', 12], ['asd', 12], ['asd', 12], ['asd', 12], ['asd', 12], ['asd', 12], ['asd', 12], ['asd', 12],
    ['asd', 12], ['asd', 12], ['asd', 12], ['asd', 12], ['asd', 12], ['asd', 12], ['asd', 12], ['asd', 12], ['asd', 12], ['asd', 12],
    ['asd', 12], ['asd', 12], ['asd', 12], ['asd', 12], ['asd', 12], ['asd', 12], ['asd', 12], ['asd', 12], ['asd', 12], ['asd', 12]];

  onScroll(e) {
    console.log(e);
    // console.log(e.getBoundingClientRect());
  }

  check() {
    console.log(this.table.nativeElement.getBoundingClientRect());
  }
}
