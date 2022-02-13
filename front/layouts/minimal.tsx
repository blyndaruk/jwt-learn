import React from 'react';

type LayoutProps = {
  children: React.ReactNode
}

const MinimalLayout: React.FunctionComponent<LayoutProps> = ({ children }) => {
  return (
      <>
        Minimal layout
        {children}
      </>
  );
};

export default MinimalLayout;
