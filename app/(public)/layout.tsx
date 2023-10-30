/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */

import React from 'react';
import Logo from './login/components/Logo';
import Footer from './login/components/footer';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
        <Logo/>
      {children}
      <Footer/>
    </div>
  );
}
