import React from 'react';
import FooterNavBar from '../footerNavBar/index';
import Style from './style.css';

export default function Footer() {
  return (
    <div>
      <FooterNavBar />
      <div className={Style.copy}>
        &copy; 2019 MB &ldquo;Simul bonum&ldquo;. Visos teisės saugomos LR
        įstatymais.
      </div>
    </div>
  );
}
