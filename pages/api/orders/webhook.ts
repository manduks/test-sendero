import { NextApiRequest, NextApiResponse } from 'next';
import Stripe from 'stripe';
import { buffer } from 'micro';
import supabaseAdminClient from 'lib/supabase/supabaseAdminClient';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: '2022-08-01',
});

const endpointSecret = process.env.STRIPE_WEBHOOK_KEY ?? '';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    const rawBody = await buffer(req);

    const stripeSignature = req.headers['stripe-signature'] as string;
    let event;
    try {
      event = stripe.webhooks.constructEvent(
        rawBody,
        stripeSignature,
        endpointSecret
      );
    } catch (err: any) {
      return res.status(400).send(`Webhook Error: ${err.message}`);
    }
    if (event.type === 'checkout.session.completed') {
      const { customer_details } = event.data.object as any;
      await supabaseAdminClient.auth.admin.inviteUserByEmail(
        customer_details.email,
        {
          redirectTo: '/lesson',
          data: {
            name: customer_details.name,
          },
        }
      );
    }

    res.send({ status: 'success' });
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}

export const config = {
  api: {
    bodyParser: false,
  },
};
