import MinimalLayout from '@/layouts/minimal';
import { NavLink } from '@/shared/NavLink';

const Error404 = () => {
  return (
      <MinimalLayout>
        <p>404</p>
        <NavLink href="/">Home</NavLink>
      </MinimalLayout>
  )
}

export default Error404;
