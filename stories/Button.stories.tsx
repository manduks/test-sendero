import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Button } from '../components/Button';
import React from 'react';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Button',
  component: Button,
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => (
  <Button {...args}>Aceptar</Button>
);

export const White = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
White.args = {
  variant: 'white',
};

export const Dark = Template.bind({});
Dark.args = {
  variant: 'dark',
};

export const Blue = Template.bind({});
Blue.args = {
  variant: 'blue',
};

export const GitHub = Template.bind({});
GitHub.args = {
  variant: 'github',
};
