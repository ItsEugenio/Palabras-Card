"use client";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import styles from "../styles/pageHome.module.css";
import Titulo from "./components/Titulo";
import Subtitulo from "./components/Subtitulo";

const palabras = [
  "gasto",
  "hongo",
  "cejas",
  "coral",
  "feria",  
  "rueda",
  "radar",
  "opera",
  "salio",
];
const inicioIndice = 0;
const titulo = "¿Podras Ordenar las palabras ?";
const subtitulo = "Escribre la palabra en el orden que creas, podras editar tu opccion o reiniciar. Hazlo cuantas veces puedas antes de perder todas tus vidas ";

export default function Home() {
  const [originalWords, setOriginalWords] = useState(palabras);
  const [currentWord, setCurrentWord] = useState(originalWords[inicioIndice]);
  const [palabraRevuelta, setScrambledWord] = useState("");
  const [inputValues, setInputValues] = useState(
    Array(currentWord.length).fill("")
  );
  const [currentInputIndex, setCurrentInputIndex] = useState(0);
  const [lives, setLives] = useState(3);
  const [message, setMessage] = useState("");
  const [currentIndex, setCurrentIndex] = useState(inicioIndice);

  useEffect(() => {
    const newScrambledWord = currentWord
      .split("")
      .sort(() => Math.random() - 0.5)
      .join("");
    setScrambledWord(newScrambledWord);
  }, [currentWord]);

  const handleInputChange = (event) => {
    const currentInputValue = event.target.value;
    if (/^[a-zA-Z]*$/.test(currentInputValue)) {
      const updatedInputValues = [...inputValues];
      updatedInputValues[currentInputIndex] = currentInputValue;
      setInputValues(updatedInputValues);

      if (currentInputValue === currentWord[currentInputIndex]) {
        if (currentInputIndex === currentWord.length - 1) {
          setMessage(`¡Correcto! La palabra es ${currentWord}`);
          const newWords = originalWords.filter((word) => word !== currentWord);
          setOriginalWords(newWords);
          if (newWords.length > 0) {
            const newIndex = Math.floor(Math.random() * newWords.length);
            setCurrentIndex(newIndex);
            setCurrentWord(newWords[newIndex]);
            setCurrentInputIndex(0);
            setInputValues(Array(newWords[newIndex].length).fill(""));
            setMessage("");
          } else {
            setMessage("Ganaste bro");
          }
        } else {
          setCurrentInputIndex(currentInputIndex + 1);
          setMessage("Vas bien bro");
        }
      } else {
        setLives(lives - 1);
        setMessage("Intenta con otra letra bro");
        if (lives === 1) {
          setMessage("Perdiste bro");
        }
      }
    }
  };

  const handleDelete = () => {
    const updatedInputValues = [...inputValues];
    updatedInputValues[currentInputIndex] = "";
    setInputValues(updatedInputValues);
  };

  const handleRestart = () => {
    const newIndex = Math.floor(Math.random() * palabras.length);
    const newCurrentWord = palabras[newIndex];

    setOriginalWords(palabras.slice());
    setCurrentWord(newCurrentWord);
    setScrambledWord("");
    setInputValues(Array(newCurrentWord.length).fill(""));
    setLives(3);
    setMessage("");
    setCurrentIndex(newIndex);
    setCurrentInputIndex(0);
  };

  const inputBoxes = inputValues.map((value, index) => (
    <div key={index} className={styles.contIndInput}>
      <div className={styles.InputCont}>
        <input
          maxLength={1}
          type="text"
          value={value}
          onChange={handleInputChange}
          disabled={index !== currentInputIndex || lives === 0}
          className={styles.Inputs}
        />
      </div>
      <div className={styles.BtnCont}>
        {index === currentInputIndex && (
          <button onClick={handleDelete} className={styles.btnDelete}>
            Eliminar
          </button>
        )}
      </div>
    </div>
  ));
  return (
    <main className={styles.main}>
      <Titulo titulo={titulo} />
      <div className={styles.container}>
        <div className={styles.InfoCont}>
          <Subtitulo subtitulo={subtitulo} />
          <div className={styles.HUDcont}>
            <div className={styles.ContPalabras}>
              <p className={styles.p1}>Que palabras es? : </p>
              <p className={styles.p2}>{palabraRevuelta}</p>
            </div>

            <div className={styles.ContPalabras}>
              vidas :
              {Array(lives)
                .fill()
                .map((_, index) => (
                  <>
                    <img
                      key={index}
                      src="https://cdn.pixabay.com/photo/2017/09/23/16/33/pixel-heart-2779422_1280.png"
                      alt="corazon"
                      className={styles.corazon}
                    />
                  </>
                ))}
            </div>
          </div>
        </div>
        <div className={styles.ContainerInputs}>{inputBoxes}</div>
        <button onClick={handleRestart} className={styles.btn}>
          Reiniciar
        </button>
        <p className={styles.message}>{message}</p>
      </div>
    </main>
  );
}
