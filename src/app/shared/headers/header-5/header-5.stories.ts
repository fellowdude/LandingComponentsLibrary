import type { Meta, StoryObj } from '@storybook/angular';
import { argsToTemplate } from '@storybook/angular';
import { Header5Component } from './header-5.component';
import { RouterTestingModule } from '@angular/router/testing';

const meta: Meta<Header5Component> = {
    title: 'Headers/Header 5',
    component: Header5Component,
    excludeStories: /.*Data$/,
    tags: ['autodocs'],
    render: (args: Header5Component) => ({
        props: {
            ...args,
        },
        template: `<app-header-5 ${argsToTemplate(args)}></app-header-5>`,
        moduleMetadata:{
            imports: [
                RouterTestingModule
            ]
        }
    }),
};

export default meta;
type Story = StoryObj<Header5Component>;

export const Default: Story = {
    name: 'Ervy - Header',
    args: {
        
        header: {
            logo: 'https://placehold.co/155x55',
            menu: [
                {
                    name: 'Page 1',
                    link: 'page-1'
                },
                {
                    name: 'Page 2',
                    link: 'page-2'
                },
                {
                    name: 'Page 3',
                    link: 'page-3',
                    subOptions: [
                        {
                            name: 'Sub-page 1',
                            link: 'sub-page-1'
                        },
                        {
                            name: 'Sub-page 2',
                            link: 'sub-page-2'
                        }
                    ]
                },
                {
                    name: 'Page 4',
                    link: 'page-4'
                },
                {
                    name: 'Page 5',
                    link: 'page-5',
                    subOptions: [
                        {
                            name: 'Sub-page 3',
                            link: 'sub-page-3'
                        },
                        {
                            name: 'Sub-page 4',
                            link: 'sub-page-4'
                        }
                    ]
                }
            ]
        }
    },
};