import { Routes, Route } from 'react-router-dom'
import Dashboard from '@/pages/Dashboard'
import Workers from '@/pages/Workers'
import WorkerDetails from '@/pages/WorkerDetails'
import Reports from '@/pages/Reports'
import Settings from '@/pages/Settings'
import AddWorkerFloatingButtonWrapper from '@/components/AddWorkerFloatingButtonWrapper'

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/workers" element={<Workers />} />
        <Route path="/workers/:id" element={<WorkerDetails />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
      <AddWorkerFloatingButtonWrapper />
    </div>
  )
}

export default App