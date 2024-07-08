import styles from "./Header.module.css";
import image from "../assets/image1.png";

import { useEffect } from "react";

import React from "react";

import Modal from "react-modal";

import { List, X, UserCircle } from "@phosphor-icons/react";
import { useState } from "react";
import { Link } from "react-router-dom";

import { getAuth, signOut } from "firebase/auth";

export default function Header() {
  const [activeLink, setActiveLink] = useState("Inicio");
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [imageUrl, setImageUrl] = useState("");
  const [nameProfile, setNameProfile] = useState("");

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const handleCloseModalAndNavigate = (callback: () => void) => {
    callback();
    closeModal();
    setActiveLink("");
  };

  useEffect(() => {
    const storedUserStr = localStorage.getItem("user");

    if (storedUserStr) {
      const storedUser = JSON.parse(storedUserStr);

      if (storedUser) {
        const user = storedUser.user || storedUser;

        if (user.photoURL || user.displayName) {
          setImageUrl(user.photoURL || "");
          setNameProfile(user.displayName || "");
        } else {
          setImageUrl("");
          setNameProfile("");
        }
      }
    }
  }, []);

  const handleExitUser = () => {
    const auth = getAuth();

    signOut(auth)
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });

    localStorage.removeItem("user");

    localStorage.removeItem("isAdmin");
    window.location.reload();
  };

  return (
    <div className={styles.header}>
      <div className={styles.help}>
        <button className={styles.list} onClick={openModal}>
          <List size={44} />
        </button>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          className={styles.modal}
          overlayClassName={styles.overlay}
        >
          <div className={styles.wrapperModal}>
            {imageUrl || nameProfile ? (
              <div className={styles.profileUserMobile}>
                {" "}
                <img src={imageUrl} alt="" /> <p> Ola, {nameProfile}</p>{" "}
              </div>
            ) : (
              <Link to={"/signin"}>
                <UserCircle
                  onClick={closeModal}
                  size={35}
                  style={{ marginLeft: ".1rem", color: "#E6D35B" }}
                />
              </Link>
            )}

            {nameProfile ? (
              <div>
                {" "}
                <p
                  onClick={handleExitUser}
                  className={styles.exitProfileUserMobile}
                >
                  sair
                </p>
              </div>
            ) : null}
            <div className={styles.line}></div>

            <Link
              to={"/"}
              onClick={() => handleCloseModalAndNavigate(closeModal)}
              className={styles.serviceMobile}
            >
              Inicio
            </Link>
            <Link
              to={"/faleconosco"}
              onClick={() => handleCloseModalAndNavigate(closeModal)}
              className={styles.talkToUsMobile}
            >
              Fale conosco{" "}
            </Link>
            <Link
              to={"/sobrenos"}
              onClick={() => handleCloseModalAndNavigate(closeModal)}
              className={styles.serviceMobile}
            >
              Sobre Nós
            </Link>

            <button className={styles.close} onClick={closeModal}>
              <X size={30} />
            </button>
          </div>
        </Modal>

        <Link
          to={"/"}
          onClick={() => setActiveLink("Inicio")}
          className={`${styles.start} ${
            activeLink === "Inicio" ? styles.active : styles.desactive
          }`}
        >
          Inicio
        </Link>
        <Link
          to="/faleconosco"
          onClick={() => setActiveLink("FaleConosco")}
          className={`${styles.talkToUs} ${
            activeLink === "FaleConosco" ? styles.active : styles.desactive
          }`}
        >
          Fale conosco
        </Link>
        <Link
          to="/sobrenos"
          onClick={() => setActiveLink("Servicos")}
          className={`${styles.service} ${
            activeLink === "Servicos" ? styles.active : styles.desactive
          }`}
        >
          Sobre Nos
        </Link>
      </div>

      <img className={styles.image} src={image} alt="" />

      {imageUrl || nameProfile ? (
        <div className={styles.profileUser}>
          {" "}
          <img src={imageUrl} alt="" /> <p> Ola, {nameProfile}</p>{" "}
        </div>
      ) : (
        <Link to={"/signin"}>
          <UserCircle
            size={35}
            className={styles.userlogo}
            style={{ marginRight: "1rem", color: "#E6D35B" }}
          />
        </Link>
      )}
      {nameProfile ? (
        <div>
      
          <p onClick={handleExitUser} className={styles.exitProfileUser}>
            sair
          </p>
        </div>
      ) : null}
    </div>
  );
}
