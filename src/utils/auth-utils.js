import { Navigate } from 'react-router-dom'

export function RequireAuth({children, token, redirectTo}) {
  let isAuthenticated = token
  return isAuthenticated ? children : <Navigate to={redirectTo} />
}