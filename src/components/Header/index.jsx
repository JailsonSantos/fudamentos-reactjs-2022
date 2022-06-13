import styles from './Header.module.css';
import igniteLogo from '../../assets/logo.svg';

export function Header() {
  return (
    <h1 className={styles.header}>
      <img src={igniteLogo} alt="Logotipo do Ignite 2022 " />
    </h1>
  )
}