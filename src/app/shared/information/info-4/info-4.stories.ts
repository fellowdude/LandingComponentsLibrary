import type { Meta, StoryObj } from '@storybook/angular';
import { argsToTemplate } from '@storybook/angular';
import { RouterTestingModule } from '@angular/router/testing';
import { Info4Component } from './info-4.component';

const meta: Meta<Info4Component> = {
    title: 'Information/Info 4',
    component: Info4Component,
    excludeStories: /.*Data$/,
    tags: ['autodocs'],
    render: (args: Info4Component) => ({
        props: {
            ...args,
        },
        template: `<app-info-4 ${argsToTemplate(args)}></app-info-4>`,
        moduleMetadata:{
            imports: [
                RouterTestingModule
            ]
        }
    }),
};

export default meta;
type Story = StoryObj<Info4Component>;

export const Default: Story = {
    name: ' - Info',
    args: {}
}