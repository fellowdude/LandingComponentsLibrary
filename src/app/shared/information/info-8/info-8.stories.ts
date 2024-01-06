import type { Meta, StoryObj } from '@storybook/angular';
import { argsToTemplate } from '@storybook/angular';
import { RouterTestingModule } from '@angular/router/testing';
import { Info8Component } from './info-8.component';

const meta: Meta<Info8Component> = {
    title: 'Information/Info 8',
    component: Info8Component,
    excludeStories: /.*Data$/,
    tags: ['autodocs'],
    render: (args: Info8Component) => ({
        props: {
            ...args,
        },
        template: `<app-info-8 ${argsToTemplate(args)}></app-info-8>`,
        moduleMetadata:{
            imports: [
                RouterTestingModule
            ]
        }
    }),
};

export default meta;
type Story = StoryObj<Info8Component>;

export const Default: Story = {
    name: ' - Info',
    args: {}
}