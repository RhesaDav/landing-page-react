import React from 'react';
import { Link, Outlet, NavLink } from 'react-router-dom';

import Forms from './component/Forms';

import './styles/index.css';

export default function App() {
  return (
    <div className='app'>
      <a href='https://indihome.co.id/landingpage/indihomesolo/digitalchannel2p'>Sample</a>
      <h1 className='title'>Hello Rhesa!</h1>
      <img src='https://www.indihome-fiber.id/wp-content/uploads/2021/08/banner-indihome-2.jpg' alt='banner' className='img-banner'/>
        <h2>Promo Khusus Wilayah Kediri</h2>
        <h3>Pilih Paket Yang Diinginkan</h3>
      <section>
        <ul className="nav">
          <li className="nav-link">
            <NavLink to="/inet-phone" className={ ({isActive}) => (isActive ? "active-link" : "link")}>
              Inet+Phone
            </NavLink>
          </li>
          <li>
            <NavLink to="/inet-tv" className={ ({isActive}) => (isActive ? "active-link" : "link")}>
              Inet+Tv
            </NavLink>
          </li>
          <li>
            <NavLink to="/inet-phone-tv" className={ ({isActive}) => (isActive ? "active-link" : "link")}>
              Inet+Phone+Tv
            </NavLink>
          </li>
        </ul>
        <div className='desc'>
        <span>Nikmati berbagai benefit dalam satu layanan untuk dukung aktivitas tanpa batas Kamu. Bersama IndiHome, rasakan jaringan internet cepat, serta bebas nelpon dengan suara jernih. Yuk, pilih paket yang sesuai dengan keinginanmu di sini!
        </span>
        </div>
        <Outlet />
      </section>
      <Forms />
    </div>
  );
}
