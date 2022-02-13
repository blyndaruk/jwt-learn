import React from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import Link from 'next/link';

export { NavLink };

NavLink.propTypes = {
  href: PropTypes.string.isRequired,
  exact: PropTypes.bool
};

NavLink.defaultProps = {
  exact: false
};

interface NavLinkProps {
  href: string;
  exact?: boolean;
  className?: string;
  children: React.ReactNode;
}

function NavLink({ href, exact, children, className, ...props }: NavLinkProps) {
  const { pathname } = useRouter();
  const isActive = exact ? pathname === href : pathname.startsWith(href);

  if (isActive) {
    className += ' active';
  }

  return (
      <Link href={href}>
        <a {...props}>
          {children}
        </a>
      </Link>
  );
}
