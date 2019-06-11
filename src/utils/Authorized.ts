import RenderAuthorized from '@/components/Authorized';
import { getAuthority } from './authority';

let Authorized = RenderAuthorized(getAuthority()); // eslint-disable-line

// Reload the rights component
const reloadAuthorized = (role: string) => {
  Authorized = RenderAuthorized(getAuthority(role));
};

export { reloadAuthorized };
export default Authorized;
