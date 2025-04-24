import React from "react";
import styles from "./Alterar.module.scss";

export default function Alterar() {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <img src="/logo1.svg" alt="MonkChat Logo" />
        <h1>MonkChat</h1>
      </div>

      <div className={styles.right}>
        <h2>Alterar conta</h2>
        <form>
          <label>E-mail</label>
          <p className={styles.emailText}>bruno</p>

          <label>Senha</label>
          <a href="#" className={styles.resetLink}>resetar</a>

          <label>Nick</label>
          <input type="text" defaultValue="Novo Nick" />

          <button type="submit">Alterar</button>
        </form>
      </div>
    </div>
  );
}