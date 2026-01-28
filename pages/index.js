import React, { useState } from 'react';
import Index from '../components/Index';
import Getotp from '../components/Getotp';
import Loading from '../components/loading';

export default function Home() {
  const [activePage, setActivePage] = useState('index');

  const navigateToPage = (page) => {
    setActivePage(page);
  };

  return (
    <>
      {activePage === 'index' && <Index navigateToPage={navigateToPage} />}
      {activePage === 'loading' && <Loading navigateToPage={navigateToPage} />}
      {activePage === 'getotp' && <Getotp navigateToPage={navigateToPage} />}
    </>
  );
}
