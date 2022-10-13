import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.SUPABASE_SERVICE_KEY || '';

const supabaseAdminClient = createClient(supabaseUrl, supabaseAnonKey);

export default supabaseAdminClient;
