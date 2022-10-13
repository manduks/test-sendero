import { ComponentMeta, ComponentStory } from '@storybook/react';
import ToastAlert from '../components/Login/ToastAlert';

export default {
  title: 'ToastAlert',
  component: ToastAlert,
} as ComponentMeta<typeof ToastAlert>;

const Template: ComponentStory<typeof ToastAlert> = (args) => (
  <ToastAlert {...args} />
);

export const Alert = Template.bind({});

Alert.args = {
  variant: 'alert',
  message: 'Este es un mensaje de alerta',
};

export const Success = Template.bind({});
Success.args = {
  variant: 'success',
  message: 'Este es un mensaje de éxito',
};

export const Error = Template.bind({});
Error.args = {
  variant: 'error',
  message: 'Este es un mensaje de error',
};
