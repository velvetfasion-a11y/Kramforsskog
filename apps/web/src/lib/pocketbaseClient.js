import Pocketbase from 'pocketbase';

// Local dev: Vite proxies /hcgi/platform → PocketBase. Production: set VITE_POCKETBASE_URL on Render.
const POCKETBASE_API_URL = (
  import.meta.env.VITE_POCKETBASE_URL || '/hcgi/platform'
).replace(/\/$/, '');

const pocketbaseClient = new Pocketbase(POCKETBASE_API_URL);

export default pocketbaseClient;

export { pocketbaseClient };
