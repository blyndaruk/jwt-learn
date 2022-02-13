import React from 'react';

type LayoutProps = {
  children: React.ReactNode
}

const DefaultLayout: React.FunctionComponent<LayoutProps> = ({ children }) => {
  return (
      <div className="out">
        {children}
      </div>
  );
};

export default DefaultLayout;
