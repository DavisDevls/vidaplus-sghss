import { useNavigate } from 'react-router-dom';

export default function DashboardProfissional() {
  const navigate = useNavigate();

  return (
    <div style={{ padding: '20px' }}>
      <h2>Bem-vindo, Profissional de Saúde</h2>
      <p>Gerencie pacientes, prontuários e atendimentos aqui.</p>
      <button onClick={() => navigate('/')} style={{ marginTop: '20px', padding: '10px 20px' }}>
        Voltar ao Login
      </button>
    </div>
  );
}
