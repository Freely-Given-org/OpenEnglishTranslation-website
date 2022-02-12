import styles from './main-page-content.module.scss';

function MainPageContent({ children }: any) {
    return <div className={styles['main-page-content']}>{children}</div>;
}

export default MainPageContent;
