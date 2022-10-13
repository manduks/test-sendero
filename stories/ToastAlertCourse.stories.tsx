import { ComponentMeta, ComponentStory } from '@storybook/react';

import ToastAlertCourse from '../components/Course/ToastAlertCourse';

export default {
  title: 'ToastAlertCourse',
  component: ToastAlertCourse,
} as ComponentMeta<typeof ToastAlertCourse>;

const Template: ComponentStory<typeof ToastAlertCourse> = (args) => (
  <ToastAlertCourse {...args} />
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
