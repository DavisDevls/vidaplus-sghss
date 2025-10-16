import logo from '../assets/logo-vidaplus.png';
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
    <div
      style={{
        textAlign: 'center',
        marginTop: '100px',
        fontFamily: "'Inter', sans-serif",
      }}
    >
      {/* Logo */}
      <img
        src={logo}
        alt="Logo VidaPlus"
        style={{
          width: '180px',
          marginBottom: '20px',
          borderRadius: '12px',
          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
        }}
      />

      <h2 style={{ color: '#0066cc' }}>Login VidaPlus SGHSS</h2>

      <select
        onChange={(e) => setPerfil(e.target.value)}
        style={{
          margin: '10px',
          padding: '10px',
          borderRadius: '8px',
          border: '1px solid #ccc',
          fontSize: '16px',
        }}
      >
        <option value="">Selecione seu perfil</option>
        <option value="paciente">Paciente</option>
        <option value="profissional">Profissional de Saúde</option>
        <option value="admin">Administrador</option>
      </select>

      <br />

      <button
        onClick={handleLogin}
        style={{
          padding: '10px 30px',
          marginTop: '15px',
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
          transition: '0.3s',
        }}
        onMouseOver={(e) => (e.target.style.backgroundColor = '#0056b3')}
        onMouseOut={(e) => (e.target.style.backgroundColor = '#007bff')}
      >
        Entrar
      </button>
    </div>
  );
}
