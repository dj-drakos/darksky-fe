import { Navigate } from 'react-router-dom'

export function RequireAuth({children, token, redirectTo}) {
  return token ? children : <Navigate to={redirectTo} />
}