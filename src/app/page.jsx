'use client';

import Image from 'next/image'
import styles from './page.module.css'
import './static.css'

export default function Home() {

  const choose = (event) => {
    document.querySelector('.choosed').classList.remove('choosed')
    event.target.classList.add('choosed')
  }

  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <div className={styles.container}>
          <div className={styles.header_part}>
            <h3 className={styles.title}>Reils</h3>
            <nav className={styles.nav} onClick={choose}>
              <a className={`${styles.link} choosed`} href="#">Главная</a>
              <a className={styles.link} href="#">Информация</a>
              <a className={styles.link} href="#">Прогнозы</a>
              <a className={styles.link} href="#">Цены</a>
              <a className={styles.link} href="#">Отзывы</a>
              </nav>
          </div>
          <div className={styles.header_part}>
            <button className={styles.button_login}><span>Войти</span></button>
          </div>
        </div>
      </header>
      <div className={styles.top_part}>
        <div className={styles.container}>
          <div className={styles.top_left}>
            <img className={styles.coin} src="./img/Bitcoin.png" alt="Bitcoin" />
            <img className={styles.coin} src="./img/BNB.png" alt="BNB" />
            <img className={styles.coin} src="./img/Ethereum.png" alt="Ethereum" />
            <img className={styles.coin} src="./img/image_w.png" alt="img_w" />
            <div className={styles.left_bg}></div>
          </div>
          <div className={styles.top_right}>
            <h1 className={styles.top_title}>Начни торговать криптовалютой прямо сейчас</h1>
            <p className={styles.top_description}>Reils- твой верный помощник для заработка на трейдинге</p>
            <button className={styles.button_start}><span>Начать</span></button>
          </div>
        </div>
      </div>
    </main>
  )
}
