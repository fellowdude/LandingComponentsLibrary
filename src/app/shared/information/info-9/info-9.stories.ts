import type { Meta, StoryObj } from '@storybook/angular';
import { argsToTemplate } from '@storybook/angular';
import { RouterTestingModule } from '@angular/router/testing';
import { Info9Component } from './info-9.component';

const meta: Meta<Info9Component> = {
    title: 'Information/Info 9',
    component: Info9Component,
    excludeStories: /.*Data$/,
    tags: ['autodocs'],
    render: (args: Info9Component) => ({
        props: {
            ...args,
        },
        template: `<app-info-9 ${argsToTemplate(args)}></app-info-9>`,
        moduleMetadata:{
            imports: [
                RouterTestingModule
            ]
        }
    }),
};

export default meta;
type Story = StoryObj<Info9Component>;

export const Default: Story = {
    name: ' - Info',
    args: {}
}