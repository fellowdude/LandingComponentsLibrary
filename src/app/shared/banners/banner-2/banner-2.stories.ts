import type { Meta, StoryObj } from '@storybook/angular';
import { argsToTemplate } from '@storybook/angular';
import { Banner2Component } from './banner-2.component';
import { RouterTestingModule } from '@angular/router/testing';

const meta: Meta<Banner2Component> = {
    title: 'Banners/Banner 2',
    component: Banner2Component,
    excludeStories: /.*Data$/,
    tags: ['autodocs'],
    render: (args: Banner2Component) => ({
        props: {
            ...args,
        },
        template: `<app-banner-2 ${argsToTemplate(args)}></app-banner-2>`,
        moduleMetadata:{
            imports: [
                RouterTestingModule
            ]
        }
    }),
};

export default meta;
type Story = StoryObj<Banner2Component>;

export const Default: Story = {
    name: 'Digalu - Banner',
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