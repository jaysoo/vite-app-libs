import styles from './rlib2.module.css';

/* eslint-disable-next-line */
export interface Rlib2Props {}

export function Rlib2(props: Rlib2Props) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Rlib2!</h1>
    </div>
  );
}

export default Rlib2;
