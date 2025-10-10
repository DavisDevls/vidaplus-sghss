import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import DashboardPaciente from './components/DashboardPaciente';
import DashboardProfissional from './components/DashboardProfissional';
import DashboardAdmin from './components/DashboardAdmin';

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/paciente" element={<DashboardPaciente />} />
        <Route path="/profissional" element={<DashboardProfissional />} />
        <Route path="/admin" element={<DashboardAdmin />} />
      </Routes>
    </BrowserRouter>
  );
}
