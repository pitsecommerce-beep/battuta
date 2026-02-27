import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'

const LandingPage = lazy(() => import('@/pages/LandingPage'))

function App(): React.JSX.Element {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-screen items-center justify-center bg-surface-0">
          <div className="h-8 w-8 animate-spin rounded-full border-2 border-brand-500 border-t-transparent" />
        </div>
      }
    >
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </Suspense>
  )
}

export default App
