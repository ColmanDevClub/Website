import { BrowserRouter, Route, Routes } from 'react-router-dom';
import First from './pages/First';
import Layout from './pages/Layout/Layout';

const ManageRouter = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<First />} />
          <Route path="/board" element={<First />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default ManageRouter;
