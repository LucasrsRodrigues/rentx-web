import Link from 'next/link';
import { RiArrowLeftSLine } from 'react-icons/ri';
import styles from './styles.module.scss';

export function CarHeader() {
  return(
    <header className={styles.container}>
      <Link href="/">
        <RiArrowLeftSLine />
      </Link>

      <div className={styles.wrapperInfo}>
        <div>
          <small>Audi</small>
          <strong>
            Q3 Baita Fora
                </strong>
        </div>
        <div>
          <small>Ao dia</small>
          <strong className={styles.price}>
            R$ 120
                </strong>
        </div>
      </div>
    </header>
  )
}