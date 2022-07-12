import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { RootState } from '../utils/store';

export default function ProtectedRoute({
  children,
}: {
  children: JSX.Element;
}) {
  const { user } = useSelector((state: RootState) => state.user);

  if (!user) {
    return <Navigate to='/landing' />;
  }

  return children;
}
