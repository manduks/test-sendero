import axios from 'axios';
import { useMutation } from '@tanstack/react-query';

export const useSendMail = () => {
  const handleSendEmail = (email: string) => {
    sendEmail.mutate(email);
  };

  const sendEmail = useMutation(
    async (email: string) =>
      await axios.post('/api/email/subscribe', { email: email })
  );

  const { status, error } = sendEmail;

  if (status === 'success') window.localStorage.setItem('emailSend', 'true');

  return {
    handleSendEmail,
    status,
    error,
  };
};
