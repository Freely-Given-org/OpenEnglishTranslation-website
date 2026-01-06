import NextLink from 'next/link';

import styles from './primary-button.module.scss';


export function PrimaryButton({ children, href }: any) {
    return (
        <div>
            <NextLink className={styles['primary-button']} href={href}>
                {children}
            </NextLink>
        </div>
    );
}