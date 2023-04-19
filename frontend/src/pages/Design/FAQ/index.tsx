import Link from 'next/link';

import MainPageContent from '../../../Components/page/MainPageContent/MainPageContent';
import Page from '../../../Components/page/page';
import Footer from '../../../Layouts/Footer/Footer';
import Header from '../../../Layouts/Header/Header';
import Main from '../../../Layouts/main/main';
import styles from './FAQ.module.scss';

function FAQ() {
    return (
        <>
            <Header />
            <Main>
                <Page>
                    <MainPageContent>
                        <p id='FAQTop' className={styles.FAQContentEntry}>
                            See the{' '}
                            <Link href='Introduction.html'>
                                introduction page
                            </Link>{' '}
                            for information about the <em>OET</em> translation philosophy
                            and the various <em>OET</em> versions.
                        </p>
                        <p className={styles.FAQContentEntry}>
                            <Link href='#Name' passHref>
                                <a>
                                    Why is it called the{' '}
                                    <em>Open English Translation</em> of the
                                    Bible (OET)?
                                </a>
                            </Link>
                        </p>
                        <p className={styles.FAQContentEntry}>
                            <Link href='#Download'>
                                Where can I download the OET from?
                            </Link>
                        </p>
                        <p className={styles.FAQContentEntry}>
                            <Link href='#SoLong'>
                                Why’s the OET taking so long?
                            </Link>
                        </p>
                        <p className={styles.FAQContentEntry}>
                            <Link href='#SoMany'>
                                Why are there so many translations?
                            </Link>
                        </p>
                        <p className={styles.FAQContentEntry}>
                            <Link href='#Different'>
                                Why is the OET different from other
                                translations?
                            </Link>
                        </p>
                        <p className={styles.FAQContentEntry}>
                            <Link href='#Dialect'>
                                Which English dialect and spelling system will
                                the OET use?
                            </Link>
                        </p>
                        <p className={styles.FAQContentEntry}>
                            <Link href='#Why'>Why is the OET even needed?</Link>
                        </p>
                        <p className={styles.FAQContentEntry}>
                            <Link href='#OTNT' passHref>
                                <a>
                                    Why doesn’t the OET use the names{' '}
                                    <em>Old Testament</em> and{' '}
                                    <em>New Testament</em>?
                                </a>
                            </Link>
                        </p>
                        <p className={styles.FAQContentEntry}>
                            <Link href='#CV'>
                                Why does the OET downplay chapter and verse
                                numbers?
                            </Link>
                        </p>
                        <p className={styles.FAQContentEntry}>
                            <Link href='#Tags'>
                                Why does the OET have funny characters in the
                                files?
                            </Link>
                        </p>
                        <p className={styles.FAQContentEntry}>
                            <Link href='#BookOrder'>
                                Why does the OET have the books in a different
                                order?
                            </Link>
                        </p>
                        <p className={styles.FAQContentEntry}>
                            <Link href='#ReleaseDate'>
                                When is the expected release date?
                            </Link>
                        </p>
                        <p className={styles.FAQContentEntry}>
                            <Link href='#SourceFiles'>
                                What is the format of the source files?
                            </Link>
                        </p>
                        <p className={styles.FAQContentEntry}>
                            <Link href='#License'>
                                What license will the OET have?
                            </Link>
                        </p>
                        <p className={styles.FAQContentEntry}>
                            <Link href='#Editor'>
                                Which Bible editor do you use?
                            </Link>
                        </p>
                        <p className={styles.FAQContentEntry}>
                            <Link href='#VersionsEditions' passHref>
                                <a>
                                    What’s the difference between{' '}
                                    <i>versions</i> and <i>editions</i>?
                                </a>
                            </Link>
                        </p>
                        <p className={styles.FAQContentEntry}>
                            <Link href='#LVQ' passHref>
                                <a>
                                    <b>Literal Version</b> questions
                                </a>
                            </Link>
                        </p>
                        <p className={styles.FAQContentEntry}>
                            <Link href='#RVQ' passHref>
                                <a>
                                    <b>Readers’ Version</b> questions
                                </a>
                            </Link>
                        </p>
                        <p className={styles.FAQContentEntry}>
                            <Link href='#CVQ' passHref>
                                <a>
                                    <b>Colloquial Version</b> questions
                                </a>
                            </Link>
                        </p>
                        <p className={styles.FAQContentEntry}>
                            <Link href='#SVQ' passHref>
                                <a>
                                    <b>Study Version</b> questions
                                </a>
                            </Link>
                        </p>
                        <p className={styles.FAQContentEntry}>
                            <Link href='#EVQ' passHref>
                                <a>
                                    <b>Extended Version</b> questions
                                </a>
                            </Link>
                        </p>
                        <p className={styles.FAQContentEntry}>
                            See the{' '}
                            <Link href='Introduction.html'>
                                introduction page
                            </Link>{' '}
                            for information about the <em>OET</em> translation philosophy
                            and the various <em>OET</em> versions.
                        </p>
                        <p>
                            [<Link href='#FAQTop'>Back to top</Link>]
                        </p>
                        <h2 className={styles.FAQ} id='Name'>
                            Why is it called the{' '}
                            <em>Open English Translation</em> of the Bible
                            (OET)?
                        </h2>
                        <p className={styles.FAQAnswer}></p>
                        <ul>
                            <li>
                                <a>
                                    <b>Open</b> (unashamedly inspired by Free
                                    and Open Source software) expresses our
                                    desire to make it freely available for
                                    others to use or adapt in any way. We
                                    haven’t decided on a licence yet, so feel
                                    free to make suggestions. We’re also wanting
                                    to make it open in the sense of open for
                                    others to join in and help with (but that
                                    doesn’t mean that it would be open to
                                    everyone—just those who show a genuine
                                    interest and ability).
                                </a>
                            </li>
                            <li>
                                <a>
                                    <b>English</b> because it’ll be an English
                                    translation. (It seems a little ethnocentric
                                    to me to leave the language qualifier out of
                                    the title of a Bible translation, although
                                    it is true that in most cases that language
                                    of the title itself indicates the language
                                    of the translation.)
                                </a>
                            </li>
                            <li>
                                <a>
                                    <b>Translation</b> just to remind
                                    readers/users that it is indeed just a
                                    translation of the original Scriptures.
                                    (Again it seems a little deficient to me if
                                    a book called something like
                                    <em>The Holy Bible</em> doesn’t clearly
                                    remind its readers that it’s not the
                                    original.)
                                </a>
                            </li>
                        </ul>
                        <p>
                            [<Link href='#FAQTop'>Back to top</Link>]
                        </p>
                        <h2 className={styles.FAQ} id='Download'>
                            Where can I download the <em>OET</em> from?
                        </h2>
                        <p className={styles.FAQAnswer}>
                            The <em>OET</em> translation isn’t completed yet so it’s not
                            yet available. However, some sample files can be
                            found on the{' '}
                            <Link href='Downloads/'>Downloads page</Link>.
                        </p>
                        <p>
                            [<Link href='#FAQTop'>Back to top</Link>]
                        </p>
                        <h2 className={styles.FAQ} id='SoLong'>
                            Why’s the <em>OET</em> taking so long?
                        </h2>
                        <p className={styles.FAQAnswer}>
                            After briefly getting started back in 2010, the OET
                            translation has been on hold for several years as we
                            were asked to help with other projects, but we were
                            finally able to resume full-time work on the <em>OET</em> in
                            July 2023. Any Bible translation takes several years
                            of work, but we hope to have the first draft of the
                            New Testament by the end of 2023. Further progress
                            depends on how many volunteers we can recruit to
                            help. (For example, without any other software
                            developers, time has to be taken off translation to
                            develop sample websites and apps in order to even
                            display the first draft.)
                        </p>
                        <p>
                            [<Link href='#FAQTop'>Back to top</Link>]
                        </p>
                        <h2 className={styles.FAQ} id='SoMany'>
                            Why are there so many translations?
                        </h2>
                        <p className={styles.FAQAnswer}>
                            Well, Christians have a long history of devotion to
                            the task of making the Bible available in a language
                            that people can easily understand—many suffered and
                            some even died in their zeal to make the Scriptures
                            available to others.
                        </p>
                        <p className={styles.FAQAnswer}>
                            However, assuming that you’re really asking about
                            ENGLISH translations here, there are two main
                            reasons:
                        </p>
                        <ol>
                            <li>
                                <a>
                                    <b>Language changes.</b> Words change
                                    meaning. Some old words and grammatical
                                    forms drop out of common use. Some old words
                                    gain new shades of meaning and new words are
                                    introduced. So a dated translation may not
                                    speak well to the current generation and new
                                    translations are required.
                                </a>
                            </li>
                            <li>
                                <a>
                                    <b>
                                        Translations target a particular
                                        audience.
                                    </b>
                                    There are many decisions to be made when
                                    doing a translation, and the translators
                                    usually follow a series of policies which
                                    are decided by thinking about what audience
                                    they are hoping to reach. The best Bible for
                                    a teenager to use for personal reading and
                                    devotions may not be the same one that a
                                    Bible teacher will want to preach from.
                                    Protestants may make different translation
                                    decisions from Catholics, and similarly for
                                    other distinct groups. A publishing company
                                    might want to target a certain segment of
                                    the market. Hence, many different
                                    translations arise.
                                </a>
                            </li>
                        </ol>
                        <p className={styles.FAQAnswer}>
                            <a>
                                Someone once said, “
                                <em>
                                    Reading a translation is like looking at the
                                    back of a tapestry.
                                </em>
                                ” While we strongly encourage the study of the
                                Jewish and Christian scriptures in the original
                                languages, this isn’t practical for everyone.
                                Hence we need translations into our modern
                                languages despite the shortfalls (and potential
                                confusion).
                            </a>
                        </p>
                        <p>
                            [<Link href='#FAQTop'>Back to top</Link>]
                        </p>
                        <h2 className={styles.FAQ} id='Different'>
                            Why is the <em>OET</em> different from other translations?
                        </h2>
                        <p className={styles.FAQAnswer}>
                            Well, there are several reasons:
                        </p>
                        <ul>
                            <li>
                                It is a 21st century translation so it is
                                designed to be relevant and up-to-date
                            </li>
                            <li>
                                It is freely available and can be used on paper
                                as well as in all media and digital productions;
                                even used as a base for a derivative work
                            </li>
                            <li>
                                The <em>OET</em> consists of multiple versions with
                                different goals and purposes that are intended
                                to be used together as a set
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
                            [<Link href='#FAQTop'>Back to top</Link>]
                        </p>
                        <h2 className={styles.FAQ} id='Dialect'>
                            Which English dialect and spelling system will the
                            <em>OET</em> use?
                        </h2>
                        <p className={styles.FAQAnswer}>
                            Ha, yaright, mate! Although the base versions will
                            use British spelling, we also plan to make variants
                            available using US spelling and units, etc.
                        </p>
                        <p>
                            [<Link href='#FAQTop'>Back to top</Link>]
                        </p>
                        <h2 className={styles.FAQ} id='Why'>
                            Why is the <em>OET</em> even needed?
                        </h2>
                        <p className={styles.FAQAnswer}>
                            Since this is such an important question (especially
                            for potential prayer and financial supporters), the
                            answer is placed on
                            <Link href='Why.html'>this separate page</Link>.
                        </p>
                        <p>
                            [<Link href='#FAQTop'>Back to top</Link>]
                        </p>
                        <h2 className={styles.FAQ} id='OTNT'>
                            <a>
                                Why doesn’t the <em>OET</em> Explorer’s Edition (OET-EE)
                                use the names <em>Old Testament</em> and{' '}
                                <em>New Testament</em>?
                            </a>
                        </h2>
                        <p className={styles.FAQAnswer}>
                            <a>
                                Although these names are indeed very familiar,
                                they are often confusing and somewhat misleading
                                for modern readers. In current useage, we really
                                are only likely to use the term{' '}
                                <em>Testament</em>
                                when we’re talking about someone’s will. Also,
                                the term <em>New</em> might wrongly imply that
                                the <em>Old</em>
                                is no longer relevant. Hence the <em>OET</em> actively
                                tries to discard this terminology.
                            </a>
                        </p>
                        <h2 className={styles.FAQ} id='CV'>
                            Why does the <em>OET</em> downplay chapter and verse numbers?
                        </h2>
                        <p className={styles.FAQAnswer}>
                            <a>
                                Have you heard someone say, "This verse says,
                                ..."? Well, verses are a purely artificial (and
                                not particularly well thought-out) way of
                                dividing the Bible text, and verses themselves
                                don’t <em>say</em> anything! They are useful for
                                guiding people to the correct area of the Bible,
                                but unfortunately they have also greatly
                                assisted in the unfortunate habit of people
                                quoting short Bible segments completely out of
                                context. Since the <em>OET</em> aims to try to head in a
                                new direction, we want to discourage the use of
                                small snippets out of context, and this is one
                                way that we can help do it.
                            </a>
                        </p>
                        <p>
                            [<Link href='#FAQTop'>Back to top</Link>]
                        </p>
                        <h2 className={styles.FAQ} id='Tags'>
                            Why does the <em>OET</em> have funny characters in the files?
                        </h2>
                        <p className={styles.FAQAnswer}>
                            <a>
                                The <em>Literal Version</em> (OET-LV) uses
                                underline characters to join words which are
                                represented by one word in the original
                                language. For example, <em>he_said</em> would
                                indicate that these two English words are
                                represented by just one word in the original
                                language and there is no separate word
                                specifying who is the <em>he</em>. The <em>OET</em> also
                                includes grammatical and semantic tagging. For
                                example, if the text says{' '}
                                <em>gave it to him</em> the <em>OET</em> will attempt to
                                mark or tag what the <em>it</em> is and who the{' '}
                                <em>him</em> is. This tagging is done in the
                                text files using special characters, e.g.,{' '}
                                <em>him=PDavid</em> tells us that the{' '}
                                <em>him</em> referred to is the person David. A
                                full list of tags and special characters can be
                                found <Link href='Tags.html'>here</Link>. Note
                                also that a <em>clean</em> copy of the files is
                                also provided on the{' '}
                                <Link href='Downloads/'>Downloads page</Link>.
                            </a>
                        </p>
                        <p>
                            [<Link href='#FAQTop'>Back to top</Link>]
                        </p>
                        <h2 className={styles.FAQ} id='BookOrder'>
                            Why does the <em>OET</em> have the books in a different
                            order?
                        </h2>
                        <p className={styles.FAQAnswer}>
                            Well yeah, tradition is a wonderful thing, and you
                            can be assured that there will be a variant with
                            some more traditional design decisions like the
                            traditional book order. However, there’s also no
                            need to be shackled to tradition. Remember that many
                            Bible "books" started as individual scrolls. Some
                            writings were split so those scrolls wouldn’t be too
                            physically big and heavy, and we may join them
                            togther again, e.g., 1 &amp; 2 Samuel. The default
                            <em>OET</em> New Testament will begin with John’s account,
                            which also has the advantage of placing Luke’s two
                            accounts right after each other.
                        </p>
                        <p>
                            [<Link href='#FAQTop'>Back to top</Link>]
                        </p>
                        <h2 className={styles.FAQ} id='ReleaseDate'>
                            When is the expected release date?
                        </h2>
                        <p className={styles.FAQAnswer}>
                            <a>
                                Actually, it’s release <em>dates</em> since
                                there’s five versions. It is planned to develop
                                the <em>Literal Version</em>, the{' '}
                                <em>Readers’ Version</em>, and perhaps also the{' '}
                                <em>Colloquial Version</em> simultaneously, and
                                we hope to make some preliminary books available
                                by the mid-2023, with the Old Testament being
                                released by the end of 2025. The Study Version
                                and the Extended Version will also be developed
                                together, but not until after the V1.0.0 release
                                of the first three versions, so no time frame is
                                available for them yet. But if we can recruit
                                more{' '}
                                <Link href='../../../Opportunities.html'>
                                    volunteers
                                </Link>
                                , it would be nice to speed up the progress.
                            </a>
                        </p>
                        <p>
                            [<Link href='#FAQTop'>Back to top</Link>]
                        </p>
                        <h2 className={styles.FAQ} id='SourceFiles'>
                            What is the format of the source files?
                        </h2>
                        <p className={styles.FAQAnswer}>
                            The <em>OET</em> source files use our own
                            <Link href='../../../Software/BibleDropBox/ESFMBibles.html'>
                                ESFM
                            </Link>
                            format, which are human-readable Unicode text files
                            with embedded semantic markers. But each version
                            will be available in multiple exported formats for
                            download, including text,
                            <Link href='https://www.libreoffice.org'>
                                LibreOffice
                            </Link>
                            /
                            <Link href='https://www.openoffice.org'>
                                OpenOffice
                            </Link>{' '}
                            (
                            <Link href='https://en.wikipedia.org/wiki/OpenDocument'>
                                ODF
                            </Link>
                            ), and{' '}
                            <Link href='https://en.wikipedia.org/wiki/Pdf'>
                                PDF
                            </Link>{' '}
                            files (both of individual books and of entire
                            versions),
                            <Link href='../../../Software/BibleDropBox/USFMBibles.html'>
                                USFM
                            </Link>
                            and{' '}
                            <Link href='../../../Software/BibleDropBox/USXBibles.html'>
                                USX
                            </Link>{' '}
                            files,
                            <Link href='../../../Software/BibleDropBox/OSISBibles.html'>
                                OSIS
                            </Link>{' '}
                            files, and{' '}
                            <Link href='https://www.idpf.org'>
                                Epub electronic book
                            </Link>{' '}
                            files
                        </p>
                        <p>
                            [<Link href='#FAQTop'>Back to top</Link>]
                        </p>
                        <h2 className={styles.FAQ} id='License'>
                            What license will the <em>OET</em> have?
                        </h2>
                        <p className={styles.FAQAnswer}>
                            It’s still being decided whether to use a{' '}
                            <Link href='https://creativecommons.org/About'>
                                Creative Commons
                            </Link>{' '}
                            <Link href='https://creativecommons.org/licenses/by-sa/3.0/'>
                                "share-alike" license
                            </Link>
                            or to put the translation into the{' '}
                            <Link href='https://wiki.creativecommons.org/Public_domain'>
                                public domain
                            </Link>
                            .
                        </p>
                        <p>
                            [<Link href='#FAQTop'>Back to top</Link>]
                        </p>
                        <h2 className={styles.FAQ} id='Editor'>
                            Which Bible editor do you use?
                        </h2>
                        <p className={styles.FAQAnswer}>
                            We use our own{' '}
                            <Link href='../../../Software/Biblelator/'>
                                Biblelator editor
                            </Link>{' '}
                            Bible translation editor which is still being
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
                            translation.
                            <em>Editions</em> refers to the publication, i.e., a
                            book or webpage or PDF. They’re different Bible
                            productions that might be in different fonts or
                            paper sizes and/or contain a different combination
                            of versions.
                        </p>
                        <p>
                            [<Link href='#FAQTop'>Back to top</Link>]
                        </p>
                        <h1 id='LVQ'>Literal Version Questions</h1>
                        <p className={styles.FAQContentEntry}>
                            <Link href='#LVAim'>
                                <a>
                                    Who is the <em>Literal Version</em> intended
                                    for?
                                </a>
                            </Link>
                        </p>
                        <p className={styles.FAQContentEntry}>
                            <Link href='#LVWoody'>
                                <a>
                                    Why doesn’t the <em>Literal Version</em>{' '}
                                    sound very fluent or natural?
                                </a>
                            </Link>
                        </p>
                        <h2 className={styles.FAQ} id='LVAim'>
                            Who is the <em>Literal Version</em> intended for?
                        </h2>
                        <p className={styles.FAQAnswer}>
                            The OET-LV is intended to help the English reader
                            get a good understanding of what is actually written
                            in the original languages without needing to have a
                            good understanding of Hebrew, Aramaic, and Greek.
                        </p>
                        <h2 className={styles.FAQ} id='LVWoody'>
                            Why doesn’t the <em>Literal Version</em> sound very
                            fluent or natural?
                        </h2>
                        <p className={styles.FAQAnswer}>
                            <a>
                                Yes, we call that the <em>woody</em> feeling.
                                The OET-LV is designed to closely follow the
                                wording used in the original languages, instead
                                of using modern English expressions. This makes
                                it appear to sound <em>old-fashioned</em>, but
                                the reason for leaving it that way is to help
                                the serious student be able to get a good look
                                at what is actually written in the originals.
                                Use the <b>Readers’ Version</b> if you want
                                something that’s nicer to read.
                            </a>
                        </p>
                        <p>
                            [
                            <Link href='#LVQ'>Back to Literal Version top</Link>
                            ] &nbsp;&nbsp;&nbsp; [
                            <Link href='#FAQTop'>Back to FAQ top</Link>]
                        </p>
                        <h1 id='RVQ'>Readers’ Version Questions</h1>
                        <p className={styles.FAQContentEntry}>
                            <Link href='#RVAim'>
                                Who is the Readers’ Version intended for?
                            </Link>
                        </p>
                        <h2 className={styles.FAQ} id='RVAim'>
                            Who is the Readers’ Version intended for?
                        </h2>
                        <p className={styles.FAQAnswer}>
                            The OET-RV is intended for someone who wants an
                            easily readable, modern English version of the
                            Bible. It’s particularly useful for getting an
                            overall view of the flow of the text without being
                            distracted by footnotes and other study tools.
                        </p>
                        <p>
                            [
                            <Link href='#RVQ'>
                                Back to Readers’ Version top
                            </Link>
                            ] &nbsp;&nbsp;&nbsp; [
                            <Link href='#FAQTop'>Back to FAQ top</Link>]
                        </p>
                        <h1 id='CVQ'>Colloquial Version Questions</h1>
                        <p className={styles.FAQContentEntry}>
                            <Link href='#CVAim'>
                                Who is the Colloquial Version intended for?
                            </Link>
                        </p>
                        <h2 className={styles.FAQ} id='CVAim'>
                            Who is the Colloquial Version intended for?
                        </h2>
                        <p className={styles.FAQAnswer}>
                            The OET-CV is intended for someone who wants an
                            easily readable, very modern English version of the
                            Bible that’s especially easy for young people to
                            understand. It’s particularly useful for getting an
                            overall view of the flow of the text for a
                            generation who haven’t read as much as the previous
                            generation, and whose way of speech can be quite
                            different.
                        </p>
                        <p>
                            [
                            <Link href='#CVQ'>
                                Back to Colloquial Version top
                            </Link>
                            ] &nbsp;&nbsp;&nbsp; [
                            <Link href='#FAQTop'>Back to FAQ top</Link>]
                        </p>
                        <h1 id='SVQ'>Study Version Questions</h1>
                        <p className={styles.FAQContentEntry}>
                            <Link href='#SVAim'>
                                Who is the Study Version intended for?
                            </Link>
                        </p>
                        <h2 className={styles.FAQ} id='SVAim'>
                            Who is the Study Version intended for?
                        </h2>
                        <p className={styles.FAQAnswer}>
                            The OET-SV is intended to help preacher or serious
                            student discover the subtle meanings of the text,
                            with helpful notes and cross-references.
                        </p>
                        <p>
                            [<Link href='#SVQ'>Back to Study Version top</Link>]
                            &nbsp;&nbsp;&nbsp; [
                            <Link href='#FAQTop'>Back to FAQ top</Link>]
                        </p>
                        <h1 id='EVQ'>Extended Version Questions</h1>
                        <p className={styles.FAQContentEntry}>
                            <Link href='#EVAim'>
                                Who is the Extended Version intended for?
                            </Link>
                        </p>
                        <h2 className={styles.FAQ} id='EVAim'>
                            Who is the Extended Version intended for?
                        </h2>
                        <p className={styles.FAQAnswer}>
                            The OET-EV is intended to help the Bible college
                            lecturer or Bible translator with extended notes
                            (especially about source texts) and other
                            information.
                        </p>
                        <p>
                            [
                            <Link href='#EVQ'>
                                Back to Extended Version top
                            </Link>
                            ] &nbsp;&nbsp;&nbsp; [
                            <Link href='#FAQTop'>Back to FAQ top</Link>]
                        </p>
                    </MainPageContent>
                </Page>
            </Main>
            <Footer />
        </>
    );
}

export default FAQ;
