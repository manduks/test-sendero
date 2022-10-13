import { ComponentMeta, ComponentStory } from '@storybook/react';

import TabCourse from '../components/Course/TabCourse';

export default {
  title: 'TabCourse',
  component: TabCourse,
} as ComponentMeta<typeof TabCourse>;

const Template: ComponentStory<typeof TabCourse> = () => <TabCourse />;

export const FigmaExample = Template.bind({});
FigmaExample.args = {};
