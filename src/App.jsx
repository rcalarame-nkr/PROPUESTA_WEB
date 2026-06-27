import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import { ProposalProvider } from './context/ProposalContext'
import MainLayout from './layouts/MainLayout'
import LoadingSpinner from './components/common/LoadingSpinner'

const ProposalPage = lazy(() => import('./pages/ProposalPage'))

function App() {
  return (
    <ProposalProvider>
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<ProposalPage />} />
          </Route>
        </Routes>
      </Suspense>
    </ProposalProvider>
  )
}

export default App
