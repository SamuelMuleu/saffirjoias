
import  { useState } from 'react';
import '../services/firebaseConfig'; 
import styles from "./Database.module.css"

import { getFirestore, addDoc, collection } from "firebase/firestore"; 

function Database() {
  const [inputValue1, setInputValue1] = useState('');
  const [inputValue2, setInputValue2] = useState('');
  const [inputValue3, setInputValue3] = useState('');

  const db = getFirestore();

  const saveDataToFirestore = async () => {
      const docRef = await addDoc(collection(db, "myCollection"), {
        name: inputValue1,
        image: inputValue2,
        description: inputValue3
      });
      alert("Document written to Database");
  };

  return (
    <div className={styles.app}>
      <h1>Adicionar Joias</h1>
      <div className="input-container">
        <label>Nome:</label>
        <input
          type="text"
          value={inputValue1}
          onChange={(e) => setInputValue1(e.target.value)}
        />
      </div>
      <div className={styles.input_container}>
        <label>Imagem:</label>
        <input
          type="file"
          value={inputValue2}
          onChange={(e) => setInputValue2(e.target.value)}
        />
      </div>
      <div className={styles.input_container}>
        <label>Descrição:</label>
        <input
          type="text"
          value={inputValue3}
          onChange={(e) => setInputValue3(e.target.value)}
        />
      </div>
      <button onClick={saveDataToFirestore}>Salvar no Firestore</button>
    </div>
  );
}

export default Database;