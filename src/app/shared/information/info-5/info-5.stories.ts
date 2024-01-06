import type { Meta, StoryObj } from '@storybook/angular';
import { argsToTemplate } from '@storybook/angular';
import { RouterTestingModule } from '@angular/router/testing';
import { Info5Component } from './info-5.component';

const meta: Meta<Info5Component> = {
    title: 'Information/Info 5',
    component: Info5Component,
    excludeStories: /.*Data$/,
    tags: ['autodocs'],
    render: (args: Info5Component) => ({
        props: {
            ...args,
        },
        template: `<app-info-5 ${argsToTemplate(args)}></app-info-5>`,
        moduleMetadata:{
            imports: [
                RouterTestingModule
            ]
        }
    }),
};

export default meta;
type Story = StoryObj<Info5Component>;

export const Default: Story = {
    name: ' - Info',
    args: {}
}