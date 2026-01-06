import NextLink from 'next/link';

import styles from './VerseOfTheDaySection.module.scss';


export function VerseOfTheDaySection() {
    return (
        <div className={styles['verseofthedaysection']}>
            <div className={styles['inner']}>
                <h3>Verse of the day</h3>
                <div className={styles['verses']}>
                    <div className={styles['verse']}>
                        <h5>Reader's version</h5>
                        <p>     
                            And the message became a human and lived here
                            among us and we saw his greatness—the greatness
                            of an only child of the father—full of grace and
                            truth.{' '}
                            <small>
                                (
                                <NextLink href='https://Freely-Given.org/OBD/par/JHN/C1V14.htm#Top'>
                                    Jn 1:14
                                </NextLink>
                                , OET-RV, early draft version)
                            </small>
                        </p>
                    </div>
                    <div className={styles['verse']}>
                        <h5>Literal version</h5>
                        <p>     
                            And the message became flesh and sheltered among
                            us, and we_saw the glory of_him, a_glory as
                            of_an_only_begotten with a_father, full of_grace
                            and truth.{' '}
                            <small>
                                (Jn 1:14, OET-LV, joined_words come from
                                single Greek words)
                            </small>
                        </p>
                    </div>
                </div>
                <small>
                    <b>Note:</b> You’re probably more used to
                    Jesus/Yeshua being called ‘the Word’ (than
                    ‘the message’), but in modern English,
                    ‘words’ are the things on this page.
                    Hundreds of years ago, someone decided that
                    the Greek word ‘λόγος’ (logos) meant ‘word’
                    in English (and beginner Greek students are
                    still taught that) and many translations
                    have naively followed that, but we’ve{' '}
                    <NextLink href='https://BibleHub.com/greek/3056.htm'>
                        known
                    </NextLink>{' '}
                    for a long time now that ‘message’ or
                    ‘speech’ (or similar), would be a more
                    accurate translation in most contexts. While
                    most older English translations still use
                    ‘word’, the new <em>OET</em> uses a better
                    translation that makes the{' '}
                    <NextLink href='https://Freely-Given.org/OBD/OET/bySec/JHN_S2.htm#Top'>
                        concept
                    </NextLink>{' '}
                    much easier for the modern reader to
                    understand. (Oh, and by the way, there are
                    no capitalised words in the Hebrew and Greek
                    originals, so with a focus on accuracy over
                    tradition, the <em>OET</em> has much less
                    artificial capitalisation than your older
                    Bible.)
                </small>
            </div>
        </div>
    );
}