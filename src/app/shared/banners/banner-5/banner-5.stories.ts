import type { Meta, StoryObj } from '@storybook/angular';
import { argsToTemplate } from '@storybook/angular';
import { Banner5Component } from './banner-5.component';
import { RouterTestingModule } from '@angular/router/testing';

const meta: Meta<Banner5Component> = {
    title: 'Banners/Banner 5',
    component: Banner5Component,
    excludeStories: /.*Data$/,
    tags: ['autodocs'],
    render: (args: Banner5Component) => ({
        props: {
            ...args,
        },
        template: `<app-banner-5 ${argsToTemplate(args)}></app-banner-5>`,
        moduleMetadata:{
            imports: [
                RouterTestingModule
            ]
        }
    }),
};

export default meta;
type Story = StoryObj<Banner5Component>;

export const Default: Story = {
    name: ' - Banner',
    args: {
    },
};