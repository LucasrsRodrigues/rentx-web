import { RiDashboard3Line, RiDropLine, RiSteering2Line, RiUploadLine, RiUser6Line } from 'react-icons/ri';
import { Sidebar } from '../../components/Sidebar';
import styles from '../../styles/pages/DetailCar.module.scss';
import { About } from './_components/About';
import { CarHeader } from './_components/CarHeader';
import { Spec } from './_components/Spec';

export default function DetailCar() {

  return (
    <div className={styles.container}>
      <Sidebar />
      <div className={styles.content}>
        <main>
          <CarHeader />
          <div className={styles.carBody}>
            <div className={styles.left}>
              <img src="/cars/baita.png" alt="Q3 Baita Foda" />
            </div>
            <div className={styles.right}>
              <div className={styles.wrapperSpecs}>
                <Spec icon={RiDashboard3Line} text="270km/h" />
                <Spec icon={RiUploadLine} text="6.8s" />
                <Spec icon={RiDropLine} text="Gasolina" />
                <Spec icon={RiDropLine} text="Auto" />
                <Spec icon={RiUser6Line} text="5 Pessoas" />
                <Spec icon={RiSteering2Line} text="280 HP" />
              </div>
              <div className={styles.about}>
                <div className={styles.top}>
                  <button className={styles.active}>
                    Sobre o carro
                  </button>
                  <button>
                    Período
                  </button>
                </div>
                <div className={styles.body}>
                  {/* <About /> */}
                  <div className={styles.timeCourse}>
                    <form>
                      
                    </form>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </main>
      </div>
    </div>
  )
}