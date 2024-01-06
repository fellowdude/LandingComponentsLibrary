import type { Meta, StoryObj } from '@storybook/angular';
import { argsToTemplate } from '@storybook/angular';
import { RouterTestingModule } from '@angular/router/testing';
import { Info7Component } from './info-7.component';

const meta: Meta<Info7Component> = {
    title: 'Information/Info 7',
    component: Info7Component,
    excludeStories: /.*Data$/,
    tags: ['autodocs'],
    render: (args: Info7Component) => ({
        props: {
            ...args,
        },
        template: `<app-info-7 ${argsToTemplate(args)}></app-info-7>`,
        moduleMetadata:{
            imports: [
                RouterTestingModule
            ]
        }
    }),
};

export default meta;
type Story = StoryObj<Info7Component>;

export const Default: Story = {
    name: ' - Info',
    args: {}
}