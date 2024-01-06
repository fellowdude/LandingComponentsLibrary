import type { Meta, StoryObj } from '@storybook/angular';
import { argsToTemplate } from '@storybook/angular';
import { Header4Component } from './header-4.component';
import { RouterTestingModule } from '@angular/router/testing';

const meta: Meta<Header4Component> = {
    title: 'Headers/Header 4',
    component: Header4Component,
    excludeStories: /.*Data$/,
    tags: ['autodocs'],
    render: (args: Header4Component) => ({
        props: {
            ...args,
        },
        template: `<app-header-4 ${argsToTemplate(args)}></app-header-4>`,
        moduleMetadata:{
            imports: [
                RouterTestingModule
            ]
        }
    }),
};

export default meta;
type Story = StoryObj<Header4Component>;

export const Default: Story = {
    name: 'Educal - Header',
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