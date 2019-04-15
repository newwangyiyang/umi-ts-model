import React from 'react';
import RenderAuthorized from '@/components/Authorized';
import { getAuthority } from '@/utils/authority';
import Redirect from 'umi/redirect';

const Authority = getAuthority();
const Authorized = RenderAuthorized(Authority); //  Authority = [ 'admin' ]

export default ({ children }) => (
  <Authorized authority={children.props.route.authority} noMatch={<Redirect to="/exception/403" />}>
    {children}
  </Authorized>
);