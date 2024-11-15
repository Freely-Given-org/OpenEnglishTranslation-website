'use client';

import Link from 'next/link';

import MainPageContent from '../../../Components/page/MainPageContent/MainPageContent';
import Page from '../../../Components/page/page';
import Footer from '../../../Layouts/Footer/Footer';
import Header from '../../../Layouts/Header/Header';
import Main from '../../../Layouts/main/main';

function Formats() {
    return (
        <>
            <Header />
            <Main>
                <Page>
                    <MainPageContent>
                        <h1>Introduction to Formats and Standards</h1>
                        <p>
                            One important factor in providing a tagged Bible
                            translation for free use in Bible apps and programs
                            in this modern computer age, is that{' '}
                            <b>
                                the data must be readily accessible in
                                convenient forms
                            </b>
                            . Hence, Freely-Given.org has invested in designing
                            Bible databases and file formats that themselves are
                            offered to the Bible software world as a gift to use
                            in whatever ways meets your needs.
                        </p>
                        <p>
                            Putting that a different way, the <em>OET</em>
                             attempts to <b>lead and set new directions</b> not
                            just in the ways the Bible text is translated and
                            how it’s presented to the user, but also how it’s
                            saved on computers and linked to helpful databases.
                            And we are ‘splitters’ rather than ‘lumpers’ because
                            we try to provide detailed information, even if it’s
                            only discarded later.
                        </p>
                        <p>
                            Most existing Bible translations in the world are
                            developed using the{' '}
                            <Link href='https://ubsicap.github.io/usfm/'>
                                USFM
                            </Link>{' '}
                            file format. USFM includes features for marking
                            titles and introductions, chapters and verses,
                            section headings and paragraphs, footnotes and
                            cross-references, and even for marking words that
                            the translators have added, and for marking the
                            words of Jesus (for things like red-letter Bibles).
                            However, we want to go further to do things like:
                        </p>
                        <ul>
                            <li>
                                easily <b>annotating footnotes into classes</b>,
                                e.g., text-critical comments, historical
                                comments, comments on figurative language, etc.
                            </li>
                            <li>
                                not just marking added words, but putting the{' '}
                                <b>reason they were added or changed</b>, e.g.,
                                required by English grammar, implied by the
                                previous sentence or context, implied by
                                knowledge of historical context, etc.
                            </li>
                            <li>
                                not just marking Jesus’ words, but annotating{' '}
                                <b>every</b> speech segment, including the
                                narrator or editor.
                            </li>
                        </ul>
                        <h1>ESFM Bible files</h1>
                        <p>
                            <Link href='https://github.com/Freely-Given-org/ESFM'>
                                Enhanced Standard Format Marker
                            </Link>{' '}
                            (ESFM) files are based on that{' '}
                            <Link href='https://ubsicap.github.io/usfm/'>
                                USFM 3
                            </Link>{' '}
                            format used by most Bible translators but add the
                            ability to include metadata (such as names of
                            translators for that particular file) and plentiful
                            datasets linked to each Bible word by means of
                            associated tables.
                        </p>
                        <p>
                            Note that we also provide a{' '}
                            <Link href='https://github.com/Freely-Given-org/OpenEnglishTranslation--OET/blob/main/scripts/OET-LV-RV_ESFM_to_USFM.py'>
                                script
                            </Link>{' '}
                            to convert our ESFM back to USFM (by stripping out
                            most of the additional information).
                        </p>
                        <p>
                            Note also (while we’re discussing file formats for
                            Bible software), most current Bible programs and
                            apps weren’t designed to handle a{' '}
                            <em>Readers’ Version</em> and a very{' '}
                            <em>Literal Version</em> that are intended to always
                            be used together. We have a dedicated cross-platform
                            Bible app{' '}
                            <Link href='https://github.com/Correct-Syntax/bible_side'>
                                in early development
                            </Link>{' '}
                            that includes a JSON version of our ESFM files.
                        </p>
                        <h2>
                            <em>OET</em> extensions
                        </h2>
                        <p></p>
                        <h3>
                            <em>Add</em> character fields
                        </h3>
                        <p>
                            ESFM and USFM both have a <b>\add</b> character
                            field. To that, we insert (after the space) a single
                            character (that would not normally be expected to be
                            part of the start of an English word) inside the
                            added field, to indicate the reason why a word or
                            words were added or changed in the English
                            translation.
                        </p>
                        <ul>
                            <li>
                                <b>+</b> We had to <b>add an article</b> (like
                                ‘a’ or ‘the’ or ‘some’) for the English to make
                                grammatical sense
                            </li>
                            <li>
                                <b>=</b> We had to <b>add a copula</b> (like
                                ‘is’) for the English to make grammatical sense
                            </li>
                            <li>
                                <b>&lt;</b> We had to <b>add a direct object</b>{' '}
                                (like ‘it’ after ‘he hit’) for the English to
                                make grammatical sense
                            </li>
                            <li>
                                <b>&gt;</b> We had to{' '}
                                <b>add an implied person or object</b> (like
                                ‘thing’ after ‘he took one’, or ‘person’ after
                                ‘one’ in ‘one took the bread’) for the English
                                to make sense
                            </li>
                            <li>
                                <b>≡</b> We chose to{' '}
                                <b>repeat something that was elided</b> (like
                                replacing ‘pursued King A and King B’ with the
                                longer ‘pursued King A and pursued King B’ where
                                doing so makes the English easier to read and
                                understand
                            </li>
                            <li>
                                <b>&amp;</b> We had to <b>add an owner</b> (like
                                replacing ‘the’ with the possessive ‘his’ in
                                ‘raised the hands’) for the English to make
                                sense or to be more natural (like in ‘<b>his</b>{' '}
                                only son’ in{' '}
                                <Link href='https://Freely-Given.org/OBD/par/JHN/C3V16.htm#Top'>
                                    John 3:16
                                </Link>
                                )
                            </li>
                            <li>
                                <b>@</b> We <b>changed a pronoun to a name</b>{' '}
                                (like replacing pronoun ‘he’ with the name
                                ‘Adam’) for English fluency, or following a
                                section heading in order to help readers who
                                jump into the text at that point (
                                <em>OET-RV</em> only)
                            </li>
                            <li>
                                <b>*</b> We <b>changed a name to a pronoun</b>{' '}
                                (like replacing ‘Adam’ with the pronoun ‘he’)
                                for English fluency
                            </li>
                            <li>
                                <b>#</b> We{' '}
                                <b>
                                    changed the number, mostly changing singular
                                    sayings to plural
                                </b>{' '}
                                (like replacing ‘The poor man, he cries…’ with
                                ‘Poor people, they cry…’) in order to generalise
                                the saying for modern readers, and often to
                                remove any wrong suggestion that it might only
                                apply to males (<em>OET-RV</em> only)
                            </li>
                            <li>
                                <b>^</b> We{' '}
                                <b>changed a saying to its opposite</b> (like
                                replacing ‘the doorway is not closed’ with ‘the
                                door is always open’) in order to make something
                                more natural for modern readers (<em>OET-RV</em>{' '}
                                only)
                            </li>
                            <li>
                                <b>≈</b> We{' '}
                                <b>
                                    reworded (single word, or phrase, or clause)
                                </b>{' '}
                                (like replacing ‘said’ with ‘answered’, or
                                replacing ‘let them go’ with ‘release them’) to
                                make the English style more modern and
                                easy-to-understand (<em>OET-RV</em> only)
                                <br />
                                <small>
                                    <b>Note</b>: This is different from when
                                    this symbol is used for Hebrew parallelism
                                    (see separate section below).
                                </small>
                            </li>
                            <li>
                                <b>?</b> We were{' '}
                                <b>
                                    unable to determine what the author intended
                                    to communicate
                                </b>
                                ,
                                <br />
                                PLUS, if any of the above are preceded by a
                                question-mark ‘<b>?</b>’, then it means that{' '}
                                <b>
                                    a considerable amount of doubt is involved
                                </b>
                                , i.e., the intent of the original author is
                                unclear and our best attempt might actually be
                                wrong. (Often in those cases, we’ll simply leave
                                the word-for-word literal text in the Readers’
                                Version where it’s unclear, but in some cases,
                                even that isn’t at all understandable.)
                            </li>
                        </ul>
                        <h3>Footnotes and cross-references</h3>
                        <p>
                            We are planning to annotate the type of all of our
                            notes to enable some notes to be added or removed
                            for specific online or printed <em>OET</em>
                             editions. Plus we plan/hope to get specialists to
                            write additional footnote and cross-reference sets,
                            e.g., for a Muslim or a Jew reading this English
                            translation, or for a specialist archeological
                            edition, etc.
                        </p>
                        <p>
                            For annotating footnote types, we are currently
                            testing the addition of a code at the beginning of
                            the initial <b>\ft</b> field, e.g., ‘TC: ’ to
                            indicate a note on textual criticism. More to come…
                        </p>
                        <h3>Hebrew parallelism</h3>
                        <p>
                            Hebrew poetry doesn't use rhyming like a lot of
                            English poetry does, but (like English), it does
                            often use shortish lines and often these come in
                            pairs or doublets.
                        </p>
                        <p>
                            The <em>OET-RV</em> marks the second line of
                            doublets with the <b>≈</b> character (commonly used
                            in mathematics for ‘approximately equal’) to alert
                            the reader when we consider that the author seems to
                            be repeating a similar thought in the second line of
                            a doublet. (This character will usually follow the
                            space after a \q1 or \q2 field.)
                        </p>
                        <p>
                            For example, we might code something like:
                            <br />
                             \q1 God is my hope.
                            <br />
                             \q1 <b>≈</b>Yahweh gives me comfort.
                        </p>
                        <p>
                            <small>
                                <b>Note</b>: This is different from when the{' '}
                                <b>≈</b> character is used with the \add
                                character field (see above).
                            </small>
                        </p>
                        <h1>Bible Books Codes</h1>
                        <p>
                            When writing any Bible software, one of the first
                            requirements is for a list of Bible books codes .
                            It’s common to use <b>GEN</b> or <b>Gen</b> or{' '}
                            <b>Gn</b> or <b>gen</b> for <i>Genesis</i>, but what
                            about Exodus? <b>EXO</b> or <b>Exo</b> or <b>exo</b>{' '}
                            or <b>EX</b> or <b>Ex</b> or <b>ex</b> or{' '}
                            <b>EXOD</b> or <b>Exod</b> or <b>exod</b>? The{' '}
                            <em>BibleOrgSys</em>{' '}
                            <Link href='https://github.com/Freely-Given-org/BibleBooksCodes'>
                                Bible books codes
                            </Link>
                            :
                            <ul>
                                <li>
                                    are always exactly three characters and
                                    always UPPERCASE, e.g., <b>GEN</b>,{' '}
                                    <b>EXO</b>
                                </li>
                                <li>
                                    always start with a letter, e.g., <b>KI1</b>
                                    , <b>PE2</b>
                                </li>
                                <li>
                                    include codes for ‘books’ beyond the
                                    sixty-six in the modern Western protestant
                                    tradition, e.g., <b>TOB</b>, <b>LAO</b>
                                </li>
                                <li>
                                    include codes for unusual cases like{' '}
                                    <b>SAM</b> (which would be <b>SA1</b> and{' '}
                                    <b>SA2</b> (since we're no longer restricted
                                    by how big or heavy a single scroll can
                                    be—the revolutionary, new <em>OET</em>
                                     always considers traditions and whether or
                                    not they still need to apply)
                                </li>
                            </ul>
                        </p>
                    </MainPageContent>
                </Page>
            </Main>
            <Footer />
        </>
    );
}

export default Formats;
