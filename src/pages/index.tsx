import styles from '../styles/pages/Home.module.scss';
import Link from 'next/link';

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <img src="logo.svg" alt="" />
        <h1>Alugue um <br /> carro de maneira <br /> simples e fácil</h1>
        <p>Vários modelos para você dirigir seguro, com conforto e segurança.</p>
        <Link href="/dashboard">
          <button>Começar agora</button>
        </Link>
      </div>
      <div className={styles.right}>
        <div className={`${styles.retangle} ${styles.first}`} />
        <div className={`${styles.retangle} ${styles.two}`} />
        <img src="audi.svg" alt="" />
      </div>
    </div>
  )
}
