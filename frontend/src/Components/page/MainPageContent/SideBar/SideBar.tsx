import styles from './side-bar.module.scss';

function SideBar({ children }: any) {
    return <div className={styles['side-bar']}>{children}</div>;
}

export default SideBar;
