
import { useState } from 'react';
import '../services/firebaseConfig';
import styles from "./Database.module.css"

import { getFirestore, addDoc, collection, } from "firebase/firestore";



function Database() {
  const [inputValue1, setInputValue1] = useState('');
  const [inputValue2, setInputValue2] = useState('');
  const [inputValue3, setInputValue3] = useState('');
  const [category, setCategory] = useState('');

  const db = getFirestore();

  const saveDataToFirestore = async () => {






    const docRef = await addDoc(collection(db, "myCollection"), {
      name: inputValue1,
      image: inputValue2,
      description: inputValue3,
      category: category
    });
    alert("Joia Adicionada Com Sucesso!");
    docRef

  };





  return (
    <div className={styles.app}>
      <h1>Adicionar Joia</h1>
      <div className={styles.input_container}>
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
        <label htmlFor="category">Categoria:</label>

        <select className={styles.select}  onChange={(e)=>setCategory(e.target.value)}> 
          <option value="Alianças">Alianças</option>
          <option value="Brincos">Brincos</option>
          <option value="Aneis">Aneis</option>
          <option value="Colares">Colares</option>
          <option value="Pingentes">Pingentes</option>
          <option value="Correntes">Correntes</option>
        </select>

      </div>
      <button onClick={saveDataToFirestore} className={styles.button}>Salvar</button>
    </div>
  );
}

export default Database;