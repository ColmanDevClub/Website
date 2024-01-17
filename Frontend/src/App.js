import React from 'react';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';

import { QueryClientProvider, QueryClient } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import SignupPage from './pages/SignupPage';
import TeamPage from './pages/TeamPage';
import Footer from './components/Footer';
import { theme } from './theme';
import SyllabusPage from './pages/SyllabusPage/SyllabusPage';
import PrivateRoutes from './components/PrivateRoutes';

const queryClient = new QueryClient();

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Navbar />}>
      <Route index element={<HomePage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/team" element={<TeamPage />} />
      <Route path="/syllabus" element={<SyllabusPage />} />
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
