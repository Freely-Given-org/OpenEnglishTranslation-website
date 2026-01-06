import { ArrowRightIcon, FeatherIcon } from 'Assets/SVGs';
import { SecondaryButton } from 'Components/buttons/SecondaryButton/SecondaryButton';

import styles from './LicenseSection.module.scss';



export function LicenseSection() {
    return (
        <div className={styles['licensesection']}>
            <div className={styles['inner']}>
                <FeatherIcon className={styles['feather-icon']} />
                <h3>Trying to nudge English Bible translation into the 21st century.</h3>
                <p>Imagine if, instead of all those complicated rules about how many verses you can use and how much of each book your work is allowed to contain, what if the copyright page on your Bible said something like:</p>
                <blockquote>
                    This is a careful, modern-English translation of God’s messages to mankind that have been preserved through the centuries despite much opposition and bloodshed, and <b>it’s free for you to use!</b>
                </blockquote>
                <SecondaryButton>
                    Learn about the license
                    <ArrowRightIcon />
                </SecondaryButton>
            </div>
        </div>
    );
}