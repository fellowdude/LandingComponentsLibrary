import { importProvidersFrom } from "@angular/core";
import { applicationConfig, type StorybookConfig } from "@storybook/angular";
import { HttpClientModule } from '@angular/common/http';

const config: StorybookConfig = {
  stories: ["../src/app/**/*.stories.ts"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-a11y",
  ],
  framework: {
    name: "@storybook/angular",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
};
export default config;
