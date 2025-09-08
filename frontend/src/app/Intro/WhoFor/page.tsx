'use client';

import Link from 'next/link';

import MainPageContent from '../../../Components/page/MainPageContent/MainPageContent';
import Page from '../../../Components/page/page';
import Footer from '../../../Layouts/Footer/Footer';
import Header from '../../../Layouts/Header/Header';
import Main from '../../../Layouts/main/main';

function WhoFor() {
    return (
        <>
            <Header />
            <Main>
                <Page>
                    <MainPageContent>
                        <h1>
                            Who’s the <em>Open English Translation</em> for?
                        </h1>
                        <h2>
                            Who might like the <em>OET</em>?
                        </h2>
                        <p>Two groups of people: Anyone who…</p>
                        <ol>
                            <li>
                                is interested in reading the Bible for the first
                                time, and would prefer a version that's actually
                                in modern English and hence easy to read and
                                understand (without having to learn archaic
                                grammar and terms).
                            </li>
                            <li>
                                has perhaps read the Bible many times, but who
                                feels that it would be more respectful to
                                pronoun Hebrew names more like how they should
                                be pronounced (and not limited by the Greek
                                alphabet like most traditional Biblical English
                                names).
                            </li>
                        </ol>
                        <h1>
                            Who’s the <em>Open English Translation</em> not for?
                        </h1>
                        <h2>
                            Who probably won’t enjoy the <em>OET</em>?
                        </h2>
                        <p>Anyone who…</p>
                        <ol>
                            <li>
                                has been taught that a ‘literal’ translation is
                                more ‘accurate’ than a ‘dynamic’ one. (Often
                                people who believe that, only speak one
                                language. Speakers of languages in different
                                language families are often much more aware that
                                that’s a fallacy.)
                            </li>
                            <li>
                                thinks church and Bible tradition is more
                                important than implementing advances in
                                translation knowledge and changes in our modern
                                English language.
                            </li>
                            <li>
                                thinks the colour and quality of the leather and
                                the ribbons is more important than the quality
                                of the actual English translation.
                            </li>
                        </ol>
                    </MainPageContent>
                </Page>
            </Main>
            <Footer />
        </>
    );
}

export default WhoFor;
