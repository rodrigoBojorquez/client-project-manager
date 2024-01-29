// LoginLayout.jsx

import React from 'react';

const LoginLayout = ({ children }) => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-1/3 p-8 bg-gray-200">
        {children}
      </div>
    </div>
  );
};

export default LoginLayout;
