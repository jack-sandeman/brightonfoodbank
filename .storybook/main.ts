import { fileURLToPath } from 'node:url';
import { mergeConfig } from 'vite';
import type { StorybookConfig } from '@storybook/vue3-vite';

const storybookConfig: StorybookConfig = {
    stories: ['../resources/js/components/**/*.stories.@(js|jsx|mjs|ts|tsx|mdx)'],
    addons: ['@storybook/addon-essentials', '@storybook/addon-interactions', '@storybook/addon-a11y'],
    framework: {
        name: '@storybook/vue3-vite',
        options: {},
    },
    /**
     * Keep Storybook path resolution aligned with application Vite aliases.
     */
    async viteFinal(config) {
        return mergeConfig(config, {
            resolve: {
                alias: {
                    '@': fileURLToPath(new URL('../resources/js', import.meta.url)),
                },
            },
        });
    },
};

export default storybookConfig;
