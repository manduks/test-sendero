// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import AccountCreated from 'emails/AccountCreated';
import { ClientRequest } from '@sendgrid/client/src/request';
import sendMail from 'emails';
import sendgridClient from '@sendgrid/client';

sendgridClient.setApiKey(process.env.SEND_GRID_KEY as string);

export default async function handler(req: any, res: any): Promise<void> {
  try {
    await sendMail({
      to: req.body.email,
      subject: 'Hola esto es una prueba',
      forceDeliver: false,
      component: <AccountCreated name="Samuel" />,
    });
    const customFields = await getCustomFields();
    const sourceField = customFields.find(
      (field: any) => field.name === 'source'
    );

    const data = {
      // Id for the Landing Subscription Contact list
      list_ids: ['fb8a7c6a-42c8-4011-bbca-0619e4f1130b'],
      contacts: [
        {
          email: req.body.email,
          custom_fields: sourceField
            ? {
                [sourceField.id]: 'subscription',
              }
            : null,
        },
      ],
    };

    const request: ClientRequest = {
      url: `/v3/marketing/contacts`,
      method: 'PUT',
      body: data,
    };

    await sendgridClient.request(request);

    res.status(201).json({ message: 'Email sent successfully', status: 201 });
  } catch (error: any) {
    console.log(error);
    res.status(500).json({ statusCode: 500, message: error.message });
  }
}

async function getCustomFields() {
  const request: ClientRequest = {
    url: `/v3/marketing/field_definitions`,
    method: 'GET',
  };

  const [, body] = await sendgridClient.request(request);

  return body.custom_fields;
}
