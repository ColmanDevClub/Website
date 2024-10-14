import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './pages/Layout/Layout';
import First from './pages/First';
import { SignUpPage } from '../auth/pages';

const ManageRouter = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<First />} />
          <Route path="/board" element={<First />} />
          <Route path="/signup" element={<SignUpPage />} />

        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default ManageRouter;
