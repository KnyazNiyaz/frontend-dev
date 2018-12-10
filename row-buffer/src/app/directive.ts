import {Directive, ElementRef, HostListener, Input} from '@angular/core';
import {logging} from 'selenium-webdriver';

@Directive({
  selector: '[appTableDirective]'
})

export class TableScrollDirective {
  @Input() nodes;
  @HostListener('scroll', ['$event'])
  onElementScroll($event) {
    const visible = [];

    let limit = this.nodes.getElementsByTagName('tr').length;
    const trs = this.nodes.getElementsByTagName('tr');
    for (limit; limit--;) {
      if (this.isElementInViewport(this.nodes, trs[limit])) {
        // console.log(this.isElementInViewport(this.nodes, trs[limit]));
        // console.log(this.nodes, trs[limit]);
        visible.push(trs[limit]);
      } else {
        console.log(trs[limit]);
        // trs[limit].style.display = "none";
        console.log(this.nodes.getElementsByTagName('tr'));
        // Array.prototype.splice.apply(this.nodes.getElementsByTagName('tr'), [limit, 1]);
        // this.nodes.getElementsByTagName('tr').splice(this.nodes.getElementsByTagName('tr'), limit, 1);
      }
    }
    console.log(visible.length);
    console.log('Visible rows:', visible.join(', '));
  }
  constructor(private elm: ElementRef) { }

  isElementInViewport(par, el) {
    const elRect = el.getBoundingClientRect(),
      parRect = par.getBoundingClientRect();
    return (
      elRect.top >= parRect.top &&
      elRect.left >= parRect.left &&
      elRect.bottom <= parRect.bottom &&
      elRect.right <= parRect.right
    );
  }

}
