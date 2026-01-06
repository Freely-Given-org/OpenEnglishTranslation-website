import { ArrowRightIcon, InfoSquareIcon, NewspaperIcon, PeopleIcon } from 'Assets/SVGs';

import styles from './ActionItem.module.scss';

const getIcon = (iconType: any) => {
  switch (iconType) {
    case 'info':
      return <InfoSquareIcon className={styles['main-icon']} />;
    case 'news':
      return <NewspaperIcon className={styles['main-icon']} />;
    case 'volunteer':
      return <PeopleIcon className={styles['main-icon']} />;
    default:
      return null;
  }
};

export function ActionItem({ link, title, iconType, text}: any) {
    return (
        <a href={link} className={styles['action']}>
            <div className={styles['head']}>
                <div className={styles['inner']}>
                    {getIcon(iconType)}
                    <h4>{title}</h4>
                </div>
                <ArrowRightIcon className={styles['arrow-icon']} />
            </div>
            <p className={styles['body']}>
                {text}
            </p>
        </a>
    );
}