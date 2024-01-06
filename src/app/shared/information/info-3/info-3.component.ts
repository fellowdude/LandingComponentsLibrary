import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-info-3',
  standalone: true,
  imports: [CommonModule, RouterModule, NgbAccordionModule],
  templateUrl: './info-3.component.html',
  styleUrls: ['./info-3.component.scss']
})
export class Info3Component {

}
