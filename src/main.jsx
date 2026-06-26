import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/app.css';
import { ProposalProvider } from './context/ProposalContext.jsx';
import ProposalPage from './pages/ProposalPage.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ProposalProvider>
      <HashRouter>
        <Routes>
          <Route path="/" element={<ProposalPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </HashRouter>
    </ProposalProvider>
  </React.StrictMode>,
);
