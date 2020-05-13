import React, { useState } from 'react';
import styles from './Header.module.scss'
import { Link } from 'react-router-dom';
import FormRegisterModal from '../form-register-modal/Form-register-modal';
import { FiUser, FiShoppingCart } from "react-icons/fi";
import LoginModal from '../login-modal/Login-modal';

import image1 from '../../assets/images_pby/ProductoGeneral/1.jpeg'
import image2 from '../../assets/images_pby/ProductoGeneral/2.jpeg'
import image3 from '../../assets/images_pby/ProductoGeneral/3.jpeg'
import image4 from '../../assets/images_pby/ProductoGeneral/4.jpeg'
import image5 from '../../assets/images_pby/ProductoGeneral/5.jpeg'
import image6 from '../../assets/images_pby/ProductoGeneral/6.jpeg'
import { RegisterModal } from '..';
import { ItemShoppingCart } from '../../modules/shopping-cart/Item-shopping-cart/ItemShoppingCart';
import ImageCustomModal from '../image-custom-modal/ImageCustomModal';

const Header = ({ history }: any) => {

  const pasarelaListInitial = [
    { img: image1, txt: 'Trucker Dress1' },
    { img: image2, txt: 'Trucker Dress2' },
    { img: image3, txt: 'Trucker Dress3' },
    { img: image2, txt: 'Trucker Dress4' },
    { img: image4, txt: 'Trucker Dress5' },
    { img: image5, txt: 'Trucker Dress6' },
    { img: image6, txt: 'Trucker Dress7' },
    { img: image4, txt: 'Trucker Dress8' },
    { img: image2, txt: 'Trucker Dress9' },
    { img: image6, txt: 'Trucker Dress10' },
    { img: image2, txt: 'Trucker Dress11' },
    { img: image4, txt: 'Trucker Dress12' },
    { img: image6, txt: 'Trucker Dress14' },
    { img: image5, txt: 'Trucker Dress15' },
    { img: image1, txt: 'Trucker Dress16' },
    { img: image2, txt: 'Trucker Dress17' },
  ]

  const [showLateralMenu, setshowLateralMenu] = useState(false)
  const [showPasarela, setShowPasarela] = useState(false)
  const [pasarelaList, setPasarelaList] = useState(pasarelaListInitial)
  const [itemHover, setItemHover] = useState(0)
  const [showModal, setShowModal] = useState<boolean>(true)
  const [showLoginModal, setShowLoginModal] = useState<boolean>(false)
  const [showRegisterModal, setShowRegisterModal] = useState<boolean>(false)
  const [showShoopinCartPreview, setShowShoopinCartPreview] = useState<boolean>(false)

  const openLoginModal = () => {

  }

  return (
    <header className={styles.header} onPointerLeave={() => setShowPasarela(false)}>

      <LoginModal show={showLoginModal}
        onClosed={() => {
          setShowLoginModal(false)
        }}
        openRegisterModal={() => {
          setShowRegisterModal(true)
          setShowLoginModal(false)
        }} />
      <RegisterModal show={showRegisterModal} onClosed={() => setShowRegisterModal(false)} />
      <FormRegisterModal show={showModal} onClosed={() => setShowModal(false)} />

      <div className={styles.header_container}>
        <div className={styles.image_content}>
          <Link to="/">
            <img src={require('../../assets/logo2.png')} alt="" />
          </Link>
        </div>

        <div className={styles.navigation}>
          <li className={styles.item_li}
            onPointerOver={() => {
              if (showShoopinCartPreview) return
              setShowPasarela(true)
              setItemHover(1)
            }}>
            <Link to="/productos">HOMBRE</Link>
          </li>
          <li className={styles.item_li}
            onPointerOver={() => {
              if (showShoopinCartPreview) return
              setShowPasarela(true)
              setItemHover(2)
            }}>
            <Link to="/productos">MUJER</Link>
          </li>
          <li className={styles.item_li}
            onPointerOver={() => {
              if (showShoopinCartPreview) return
              setShowPasarela(true)
              setItemHover(3)
            }}>
            <Link to="/productos">NIÑO</Link>
          </li>
          <li className={styles.item_li}
            onPointerOver={() => {
              if (showShoopinCartPreview) return
              setShowPasarela(true)
              setItemHover(3)
            }}>
            <Link to="/productos">COLECCIONES</Link>
          </li>
          <li className={styles.item_li}
            onPointerOver={() => {
              // setShowPasarela(true)
            }}>
            <Link to="/noticias/2">NOSOTROS</Link>
          </li>
          <li className={styles.item_li}
            onClick={() => {
            }}
            onPointerOver={() => {
              // setShowPasarela(true)
            }}>
            <Link to="/noticias">NOTICIAS</Link>
          </li>
          <li className={styles.item_li}
            onPointerOver={() => {
              // setShowPasarela(true)
            }}>
            <Link to="/contacto">CONTACTO</Link>
          </li>
        </div>

        <div className={styles.icon_buttons}>
          {/* <FiShoppingCart onClick={() => {
            // setShowModal(true)
            history.push({ pathname: '/carrito-de-compras' })
          }} /> */}

          <Link
            onPointerOver={() => setShowShoopinCartPreview(true)}
            onPointerLeave={() => setShowShoopinCartPreview(false)}
            to="/carrito-de-compras">
            <FiShoppingCart />
          </Link>
          <FiUser onClick={() => setShowLoginModal(true)} />
        </div>
      </div>

      <div className={styles.pasarela_products} style={{ height: showPasarela ? '270px' : 0, opacity: showPasarela ? '1' : '0' }}>
        <div className={styles.pasarela_content}>
          <ul className={styles.new_arrivals}>
            <a href="">NEW ARRIVALS</a>
            <li>Tees</li>
            <li>Shirts</li>
            <li>Hoodies & Sweaters</li>
            <li>Jackets & Vests</li>
            <li>Shorts & Pants</li>
            <li>Dresses</li>
            <li>Swimyear</li>
          </ul>

          <ul className={styles.images_list}>
            {pasarelaList.slice((itemHover * 5) - 5, (itemHover * 5)).map((item, i) => (
              <li key={i}>
                <img src={item.img} alt="" />
                <span>{item.txt}</span>
              </li>
            ))}
          </ul>

        </div>
      </div>


      {showShoopinCartPreview ? (

        <div className={styles.shopping_content} onClick={() => setShowShoopinCartPreview(false)}>
          <div onPointerLeave={() => setShowShoopinCartPreview(false)}>
            <ItemShoppingCart preview />
            <ItemShoppingCart preview />
            <ItemShoppingCart preview />
          </div>
        </div>
      ) : null}


      {/* <div className={styles.lateral_menu} hidden={!showLateralMenu}> */}
      {/* <div className={styles.lateral_menu} style={{ right: showLateralMenu ? '0' : '-200px' }} >
        Menu lateral
      </div> */}

    </header>
  )
}

export default Header;
