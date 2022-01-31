import styles from './page.module.scss';

function Page({ children }: any) {
    return <div className={styles.page}>{children}</div>;
}

export default Page;
