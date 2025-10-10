import { useNavigate } from 'react-router-dom';

export default function DashboardPaciente() {
  const navigate = useNavigate();

  return (
    <div style={{ padding: '20px' }}>
      <h2>Bem-vindo, Paciente</h2>
      <p>Aqui você pode visualizar seu histórico, agendar consultas e acessar telemedicina.</p>
      <button onClick={() => navigate('/')} style={{ marginTop: '20px', padding: '10px 20px' }}>
        Voltar ao Login
      </button>
    </div>
  );
}
