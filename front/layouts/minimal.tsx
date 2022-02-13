import React, { ReactNode } from 'react'
import Head from 'next/head'
import { NavLink } from '@/shared/NavLink';

interface Props {
  children?: ReactNode;
  title?: string;
}

const MinimalLayout = ({ children, title }: Props) => (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <header>
        Minimal
        <br/>
        <NavLink href="/">Home</NavLink>
      </header>
      {children}
      <footer>
        <hr />
        <span>I'm here to stay (Footer)</span>
      </footer>
    </>
)

export default MinimalLayout
