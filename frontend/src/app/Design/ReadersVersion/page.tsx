'use client';

// import Link from 'next/link';

import MainPageContent from '../../../Components/page/MainPageContent/MainPageContent';
import Page from '../../../Components/page/page';
import Footer from '../../../Layouts/Footer/Footer';
import Header from '../../../Layouts/Header/Header';
import Main from '../../../Layouts/main/main';

function RV() {
    return (
        <>
            <Header />
            <Main>
                <Page>
                    <MainPageContent>
                        <h1>OET Readers’ Version</h1>
                        <ul>
                            <li>
                                The <em>Readers’ Version</em>{' '}
                                <b>speaks like people around you</b>. Because
                                the history and legacy of English Bibles now
                                goes back for hundreds of years, many things
                                have been carried over that readers don’t even
                                realise. For example, we all smile at Yoda
                                saying, “Strong is the force.” That’s because
                                naturally we would say, “The force is strong.”
                                So think about “
                                <a href='https://biblehub.com/parallel/lamentations/3-23.htm'>
                                    Great is your faithfulness.
                                </a>
                                ” (At least Miles Coverdale improved it in 1535
                                if you look carefully.) But our aim isn’t at all
                                to criticise those who came before (because we
                                very-much build on their shoulders)—we just want
                                our readers to be able to share the Good News of
                                Jesus the messiah with others, without them
                                thinking that Christians speak like dinosaurs
                                (or Yoda)!
                            </li>
                            <li>
                                The <em>Readers’ Version</em>{' '}
                                <b>has section headings and cross-references</b>{' '}
                                and most of the other features that help modern
                                Bible readers.
                            </li>
                            <li>
                                The <em>Readers’ Version</em>{' '}
                                <b>uses modern units</b> for all measurements
                                (easy to understand and visualise).
                            </li>
                            <li>
                                The <em>Readers’ Version</em> keeps well-known
                                figures of speech, but if the original figure of
                                speech is not readily understandable, it
                                explains the point that the author appears to be
                                trying to express.
                            </li>
                            <li>
                                <i>Up</i> and <i>down</i> in the original
                                languages (and thus in the{' '}
                                <em>Literal Version</em>) refer to <i>uphill</i>{' '}
                                and <i>downhill</i>. However, in the{' '}
                                <em>Readers’ Version</em>, <i>up</i> and{' '}
                                <i>down</i> are used to refer to <i>north</i>{' '}
                                and <i>south</i> respectively as per our modern
                                norm.
                            </li>
                            <li>
                                The <em>Readers’ Version</em>{' '}
                                <b>is less formal</b> than most modern English
                                Bible translations, for example, we would use
                                contracted words like <i>we’ll</i> and{' '}
                                <i>didn’t</i>, especially when it’s in direct
                                speech. (Always remember that the Bible was
                                written in the languages of the common people.)
                            </li>
                            <li>
                                The <em>Readers’ Version</em>{' '}
                                <b>uses section headings</b> which are very
                                helpful to skim through when trying to locate a
                                certain passage. However, you’ll quickly notice
                                that they are formatted in such a way as not to
                                break the flow of the letter or narrative. This
                                is to visually help the reader to appreciate the
                                full context of the part they’re reading, and
                                not to ignore the connections with what came
                                before and what follows.
                                <br />
                                We’ve also tried to focus our section headings
                                on principles that are being taught, rather than
                                just focusing on the events happening at the
                                time.
                                <br />
                                We provide a list of these section headings that
                                you can quickly skim through (and we hope to
                                also include extra, alternative headings in the
                                future).
                            </li>
                            <li>
                                Being a 21<sup>st</sup> century translation done
                                in an era when there is much more effort in
                                general to respect speakers of other languages
                                (including the languages of ethnic minorities in
                                our own countries) and to pronounce their names
                                and placenames correctly, the <em>OET</em>
                                 attempts to{' '}
                                <b>
                                    show greater respect for Biblical names and
                                    placenames
                                </b>
                                .
                            </li>
                            <li>
                                In addition to wanting to get names and
                                placenames more accurate, we’ve also attempted
                                to modernise and simplify the spelling
                                (transliterations) of these names to make it
                                easier for readers to pronounce them as they
                                come across them, e.g., using <b>f</b> instead
                                of <b>ph</b>, so <i>Epafras</i> instead of{' '}
                                <i>Epaphras</i>.
                            </li>
                            <li>
                                With regular words, we’ve tried to do the
                                opposite, i.e., to use less Greek rather than
                                more wherever possible. So a word like{' '}
                                <i>apostle</i> (which is an adapted
                                transliteration of the Greek verb meaning ‘one
                                sent out’), actually gets translated, so this
                                example becomes <i>missionary</i> in many
                                places.
                            </li>
                            <li>
                                <i>Italics</i> are only used for{' '}
                                <em>emphasis</em>, not to indicate{' '}
                                <i>added words</i> as historically done in older
                                translations due to limitations of the ancient
                                printing processes. (The <em>OET</em> fixes the
                                problem where most modern printing uses{' '}
                                <i>italics</i> for <em>emphasis</em> whereas
                                older Bibles use <i>italics</i> for the words
                                which should actually be <b>deemphasised</b>,
                                i.e., the words which actually <b>aren’t</b> in
                                the original manuscripts!)
                            </li>
                            <li>
                                The English word <i>Christ</i> is an adapted
                                transliteration of the Koine Greek word{' '}
                                <i>Kristos</i> used for the original Hebrew{' '}
                                <i>messiah</i>. (It’s not Jesus’ surname!) It
                                seems to make sense to only use one word
                                consistently rather than using two words for the
                                same thing (just because they came from two
                                different languages), so the <em>OET</em> has
                                elected to only use <i>messiah</i>.
                            </li>
                        </ul>
                    </MainPageContent>
                </Page>
            </Main>
            <Footer />
        </>
    );
}

export default RV;
