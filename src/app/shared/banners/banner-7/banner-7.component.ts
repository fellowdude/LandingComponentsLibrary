import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-banner-7',
  standalone: true,
  imports: [CommonModule, CarouselModule, RouterModule],
  templateUrl: './banner-7.component.html',
  styleUrls: ['./banner-7.component.scss']
})
export class Banner7Component {

  @Input() heroInformation: any[] = [
    {
      preTitle: 'Lorem Ipsum ad',
      title: 'Lorem Ipsum ad dolorem 1',
      detail: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente voluptates labore, perferendis tempora pariatur repellendus!',
      buttonInfo: {
        link: 'www.google.com',
        label: 'Lorem Ipsum'
      },
      imageLink: 'https://placehold.co/1080x425'
    },
    {
      preTitle: 'Lorem Ipsum ad',
      title: 'Lorem Ipsum ad dolorem 2',
      detail: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente voluptates labore, perferendis tempora pariatur repellendus!',
      buttonInfo: {
        link: 'www.google.com',
        label: 'Lorem Ipsum'
      },
      imageLink: 'https://placehold.co/1080x425'
    },
    {
      preTitle: 'Lorem Ipsum ad',
      title: 'Lorem Ipsum ad dolorem 3',
      detail: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente voluptates labore, perferendis tempora pariatur repellendus!',
      buttonInfo: {
        link: 'www.google.com',
        label: 'Lorem Ipsum'
      },
      imageLink: 'https://placehold.co/1080x425'
    },
    {
      preTitle: 'Lorem Ipsum ad',
      title: 'Lorem Ipsum ad dolorem 4',
      detail: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente voluptates labore, perferendis tempora pariatur repellendus!',
      buttonInfo: {
        link: 'www.google.com',
        label: 'Lorem Ipsum'
      },
      imageLink: 'https://placehold.co/1080x425'
    }
  ];

  customOptions: OwlOptions = {
    autoWidth: true,
    autoplay: true,
    autoplaySpeed: 500,
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 200,
    navText: ['', ''],
    autoHeight: false,
    responsive: {
      0: {
        items: 1
      }
    }
  };
}
