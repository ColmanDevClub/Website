import { ThemeProvider } from '@mui/material/styles';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';

import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

import PrivateRoutes from './components/PrivateRoutes';
import SignIn from './lib/auth/pages/SignInPage/SignInPage';
import SignupPage from './lib/auth/pages/SignUpPage/SignUpPage';
import { Footer } from './lib/landing/components';
import HomePage from './lib/landing/pages/HomePage';
import SyllabusPage from './lib/landing/pages/SyllabusPage/SyllabusPage';
import TeamPage from './lib/landing/pages/TeamPage';
import Layout from './lib/management/pages/Layout/Layout';
import ManageRouter from './lib/management/router';
import { theme } from './theme';
import Navbar from './ui/Navbar';

const queryClient = new QueryClient();

const manage = false;

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Navbar />}>
      <Route index element={<HomePage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/team" element={<TeamPage />} />
      <Route path="/syllabus" element={<SyllabusPage />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/manage" element={<Layout />} />
      <Route path="/private" element={<PrivateRoutes />} />
    </Route>
  )
);

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        {manage ? (
          <ManageRouter />
        ) : (
          <>
            <RouterProvider router={router} />
            <Footer />
          </>
        )}
        <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
      </QueryClientProvider>
    </ThemeProvider>
  );
};

export default App;
