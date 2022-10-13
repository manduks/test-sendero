import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Pager } from '../components/Course/Pager';

export default {
  title: 'Pager',
  component: Pager,
} as ComponentMeta<typeof Pager>;

const Template: ComponentStory<typeof Pager> = (args) => <Pager {...args} />;

export const PagerExample = Template.bind({});
PagerExample.args = {
  previusRef: '#',
  nextRef: '#',
};
