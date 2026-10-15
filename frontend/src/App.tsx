import { Navigate, Route, Routes } from 'react-router-dom'

import DashboardPage from './routes/DashboardPage'
import LoginPage from './routes/LoginPage'

const AUTH_TOKEN_KEY = 'knowflow-token'
const AUTH_EMAIL_KEY = 'knowflow-email'

function App() {
  const token = localStorage.getItem(AUTH_TOKEN_KEY)
  const email = localStorage.getItem(AUTH_EMAIL_KEY) ?? 'user'

  const handleAuthenticate = (nextToken: string, nextEmail: string) => {
    localStorage.setItem(AUTH_TOKEN_KEY, nextToken)
    localStorage.setItem(AUTH_EMAIL_KEY, nextEmail)
    window.location.assign('/dashboard')
  }

  const handleSignOut = () => {
    localStorage.removeItem(AUTH_TOKEN_KEY)
    localStorage.removeItem(AUTH_EMAIL_KEY)
    window.location.assign('/login')
  }

  return (
    <Routes>
      <Route path="/" element={<Navigate to={token ? '/dashboard' : '/login'} replace />} />
      <Route
        path="/login"
        element={token ? <Navigate to="/dashboard" replace /> : <LoginPage onAuthenticate={handleAuthenticate} />}
      />
      <Route
        path="/dashboard"
        element={
          token ? <DashboardPage email={email} onSignOut={handleSignOut} /> : <Navigate to="/login" replace />
        }
      />
    </Routes>
  )
}

export default App
