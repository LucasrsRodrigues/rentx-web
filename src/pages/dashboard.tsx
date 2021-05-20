import { RiFlashlightLine } from 'react-icons/ri';
import { Car } from '../components/Car';
import { Header } from '../components/Header';
import { Sidebar } from '../components/Sidebar';
import styles from '../styles/pages/Dashboard.module.scss';

export default function Dashboard() {
  return (
    <div className={styles.container}>
      <Sidebar />
      <div className={styles.content}>
        <Header />
        <main>
          <div className={styles.top}>
            <h1>Carros disponíveis</h1>
            <span>Total 12 carros</span>
            <hr />
          </div>
          <div className={styles.wrapperCars}>
            <Car />
            <Car />
            <Car />
            <Car />
            <Car />
            <Car />            
          </div>
        </main>
      </div >
    </div >
  )
}