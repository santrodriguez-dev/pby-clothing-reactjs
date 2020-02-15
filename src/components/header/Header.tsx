import React, { useState } from 'react';
import styles from './Header.module.scss'

const Header = () => {

  const [showLateralMenu, setshowLateralMenu] = useState(false)

  return (
    <header className={styles.header}>

      <nav className={styles.nav_list}>
        <li className={styles.item_li}>
          <a href="">
            <span>MENS</span>
          </a>
        </li>
        <li className={styles.item_li}>
          <a href="">
            <span>WOMENS</span>
          </a>
        </li>
        <li className={styles.item_li}>
          <a href="">
            <span>COLLECTIONS</span>
          </a>
        </li>
        <li className={styles.item_li}>
          <a href="">
            <span>PSY</span>
          </a>
        </li>
        <li className={styles.item_li} style={{ zIndex: 2 }}>
          <a onClick={() => setshowLateralMenu(!showLateralMenu)}>
            <span>CONTACT</span>
          </a>
        </li>
      </nav>

      {/* <div className={styles.lateral_menu} hidden={!showLateralMenu}> */}
      <div className={styles.lateral_menu} style={{ right: showLateralMenu ? '0' : '-200px' }} >
        Menu lateral
      </div>

    </header>
  )
}

export default Header;
