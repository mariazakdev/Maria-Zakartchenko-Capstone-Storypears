import { Navigate, Route } from 'react-router-dom';
import { useAuth } from './context/AuthProvider';

function ProtectedRoute(props) {
  const { isLoggedIn } = useAuth();

  if (isLoggedIn) {
    return <Route {...props} />;
  } else {
    return <Navigate to="/login" />;
  }
}

export default ProtectedRoute;