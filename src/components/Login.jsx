import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [perfil, setPerfil] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (perfil === 'paciente') navigate('/paciente');
    else if (perfil === 'profissional') navigate('/profissional');
    else if (perfil === 'admin') navigate('/admin');
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      <h2>Login VidaPlus SGHSS</h2>
      <select onChange={(e) => setPerfil(e.target.value)} style={{ margin: '10px', padding: '5px' }}>
        <option value="">Selecione seu perfil</option>
        <option value="paciente">Paciente</option>
        <option value="profissional">Profissional de Saúde</option>
        <option value="admin">Administrador</option>
      </select>
      <br />
      <button onClick={handleLogin} style={{ padding: '10px 20px', marginTop: '10px' }}>
        Entrar
      </button>
    </div>
  );
}
