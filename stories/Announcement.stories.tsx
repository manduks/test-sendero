import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Announcement } from '../components/Nextjs/Announcement';

export default {
  title: 'Announcement',
  component: Announcement,
} as ComponentMeta<typeof Announcement>;

const Template: ComponentStory<typeof Announcement> = (args) => (
  <Announcement {...args} />
);

export const Annoumcement1 = Template.bind({});
Annoumcement1.args = {
  message: '¿Buscas capacitación personalizada? Visita nuestra sección',
  link: 'capacitación empresarial',
  isSticky: false,
};

export const Annoumcement2 = Template.bind({});
Annoumcement2.args = {
  message: '¿Eres estudiante? Tenemos un descuento especial para ti',
  link: 'descuento para estudiantes',
  isSticky: false,
};

export const Annoumcement3 = Template.bind({});
Annoumcement3.args = {
  message: '¿Buscas ser parte de nuestro equipo? Visita nuestra sección',
  link: 'socios',
  isSticky: false,
};
