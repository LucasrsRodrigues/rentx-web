import Link from 'next/link';
import { RiFlashlightLine } from 'react-icons/ri';
import styles from './styles.module.scss';

export function Car() {
  return (
    <Link href={`car/123`}>
      <div className={styles.car}>
        <img src="cars/Audi.png" alt="RS 5 Coupé" />
        <div className={styles.footer}>
          <div className={styles.detail}>
            <div>
              AUDI
            <strong>
                RS 5 Coupé
            </strong>
            </div>
            <div>
              AO DIA
            <span>R$ 640</span>
            </div>
          </div>
          <RiFlashlightLine />
        </div>
      </div>
    </Link>
  )
}