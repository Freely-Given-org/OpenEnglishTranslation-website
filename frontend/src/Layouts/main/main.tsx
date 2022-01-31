import styles from './main.module.scss';

function Main({ children }: any) {
    return <main className={styles.main}>{children}</main>;
}

export default Main;
