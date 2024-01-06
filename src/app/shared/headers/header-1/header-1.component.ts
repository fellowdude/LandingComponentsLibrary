import { Component, HostListener, Input } from '@angular/core';
import { APP_BASE_HREF, CommonModule } from '@angular/common';
import { IHeader } from 'src/app/interfaces/header.component';
import { Observable } from 'rxjs';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header-1',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header-1.component.html',
  styleUrls: ['./header-1.component.scss'],
  providers: [{provide: APP_BASE_HREF, useValue: '/'}],
})
export class Header1Component {
  @Input() header!: IHeader;

  onTop: boolean = true;
  openMenu: boolean = false;

  constructor(){
  }

  toggleMenu(): void {
    this.openMenu = !this.openMenu;
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: any){
    if(window.scrollY === 0){
      this.onTop = true;
    }else{
      this.onTop = false;
    }
  }
}
