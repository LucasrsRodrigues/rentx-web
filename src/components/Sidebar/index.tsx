import Link from 'next/link';
import styles from './styles.module.scss';
import { RiHome2Line, RiCarLine, RiUser6Line } from 'react-icons/ri';

export function Sidebar(){
  return(
    <aside className={styles.container}>
      <div className={styles.logo}>
        <img src="icons/min-logo.svg" alt="rentx" />
      </div>
      <div className={styles.content}>
        <div className={styles.wrapperLinks}>
          <Link href="/dashboard">
            <a className={styles.active}>
              <RiHome2Line />
            </a>
          </Link>
          <Link href="/dashboard">
            <a>
              <RiCarLine />
            </a>
          </Link>
          <Link href="/dashboard">
            <a>
              <RiUser6Line />
            </a>
          </Link>
        </div>
      </div>
    </aside>
  )
}