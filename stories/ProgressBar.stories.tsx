import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ProgressBar } from '../components/Course/ProgressBar';

export default {
  title: 'ProgressBar',
  component: ProgressBar,
} as ComponentMeta<typeof ProgressBar>;

const Template: ComponentStory<typeof ProgressBar> = (args) => (
  <ProgressBar {...args} />
);

export const Progress10 = Template.bind({});
Progress10.args = {
  percent: 10,
};

export const Progress50 = Template.bind({});
Progress50.args = {
  percent: 50,
};

export const Progress73 = Template.bind({});
Progress73.args = {
  percent: 73,
};

export const Progress98 = Template.bind({});
Progress98.args = {
  percent: 98,
};
