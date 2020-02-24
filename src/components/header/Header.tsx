import React, { useState } from 'react';
import styles from './Header.module.scss'

const Header = () => {

  const pasarelaListInitial = [
    { img: 'https://img2.bgxcdn.com/thumb/large/oaupload/banggood/images/ED/79/558f6ce8-48da-405a-affc-beafbf97f7df.jpg', txt: 'TRUCKER DRESS1' },
    { img: 'data:image/jpeg;base64,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', txt: 'TRUCKER DRESS2' },
    { img: 'https://img2.bgxcdn.com/thumb/large/oaupload/banggood/images/ED/79/558f6ce8-48da-405a-affc-beafbf97f7df.jpg', txt: 'TRUCKER DRESS3' },
    { img: 'https://cdn.shopify.com/s/files/1/2143/3217/products/500_dfd0333e-0632-42d0-a891-f065d5ef1d5d.png?v=1568080856', txt: 'TRUCKER DRESS4' },
    { img: 'https://eu.patagonia.com/dis/dw/image/v2/ABBM_PRD/on/demandware.static/-/Sites-patagonia-master/default/dw4630ab54/images/hi-res/45215_FEA.jpg?sw=750&sh=750&sm=fit&sfrm=png', txt: 'TRUCKER DRESS5' },
    { img: 'https://img2.bgxcdn.com/thumb/large/oaupload/banggood/images/ED/79/558f6ce8-48da-405a-affc-beafbf97f7df.jpg', txt: 'TRUCKER DRESS6' },
    { img: 'https://cdn.shopify.com/s/files/1/2143/3217/products/500_dfd0333e-0632-42d0-a891-f065d5ef1d5d.png?v=1568080856', txt: 'TRUCKER DRESS7' },
    { img: 'https://img2.bgxcdn.com/thumb/large/oaupload/banggood/images/ED/79/558f6ce8-48da-405a-affc-beafbf97f7df.jpg', txt: 'TRUCKER DRESS8' },
    { img: 'https://eu.patagonia.com/dis/dw/image/v2/ABBM_PRD/on/demandware.static/-/Sites-patagonia-master/default/dw4630ab54/images/hi-res/45215_FEA.jpg?sw=750&sh=750&sm=fit&sfrm=png', txt: 'TRUCKER DRESS9' },
    { img: 'https://img2.bgxcdn.com/thumb/large/oaupload/banggood/images/ED/79/558f6ce8-48da-405a-affc-beafbf97f7df.jpg', txt: 'TRUCKER DRESS10' },
    { img: 'https://cdn.shopify.com/s/files/1/2143/3217/products/500_dfd0333e-0632-42d0-a891-f065d5ef1d5d.png?v=1568080856', txt: 'TRUCKER DRESS11' },
    { img: 'https://img2.bgxcdn.com/thumb/large/oaupload/banggood/images/ED/79/558f6ce8-48da-405a-affc-beafbf97f7df.jpg', txt: 'TRUCKER DRESS12' },
    { img: 'data:image/jpeg;base64,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', txt: 'TRUCKER DRESS14' },
    { img: 'https://img2.bgxcdn.com/thumb/large/oaupload/banggood/images/ED/79/558f6ce8-48da-405a-affc-beafbf97f7df.jpg', txt: 'TRUCKER DRESS15' },
    { img: 'https://cdn.shopify.com/s/files/1/2143/3217/products/500_dfd0333e-0632-42d0-a891-f065d5ef1d5d.png?v=1568080856', txt: 'TRUCKER DRESS16' },
    { img: 'https://eu.patagonia.com/dis/dw/image/v2/ABBM_PRD/on/demandware.static/-/Sites-patagonia-master/default/dw4630ab54/images/hi-res/45215_FEA.jpg?sw=750&sh=750&sm=fit&sfrm=png', txt: 'TRUCKER DRESS17' },
    { img: 'https://img2.bgxcdn.com/thumb/large/oaupload/banggood/images/ED/79/558f6ce8-48da-405a-affc-beafbf97f7df.jpg', txt: 'TRUCKER DRESS18' },
    { img: 'https://img2.bgxcdn.com/thumb/large/oaupload/banggood/images/ED/79/558f6ce8-48da-405a-affc-beafbf97f7df.jpg', txt: 'TRUCKER DRESS19' },
    { img: 'https://img2.bgxcdn.com/thumb/large/oaupload/banggood/images/ED/79/558f6ce8-48da-405a-affc-beafbf97f7df.jpg', txt: 'TRUCKER DRESS20' },
    { img: 'data:image/jpeg;base64,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', txt: 'TRUCKER DRESS21' },
    { img: 'https://img2.bgxcdn.com/thumb/large/oaupload/banggood/images/ED/79/558f6ce8-48da-405a-affc-beafbf97f7df.jpg', txt: 'TRUCKER DRESS22' },
    { img: 'https://img2.bgxcdn.com/thumb/large/oaupload/banggood/images/ED/79/558f6ce8-48da-405a-affc-beafbf97f7df.jpg', txt: 'TRUCKER DRESS23' },
    { img: 'https://img2.bgxcdn.com/thumb/large/oaupload/banggood/images/ED/79/558f6ce8-48da-405a-affc-beafbf97f7df.jpg', txt: 'TRUCKER DRESS24' },
  ]

  const [showLateralMenu, setshowLateralMenu] = useState(false)
  const [showPasarela, setShowPasarela] = useState(false)
  const [pasarelaList, setPasarelaList] = useState(pasarelaListInitial)
  const [itemHover, setItemHover] = useState(0)

  return (
    <header className={styles.header} onPointerLeave={() => {
      setShowPasarela(false)
    }}>
      <div className={styles.pasarela_products} style={{ display: showPasarela ? 'initial' : 'none' }}>
        <div className={styles.pasarela_content}>
          <ul className={styles.new_arrivals}>
            <a href="">NEW ARRIVALS</a>
            <li>TEES</li>
            <li>SHIRTS</li>
            <li>HOODIES & SWEATERS</li>
            <li>JACKETS & VESTS</li>
            <li>SHORTS & PANTS</li>
            <li>DRESSES</li>
            <li>SWIMYEAR</li>
          </ul>

          <ul className={styles.images_list}>
            {pasarelaList.slice((itemHover * 5) - 5, (itemHover * 5)).map(item => (
              <li>
                <img src={item.img} alt="" />
                <span>{item.txt}</span>
              </li>
            ))}
          </ul>

        </div>
      </div>

      <nav className={styles.nav_list}>
        <li className={styles.item_li} onPointerOver={() => {
          setShowPasarela(true)
          setItemHover(1)
        }}>
          <a href="./">
            <span>WOMEN</span>
          </a>
        </li>
        <li className={styles.item_li}
          onPointerOver={() => {
            setShowPasarela(true)
            setItemHover(2)
          }}>
          <a href="./">
            <span>MEN</span>
          </a>
        </li>
        <li className={styles.item_li}
          onPointerOver={() => {
            setShowPasarela(true)
            setItemHover(3)
          }}>
          <a href="./">
            <span>ABOUT</span>
          </a>
        </li>
        <li className={styles.item_li}
          onPointerOver={() => {
            setShowPasarela(true)
            setItemHover(4)
          }} style={{ zIndex: 2 }}>
          <a href="./" onClick={() => setshowLateralMenu(!showLateralMenu)}>
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
