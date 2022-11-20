import React from "react";
import { FiInstagram } from "react-icons/fi";
import {
  IoPaperPlaneOutline,
  IoCompassOutline,
  IoPersonOutline,
} from "react-icons/io5";
import { BsHeart } from "react-icons/bs";

export default function NavBar() {
  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          {/* <ion-icon name="logo-instagram"></ion-icon> */}
          <FiInstagram className="pointer" />
          <div className="separador"></div>
          <img src="assets/img/logo.png" alt="logo-instagram" />
        </div>

        <div className="logo-mobile">
          {/* <ion-icon name="logo-instagram"></ion-icon> */}
          <FiInstagram className="pointer" />
        </div>

        <div className="instagram-mobile">
          <img src="assets/img/logo.png" alt="logo-mobile" />
        </div>

        <div className="pesquisa">
          <input type="text" placeholder="Pesquisar" />
        </div>

        <div className="icones">
          {/* <ion-icon name="paper-plane-outline"></ion-icon> */}
          {/* <ion-icon name="compass-outline"></ion-icon> */}
          {/* <ion-icon name="heart-outline"></ion-icon> */}
          {/* <ion-icon name="person-outline"></ion-icon> */}
          <IoPaperPlaneOutline className="pointer react-icon" />
          <IoCompassOutline className="pointer react-icon" />
          <BsHeart className="pointer react-icon" />
          <IoPersonOutline className="pointer react-icon" />
        </div>

        <div className="icones-mobile">
          {/* <ion-icon name="paper-plane-outline"></ion-icon> */}
          <IoPaperPlaneOutline className="pointer" />
        </div>
      </div>
    </div>
  );
}
