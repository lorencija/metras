import React from 'react';
import FooterNavBar from '../footerNavBar';
import Style from './style.css';
import LinkData from '../../data/foterMenuItems.json';

export default function Footer() {
  return (
    <div>
      <FooterNavBar linksList={LinkData} />
      <div className={Style.copy}>
        &copy; 2019 MB &ldquo;Simul bonum&ldquo;. Visos teisės saugomos LR
        įstatymais.
      </div>
    </div>
  );
}
