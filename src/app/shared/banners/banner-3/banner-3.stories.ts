import type { Meta, StoryObj } from '@storybook/angular';
import { argsToTemplate } from '@storybook/angular';
import { Banner3Component } from './banner-3.component';
import { RouterTestingModule } from '@angular/router/testing';

const meta: Meta<Banner3Component> = {
    title: 'Banners/Banner 3',
    component: Banner3Component,
    excludeStories: /.*Data$/,
    tags: ['autodocs'],
    render: (args: Banner3Component) => ({
        props: {
            ...args,
        },
        template: `<app-banner-3 ${argsToTemplate(args)}></app-banner-3>`,
        moduleMetadata:{
            imports: [
                RouterTestingModule
            ]
        }
    }),
};

export default meta;
type Story = StoryObj<Banner3Component>;

export const Default: Story = {
    name: 'Ervy - Banner',
    args: {
        preTitle: 'Lorem Ipsum ad',
        title: 'Lorem Ipsum ad dolorem',
        detail: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente voluptates labore, perferendis tempora pariatur repellendus, commodi obcaecati doloribus esse quod harum, ratione vitae doloremque nulla libero mollitia voluptatem officiis modi!',
        buttonInfo: {
            label: 'Lorem Ipsum',
            link: 'www.google.com'
        },
        imageLink: 'https://placehold.co/718x570'
    },
};