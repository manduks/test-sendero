import { ComponentMeta, ComponentStory } from '@storybook/react';

import AvatarSendero from '../components/Course/AvatarSendero';

export default {
  title: 'Avatar',
  component: AvatarSendero,
} as ComponentMeta<typeof AvatarSendero>;

const Template: ComponentStory<typeof AvatarSendero> = (args) => (
  <AvatarSendero {...args} />
);

export const Avatar1 = Template.bind({});
Avatar1.args = {
  urlImage: 'https://picsum.photos/36?1',
};

export const Avatar2 = Template.bind({});
Avatar2.args = {
  urlImage: 'https://picsum.photos/36?2',
};

export const Avatar3 = Template.bind({});
Avatar3.args = {
  urlImage: 'https://picsum.photos/36?3',
};
