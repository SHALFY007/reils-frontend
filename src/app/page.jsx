'use client';

import Image from 'next/image'
import styles from './page.module.css'
import './static.css'
import { useEffect, useRef, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..

export default function Home() {

  const hold = useRef();
  const [name, setName] = useState('Reils')
  const [plan, setPlan] = useState([
    {
      id: 1,
      title: 'Бесплатно',
      path: "./img/coin.png",
      price: 0,
      first: "Доступ к каналу",
      second: "Бесплатные сигналы",
      third: "Конкурсы"
    },
    {
      id: 2,
      title: 'Неделя',
      path: "./img/money.png",
      price: 300,
      first: "Доступ к VIP",
      second: "Много сигналов",
      third: "Марафоны"
    },
    {
      id: 3,
      title: 'Месяц',
      path: "./img/face.png",
      price: 500,
      first: "Доступ к VIP",
      second: "Много сигналов",
      third: "Марафоны"
    },
  ])

  const choose = (event) => {
    document.querySelector('.choosed').classList.remove('choosed')
    event.target.classList.add('choosed')
  }

  const tarif = (event) => {
    const el = event.currentTarget
    const count = el.getAttribute('cont')
    count == 1 ? hold.current.style.left = '6px' : hold.current.style.left = '154px'
    document.querySelector('.tarif_choosed').classList.remove('tarif_choosed')

    el.querySelector('h3').classList.add('tarif_choosed')
  }

  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <div className={styles.container}>
          <div className={styles.header_part}>
            <h3 className={styles.title}>{name}</h3>
            <nav className={styles.nav} onClick={choose}>
              <a className={`${styles.link} choosed`} href="#">Главная</a>
              <a className={styles.link} href="#">Информация</a>
              <a className={styles.link} href="#">Прогнозы</a>
              <a className={styles.link} href="#">Цены</a>
              <a className={styles.link} href="#">Отзывы</a>
              </nav>
          </div>
          <div className={styles.header_part}>
            <button className={styles.button_login}><span>Присоединиться</span></button>
          </div>
        </div>
      </header>
      <div className={styles.top_part}>
        <div className={styles.container}>
          <div className={styles.top_left} data-aos="fade-right">
            <img className={styles.coin} src="./img/Bitcoin.png" alt="Bitcoin" />
            <img className={styles.coin} src="./img/BNB.png" alt="BNB" />
            <img className={styles.coin} src="./img/Ethereum.png" alt="Ethereum" />
            <img className={styles.coin} src="./img/image_w.png" alt="img_w" />
            <div className={styles.left_bg}></div>
          </div>
          <div className={styles.top_right} data-aos="fade-left">
            <h1 className={styles.top_title}>Начни торговать криптовалютой прямо сейчас</h1>
            <p className={styles.top_description}>Reils- твой верный помощник для заработка на трейдинге</p>
            <button className={styles.button_start}><span>Начать</span></button>
          </div>
        </div>
      </div>
      <div className={styles.features}>
        <div className={styles.container}>
          <p className={styles.features_txt} data-aos="fade-up">Работаем <span>с</span></p>
          <div className={styles.features_wrap} data-aos="fade-up">
            <img className={styles.logo} src="./img/logo_1.png" alt="logo" />
            <img className={styles.logo} src="./img/logo_2.png" alt="logo" />
            <img className={styles.logo} src="./img/logo_3.png" alt="logo" />
            <img className={styles.logo} src="./img/logo_4.png" alt="logo" />
          </div>
        </div>
      </div>
      <div className={styles.garant}>
        <div className={styles.container}>
          <div className={styles.garant_top}>
            <h1 className={styles.garant_header} data-aos="fade-right">Точные <span>сигналы</span> от лучших специалистов</h1>
            <p className={styles.garant_description} data-aos="fade-left">Сигналам от команды Reils доверяют сотни людей ежедневно, начни зарабатывать вместе с нами! </p>
          </div>
          <div className={styles.garant_low}>
            <div className={styles.garant_card} data-aos="fade-right">
              <div className={styles.garant_card_top}>
                <div className={styles.circle}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
                    <g id="free 1" clip-path="url(#clip0_104_26)">
                    <rect id="Rectangle 52" x="13.1569" width="30" height="19.5" transform="rotate(45.4933 13.1569 0)" fill="white"/>
                    <g id="Group">
                    <g id="Group_2">
                    <g id="Group_3">
                    <path id="Vector" d="M34.6034 17.0827L19.1985 1.67791C18.1327 0.612026 16.6577 0 15.1492 0H3.27276C1.46859 0 0 1.46774 0 3.27276V15.1484C0 16.6769 0.596071 18.1159 1.67791 19.1985L17.0827 34.6034C17.984 35.5039 19.1825 36 20.4545 36C21.7265 36 22.925 35.5038 23.8263 34.6034L34.6033 23.8264C35.5046 22.9267 35.9999 21.729 35.9999 20.4546C35.9999 19.1802 35.5046 17.9824 34.6034 17.0827ZM8.85946 10.0168L7.12394 11.7526C6.96416 11.9124 6.75476 11.9923 6.54543 11.9923C6.33611 11.9923 6.12678 11.9124 5.96693 11.7526C5.6473 11.433 5.6473 10.9152 5.96693 10.5957L8.28003 8.28218C8.28003 8.28218 8.28041 8.28141 8.2808 8.28095C8.28118 8.28057 8.28157 8.28057 8.28157 8.28057L10.5947 5.96708C10.9015 5.66026 11.4448 5.66026 11.7516 5.96708L14.0656 8.28103C14.3852 8.60066 14.3852 9.11841 14.0656 9.43796C13.7459 9.75759 13.2282 9.75759 12.9086 9.43796L11.1732 7.70252L10.0162 8.85969L11.1732 10.0172C11.4928 10.3369 11.4928 10.8546 11.1732 11.1742C11.0134 11.3339 10.804 11.4139 10.5947 11.4139C10.3853 11.4139 10.176 11.3339 10.0162 11.1742L8.85946 10.0168ZM13.4872 18.9348C13.2779 18.9348 13.0685 18.8549 12.9087 18.6951C12.5891 18.3755 12.5891 17.857 12.9087 17.5382L14.0672 16.3804C14.3853 16.0616 14.3853 15.5423 14.0672 15.2226L13.4871 14.645L11.7517 16.3804C11.4321 16.7 10.9143 16.7 10.5947 16.3804C10.2751 16.0608 10.2751 15.543 10.5947 15.2235L12.8879 12.9319C12.8943 12.924 12.9007 12.9167 12.9087 12.9095C12.9151 12.9023 12.9231 12.8951 12.9311 12.888L15.2243 10.5957C15.5439 10.276 16.0616 10.276 16.3812 10.5957L17.5381 11.7526C18.4953 12.7098 18.4953 14.2663 17.5381 15.2235C17.1067 15.6549 16.5426 15.9066 15.9369 15.9386C15.9049 16.5211 15.6668 17.094 15.2242 17.5374L14.0656 18.6952C13.9059 18.8549 13.6965 18.9348 13.4872 18.9348ZM18.6951 22.166C19.0148 22.4856 19.0148 23.0034 18.6951 23.323C18.5354 23.4827 18.326 23.5627 18.1166 23.5627C17.9073 23.5627 17.698 23.4827 17.5381 23.323L15.2242 21.009C14.9045 20.6894 14.9045 20.1716 15.2242 19.8521L19.852 15.2234C20.0054 15.07 20.2131 14.9837 20.4305 14.9837C20.6479 14.9837 20.8556 15.07 21.009 15.2234L23.323 17.5381C23.6426 17.8578 23.6426 18.3755 23.323 18.6951C23.0033 19.0147 22.4856 19.0147 22.166 18.6951L20.4306 16.9589L19.2733 18.1163L20.4306 19.2736C20.7502 19.5932 20.7502 20.1109 20.4306 20.4305C20.2708 20.5903 20.0614 20.6702 19.8521 20.6702C19.6427 20.6702 19.4334 20.5903 19.2736 20.4305L18.1165 19.2734L16.9596 20.4305L18.6951 22.166ZM27.9508 23.323C27.6312 23.6426 27.1135 23.6426 26.7939 23.323L25.0585 21.5875L23.9015 22.7444L25.0585 23.9014C25.3781 24.221 25.3781 24.7388 25.0585 25.0583C24.8987 25.2181 24.6893 25.298 24.48 25.298C24.2706 25.298 24.0613 25.2181 23.9015 25.0583L22.7445 23.9014L21.5876 25.0583L23.323 26.7945C23.6427 27.1142 23.6427 27.6319 23.323 27.9515C23.1633 28.1112 22.9539 28.1912 22.7445 28.1912C22.5352 28.1912 22.3259 28.1112 22.166 27.9515L19.8521 25.6367C19.5324 25.3171 19.5324 24.7994 19.8521 24.4798L24.4799 19.852C24.7995 19.5324 25.3173 19.5324 25.6368 19.852L27.9508 22.1659C28.2705 22.4856 28.2705 23.0034 27.9508 23.323Z" fill="#9465F6"/>
                    <path id="Vector_2" d="M15.8011 14.3062H15.8027C16.0217 14.3062 16.2262 14.2207 16.3813 14.0665C16.7009 13.7477 16.7009 13.2283 16.3813 12.9096L15.8027 12.3311L14.6458 13.488L15.2243 14.0657C15.3793 14.2215 15.5838 14.3062 15.8011 14.3062Z" fill="#9465F6"/>
                    </g>
                    </g>
                    </g>
                    </g>
                    <defs>
                    <clipPath id="clip0_104_26">
                    <rect width="36" height="36" fill="white"/>
                    </clipPath>
                    </defs>
                  </svg>
                </div>
                <h3 className={styles.garant_title}>Бесплатные сигналы</h3>
              </div>
              <p className={styles.garant_text}>Перед покупкой VIP-канала вы можете удостоверится в точности наших прогнозов</p>
            </div>
            <div className={styles.garant_card} data-aos="fade-up">
              <div className={styles.garant_card_top}>
                <div className={styles.circle}>
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
                <rect x="10" y="12" width="18" height="11" fill="white"/>
                <path d="M33.1111 9.26637C33.068 8.31928 33.068 7.41525 33.068 6.51121C33.068 5.77937 32.5084 5.21973 31.7766 5.21973C26.3954 5.21973 22.3057 3.66996 18.9048 0.355157C18.3882 -0.118386 17.6133 -0.118386 17.0967 0.355157C13.6958 3.66996 9.60616 5.21973 4.22499 5.21973C3.49315 5.21973 2.93351 5.77937 2.93351 6.51121C2.93351 7.41525 2.93351 8.31928 2.89046 9.26637C2.71827 18.3067 2.45997 30.7049 17.5703 35.9139L18.0008 36L18.4313 35.9139C33.4985 30.7049 33.2833 18.3498 33.1111 9.26637ZM16.9676 21.7937C16.7093 22.009 16.4079 22.1381 16.0636 22.1381H16.0205C15.6761 22.1381 15.3317 21.9659 15.1165 21.7076L11.1129 17.2735L13.0501 15.5516L16.1927 19.0386L23.1667 12.409L24.9317 14.3031L16.9676 21.7937Z" fill="#9465F6"/>
                </svg>
                </div>
                <h3 className={styles.garant_title}>Безопасность</h3>
              </div>
              <p className={styles.garant_text}>Торгуя по нашей стратегии риск потерять средства- минимален</p>
            </div>
            <div className={styles.garant_card} data-aos="fade-left">
              <div className={styles.garant_card_top}>
                <div className={styles.circle}>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                <path d="M3.33331 5.33331H28.6666C30.5076 5.33331 31.9999 6.82569 31.9999 8.66663V23.3333C31.9999 25.1742 30.5076 26.6666 28.6666 26.6666H3.33331C1.49238 26.6667 0 25.1743 0 23.3333V8.66669C0 6.82569 1.49238 5.33331 3.33331 5.33331Z" fill="#9465F6"/>
                <path d="M32 9.33331H0V14.6666H32V9.33331Z" fill="#796184"/>
                <path d="M10 20H4.66669C4.2985 20 4 19.7015 4 19.3333C4 18.9651 4.2985 18.6666 4.66669 18.6666H10C10.3682 18.6666 10.6667 18.9651 10.6667 19.3333C10.6667 19.7015 10.3682 20 10 20Z" fill="white"/>
                <path d="M14 22.6667H4.66669C4.2985 22.6667 4 22.3682 4 22.0001C4 21.6319 4.2985 21.3334 4.66669 21.3334H14C14.3682 21.3334 14.6667 21.6319 14.6667 22.0001C14.6667 22.3682 14.3682 22.6667 14 22.6667Z" fill="white"/>
                </svg>
                </div>
                <h3 className={styles.garant_title}>Большой профит</h3>
              </div>
              <p className={styles.garant_text}>Следуя нашей стратегии вы сможете удвоить свой депозит в ближайшее время</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.list}>
        <div className={styles.container}>
          <h1 className={styles.price_header} data-aos="fade-up">Выберите <span>Тариф</span> чтобы присоединиться</h1>
          <p className={styles.price_desc} data-aos="fade-up">Мы предлагаем лучшие цены за свои услуги</p>
          <div className={styles.price_chooser} data-aos="fade-up">
            <div className={styles.price_choose} cont="1" onClick={tarif}>
              <h3 className={`${styles.price_title} tarif_choosed`}>Неделя</h3>
            </div>
            <div className={styles.price_choose} cont="2" onClick={tarif}>
              <h3 className={styles.price_title}>Месяц</h3>
            </div>
            <div ref={hold} className={styles.price_hold}></div>
          </div>
          <div className={styles.price_cards}>
            {
              plan.map(el => {
                return <div className={styles.price_card} key={el.id} data-aos="fade-up">
                <h4 className={styles.card_title}>{el.title} <img src={el.path} alt="coin" /></h4>
                <h1 className={styles.card_price}>{el.price}<span>&#8381;</span></h1>
                <div className={styles.card_pluses}>
                  <div className={styles.card_plus}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                      <path d="M9 3C7.4087 3 5.88258 3.63214 4.75736 4.75736C3.63214 5.88258 3 7.4087 3 9C3 10.5913 3.63214 12.1174 4.75736 13.2426C5.88258 14.3679 7.4087 15 9 15C10.5913 15 12.1174 14.3679 13.2426 13.2426C14.3679 12.1174 15 10.5913 15 9C15 7.4087 14.3679 5.88258 13.2426 4.75736C12.1174 3.63214 10.5913 3 9 3ZM1.5 9C1.5 4.85775 4.85775 1.5 9 1.5C13.1423 1.5 16.5 4.85775 16.5 9C16.5 13.1423 13.1423 16.5 9 16.5C4.85775 16.5 1.5 13.1423 1.5 9Z" fill="#7A7790"/>
                      <path d="M11.7803 6.96971C11.9209 7.11036 11.9999 7.30109 11.9999 7.49996C11.9999 7.69883 11.9209 7.88957 11.7803 8.03021L8.78034 11.0302C8.6397 11.1708 8.44896 11.2498 8.25009 11.2498C8.05122 11.2498 7.86049 11.1708 7.71984 11.0302L6.21984 9.53021C6.14821 9.46103 6.09107 9.37827 6.05177 9.28677C6.01246 9.19526 5.99177 9.09685 5.9909 8.99726C5.99004 8.89768 6.00901 8.79892 6.04673 8.70675C6.08444 8.61457 6.14013 8.53084 6.21055 8.46042C6.28096 8.39 6.3647 8.33431 6.45688 8.2966C6.54905 8.25889 6.64781 8.23991 6.74739 8.24077C6.84698 8.24164 6.94539 8.26233 7.03689 8.30164C7.1284 8.34094 7.21116 8.39808 7.28034 8.46971L8.25009 9.43946L10.7198 6.96971C10.8605 6.82911 11.0512 6.75012 11.2501 6.75012C11.449 6.75012 11.6397 6.82911 11.7803 6.96971Z" fill="#7A7790"/>
                    </svg>
                    <p>{el.first}</p>
                  </div>
                  <div className={styles.card_plus}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                      <path d="M9 3C7.4087 3 5.88258 3.63214 4.75736 4.75736C3.63214 5.88258 3 7.4087 3 9C3 10.5913 3.63214 12.1174 4.75736 13.2426C5.88258 14.3679 7.4087 15 9 15C10.5913 15 12.1174 14.3679 13.2426 13.2426C14.3679 12.1174 15 10.5913 15 9C15 7.4087 14.3679 5.88258 13.2426 4.75736C12.1174 3.63214 10.5913 3 9 3ZM1.5 9C1.5 4.85775 4.85775 1.5 9 1.5C13.1423 1.5 16.5 4.85775 16.5 9C16.5 13.1423 13.1423 16.5 9 16.5C4.85775 16.5 1.5 13.1423 1.5 9Z" fill="#7A7790"/>
                      <path d="M11.7803 6.96971C11.9209 7.11036 11.9999 7.30109 11.9999 7.49996C11.9999 7.69883 11.9209 7.88957 11.7803 8.03021L8.78034 11.0302C8.6397 11.1708 8.44896 11.2498 8.25009 11.2498C8.05122 11.2498 7.86049 11.1708 7.71984 11.0302L6.21984 9.53021C6.14821 9.46103 6.09107 9.37827 6.05177 9.28677C6.01246 9.19526 5.99177 9.09685 5.9909 8.99726C5.99004 8.89768 6.00901 8.79892 6.04673 8.70675C6.08444 8.61457 6.14013 8.53084 6.21055 8.46042C6.28096 8.39 6.3647 8.33431 6.45688 8.2966C6.54905 8.25889 6.64781 8.23991 6.74739 8.24077C6.84698 8.24164 6.94539 8.26233 7.03689 8.30164C7.1284 8.34094 7.21116 8.39808 7.28034 8.46971L8.25009 9.43946L10.7198 6.96971C10.8605 6.82911 11.0512 6.75012 11.2501 6.75012C11.449 6.75012 11.6397 6.82911 11.7803 6.96971Z" fill="#7A7790"/>
                    </svg>
                    <p>{el.second}</p>
                  </div>
                  <div className={styles.card_plus}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                      <path d="M9 3C7.4087 3 5.88258 3.63214 4.75736 4.75736C3.63214 5.88258 3 7.4087 3 9C3 10.5913 3.63214 12.1174 4.75736 13.2426C5.88258 14.3679 7.4087 15 9 15C10.5913 15 12.1174 14.3679 13.2426 13.2426C14.3679 12.1174 15 10.5913 15 9C15 7.4087 14.3679 5.88258 13.2426 4.75736C12.1174 3.63214 10.5913 3 9 3ZM1.5 9C1.5 4.85775 4.85775 1.5 9 1.5C13.1423 1.5 16.5 4.85775 16.5 9C16.5 13.1423 13.1423 16.5 9 16.5C4.85775 16.5 1.5 13.1423 1.5 9Z" fill="#7A7790"/>
                      <path d="M11.7803 6.96971C11.9209 7.11036 11.9999 7.30109 11.9999 7.49996C11.9999 7.69883 11.9209 7.88957 11.7803 8.03021L8.78034 11.0302C8.6397 11.1708 8.44896 11.2498 8.25009 11.2498C8.05122 11.2498 7.86049 11.1708 7.71984 11.0302L6.21984 9.53021C6.14821 9.46103 6.09107 9.37827 6.05177 9.28677C6.01246 9.19526 5.99177 9.09685 5.9909 8.99726C5.99004 8.89768 6.00901 8.79892 6.04673 8.70675C6.08444 8.61457 6.14013 8.53084 6.21055 8.46042C6.28096 8.39 6.3647 8.33431 6.45688 8.2966C6.54905 8.25889 6.64781 8.23991 6.74739 8.24077C6.84698 8.24164 6.94539 8.26233 7.03689 8.30164C7.1284 8.34094 7.21116 8.39808 7.28034 8.46971L8.25009 9.43946L10.7198 6.96971C10.8605 6.82911 11.0512 6.75012 11.2501 6.75012C11.449 6.75012 11.6397 6.82911 11.7803 6.96971Z" fill="#7A7790"/>
                    </svg>
                    <p>{el.third}</p>
                  </div>
                </div>
                <button className={styles.card_buy}>
                  <span>Перейти</span>
                </button>
              </div>
              })
            }
          </div>
        </div>
      </div>
      <hr />
      <footer className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.footer_left}>
            <h3 className={styles.footer_header}>Reils</h3>
            <p className={styles.footer_desc}>Reils- лучшие сигналы для трейдинга и арбитража</p>
            <button className={styles.footer_link}><span className={styles.footer_btn_txt}>Перейти</span></button>
          </div>
          <div className={styles.footer_right}>
            <div className={styles.footer_column}>
              <a href='#'>Меню</a>
              <a href='#'>Преимущества</a>
              <a href='#'>Цены</a>
              <a href='#'>Отзывы</a>
            </div>
            <div className={styles.footer_column}>
              <a href='#'>Преимущества</a>
              <a href='#'>Ссылка</a>
              <a href='#'>Ссылка</a>
              <a href='#'>Ссылка</a>
            </div>
            <div className={styles.footer_column}>
              <a href='#'>Цены</a>
              <a href='#'>Ссылка</a>
              <a href='#'>Ссылка</a>
              <a href='#'>Ссылка</a>
            </div>
            <div className={styles.footer_column}>
              <a href='#'>Отзывы</a>
              <a href='#'>Ссылка</a>
              <a href='#'>Ссылка</a>
              <a href='#'>Ссылка</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
