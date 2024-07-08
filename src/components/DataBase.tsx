import { useState } from "react";
import { storage } from "../services/firebaseConfig";
import styles from "./Database.module.css";
import React from "react";
import { getFirestore, addDoc, collection } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

function Database() {
  const [inputValue1, setInputValue1] = useState("");
  const [img, setImg] = useState<File | null>(null);
  const [inputValue3, setInputValue3] = useState("");
  const [categoryInput, setCategory] = useState("");

  const db = getFirestore();

  const handleFile = async () => {
    if (!img) return null;

    try {
      const imgRef = ref(storage, `files/${img.name}`);
      const metadata = {
        contentType: img.type,
      };
      const uploadTaskSnapshot = await uploadBytes(imgRef, img, metadata);
      const downloadURL = await getDownloadURL(uploadTaskSnapshot.ref);
      return downloadURL;
    } catch (error) {
      console.error("Error uploading file:", error);
      return null;
    }
  };

  const saveDataToFirestore = async () => {
    const imageUrl = await handleFile();
    if (!imageUrl) {
      alert("Erro ao fazer upload da imagem");
      return;
    }

    try {
      const docRef = await addDoc(collection(db, "myCollection"), {
        name: inputValue1,
        image: imageUrl,
        description: inputValue3,
        category: categoryInput,
      });

      alert("Joia Adicionada Com Sucesso!");
      console.log(docRef.id);
    } catch (error) {
      console.error(error);
      alert("Erro ao adicionar documento");
    }
  };

  const fileChangedHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      setImg(file);
      console.log(file);
    }
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
        <input type="file" onChange={fileChangedHandler} />
      </div>
      <div className={styles.input_container}>
        <label>Descrição:</label>
        <input
          type="text"
          value={inputValue3}
          onChange={(e) => setInputValue3(e.target.value)}
        />
        <label htmlFor="category">Categoria:</label>
        <select
          className={styles.select}

          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="Alianças">Alianças</option>
          <option value="Brincos">Brincos</option>
          <option value="Aneis">Aneis</option>
          <option value="Colares">Colares</option>
          <option value="Pingentes">Pingentes</option>
          <option value="Correntes">Correntes</option>
        </select>
      </div>
      <button onClick={saveDataToFirestore} className={styles.button}>
        Salvar
      </button>
    </div>
  );
}

export default Database;
