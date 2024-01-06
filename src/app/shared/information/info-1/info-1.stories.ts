import type { Meta, StoryObj } from '@storybook/angular';
import { argsToTemplate } from '@storybook/angular';
import { RouterTestingModule } from '@angular/router/testing';
import { Info1Component } from './info-1.component';

const meta: Meta<Info1Component> = {
    title: 'Information/Info 1',
    component: Info1Component,
    excludeStories: /.*Data$/,
    tags: ['autodocs'],
    render: (args: Info1Component) => ({
        props: {
            ...args,
        },
        template: `<app-info-1 ${argsToTemplate(args)}></app-info-1>`,
        moduleMetadata:{
            imports: [
                RouterTestingModule
            ]
        }
    }),
};

export default meta;
type Story = StoryObj<Info1Component>;

export const Default: Story = {
    name: ' - Info',
    args: {}
}