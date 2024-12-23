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
                        <h1>Essays on Biblical names</h1>
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
                            how to pronounce Hebrew or Greek. Unfortunately, our
                            solution will only ever be a compromise solution,
                            which will sadly frustrate some purists. The{' '}
                            <em>OET</em> is a compromise, in fact, every Bible
                            translation is always a compromise (even if most
                            marketing departments don’t try to highlight that).
                        </p>
                        <h2 id='history'>Some history</h2>
                        <p>Coming...</p>
                        <h2 id='consonants'>
                            Consonants in the relevant languages
                        </h2>
                        <p>
                            Hebrew has twenty-two consonants in its alphabet
                            which can be approximated into English as:
                            <br />
                            <b>b d g h k l m n p r s sh t ts v y z</b> and the
                            <b>glottal stop</b>.{' '}
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
                            Koine Greek (the language of the ‘New Testament’)
                            has seventeen consonants in its alphabet which can
                            be approximated into English as:
                            <br />
                            <b>b ch d g k l m n p ph ps r s t th x z</b>. Note
                            particularly that ‘h’ and ‘sh’, ‘v’ and ‘y’, and
                            glottal stop from Hebrew can’t be represented in
                            Greek, so ‘Mosheh’ for example comes out as
                            ‘Mouses’.{' '}
                            <small>
                                (We’re not worrying about vowels right now.)
                            </small>
                        </p>
                        <h2>More coming...</h2>
                    </MainPageContent>
                </Page>
            </Main>
            <Footer />
        </>
    );
}

export default BiblicalNames;
