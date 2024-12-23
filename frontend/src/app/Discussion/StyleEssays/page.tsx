'use client';

// import Link from 'next/link';

import MainPageContent from '../../../Components/page/MainPageContent/MainPageContent';
import Page from '../../../Components/page/page';
import Footer from '../../../Layouts/Footer/Footer';
import Header from '../../../Layouts/Header/Header';
import Main from '../../../Layouts/main/main';

function StyleEssays() {
    return (
        <>
            <Header />
            <Main>
                <Page>
                    <MainPageContent>
                        <h1>Essays on some style decisions</h1>
                        <h2>(Things like layout and punctuation)</h2>
                        <h1>OET Literal Version</h1>
                        <p>Coming...</p>
                        <h1>OET Readers' Version</h1>
                        <h2 id='parentheses'>(Parentheses)</h2>
                        <p>
                            It’s not uncommon to find extra explanations in the
                            Bible text, and they’re not always highly relevant
                            or interesting to modern readers. Also, sometimes
                            this material makes the text hard to read aloud
                            because there’s it’s hard to discover the essential
                            elements of the sentence to get the stress and
                            emphasis correct. So the <em>OET-RV</em> doesn’t
                            hesitate to move this material into parentheses,
                            thus clearly marking it as non-essential to the main
                            flow of the text.
                        </p>
                        <p>
                            An example from Genesis 36:2: Esau had{' '}
                            <i>
                                married two local women from the Canaan region
                            </i>
                            : Adah (the Hittite Elon's daughter) and Oholibamah
                            (Anah's daughter and granddaughter of the Hivite
                            Zibeon).
                        </p>
                        <p>
                            Note that we also often add <em>additional</em>{' '}
                            parenthetical material (especially the meaning of
                            Hebrew names where it’s relevant and helpful to the
                            modern reader). However, like any other added
                            material, these parenthetical statements are
                            displayed in a lighter colour grey text so that’s
                            it’s clear to the reader what the editors have
                            added. (This is part of the <em>OET</em> commitment
                            to total transparency in the translation process.)
                        </p>
                        <h2 id='anachronisms'>Anachronisms</h2>
                        <p>Coming...</p>
                        <h2 id='wordVariety'>Word variety</h2>
                        <p>Coming...</p>
                        <h2 id='surpriseParticle'>Surprise particle</h2>
                        <p>Coming...</p>
                        <h2>More coming...</h2>
                    </MainPageContent>
                </Page>
            </Main>
            <Footer />
        </>
    );
}

export default StyleEssays;
