import { useState } from 'react';
import { useSupabaseClient } from '@supabase/auth-helpers-react';

export const useLogin = () => {
  const [sessionStatus, setSessionStatus] = useState<boolean>();
  const supabaseClient = useSupabaseClient();

  const handleLogin = async (email: string) => {
    try {
      const { error } = await supabaseClient.auth.signInWithOtp({
        email,
        options: {
          shouldCreateUser: false,
        },
      });
      if (error) throw error;
      setSessionStatus(true);
    } catch (error: unknown) {
      setSessionStatus(false);
    }
  };

  return {
    handleLogin,
    setSessionStatus,
    sessionStatus,
  };
};
