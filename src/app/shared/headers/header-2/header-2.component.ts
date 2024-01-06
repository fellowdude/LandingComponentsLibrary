import { Component, HostListener, Input } from '@angular/core';
import { APP_BASE_HREF, CommonModule } from '@angular/common';
import { IHeader } from 'src/app/interfaces/header.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header-2',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header-2.component.html',
  styleUrls: ['./header-2.component.scss'],
  providers: [{provide: APP_BASE_HREF, useValue: '/'}],
})
export class Header2Component {
  @Input() header!: IHeader;
  currentPosition: number = window.scrollY;
  toggleHeader: boolean = true;
  toggleMobileHeader: boolean = false;
  
  constructor(){}

  toggleMenu(): void {
    this.toggleMobileHeader = !this.toggleMobileHeader;
  }

  open(): void {
    //this.contactUsModalService.open();
    this.toggleMobileHeader = false;
  }

  @HostListener('window:scroll', ['$event']) // for window scroll events
  onScroll(event: any) {
    let scroll = event.srcElement.scrollingElement.scrollTop;
    if (scroll > this.currentPosition) {
      this.toggleHeader = false;
      this.toggleMobileHeader = false;
    } else {
      this.toggleHeader = true;
      this.toggleMobileHeader = false;
    }
    this.currentPosition = scroll;
  }
}
