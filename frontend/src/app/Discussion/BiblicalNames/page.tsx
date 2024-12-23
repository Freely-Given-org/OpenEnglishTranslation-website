'use client';

// import Link from 'next/link';

import MainPageContent from '../../../Components/page/MainPageContent/MainPageContent';
import Page from '../../../Components/page/page';
import Footer from '../../../Layouts/Footer/Footer';
import Header from '../../../Layouts/Header/Header';
import Main from '../../../Layouts/main/main';

function BiblicalNames() {
    return (
        <>
            <Header />
            <Main>
                <Page>
                    <MainPageContent>
                        <h1>Essay on Biblical names</h1>
                        <h2>Transliteration and English spellings</h2>
                        <h2 id='introduction'>Introduction</h2>
                        <p>
                            The spelling of the names of the characters in our
                            modern English Bibles has a long, and sometimes sad,
                            history. Sad because a number of accidents of
                            history makes common modern-English Biblical names
                            very distant from their origins—in fact, sometimes
                            so much so that those people probably wouldn’t have
                            even turned around if you’d called them with the
                            common English pronunciations because they wouldn’t
                            even recognise that they were being called. Then,
                            believe it or not, we live in a world where some
                            people don’t even realise that the great majority of
                            the characters in the Bible were Jewish, even Jesus.
                            All of this can lead to a sad state of Biblical
                            ignorance.
                        </p>
                        <p>
                            The <em>Open English Translation</em> of the Bible
                            has a goal of improving Biblical understanding, and
                            this extends to trying to improve the accuracy of
                            Biblical names. However, we too are restrained by
                            not being able to alter history, so this goal
                            doesn’t mean that we insist on our readers learning
                            how to pronounce Hebrew or Greek. Unfortunately
                            then, our solution will only ever be a compromise
                            solution, which will sadly frustrate some purists.
                            The <em>OET</em> is a compromise, in fact, every
                            Bible translation is always a compromise in many
                            ways (even if most marketing departments don’t try
                            to highlight that).
                        </p>
                        <h2 id='consonants'>
                            Consonants in the relevant languages
                        </h2>
                        <p>
                            <b>Hebrew</b> has twenty-two consonants in its
                            alphabet which can be approximated into English as:
                            <br />
                            <b>b d g h k l m n p r s sh t ts v y z</b> and the{' '}
                            <b>glottal stop</b>.
                            <br />
                            <small>
                                (The astute reader will notice that that's only
                                eighteen consonants, and that’s because Hebrew
                                has doubles of some consonants, which are
                                pronounced slightly differently, but which we
                                don’t have enough English letters to represent,
                                including two ‘h’s, two ‘k’s, two ‘s’s, two ‘t’s
                                and two glottal stops. On the other hand, ‘s’
                                and ‘sh’ are regarded as a single consonant in
                                Hebrew. Yes, languages are complex.)
                            </small>
                        </p>
                        <p>
                            <b>Koine Greek</b> (the language of the ‘New
                            Testament’) has seventeen consonants in its alphabet
                            which can be approximated into English as:
                            <br />
                            <b>b ch d g k l m n p ph ps r s t th x and z</b>.
                            <br />
                            Note particularly that{' '}
                            <b>
                                ‘h’ and ‘sh’, ‘v’ and ‘y’, and glottal stop from
                                Hebrew can’t be represented in Greek
                            </b>
                            , so Hebrew ‘Mosheh’ for example comes out as
                            ‘Mouses’.{' '}
                            <small>
                                (We’re not worrying about vowels right now.)
                            </small>
                        </p>
                        <p>
                            <b>Latin</b> (the language of the first major
                            European Bible translation) has nineteen consonants
                            in its alphabet which can be approximated into
                            English as:
                            <br />
                            <b>b c d f g h k l m n p r s t v x y and z</b>.
                            <br />
                            Note particularly that{' '}
                            <b>
                                ‘h’ and ‘sh’, ‘v’ and ‘y’ from Hebrew could now
                                be represented in this language,
                            </b>
                            , but Hebrew ‘Mosheh’ for example stays as ‘Moses’
                            because sadly the Latin spelling was more influenced
                            by the Greek than the Hebrew.
                        </p>
                        <p>
                            <b>German</b> (the language that evolved from the
                            same proto-Germanic that modern English derived
                            from) has twenty plus consonants in its alphabet
                            which can be approximated into English as:
                            <br />
                            <b>b c d f g h k l m n p q r s ß t v x y and z</b>.
                            <br />
                            Note particularly that their letter ‘j’ is
                            approximated by English letter ‘y’, as in their word
                            for ‘yes’ which is spelt ‘ja’ but pronounced more
                            like ‘ya’. This has had a major effect on the first
                            letter of Hebrew names, because a large number of
                            them start with the ‘Y’ sound (which would be ‘J’ in
                            German).
                        </p>
                        <p>
                            <b>Modern English</b> has the following consonant
                            sounds in its alphabet:
                            <br />
                            <b>b d f g h j k l m n p r s t v w x y and z</b>.
                            <br />
                            Note that ‘c’ and ‘q’ are omitted from the above
                            list because they don’t have unique sounds of their
                            own. It should also be noted that ‘sh’ is a common
                            English consonant sound, as are ‘ch’ and ‘th’{' '}
                            <small>
                                (although the latter has two distinct{' '}
                                pronunciations as can be seen in the words
                                ‘this’ and ‘thistle’)
                            </small>
                            .
                        </p>
                        <p>
                            So you can easily see that when someone’s name is
                            pronounced in another language, we might not always
                            have the matching consonants available, so we have
                            to adapt. (We also have to adapt the vowels, but
                            that’s usually less noticeable than what happens to
                            the consonants.)
                        </p>
                        <h2 id='lxx'>The first major Bible translation</h2>
                        <h2 id='history'>
                            The historical accidents that led to our Biblical
                            names
                        </h2>
                        <h2 id='trends'>Modern cultural trends</h2>
                        <h2>More coming...</h2>
                    </MainPageContent>
                </Page>
            </Main>
            <Footer />
        </>
    );
}

export default BiblicalNames;
