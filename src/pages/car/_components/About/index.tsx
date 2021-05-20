import styles from './styles.module.scss';

export function About() {
  return (
    <div className={styles.container}>
      <p>
        Este é automóvel desportivo.
        Surgiu do lendário touro de lide indultado na praça Real
        Maestranza de Sevilla. É um belíssimo carro para quem gosta
        de acelerar.
      </p>
      <button className={styles.submit}>
        Escolher período do aluguel
      </button>
    </div>
  )
}