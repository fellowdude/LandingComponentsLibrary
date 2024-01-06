import type { Meta, StoryObj } from '@storybook/angular';
import { argsToTemplate } from '@storybook/angular';
import { Banner7Component } from './banner-7.component';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule, provideAnimations } from '@angular/platform-browser/animations';

const meta: Meta<Banner7Component> = {
    title: 'Banners/Banner 7',
    component: Banner7Component,
    excludeStories: /.*Data$/,
    tags: ['autodocs'],
    render: (args: Banner7Component) => ({
        props: {
            ...args,
        },
        template: `<app-banner-7 ${argsToTemplate(args)}></app-banner-7>`,
        moduleMetadata:{
            imports: [
                RouterTestingModule,
                BrowserAnimationsModule
            ]
        }
    }),
};

export default meta;
type Story = StoryObj<Banner7Component>;

export const Default: Story = {
    name: 'Carousel - Banner',
    args: {
        
    },
};