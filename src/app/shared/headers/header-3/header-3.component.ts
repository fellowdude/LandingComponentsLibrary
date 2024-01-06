import { Component, Input, OnInit } from '@angular/core';
import { APP_BASE_HREF, CommonModule } from '@angular/common';
import { IHeader } from 'src/app/interfaces/header.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header-3',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header-3.component.html',
  styleUrls: ['./header-3.component.scss'],
  providers: [{provide: APP_BASE_HREF, useValue: '/'}],
})
export class Header3Component implements OnInit{
  @Input() header!: IHeader;

  constructor(){}

  ngOnInit(): void {
    
  }


}
