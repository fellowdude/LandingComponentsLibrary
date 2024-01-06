import type { Meta, StoryObj } from '@storybook/angular';
import { argsToTemplate } from '@storybook/angular';
import { Header2Component } from './header-2.component';
import { RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { RouterTestingModule } from '@angular/router/testing';

const meta: Meta<Header2Component> = {
    title: 'Headers/Header 2',
    component: Header2Component,
    excludeStories: /.*Data$/,
    tags: ['autodocs'],
    render: (args: Header2Component) => ({
        props: {
            ...args,
        },
        template: `<app-header-2 ${argsToTemplate(args)}></app-header-2>`,
        moduleMetadata:{
            imports: [
                RouterTestingModule
            ]
        }
    }),
};

export default meta;
type Story = StoryObj<Header2Component>;

export const Default: Story = {
    name: 'Voila - Header',
    args: {
        
        header: {
            logo: 'https://placehold.co/135x35',
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