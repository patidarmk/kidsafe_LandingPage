import { withPageAuthRequired } from '@auth0/nextjs-auth0';

export const getServerSideProps = withPageAuthRequired();

const ProtectedPage = () => {
  return <div>Welcome to the protected page!</div>;
};

export default ProtectedPage;
