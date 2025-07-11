import { BrowserRouter, Route, Routes } from 'react-router';
import { Home } from '../../pages/Home';
import { QrCode } from '../../pages/QrCode';

export function MainRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/qrcode' element={<QrCode />} />
      </Routes>
    </BrowserRouter>
  );
}
