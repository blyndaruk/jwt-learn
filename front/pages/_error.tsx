import { NextPageContext } from 'next';
import MinimalLayout from '@/layouts/minimal';

interface ErrorProps {
  statusCode?: number;
}

const Error = ({ statusCode }: ErrorProps) => {
  return (
      <MinimalLayout>
        <p>{statusCode}</p>
      </MinimalLayout>
  )
}

Error.getInitialProps = ({ res, err }: NextPageContext) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
