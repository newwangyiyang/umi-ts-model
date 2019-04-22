import React from 'react';

const CommonLayout: React.FC = props => {
  return (
    <div>
      {props.children}
    </div>
  );
};

export default CommonLayout;
