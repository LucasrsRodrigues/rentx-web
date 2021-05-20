
import { IconBaseProps } from 'react-icons/lib';
import styles from './styles.module.scss';

interface SpecProps {
  text: string;
  icon: React.ComponentType<IconBaseProps>;
}

export function Spec({ icon: Icon, text }: SpecProps){
  return(
    <div className={styles.spec}>
      <div className={styles.icon}>
        <Icon size={20} />
      </div>
      <div className={styles.detail}>
        <strong>{text}</strong>
      </div>
    </div>
  )
}