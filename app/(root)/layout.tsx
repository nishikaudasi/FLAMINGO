import React from 'react';

interface SetupLayoutProp {
  children: React.ReactNode;
}

const SetupLayout: React.FC<SetupLayoutProp> = ({ children }) => {
  return (
    <div>
      {/* Add any layout structure you want, like headers, footers, etc. */}
      <header>
        <h1>Setup Page</h1>
      </header>
      <main>{children}</main> {/* Render the children passed into the component */}
      <footer>
        <p>Footer content here</p>
      </footer>
    </div>
  );
};

export default SetupLayout;
