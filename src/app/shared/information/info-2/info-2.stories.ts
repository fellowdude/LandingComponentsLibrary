import type { Meta, StoryObj } from '@storybook/angular';
import { argsToTemplate } from '@storybook/angular';
import { RouterTestingModule } from '@angular/router/testing';
import { Info2Component } from './info-2.component';

const meta: Meta<Info2Component> = {
    title: 'Information/Info 2',
    component: Info2Component,
    excludeStories: /.*Data$/,
    tags: ['autodocs'],
    render: (args: Info2Component) => ({
        props: {
            ...args,
        },
        template: `<app-info-2 ${argsToTemplate(args)}></app-info-2>`,
        moduleMetadata:{
            imports: [
                RouterTestingModule
            ]
        }
    }),
};

export default meta;
type Story = StoryObj<Info2Component>;

export const Default: Story = {
    name: ' - Info',
    args: {}
}