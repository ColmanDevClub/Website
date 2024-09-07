import React from 'react';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';

import { QueryClientProvider, QueryClient } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

import Navbar from './components/Navbar';
import { theme } from './theme';
import PrivateRoutes from './components/PrivateRoutes';
import SignIn from './lib/auth/pages/SignInPage/SignInPage';
import SignupPage from './lib/auth/pages/SignUpPage/SignUpPage';
import HomePage from './lib/landing/pages/HomePage';
import TeamPage from './lib/landing/pages/TeamPage';
import SyllabusPage from './lib/landing/pages/SyllabusPage/SyllabusPage';
import { Footer } from './lib/landing/components';

const queryClient = new QueryClient();

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Navbar />}>
      <Route index element={<HomePage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/team" element={<TeamPage />} />
      <Route path="/syllabus" element={<SyllabusPage />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/private" element={<PrivateRoutes />} />
    </Route>
  )
);

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
        <Footer />
        <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
      </QueryClientProvider>
    </ThemeProvider>
  );
};

export default App;
