import { ArrowRightIcon, BookIcon } from 'Assets/SVGs';
import { SecondaryButton } from 'Components/buttons/SecondaryButton/SecondaryButton';
import NextLink from 'next/link';

import styles from './WhatIsSection.module.scss';


export function WhatIsSection() {
    return (
        <div className={styles['whatissection']}>
            <div className={styles['inner']}>
                <BookIcon className={styles['book-icon']} />
                <h3>What is the OET?</h3>
                <p>The OET contains a Readers’ Version and a very Literal Version side-by-side. Every word in the OET Literal Version is linked to the Hebrew or Greek word that it’s translated from.</p>

                <div className={styles['info-cols']}>
                    <p className={styles['info']}>
                        Not a commercial product unlike most English Bibles— it is freely available to use, copy, print, adapt, or retranslate—no need to ask for permission.
                    </p>
                   <p className={styles['info']}>
                        An <b>opportunity for experts</b> to donate
                        their linguistic, archaeological, cultural,
                        or theological expertise as a gift to the
                        world by submitting it as an{' '}
                        <i>add-on pack</i> to the translation (see
                        our{' '}
                        <NextLink href='/About/Partners'>
                            Partners page
                        </NextLink>
                        )
                    </p>
                   <p className={styles['info']}>
                        Not bound by church jargon, unnecessary tradition, and following the crowd, in an attempt to communicate well to non-churched readers, yet to provoke and stimulate seasoned Bible readers.
                    </p>
                   <p className={styles['info']}>
                        A commitment to accuracy and high-quality, and to wrestle with the text to try to determine the likely intent of the various biblical writers.
                    </p>
                   <p className={styles['info']}>
                        Prepared to <b>fix long-time mistakes</b>,
                        including some that have been propagated for
                        hundreds of years since the New Testament
                        was translated from the Latin translation
                        into{' '}
                        <NextLink href='https://Freely-Given.org/OBD/Wycl/byC/MRK_C1.htm#Top'>
                            middle-English
                        </NextLink>
                        , i.e., we’re aiming to correct old mistakes
                        (at the risk of making some new ones)
                    </p>
                   <p className={styles['info']}>
                        Following{' '}
                        <NextLink href='https://www.nzherald.co.nz/nz/te-wiki-o-te-reo-maori-new-zealands-most-mispronounced-places-and-what-to-do-about-it/JCCWGOZ5OAQQN7C5A5PDV7UBMI/'>
                            modern trends
                        </NextLink>{' '}
                        in our societies of{' '}
                        <b>
                            showing more respect to other language
                            groups
                        </b>{' '}
                        by trying to do the same with the{' '}
                        <NextLink href='/Discussion/BiblicalNames'>
                            names
                        </NextLink>{' '}
                        of the Biblical characters and with{' '}
                        <NextLink href='/Discussion/KTEssays#Yahweh'>
                            God’s name
                        </NextLink>
                        .
                    </p>
                    <p className={styles['info']}>
                        Trying to{' '}
                        <b>avoid using untranslated Greek words</b>{' '}
                        as much as possible in the English
                        translation (words like ‘angel’, ‘apostle’,
                        ‘baptise’, and ‘Christ’), although we do use
                        ‘Messiah’ (from Hebrew) heavily
                    </p>
                   <p className={styles['info']}>
                        Preparing for the next major movement of lost young people searching for truth and meaning and purpose, but who mightn’t want to be forced to learn old-fashioned English to do so.
                    </p>
                    <p className={styles['info']}>
                        Designed from the beginning to connect with other resources including links to the original manuscripts.
                    </p>
                    <p className={styles['info']}>
                        Able to keep improving over time with community input.
                    </p>             
                </div>
                <SecondaryButton href='/Intro/Overview'>
                    Learn more
                    <ArrowRightIcon />
                </SecondaryButton>
            </div>
        </div>
    );
}