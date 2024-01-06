import type { Meta, StoryObj } from '@storybook/angular';
import { argsToTemplate } from '@storybook/angular';
import { Form1Component } from './form-1.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { importProvidersFrom } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbNavModule, NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';

const meta: Meta<Form1Component> = {
    title: 'Forms/Form 1',
    component: Form1Component,
    excludeStories: /.*Data$/,
    tags: ['autodocs'],
    render: (args: Form1Component) => ({
        props: {
            ...args,
        },
        template: `<app-form-1 ${argsToTemplate(args)}></app-form-1>`,
        moduleMetadata:{
            imports: [HttpClientTestingModule, NgbNavModule, NgbTypeaheadModule, ReactiveFormsModule],
        }
    }),
};

export default meta;
type Story = StoryObj<Form1Component>;

export const Default: Story = {
    name: 'Type 1 - Form',
    args: {
    },
    render: () => ({
        applicationConfig: {
            providers: [importProvidersFrom(HttpClientModule)],
        }
    })
};