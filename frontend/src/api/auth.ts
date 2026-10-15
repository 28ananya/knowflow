const API_URL = import.meta.env.VITE_API_URL ?? 'http://localhost:8000/api/v1'

export type AuthResponse = {
  access_token: string
  token_type: string
  user: {
    email: string
  }
}

async function requestAuth(endpoint: string, payload: { email: string; password: string }) {
  const response = await fetch(`${API_URL}/auth${endpoint}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })

  if (!response.ok) {
    const error = await response.json().catch(() => ({ detail: 'Authentication failed' }))
    throw new Error(error.detail ?? 'Authentication failed')
  }

  return (await response.json()) as AuthResponse
}

export const loginUser = (email: string, password: string) =>
  requestAuth('/login', { email, password })

export const registerUser = (email: string, password: string) =>
  requestAuth('/register', { email, password })
