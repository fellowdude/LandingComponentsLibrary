import type { Meta, StoryObj } from '@storybook/angular';
import { argsToTemplate } from '@storybook/angular';
import { RouterTestingModule } from '@angular/router/testing';
import { Info10Component } from './info-10.component';

const meta: Meta<Info10Component> = {
    title: 'Information/Info 10',
    component: Info10Component,
    excludeStories: /.*Data$/,
    tags: ['autodocs'],
    render: (args: Info10Component) => ({
        props: {
            ...args,
        },
        template: `<app-info-10 ${argsToTemplate(args)}></app-info-10>`,
        moduleMetadata:{
            imports: [
                RouterTestingModule
            ]
        }
    }),
};

export default meta;
type Story = StoryObj<Info10Component>;

export const Default: Story = {
    name: ' - Info',
    args: {}
}