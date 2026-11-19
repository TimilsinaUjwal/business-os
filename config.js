// Business OS — client configuration
// The anon/publishable key is safe for browser use (protected by RLS policies).
const CONFIG = {
  supabaseUrl: 'https://hsfueyrenmmdpdelmrgz.supabase.co',
  supabaseAnonKey: 'sb_publishable_iQQyTTO146JeseoTTCnzQg_6zcih15u',
  // Google OAuth client ID (Web application type) — enables "Connect with Google"
  // for GA4 & Search Console directly from the app. Create at console.cloud.google.com
  // → APIs & Services → Credentials → OAuth client ID. Authorized JavaScript origin:
  // your app URL (e.g. https://finance.juno.page). Client IDs are public, safe to ship.
  googleClientId: ''
};