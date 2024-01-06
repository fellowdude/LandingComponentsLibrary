import type { Meta, StoryObj } from '@storybook/angular';
import { argsToTemplate } from '@storybook/angular';
import { Banner6Component } from './banner-6.component';
import { RouterTestingModule } from '@angular/router/testing';

const meta: Meta<Banner6Component> = {
    title: 'Banners/Banner 6',
    component: Banner6Component,
    excludeStories: /.*Data$/,
    tags: ['autodocs'],
    render: (args: Banner6Component) => ({
        props: {
            ...args,
        },
        template: `<app-banner-6 ${argsToTemplate(args)}></app-banner-6>`,
        moduleMetadata:{
            imports: [
                RouterTestingModule
            ]
        }
    }),
};

export default meta;
type Story = StoryObj<Banner6Component>;

export const Default: Story = {
    name: 'BG Image - Banner',
    args: {
    },
};