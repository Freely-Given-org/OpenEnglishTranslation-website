'use client';

import Link from 'next/link';

import MainPageContent from '../../../Components/page/MainPageContent/MainPageContent';
import Page from '../../../Components/page/page';
import Footer from '../../../Layouts/Footer/Footer';
import Header from '../../../Layouts/Header/Header';
import Main from '../../../Layouts/main/main';

function WordEssays() {
    return (
        <>
            <Header />
            <Main>
                <Page>
                    <MainPageContent>
                        <h1>Essays on some Bible words</h1>
                        <p>
                            If you try to read many of the books that call
                            themselves Bibles<sup>*</sup>, you’ll find that the
                            text often feels very formal, in fact so much so
                            that many readers now expect that a Bible
                            translation <em>must</em> sound formal. What most
                            readers don’t realise, is that there are two main
                            reasons that Bible translations sound ‘formal’ or
                            ‘quaint’:
                            <br />
                            <b>1. </b>Because Hebrew or Greek word order and
                            idioms are often carried through into English
                            translations, e.g., ‘son of Abraham’ rather than
                            ‘Abraham’s son’, and
                            <br />
                            2. Because ancient English word choices (some going
                            back all the way to John Wycliffe in the 1300’s) are
                            still present in so-called ‘modern’ English
                            translations, e.g., using ‘For’ instead of
                            ‘Because’, using ‘great’ instead of ‘large’, or
                            using ‘wild beasts’ instead of ‘wild animals’.
                            <sup>**</sup>
                            <br />
                            <small>
                                <b>
                                    <sup>*</sup>
                                </b>{' '}
                                Note: The OET intentionally doesn’t call itself
                                a ‘Bible’ but a ‘translation of the Bible’ in an
                                attempt to remind and educate our readers that
                                we use an English <b>translation</b> of a
                                collection of Hebrew, Aramaic, and Koine Greek
                                documents.
                            </small>
                            <br />
                            <small>
                                <b>
                                    <sup>*</sup>
                                </b>{' '}
                                Disclaimer: The founder of the OET lives in New
                                Zealand where we make some different word
                                choices from the country where English
                                originated (England, 55+ million people), and
                                even more noticeable, from the country with the
                                largest ‘English’-speaking population (USA, 330+
                                million people). Please do let us know if
                                anything on this page isn’t true for your
                                English dialect.
                            </small>
                        </p>
                        <h2>For</h2>
                        <p>
                            ‘For God so loved the world…’ So what does the word
                            ‘For’ mean at the beginning of that most well-known
                            sentence? Most people we’ve questioned can’t really
                            answer that question, although many do realise that
                            the modern equivalent would be ‘Because’, but then
                            that confuses them because they never memorised what
                            came before{' '}
                            <Link href='https://Freely-Given.org/OBD/OET/bySec/JHN_S10.htm#V16'>
                                John 3:16
                            </Link>
                            . And why didn’t they? Because ‘For’ is unnatural at
                            the beginning of a sentence in modern English and so
                            sadly, they hadn’t even asked themselves what it’s
                            there for. However, scan down the{' '}
                            <Link href='https://Freely-Given.org/OBD/par/JHN/C3V16.htm#ULT'>
                                page for that verse
                            </Link>{' '}
                            and see how even recent English translations copy
                            the same sentence structure that John Wycliffe{' '}
                            <Link href='https://Freely-Given.org/OBD/par/JHN/C3V16.htm#WYC'>
                                used
                            </Link>{' '}
                            in the 1300’s.
                        </p>
                        <p>
                            See more in the <Link href='../Blog/'>blog</Link>.
                        </p>
                        <p>
                            Sadly, even many English translations that claim to
                            be ‘modern’ or ‘new’ are still full of archaic
                            sentences starting with ‘For’.
                        </p>
                        <h2>Great</h2>
                        <p>
                            Have you watched a <em>great</em> movie recently? In
                            modern English, the word ‘great’ typically has a
                            positive connotation of being ‘good’. However, back
                            in the 1300’s when John Wycliffe translated the New
                            Testament into English (from Latin), the word
                            ‘great’ mostly meant ‘large’. So in{' '}
                            <Link href='https://Freely-Given.org/OBD/par/REV/C16V18.htm#WYC'>
                                Rev 16:18
                            </Link>
                            , he used that word to describe a terrible
                            earthquake. No doubt any modern reader who’s had
                            their house damaged in an earthquake wouldn’t
                            naturally use the word ‘great’ to describe the
                            frightening event. However, many recent English
                            Bible translations still do just that.
                        </p>
                        <h2>Wild beasts</h2>
                        <p>
                            In the past, your might have taken a tour of an
                            African safari park to view the ‘wild beasts’, but
                            nowadays, we would be more likely to call them ‘wild
                            animals’. The word ‘beast’ does linger on in English
                            in specific contexts such as ‘a farmer killing a
                            beast’ (meaning a cow). However, apart from ‘Beauty
                            and the Beast’, modern English generally favours the
                            word ‘animal’ over ‘beast’. Tragically though, even
                            quite modern English Bible translations persist in
                            their use of the word ‘beast’, most noticeably in
                            Yohan's Revelation.
                        </p>
                        <h2>Ark</h2>
                        <p>
                            Sadly, the word ‘ark’ raises connotation of a
                            boat-shaped object for modern readers—perhaps
                            largely influenced by (inaccurate?) Noah’s Ark
                            picture books. Of course, the big problem with that
                            is when you come to the ‘Ark of the Covenant’.
                        </p>
                        <p>
                            The real meaning of the Hebrew word ‘תֵּבַת’ (tēvat)
                            (
                            <Link href='https://Freely-Given.org/OBD/par/GEN/C6V14.htm#KJB'>
                                traditionally translated
                            </Link>{' '}
                            as ‘ark’) is ‘(wooden) chest’ or ‘box’.
                        </p>
                    </MainPageContent>
                </Page>
            </Main>
            <Footer />
        </>
    );
}

export default WordEssays;
