import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Invoice } from 'components/Invoice/Invoice';

export default {
  title: 'Invoice',
  component: Invoice,
} as ComponentMeta<typeof Invoice>;

const Template: ComponentStory<typeof Invoice> = (args) => (
  <Invoice {...args} />
);

export const FirstInvoice = Template.bind({});
FirstInvoice.args = {
  identifier: '123456789',
  date: '14 de septiembre del 2022',
  street: 'Hebrea 20',
  delegation: 'Tlahuac, 13230 CDMX',
  country: 'México',
  price: '140.00',
};

export const SecondInvoice = Template.bind({});
SecondInvoice.args = {
  identifier: '987654321',
  date: '20 de mayo del 2022',
  street: 'Álamos 4',
  delegation: 'Benito Juárez, 13659 CDMX',
  country: 'México',
  price: '2,999.00',
};

export const ThirdInvoice = Template.bind({});
ThirdInvoice.args = {
  identifier: '456789123',
  date: '31 de diciembre del 2022',
  street: 'Gardenias 261',
  delegation: 'Tlanepantla, 13784 CDMX',
  country: 'México',
  price: '10,000.00',
};
