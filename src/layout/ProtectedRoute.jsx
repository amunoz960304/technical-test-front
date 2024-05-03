import { Outlet, Navigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const ProtectedRoute = () => {
  const { loading } = useAuth();
  const token = localStorage.getItem('token');
  if (loading) return 'Cargando...';
  return (
    <>
      {token ? (
        <div className='bg-gray-100'>
          <div className='md:flex md:min-h-screen'>
            <main className='p-10 flex-1 '>
              <Outlet />
            </main>
          </div>
        </div>
      ) : (
        <Navigate to='/' />
      )}
    </>
  );
};

export default ProtectedRoute;
