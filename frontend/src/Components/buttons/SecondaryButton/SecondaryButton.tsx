import NextLink from 'next/link';

import styles from './secondary-button.module.scss';


export function SecondaryButton({ children, href='#' }: any) {
    return (
        <div>
            <NextLink className={styles['secondary-button']} href={href}>
                {children}
            </NextLink>
        </div>
    );
}