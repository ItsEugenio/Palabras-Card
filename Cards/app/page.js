"use client"
import React from "react"
import { useState } from "react";
import Titulo from "@/components/Titulo";
import Subtitulo from "@/components/Subtitulo";
import FormInput from "@/components/FormInput";
import CardEnlista from "@/components/CardEnlista";
import styles from "../css/pageHome.module.css"
export default function Home() {
  const [cards, setCards] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [editedText, setEditedText] = useState('');

  const titulo = "Up cards"
  const subtitulo = "Escribe lo que desees, podras editar o eliminar lo que escribas :D"

  const handleAddCard = (text) => {
    setCards([...cards, { text }]);
  };

  const handleEditCard = (index) => {
    setEditIndex(index);
    setEditedText(cards[index].text); 
  };

  const handleSaveCard = (index) => {
    const updatedCards = [...cards];
    updatedCards[index].text = editedText;
    setCards(updatedCards);
    setEditIndex(null);
    setEditedText(''); 
  };

  const handleDeleteCard = (index) => {
    const updatedCards = cards.filter((_, i) => i !== index);
    setCards(updatedCards);
  };
  return (
    <main className={styles.main}>
        
        <Titulo titulo={titulo} className={styles.tituloP} />
        <Subtitulo subtitulo={subtitulo} />
        <FormInput onAddCard={handleAddCard} />
        <CardEnlista 
          cards={cards}
          onEditCard={handleEditCard}
          onSaveCard={handleSaveCard}
          onDeleteCard={handleDeleteCard}
          editIndex={editIndex}
          editedText={editedText} 
          onTextChange={(text) => setEditedText(text)}
        />
        
    </main>
  )
}
