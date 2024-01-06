import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-info-6',
  standalone: true,
  imports: [CommonModule, CarouselModule,],
  templateUrl: './info-6.component.html',
  styleUrls: ['./info-6.component.scss']
})
export class Info6Component {

  listInformation: Array<any> = [
    {
      title: 'Lorem ipsum dolor 1',
      detail: 'Sit amet consectetur adipisicing elit. Repudiandae placeat praesentium eos, veniam aliquam, earum quisquam quam sapiente incidunt, voluptas adipisci eligendi.',
      image: 'https://placehold.co/600x400',
      buttonLabel: 'Lorem ipsum',
      buttonLink: 'www.google.com'
    },
    {
      title: 'Lorem ipsum dolor 2',
      detail: 'Sit amet consectetur adipisicing elit. Repudiandae placeat praesentium eos, veniam aliquam, earum quisquam quam sapiente incidunt, voluptas adipisci eligendi.',
      image: 'https://placehold.co/600x400',
      buttonLabel: 'Lorem ipsum',
      buttonLink: 'www.google.com'
    },
    {
      title: 'Lorem ipsum dolor 3',
      detail: 'Sit amet consectetur adipisicing elit. Repudiandae placeat praesentium eos, veniam aliquam, earum quisquam quam sapiente incidunt, voluptas adipisci eligendi.',
      image: 'https://placehold.co/600x400',
      buttonLabel: 'Lorem ipsum',
      buttonLink: 'www.google.com'
    },
    {
      title: 'Lorem ipsum dolor 4',
      detail: 'Sit amet consectetur adipisicing elit. Repudiandae placeat praesentium eos, veniam aliquam, earum quisquam quam sapiente incidunt, voluptas adipisci eligendi.',
      image: 'https://placehold.co/600x400',
      buttonLabel: 'Lorem ipsum',
      buttonLink: 'www.google.com'
    },
    {
      title: 'Lorem ipsum dolor 5',
      detail: 'Sit amet consectetur adipisicing elit. Repudiandae placeat praesentium eos, veniam aliquam, earum quisquam quam sapiente incidunt, voluptas adipisci eligendi.',
      image: 'https://placehold.co/600x400',
      buttonLabel: 'Lorem ipsum',
      buttonLink: 'www.google.com'
    },
  ]

  customOptions: OwlOptions = {
    autoWidth: true,
    autoplay: true,
    autoplaySpeed: 500,
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: true,
    navSpeed: 200,
    navText: ['', ''],
    autoHeight: false,
    responsive: {
      0: {
        items: 1
      },
      680: {
        items: 2
      },
      960: {
        items: 3
      }
    }
  };
}
