import { PrimaryButton } from 'Components/buttons/PrimaryButton/PrimaryButton';
import { SecondaryButton } from 'Components/buttons/SecondaryButton/SecondaryButton';
import Image from 'next/image';

import styles from './Hero.module.scss';


export function Hero() {
    return (
        <div className={styles['hero']}>
            <div className={styles['hero-inner']}>
                <div>
                    <small className={styles['full-name']}>The Open English Translation</small>
                    <h1>A new, exciting, radical, freely-licensed Bible translation for the 2030's.</h1>
                     <div className={styles['buttons']}>
                        <PrimaryButton href='/Reader'>
                            Read the OET
                        </PrimaryButton>
                        <SecondaryButton href='/Intro/Overview'>
                            Learn about the OET
                        </SecondaryButton>
                    </div>   
                </div>

                <img 
                    className={styles['image']} 
                    src='/assets/sixteen-miles-out-MLOZazGGCb8-unsplash.jpg'
                     alt='Picture of an open Bible'
                    />
                {/* <Image
                    src={
                        '/assets/sixteen-miles-out-MLOZazGGCb8-unsplash.jpg'
                    }
                    alt='Picture of an open Bible'
                    width={450}
                    height={450}
                    layout="responsive"
                /> */}
            </div>
        </div>
    );
}