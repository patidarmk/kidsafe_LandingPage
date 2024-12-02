// pages/protected.tsx

import { NextPage } from 'next';
import { withPageAuthRequired } from '@auth0/nextjs-auth0';

const ProtectedPage: NextPage = () => {
  return <div>Protected Content</div>;
};

export default withPageAuthRequired(ProtectedPage);
