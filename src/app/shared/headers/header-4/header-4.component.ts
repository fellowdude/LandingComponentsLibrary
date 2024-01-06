import { Component, Input } from '@angular/core';
import { APP_BASE_HREF, CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IHeader } from 'src/app/interfaces/header.component';

@Component({
  selector: 'app-header-4',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header-4.component.html',
  styleUrls: ['./header-4.component.scss'],
  providers: [{provide: APP_BASE_HREF, useValue: '/'}],
})
export class Header4Component {
  @Input() header!: IHeader;
  @Input () header__white : string | undefined

  headerSticky : boolean = true;
  showCart : boolean = false;
  showSidebar : boolean = false;
  showHomeDropdown : boolean = false;
  showCoursesDropdown : boolean = false;
  showBlogDropdown : boolean = false;
  showPagesDropdown : boolean = false;
}
