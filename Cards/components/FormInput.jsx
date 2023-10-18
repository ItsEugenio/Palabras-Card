import React from 'react'
import { useState } from "react";
import styles from "../css/components.module.css"
export default function FormInput({ onAddCard }) {
    const [inputText, setInputText] = useState('');

    const handleSubmit = (e) => {
      e.preventDefault();
      if (inputText.trim() !== '') {
        onAddCard(inputText);
        setInputText('');
      }
    };
  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <textarea
        rows="4" 
        cols="50"
        placeholder="Escriba lo que guste"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        className={styles.textarea}
      />
      <button type="submit" className={styles.btnForm}>Agregar</button>
    </form>
  )
}
