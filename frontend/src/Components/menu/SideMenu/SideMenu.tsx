import styles from './side-menu.module.scss';

function SideMenu({ children }: any) {
    return <div className={styles["side-menu"]}>{children}</div>;
}

export default SideMenu;
