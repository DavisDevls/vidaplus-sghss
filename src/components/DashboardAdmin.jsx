import { useNavigate } from "react-router-dom";

export default function DashboardAdmin() {
  const navigate = useNavigate();

  const handleLogout = () => navigate("/");

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        backgroundColor: "#f0f4f8",
        fontFamily: "'Inter', sans-serif",
        color: "#1f2937",
        padding: "20px",
      }}
    >
      {/* Logo e título */}
      <div style={{ textAlign: "center", marginBottom: "24px" }}>
        <img
          src="/logo-vidaplus.png" // coloque aqui o caminho real do seu logo
          alt="VidaPlus Logo"
          style={{ width: "120px", marginBottom: "8px" }}
        />
        <h2 style={{ fontSize: "1.5rem", fontWeight: "600", color: "#2563eb" }}>
          SGHSS VidaPlus
        </h2>
        <p style={{ color: "#6b7280", fontSize: "0.95rem" }}>
          Sistema de Gestão Hospitalar e de Serviços de Saúde
        </p>
      </div>

      {/* Card principal */}
      <div
        style={{
          backgroundColor: "#ffffff",
          padding: "40px",
          borderRadius: "16px",
          boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
          maxWidth: "520px",
          width: "100%",
          textAlign: "center",
        }}
      >
        <h1 style={{ fontSize: "1.8rem", marginBottom: "12px" }}>
          Bem-vindo, Administrador 👋
        </h1>
        <p style={{ fontSize: "1rem", color: "#4b5563", marginBottom: "32px" }}>
          Acesse as áreas administrativas e gerencie todo o sistema.
        </p>

        {/* Botões de ação */}
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <button
            style={{
              backgroundColor: "#2563eb",
              color: "#fff",
              border: "none",
              padding: "12px 24px",
              borderRadius: "8px",
              cursor: "pointer",
              fontSize: "1rem",
              fontWeight: "600",
              transition: "background-color 0.3s ease",
            }}
            onClick={() => navigate("/usuarios")}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#1d4ed8")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#2563eb")}
          >
            Gerenciar Usuários
          </button>

          <button
            style={{
              backgroundColor: "#16a34a",
              color: "#fff",
              border: "none",
              padding: "12px 24px",
              borderRadius: "8px",
              cursor: "pointer",
              fontSize: "1rem",
              fontWeight: "600",
              transition: "background-color 0.3s ease",
            }}
            onClick={() => navigate("/configuracoes")}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#15803d")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#16a34a")}
          >
            Configurações do Sistema
          </button>

          <button
            onClick={handleLogout}
            style={{
              backgroundColor: "#dc2626",
              color: "#fff",
              border: "none",
              padding: "12px 24px",
              borderRadius: "8px",
              cursor: "pointer",
              fontSize: "1rem",
              fontWeight: "600",
              transition: "background-color 0.3s ease",
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#b91c1c")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#dc2626")}
          >
            Sair do Sistema
          </button>
        </div>
      </div>

      {/* Rodapé */}
      <footer style={{ marginTop: "40px", fontSize: "0.85rem", color: "#9ca3af" }}>
        © 2025 VidaPlus - Todos os direitos reservados
      </footer>
    </div>
  );
}
