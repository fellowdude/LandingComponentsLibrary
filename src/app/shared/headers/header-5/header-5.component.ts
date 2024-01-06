import { Component, Input } from '@angular/core';
import { APP_BASE_HREF, CommonModule } from '@angular/common';
import { IHeader } from 'src/app/interfaces/header.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header-5',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header-5.component.html',
  styleUrls: ['./header-5.component.scss'],
  providers: [{provide: APP_BASE_HREF, useValue: '/'}],
})
export class Header5Component {
  @Input() header!: IHeader;
}
