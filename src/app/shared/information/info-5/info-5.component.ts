import { AfterContentChecked, Component, Input, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-info-5',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './info-5.component.html',
  styleUrls: ['./info-5.component.scss']
})
export class Info5Component implements AfterContentChecked, OnInit{
  @ViewChild('data') data!: any;
  @Input() informationData: any[] = [
    {
      title: 'Lorem Ipsum',
      value: 1200,
      decimals: 0,
      prefix: '',
      suffix: '+',
    },
    {
      title: 'Lorem Ipsum',
      value: 3.15,
      decimals: 2,
      prefix: '$',
      suffix: 'M',
    },
    {
      title: 'Lorem Ipsum',
      value: 14,
      decimals: 0,
      prefix: '',
      suffix: '%',
    }
  ]
  private isVisible: boolean = false;

  constructor(){}

  ngOnInit(): void {
    this.resetViewValue();
  }

  resetViewValue(): void {
    this.informationData.forEach((e)=>{
      e.viewValue = 0;
    })
  }

  ngAfterContentChecked(): void {
    if (this.isVisible == false && this.data?.nativeElement.offsetParent != null)
    {
      this.isVisible = true;
      setInterval(()=>{
        this.informationData.forEach((e)=>{
          e.viewValue += (e.value / 50);
          if(e.viewValue > e.value) {
            e.viewValue = e.value;
          }
        })
      }, 20)
    }
    else if (this.isVisible == true && this.data?.nativeElement.offsetParent == null)
    {
      this.isVisible = false;
      this.resetViewValue();
    }
  }
}
