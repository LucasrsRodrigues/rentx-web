import { RiUser6Line } from 'react-icons/ri';
import styles from './styles.module.scss';

export function Header(){
  return(
    <header className={styles.container}>
      <h1>Início</h1>
      <div className={styles.option}>
        Faça login
        <div className={styles.user}>
          <RiUser6Line />
        </div>
      </div>
    </header>
  )
}