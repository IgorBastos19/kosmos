// pages/index.js

import React, { useState } from "react";
import styles from "styles/LoginPage.module.css"; // Importa o arquivo de estilo CSS Module

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Nome de usuário:", username);
    console.log("Senha:", password);
    // Adicione aqui a lógica para autenticar o usuário
  };

  return (
    <div className={styles.loginContainer}>
      <h2 className={styles.loginTitle}>Página de Login</h2>
      <form onSubmit={handleSubmit} className={styles.loginForm}>
        <div className={styles.inputGroup}>
          <label htmlFor="username" className={styles.inputLabel}>
            Nome de Usuário:
          </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            className={styles.inputField}
          />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="password" className={styles.inputLabel}>
            Senha:
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            className={styles.inputField}
          />
        </div>
        <button type="submit" className={styles.loginButton}>
          Entrar
        </button>
      </form>
    </div>
  );
}

export default LoginPage;
