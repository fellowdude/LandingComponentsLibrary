import { Component, Input } from '@angular/core';
import { APP_BASE_HREF, CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IHeader } from 'src/app/interfaces/header.component';

@Component({
  selector: 'app-header-6',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header-6.component.html',
  styleUrls: ['./header-6.component.scss'],
  providers: [{provide: APP_BASE_HREF, useValue: '/'}],
})
export class Header6Component {
  @Input() header!: IHeader;
}
