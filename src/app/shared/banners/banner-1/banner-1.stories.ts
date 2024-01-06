import type { Meta, StoryObj } from '@storybook/angular';
import { argsToTemplate } from '@storybook/angular';
import { Banner1Component } from './banner-1.component';
import { RouterTestingModule } from '@angular/router/testing';

const meta: Meta<Banner1Component> = {
    title: 'Banners/Banner 1',
    component: Banner1Component,
    excludeStories: /.*Data$/,
    tags: ['autodocs'],
    render: (args: Banner1Component) => ({
        props: {
            ...args,
        },
        template: `<app-banner-1 ${argsToTemplate(args)}></app-banner-1>`,
        moduleMetadata:{
            imports: [
                RouterTestingModule
            ]
        }
    }),
};

export default meta;
type Story = StoryObj<Banner1Component>;

export const Default: Story = {
    name: 'FEN - Banner',
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