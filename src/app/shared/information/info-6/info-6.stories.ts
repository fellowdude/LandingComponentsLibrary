import type { Meta, StoryObj } from '@storybook/angular';
import { argsToTemplate } from '@storybook/angular';
import { RouterTestingModule } from '@angular/router/testing';
import { Info6Component } from './info-6.component';

const meta: Meta<Info6Component> = {
    title: 'Information/Info 6',
    component: Info6Component,
    excludeStories: /.*Data$/,
    tags: ['autodocs'],
    render: (args: Info6Component) => ({
        props: {
            ...args,
        },
        template: `<app-info-6 ${argsToTemplate(args)}></app-info-6>`,
        moduleMetadata:{
            imports: [
                RouterTestingModule
            ]
        }
    }),
};

export default meta;
type Story = StoryObj<Info6Component>;

export const Default: Story = {
    name: ' - Info',
    args: {}
}