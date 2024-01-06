import type { Meta, StoryObj } from '@storybook/angular';
import { argsToTemplate } from '@storybook/angular';
import { RouterTestingModule } from '@angular/router/testing';
import { Info3Component } from './info-3.component';

const meta: Meta<Info3Component> = {
    title: 'Information/Info 3',
    component: Info3Component,
    excludeStories: /.*Data$/,
    tags: ['autodocs'],
    render: (args: Info3Component) => ({
        props: {
            ...args,
        },
        template: `<app-info-3 ${argsToTemplate(args)}></app-info-3>`,
        moduleMetadata:{
            imports: [
                RouterTestingModule
            ]
        }
    }),
};

export default meta;
type Story = StoryObj<Info3Component>;

export const Default: Story = {
    name: ' - Info',
    args: {}
}