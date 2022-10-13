import { ComponentMeta, ComponentStory } from '@storybook/react';

import { NavBar } from 'components/NavBar';

export default {
  title: 'NarBar',
  component: NavBar,
} as ComponentMeta<typeof NavBar>;

const Template: ComponentStory<typeof NavBar> = (args) => <NavBar {...args} />;

export const NarvBarLogin = Template.bind({});
NarvBarLogin.args = {
  isLogin: true,
};

export const NavBarLesson = Template.bind({});
NavBarLesson.args = {
  isLesson: true,
};

export const NavBarLanding = Template.bind({});
NavBarLanding.args = {
  isLanding: true,
};

export const NavBarIndex = Template.bind({});
NavBarIndex.args = {
  isIndex: true,
};
