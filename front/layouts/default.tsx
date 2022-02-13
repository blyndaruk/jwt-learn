import React, { ReactNode } from 'react'
import Head from 'next/head'
import { NavLink } from '@/shared/NavLink'

interface Props {
  children?: ReactNode;
  title?: string;
}

const Layout = ({ children, title = 'This is the default title' }: Props) => (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <header>
        <nav>
          <NavLink href="/" exact className="nav-item nav-link">Home</NavLink>
          <NavLink href="/about" exact className="nav-item nav-link">About</NavLink>
          <NavLink href="/test" exact className="nav-item nav-link">Test</NavLink>
        </nav>
      </header>
      {children}
      <footer>
        <hr />
        <span>I'm here to stay (Footer)</span>
      </footer>
    </>
)

export default Layout
