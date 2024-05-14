'use client';

import { Link } from '@mui/material';
import NextLink from 'next/link';

import styles from './FAQ.module.scss';
import MainPageContent from '../../../Components/page/MainPageContent/MainPageContent';
import Page from '../../../Components/page/page';
import Footer from '../../../Layouts/Footer/Footer';
import Header from '../../../Layouts/Header/Header';
import Main from '../../../Layouts/main/main';

function FAQ() {
    return (
        <>
            <Header />
            <Main>
                <Page>
                    <MainPageContent>
                        <p id='FAQTop' className={styles.FAQContentEntry}>
                            See our{' '}
                            <Link href='/Design/Overview'>overview page</Link>{' '}
                            for information about the <em>OET</em> translation
                            philosophy and the various <em>OET</em> versions.
                        </p>
                        <p>
                            Note: Some of the design of the <em>OET</em> is
                            still in flux, so please regard the answers to these
                            FAQs as current snapshots only.
                        </p>
                        <p>
                            Use the{' '}
                            <Link href='/About/Contact'>contact page</Link> to
                            submit additional questions.
                        </p>
                        <h1>Frequently Asked Questions</h1>
                        <p className={styles.FAQContentEntry}>
                            <Link
                                component={NextLink}
                                href='#Download'
                                passHref
                            >
                                Where can I download the <em>OET</em> from?
                            </Link>
                        </p>
                        <p className={styles.FAQContentEntry}>
                            <Link component={NextLink} href='#SoLong' passHref>
                                Why’s the <em>OET</em> taking so long?
                            </Link>
                        </p>
                        <p className={styles.FAQContentEntry}>
                            <Link component={NextLink} href='#SoMany'>
                                Why are there so many translations?
                            </Link>
                        </p>
                        <p className={styles.FAQContentEntry}>
                            <Link
                                component={NextLink}
                                href='#Different'
                                passHref
                            >
                                Why is the <em>OET</em> different from other
                                translations?
                            </Link>
                        </p>
                        <p className={styles.FAQContentEntry}>
                            <Link component={NextLink} href='#Dialect' passHref>
                                Which English dialect and spelling system does
                                the <em>OET</em> use?
                            </Link>
                        </p>
                        <p className={styles.FAQContentEntry}>
                            <Link
                                component={NextLink}
                                href='#Anachronisms'
                                passHref
                            >
                                Isn’t the <em>OET</em> anachronistic when it
                                uses modern concepts that didn’t exist back in
                                Bible times?
                            </Link>
                        </p>
                        <p className={styles.FAQContentEntry}>
                            <Link component={NextLink} href='#Why' passHref>
                                Why is the <em>OET</em> even needed?
                            </Link>
                        </p>
                        <p className={styles.FAQContentEntry}>
                            <Link component={NextLink} href='#OTNT' passHref>
                                Why doesn’t the <em>OET</em> use the names{' '}
                                <em>Old Testament</em> and{' '}
                                <em>New Testament</em>?
                            </Link>
                        </p>
                        <p className={styles.FAQContentEntry}>
                            <Link component={NextLink} href='#CV' passHref>
                                Why does the <em>OET</em> downplay chapter and
                                verse numbers?
                            </Link>
                        </p>
                        <p className={styles.FAQContentEntry}>
                            <Link component={NextLink} href='#Tags' passHref>
                                Why does the <em>OET</em> have funny characters
                                in the files?
                            </Link>
                        </p>
                        <p className={styles.FAQContentEntry}>
                            <Link
                                component={NextLink}
                                href='#BookOrder'
                                passHref
                            >
                                Why does the <em>OET</em> have the books in a
                                different order?
                            </Link>
                        </p>
                        <p className={styles.FAQContentEntry}>
                            <Link component={NextLink} href='#ReleaseDate'>
                                When is the expected release date?
                            </Link>
                        </p>
                        <p className={styles.FAQContentEntry}>
                            <Link href='#SourceFiles'>
                                What is the format of the source files?
                            </Link>
                        </p>
                        <p className={styles.FAQContentEntry}>
                            <Link component={NextLink} href='#License' passHref>
                                What license does the <em>OET</em> have?
                            </Link>
                        </p>
                        <p className={styles.FAQContentEntry}>
                            <Link href='#Editor'>
                                Which Bible editor do you use?
                            </Link>
                        </p>
                        <p className={styles.FAQContentEntry}>
                            <Link
                                component={NextLink}
                                href='#VersionsEditions'
                                passHref
                            >
                                What’s the difference between <i>versions</i>{' '}
                                and <i>editions</i>?
                            </Link>
                        </p>
                        <p className={styles.FAQContentEntry}>
                            <Link component={NextLink} href='#LVQ' passHref>
                                <b>Literal Version</b> questions
                            </Link>
                        </p>
                        <p className={styles.FAQContentEntry}>
                            <Link component={NextLink} href='#RVQ' passHref>
                                <b>Readers’ Version</b> questions
                            </Link>
                        </p>
                        <p className={styles.FAQContentEntry}>
                            <Link component={NextLink} href='#CVQ' passHref>
                                <b>Colloquial Version</b> questions
                            </Link>
                        </p>
                        <p className={styles.FAQContentEntry}>
                            <Link component={NextLink} href='#SVQ' passHref>
                                <b>Study Version</b> questions
                            </Link>
                        </p>
                        <p className={styles.FAQContentEntry}>
                            <Link component={NextLink} href='#EVQ' passHref>
                                <b>Extended Version</b> questions
                            </Link>
                        </p>
                        <p className={styles.FAQContentEntry}>
                            See our{' '}
                            <Link href='/Design/Overview'>overview page</Link>{' '}
                            for information about the <em>OET</em> translation
                            philosophy and the various <em>OET</em> versions.
                        </p>
                        <p>
                            [
                            <Link component={NextLink} href='#FAQTop'>
                                Back to top
                            </Link>
                            ]
                        </p>
                        <h1>Answers</h1>
                        <h2 className={styles.FAQ} id='Download'>
                            Where can I download the <em>OET</em> from?
                        </h2>
                        <p className={styles.FAQAnswer}>
                            The <em>OET</em> translation isn’t completed yet so
                            it’s not yet available. However, more information
                            can be found on the{' '}
                            <Link component={NextLink} href='Downloads/'>
                                Downloads page
                            </Link>
                            .
                        </p>
                        <p>
                            [
                            <Link component={NextLink} href='#FAQTop'>
                                Back to top
                            </Link>
                            ]
                        </p>
                        <h2 className={styles.FAQ} id='SoLong'>
                            Why’s the <em>OET</em> taking so long?
                        </h2>
                        <p className={styles.FAQAnswer}>
                            After briefly getting started back in 2010, the{' '}
                            <em>OET</em> translation has been on hold for
                            several years as we were asked to help with other
                            projects, but we were finally able to resume
                            full-time work on the <em>OET</em> in July 2022. Any
                            Bible translation takes several years of work, but
                            the first draft of the New Testament was completed
                            in March 2024, and Old Testament translation is
                            ongoing. Further progress depends on how many
                            volunteers we can recruit to help. (For example,
                            without any other software developers, time has to
                            be taken off translation to develop sample websites
                            and apps in order to even display the first draft.)
                        </p>
                        <p>
                            [
                            <Link component={NextLink} href='#FAQTop'>
                                Back to top
                            </Link>
                            ]
                        </p>
                        <h2 className={styles.FAQ} id='SoMany'>
                            Why are there so many translations?
                        </h2>
                        <p className={styles.FAQAnswer}>
                            Well, Christians have a long history of devotion to
                            the task of making the Bible available in a language
                            that people can easily understand—many suffered and
                            some even died in their zeal to make the scriptures
                            available to others.
                        </p>
                        <p className={styles.FAQAnswer}>
                            However, assuming that you’re really asking about
                            ENGLISH translations here, there are two main
                            reasons:
                        </p>
                        <ol>
                            <li>
                                <b>Language changes.</b> Words change meaning.
                                Some old words and grammatical forms drop out of
                                common use. Some old words gain new shades of
                                meaning and new words are introduced. So a dated
                                translation may not speak well to the current
                                generation and new translations are required.
                            </li>
                            <li>
                                <b>
                                    Translations target a particular audience.
                                </b>{' '}
                                There are many decisions to be made when doing a
                                translation, and the translators usually follow
                                a series of policies which are decided by
                                thinking about what audience they are hoping to
                                reach. The best Bible for a teenager to use for
                                personal reading and devotions may not be the
                                same one that a Bible teacher will want to
                                preach from. Protestants may make different
                                translation decisions from Catholics, and
                                similarly for other distinct groups. A
                                publishing company might want to target a
                                certain segment of the market. Hence, many
                                different translations arise.
                            </li>
                        </ol>
                        <p className={styles.FAQAnswer}>
                            Someone once said, “
                            <em>
                                Reading a translation is like looking at the
                                back of a tapestry.
                            </em>
                            ” While we strongly encourage the study of the
                            Jewish and Christian scriptures in the original
                            languages, this isn’t practical for everyone. Hence
                            we need translations into our modern languages
                            despite the shortfalls (and potential confusion).
                        </p>
                        <p>
                            [
                            <Link component={NextLink} href='#FAQTop'>
                                Back to top
                            </Link>
                            ]
                        </p>
                        <h2 className={styles.FAQ} id='Different'>
                            Why is the <em>OET</em> different from other
                            translations?
                        </h2>
                        <p className={styles.FAQAnswer}>
                            Well, there are several reasons:
                        </p>
                        <ul>
                            <li>
                                It is a 21<sup>st</sup> century translation so
                                it is designed to be relevant and up-to-date
                            </li>
                            <li>
                                It is freely available and can be used on paper
                                as well as in all media and digital productions;
                                even used as a base for a derivative work
                            </li>
                            <li>
                                The <em>OET</em> consists of multiple versions
                                with different goals and purposes that are
                                intended to be used together as a set
                            </li>
                            <li>
                                Because it’s not a profit-making venture, it can
                                afford to deviate from some (unfortunate or
                                outdated) past translation precedents and
                                traditions without being concerned about any
                                offence creating a shortfall of sales.
                            </li>
                        </ul>
                        <p>
                            [
                            <Link component={NextLink} href='#FAQTop'>
                                Back to top
                            </Link>
                            ]
                        </p>
                        <h2 className={styles.FAQ} id='Dialect'>
                            Which English dialect and spelling system does the
                            <em>OET</em> use?
                        </h2>
                        <p className={styles.FAQAnswer}>
                            Ha, yaright, mate! No, we’re not wanting to use
                            slang, but we do aim to avoid churchified language
                            if there’s a more natural way to express Biblical
                            concepts in the language of a responsible adult at
                            work.
                        </p>
                        <p className={styles.FAQAnswer}>
                            Although the base versions use British spelling, we
                            also plan to make variants available using US
                            spelling and units, etc.
                        </p>
                        <p>
                            [
                            <Link component={NextLink} href='#FAQTop'>
                                Back to top
                            </Link>
                            ]
                        </p>
                        <h2 className={styles.FAQ} id='Anachronisms'>
                            Isn’t the <em>OET</em> anachronistic when it uses
                            modern concepts that didn’t exist back in Bible
                            times?
                        </h2>
                        <p className={styles.FAQAnswer}>
                            Yes, that’s a fair question and one that we have to
                            admit to. It’s a compromise that we feel is
                            worthwile because of our priority goal of making the
                            Bible more easily understandable for current
                            generations.
                        </p>
                        <p className={styles.FAQAnswer}>
                            But, of course, NO English words at all existed back
                            in Biblical times, so there’ll always be a cultural
                            misfit. For example, all English translations use
                            the words ‘priest’ and ‘soldier’, but those Biblical
                            roles were a very long way from the work of modern
                            priests and soldiers, so the reader ALWAYS has to be
                            making cultural adjustments when reading ancient
                            texts and their translations.
                        </p>
                        <p>
                            [
                            <Link component={NextLink} href='#FAQTop'>
                                Back to top
                            </Link>
                            ]
                        </p>
                        <h2 className={styles.FAQ} id='Why'>
                            Why is the <em>OET</em> even needed?
                        </h2>
                        <p className={styles.FAQAnswer}></p>
                        <ol>
                            <li>
                                <b>Need in non-English-speaking countries</b>:
                                There are many parts of the world now where
                                English is spoken as a lingua franca or language
                                of wider communication. Sometimes English skills
                                become helpful to gain employment or even just
                                to show increased status. Sometimes when
                                different groups meet (even at a church
                                meeting), English can become their common
                                language for worship or preaching. In some
                                cases, translators of a local language will wish
                                to publish a diglot—two languages side-by-side
                                in a printed version. In that case, it’s not
                                unusual for people to even learn English by
                                comparing the Bible text in their language with
                                the English translation beside it. A freely
                                available English translation would make all of
                                the above scenarios possible without being
                                dependent on the whims of the copyright owner of
                                the English translation.
                            </li>
                            <li>
                                <b>Need in English-speaking countries</b>: If
                                you look inside a typical major-language Bible,
                                you will find a copyright notice along with
                                permission given to quote a limited number of
                                verses. This would normally allow you to copy a
                                few verses into your church bulletin, but would
                                not normally allow you to publish a Bible-study
                                with the full Bible text conveniently included.
                                The <em>OET</em> would allow churches and other
                                groups to freely publish Bible studies,
                                Scriptural songs, and other similar materials
                                without having to try to first obtain written
                                permission.
                            </li>
                        </ol>
                        <p>
                            [
                            <Link component={NextLink} href='#FAQTop'>
                                Back to top
                            </Link>
                            ]
                        </p>
                        <h2 className={styles.FAQ} id='OTNT'>
                            Why doesn’t the{' '}
                            <em>OET Explorers’ Edition (OET-EE)</em> use the
                            names <em>Old Testament</em> and{' '}
                            <em>New Testament</em>?
                        </h2>
                        <p className={styles.FAQAnswer}>
                            Although these names are indeed very familiar, they
                            are often confusing and somewhat misleading for
                            modern readers. In current useage, we really are
                            only likely to use the term <em>Testament</em> when
                            we’re talking about someone’s will. Also, the term{' '}
                            <em>New</em> might wrongly imply that the{' '}
                            <em>Old</em> is no longer relevant. Hence the{' '}
                            <em>OET</em> actively tries to discard this
                            terminology.
                        </p>
                        <h2 className={styles.FAQ} id='CV'>
                            Why does the <em>OET</em> downplay chapter and verse
                            numbers?
                        </h2>
                        <p className={styles.FAQAnswer}>
                            Have you heard someone say, “This verse says, ...”?
                            Well, verses are a purely artificial (and not
                            particularly well thought-out) way of dividing the
                            Bible text, and verses themselves don’t <em>say</em>{' '}
                            anything! They are useful for guiding people to the
                            correct area of the Bible, but unfortunately they
                            have also greatly assisted in the unfortunate habit
                            of people quoting short Bible segments completely
                            out of context. Since the <em>OET</em> aims to try
                            to head in a new direction, we want to discourage
                            the use of small snippets out of context, and this
                            is one way that we can help do it.
                        </p>
                        <p>
                            [
                            <Link component={NextLink} href='#FAQTop'>
                                Back to top
                            </Link>
                            ]
                        </p>
                        <h2 className={styles.FAQ} id='Tags'>
                            Why does the <em>OET</em> have funny characters in
                            the files?
                        </h2>
                        <p className={styles.FAQAnswer}>
                            The <em>Literal Version (OET-LV)</em> uses underline
                            characters to join words which are represented by
                            one word in the original language. For example,{' '}
                            <em>he_said</em> would indicate that these two
                            English words are represented by just one word in
                            the original language and there is no separate word
                            specifying who is the <em>he</em>. The <em>OET</em>
                             also includes grammatical and semantic tagging. For
                            example, if the text says <em>
                                gave it to him
                            </em>{' '}
                            the <em>OET</em> will attempt to mark or tag what
                            the <em>it</em> is and who the <em>him</em> is. This
                            tagging is done in the text files using special
                            characters, e.g., <em>him=PDavid</em> tells us that
                            the <em>him</em> referred to is the person David. A
                            full list of tags and special characters can be
                            found{' '}
                            <Link
                                component={NextLink}
                                href='https://github.com/Freely-Given-org/ESFM'
                            >
                                here
                            </Link>
                            . Note also that a stripped copy of the files will
                            eventually also be provided on the{' '}
                            <Link component={NextLink} href='Downloads/'>
                                Downloads page
                            </Link>
                            .
                        </p>
                        <p>
                            [
                            <Link component={NextLink} href='#FAQTop'>
                                Back to top
                            </Link>
                            ]
                        </p>
                        <h2 className={styles.FAQ} id='BookOrder'>
                            Why does the <em>OET</em> have the books in a
                            different order?
                        </h2>
                        <p className={styles.FAQAnswer}>
                            Well yeah, tradition is a wonderful thing, and you
                            can be assured that there will be a variant with
                            some more traditional design decisions like the
                            traditional book order. However, there’s also no
                            need to be shackled to tradition. Remember that many
                            Bible ‘books’ started as individual scrolls. Some
                            writings were split so those scrolls wouldn’t be too
                            physically big and heavy, and we may join them
                            togther again, e.g., 1 &amp; 2 Samuel. The default
                            <em>OET</em> New Testament will begin with John’s
                            account, which also has the advantage of placing
                            Luke’s two accounts right after each other.
                        </p>
                        <p>
                            [
                            <Link component={NextLink} href='#FAQTop'>
                                Back to top
                            </Link>
                            ]
                        </p>
                        <h2 className={styles.FAQ} id='ReleaseDate'>
                            When is the expected release date?
                        </h2>
                        <p className={styles.FAQAnswer}>
                            Actually, it’s release <em>dates</em> since there’s
                            five versions. It is planned to develop the{' '}
                            <em>Literal Version</em>, the{' '}
                            <em>Readers’ Version</em>, and perhaps also the{' '}
                            <em>Colloquial Version</em> simultaneously, and the
                            first draft of the New Testament was completed in
                            March 2024, with the Old Testament draft planned by
                            2028. The Study Version and the Extended Version
                            will also be developed together, but not until after
                            the V1.0 release of the first two versions, so no
                            time frame is available for them yet. But if we can
                            recruit more{' '}
                            <Link
                                component={NextLink}
                                href='https://Freely-Given.org/Opportunities.html'
                            >
                                volunteers
                            </Link>
                            , it would be nice to speed up the progress.
                        </p>
                        <p>
                            [
                            <Link component={NextLink} href='#FAQTop'>
                                Back to top
                            </Link>
                            ]
                        </p>
                        <h2 className={styles.FAQ} id='SourceFiles'>
                            What is the format of the source files?
                        </h2>
                        <p className={styles.FAQAnswer}>
                            The <em>OET</em> source files use our own{' '}
                            <Link
                                component={NextLink}
                                href='https://Freely-Given.org/Software/BibleDropBox/ESFMBibles.html'
                            >
                                ESFM
                            </Link>{' '}
                            format, which are human-readable Unicode text files
                            with embedded semantic markers. But each version
                            will be available in multiple exported formats for
                            download, including text,{' '}
                            <Link
                                component={NextLink}
                                href='https://www.libreoffice.org'
                            >
                                LibreOffice
                            </Link>{' '}
                            /
                            <Link
                                component={NextLink}
                                href='https://www.openoffice.org'
                            >
                                OpenOffice
                            </Link>{' '}
                            (
                            <Link
                                component={NextLink}
                                href='https://en.wikipedia.org/wiki/OpenDocument'
                            >
                                ODF
                            </Link>
                            ), and{' '}
                            <Link
                                component={NextLink}
                                href='https://en.wikipedia.org/wiki/Pdf'
                            >
                                PDF
                            </Link>{' '}
                            files (both of individual books and of entire
                            versions),{' '}
                            <Link
                                component={NextLink}
                                href='https://Freely-Given.org/Software/BibleDropBox/USFMBibles.html'
                            >
                                USFM
                            </Link>{' '}
                            and{' '}
                            <Link
                                component={NextLink}
                                href='https://Freely-Given.org/Software/BibleDropBox/USXBibles.html'
                            >
                                USX
                            </Link>{' '}
                            files,{' '}
                            <Link
                                component={NextLink}
                                href='https://Freely-Given.org/Software/BibleDropBox/OSISBibles.html'
                            >
                                OSIS
                            </Link>{' '}
                            files, and{' '}
                            <Link
                                component={NextLink}
                                href='https://www.idpf.org'
                            >
                                Epub electronic book
                            </Link>{' '}
                            files.
                        </p>
                        <p>
                            [
                            <Link component={NextLink} href='#FAQTop'>
                                Back to top
                            </Link>
                            ]
                        </p>
                        <h2 className={styles.FAQ} id='License'>
                            What license does the <em>OET</em> have?
                        </h2>
                        <p className={styles.FAQAnswer}>
                            It’s currently being released under a{' '}
                            <Link
                                component={NextLink}
                                href='https://CreativeCommons.org/About'
                            >
                                Creative Commons
                            </Link>{' '}
                            <Link
                                component={NextLink}
                                href='https://CreativeCommons.org/licenses/by-sa/4.0/'
                            >
                                ‘share-alike’ license
                            </Link>{' '}
                            with a future plan to put it all into the{' '}
                            <Link
                                component={NextLink}
                                href='https://wiki.creativecommons.org/Public_domain'
                            >
                                public domain
                            </Link>
                            . See our <Link href='/About/Licence'>Licence</Link>{' '}
                            page.
                        </p>
                        <p>
                            [
                            <Link component={NextLink} href='#FAQTop'>
                                Back to top
                            </Link>
                            ]
                        </p>
                        <h2 className={styles.FAQ} id='Editor'>
                            Which Bible editor do you use?
                        </h2>
                        <p className={styles.FAQAnswer}>
                            We use our own{' '}
                            <Link
                                component={NextLink}
                                href='https://Freely-Given.org/Software/Biblelator/'
                            >
                                Biblelator
                            </Link>{' '}
                            Bible-translation editor which is still being
                            developed, but which already has most of the tools
                            working to enable Old Testament translation (still
                            no interlinear Greek resources).
                        </p>
                        <h2 className={styles.FAQ} id='VersionsEditions'>
                            What’s the difference between <i>versions</i> and{' '}
                            <i>editions</i>?
                        </h2>
                        <p className={styles.FAQAnswer}>
                            <em>Versions</em> refers to the words or the text
                            itself. They’re different versions of the actual
                            translation. <em>Editions</em> refers to the
                            publication, i.e., a book or webpage or PDF. They’re
                            different Bible productions that might be in
                            different fonts or paper sizes and/or contain a
                            different combination of versions.
                        </p>
                        <p>
                            [
                            <Link component={NextLink} href='#FAQTop'>
                                Back to top
                            </Link>
                            ]
                        </p>
                        <h1 id='LVQ'>Literal Version Questions</h1>
                        <p className={styles.FAQContentEntry}>
                            <Link href='#LVAim'>
                                Who is the <em>Literal Version</em> intended
                                for?
                            </Link>
                        </p>
                        <p className={styles.FAQContentEntry}>
                            <Link component={NextLink} href='#LVWoody'>
                                Why doesn’t the <em>Literal Version</em> sound
                                very fluent or natural?
                            </Link>
                        </p>
                        <h2 className={styles.FAQ} id='LVAim'>
                            Who is the <em>Literal Version</em> intended for?
                        </h2>
                        <p className={styles.FAQAnswer}>
                            The <em>OET-LV</em> is intended to help the English
                            reader get a good understanding of what is actually
                            written in the original languages without needing to
                            have a good understanding of Hebrew, Aramaic, and
                            Greek.
                        </p>
                        <h2 className={styles.FAQ} id='LVWoody'>
                            Why doesn’t the <em>Literal Version</em> sound very
                            fluent or natural?
                        </h2>
                        <p className={styles.FAQAnswer}>
                            Yes, we call that the <em>woody</em> feeling. The{' '}
                            <em>OET-LV</em> is designed to closely follow the
                            wording used in the original languages, instead of
                            using modern English expressions. This makes it
                            appear to sound <em>old-fashioned</em>, but the
                            reason for leaving it that way is to help the
                            serious student be able to get a good look at what
                            is actually written in the originals. Use the{' '}
                            <b>Readers’ Version</b> if you want something that’s
                            nicer to read.
                        </p>
                        <p>
                            [
                            <Link component={NextLink} href='#LVQ'>
                                Back to Literal Version top
                            </Link>
                            ] &nbsp;&nbsp;&nbsp; [
                            <Link component={NextLink} href='#FAQTop'>
                                Back to FAQ top
                            </Link>
                            ]
                        </p>
                        <h1 id='RVQ'>Readers’ Version Questions</h1>
                        <p className={styles.FAQContentEntry}>
                            <Link component={NextLink} href='#RVAim'>
                                Who is the Readers’ Version intended for?
                            </Link>
                        </p>
                        <h2 className={styles.FAQ} id='RVAim'>
                            Who is the Readers’ Version intended for?
                        </h2>
                        <p className={styles.FAQAnswer}>
                            The <em>OET-RV</em> is intended for someone who
                            wants an easily-readable, modern English version of
                            the Bible. It’s particularly useful for getting an
                            overall view of the flow of the text without being
                            distracted by footnotes and other study tools, and
                            has been designed especially to reach out to
                            non-churched people.
                        </p>
                        <p>
                            [
                            <Link component={NextLink} href='#RVQ'>
                                Back to Readers’ Version top
                            </Link>
                            ] &nbsp;&nbsp;&nbsp; [
                            <Link component={NextLink} href='#FAQTop'>
                                Back to FAQ top
                            </Link>
                            ]
                        </p>
                        <h1 id='CVQ'>Colloquial Version Questions</h1>
                        <p className={styles.FAQContentEntry}>
                            <Link component={NextLink} href='#CVAim'>
                                Who is the Colloquial Version intended for?
                            </Link>
                        </p>
                        <h2 className={styles.FAQ} id='CVAim'>
                            Who is the Colloquial Version intended for?
                        </h2>
                        <p className={styles.FAQAnswer}>
                            The <em>OET-CV</em> is intended for someone who
                            wants an easily readable, very modern English
                            version of the Bible that’s especially easy for
                            young people to understand. It’s particularly useful
                            for getting an overall view of the flow of the text
                            for a generation who haven’t read as much as the
                            previous generation, and whose way of speech can be
                            quite different.
                        </p>
                        <p>
                            [
                            <Link component={NextLink} href='#CVQ'>
                                Back to Colloquial Version top
                            </Link>
                            ] &nbsp;&nbsp;&nbsp; [
                            <Link component={NextLink} href='#FAQTop'>
                                Back to FAQ top
                            </Link>
                            ]
                        </p>
                        <h1 id='SVQ'>Study Version Questions</h1>
                        <p className={styles.FAQContentEntry}>
                            <Link component={NextLink} href='#SVAim'>
                                Who is the Study Version intended for?
                            </Link>
                        </p>
                        <h2 className={styles.FAQ} id='SVAim'>
                            Who is the Study Version intended for?
                        </h2>
                        <p className={styles.FAQAnswer}>
                            The <em>OET-SV</em> is intended to help preacher or
                            serious student discover the subtle meanings of the
                            text, with helpful notes and cross-references.
                        </p>
                        <p>
                            [
                            <Link component={NextLink} href='#SVQ'>
                                Back to Study Version top
                            </Link>
                            ] &nbsp;&nbsp;&nbsp; [
                            <Link component={NextLink} href='#FAQTop'>
                                Back to FAQ top
                            </Link>
                            ]
                        </p>
                        <h1 id='EVQ'>Extended Version Questions</h1>
                        <p className={styles.FAQContentEntry}>
                            <Link component={NextLink} href='#EVAim'>
                                Who is the Extended Version intended for?
                            </Link>
                        </p>
                        <h2 className={styles.FAQ} id='EVAim'>
                            Who is the Extended Version intended for?
                        </h2>
                        <p className={styles.FAQAnswer}>
                            The <em>OET-EV</em> is intended to help the Bible
                            college lecturer or Bible translator with extended
                            notes (especially about source texts) and other
                            information.
                        </p>
                        <p>
                            [
                            <Link component={NextLink} href='#EVQ'>
                                Back to Extended Version top
                            </Link>
                            ] &nbsp;&nbsp;&nbsp; [
                            <Link component={NextLink} href='#FAQTop'>
                                Back to FAQ top
                            </Link>
                            ]
                        </p>
                        <p>
                            Use the{' '}
                            <Link component={NextLink} href='/About/Contact'>
                                contact page
                            </Link>{' '}
                            to submit additional questions.
                        </p>
                    </MainPageContent>
                </Page>
            </Main>
            <Footer />
        </>
    );
}

export default FAQ;
