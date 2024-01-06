import type { Meta, StoryObj } from '@storybook/angular';
import { argsToTemplate } from '@storybook/angular';
import { Banner4Component } from './banner-4.component';
import { RouterTestingModule } from '@angular/router/testing';

const meta: Meta<Banner4Component> = {
    title: 'Banners/Banner 4',
    component: Banner4Component,
    excludeStories: /.*Data$/,
    tags: ['autodocs'],
    render: (args: Banner4Component) => ({
        props: {
            ...args,
        },
        template: `<app-banner-4 ${argsToTemplate(args)}></app-banner-4>`,
        moduleMetadata:{
            imports: [
                RouterTestingModule
            ]
        }
    }),
};

export default meta;
type Story = StoryObj<Banner4Component>;

export const Default: Story = {
    name: 'Finwin - Banner',
    args: {
        preTitle: 'Lorem Ipsum ad',
        title: 'Lorem Ipsum ad dolorem',
        detail: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente voluptates labore, perferendis tempora pariatur repellendus, commodi obcaecati doloribus esse quod harum, ratione vitae doloremque nulla libero mollitia voluptatem officiis modi!',
        buttonInfo: {
            label: 'Lorem Ipsum',
            link: 'www.google.com'
        },
        imageLink: 'https://placehold.co/500x600'
    },
};