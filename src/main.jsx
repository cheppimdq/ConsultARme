import React from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import { RutasPantallas } from './routes/RutasPantallas.jsx';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

import './estilos.css';

import 'aos/dist/aos.css';
import AOS from 'aos';

library.add(fab, fas, far);
AOS.init();

const rootContainer = document.getElementById('root');
const root = rootContainer ? createRoot(rootContainer) : createRoot();

root.render(
  <HashRouter>
    <React.StrictMode>
      <RutasPantallas />
    </React.StrictMode>
  </HashRouter>
);
