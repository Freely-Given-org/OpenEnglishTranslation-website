'use client';

import { Link } from '@mui/material';
import MainPageContent from 'Components/page/MainPageContent/MainPageContent';
import SideBar from 'Components/page/MainPageContent/SideBar/SideBar';
import Page from 'Components/page/page';
import Footer from 'Layouts/Footer/Footer';
import Header from 'Layouts/Header/Header';
import Main from 'Layouts/main/main';

const Home = ({ _blogs }: any) => {
    return (
        <>
            <Header />
            <Main>
                <Page>
                    <MainPageContent>
                        {/* <ul>
                            {blogs.map((blog: any) => (
                                <li>
                                    <Link
                                        href={`/Blog/${blog.params.id}`}
                                        key={blog.params.id}
                                    >
                                        <a>/Blog/ {blog.params.id}</a>
                                    </Link>
                                    ;
                                </li>
                            ))}
                        </ul> */}
                        <h1 id='for'>What’s that ‘for’?</h1>
                        <p>
                            The most memorised Bible verse in the world was John
                            3:16 from the KJB:{' '}
                            <i>
                                For God so loved the world, that he gave his
                                only begotten Son, that whosoever believeth in
                                him should not perish, but have everlasting
                                life.
                            </i>{' '}
                            (See this verse and other translations{' '}
                            <Link href='https://Freely-Given.org/OBD/par/JHN/C3V16.htm#ULT'>
                                here.
                            </Link>
                            )
                        </p>
                        <p>
                            So here’s my first question:{' '}
                            <b>
                                What does the conjunction ‘For’ mean in that
                                sentence?
                            </b>{' '}
                            You see, I don’t start sentences with ‘For’ in my
                            New Zealand English dialect (except perhaps in the
                            short sentence ‘For what?’ where it’s a
                            preposition). Perhaps it means ‘Because’ in John
                            3:16, but if we substitute that in, then the rest of
                            the sentence sounds wrong. However, it does seem to
                            have the right meaning.
                        </p>
                        <p>
                            So now my second question:{' '}
                            <b>
                                In your dialect of English, how often do you
                                start sentences with ‘For’?
                            </b>{' '}
                            I've been listening carefully for over a year now
                            and have <b>never</b> heard or read it in that time.
                            (Please <Link href='/About/Contact'>contact</Link>{' '}
                            me with the sentence and the context if you hear
                            someone say it.) Yet ‘For’ is still there even in
                            many modern English Bible translations, e.g.,{' '}
                            <Link href='https://Freely-Given.org/OBD/NET/byC/JHN_C3.htm#Top'>
                                this fairly modern one
                            </Link>
                            . (Search the page for the capitalised conjunction
                            ‘For’ and for the conjunction ‘for’ after a comma. I
                            counted seven in John 3 in <i>NET</i>.)
                        </p>
                        <p>
                            So here’s the rub: If modern English Bible
                            translations frequently use the conjunction ‘for’,
                            but if it’s never/rarely used in our speech, then
                            the conclusion is that{' '}
                            <b>
                                these Bibles are not translated into my language
                            </b>
                            ! (I discovered this when talking to people on the
                            street about the Bible and finding out how strange
                            it sounded to them.)
                        </p>
                        <p>
                            <b>
                                The <i>Open English Translation</i> of the Bible
                                aims to translate the Hebrew and Greek
                                scriptures into the language that we actually
                                speak.
                            </b>
                        </p>
                        <p>
                            The <em>Readers’ Version</em> (still in ‘draft’
                            status) starts the verse with ‘Because’, because v16
                            is connected back to v14-15.
                        </p>
                        <p>
                            Because in that same way, God loves the people of
                            the world enough to cause his only son to be born
                            and to give him to the world, so that everyone who
                            believes this will not die, but will live forever.{' '}
                            <small>
                                (
                                <Link href='https://Freely-Given.org/OBD/par/JHN/C3V16.htm#Top'>
                                    John 3:16 OET-RV
                                </Link>
                                )
                            </small>
                        </p>
                        <p>
                            The <em>Literal Version</em> aims to show all the
                            words that are there in the original language:
                        </p>
                        <p>
                            For/Because thus <del>the</del> god loved the world,
                            so_that he_gave the <del>the</del> only_begotten
                            son, in_order_that everyone <del>which</del>{' '}
                            believing in him may_ not _perish, but may_be_having
                            eternal life.{' '}
                            <small>
                                (
                                <Link href='https://Freely-Given.org/OBD/par/JHN/C3V16.htm#Top'>
                                    John 3:16 OET-LV
                                </Link>
                                )
                            </small>
                        </p>
                        <p>
                            <small>
                                Robert Hunt, December 2023.
                                <br />
                                Street and door-to-door evangelist, public
                                school chaplain, prison Bible-study leader,
                                Bible teacher/preacher, and professional Bible
                                translator.
                            </small>
                        </p>
                        <h1 id='word'>Which ‘word’?</h1>
                        <p>
                            In the beginning was ‘the word’{' '}
                            <small>
                                (Jn 1:1a in{' '}
                                <Link href='https://Freely-Given.org/OBD/par/JHN/C1V1.htm#ULT'>
                                    many Bibles
                                </Link>
                                )
                            </small>
                            . Which word was it? ‘Hello!’ ‘Create!’ ‘Big Bang!’
                            No, that’s two words!
                        </p>
                        <p>
                            What about carrying a thick book around under your
                            arm that’s labelled ‘God’s Word’? Shouldn’t that be
                            called ‘God’s Word<b>s</b>’? Surely there’s a lot of
                            words in those 2,000 odd pages?
                        </p>
                        <p>
                            If you grew up in and around churches and Bibles
                            like me, then you probably didn’t think about those
                            questions either? In fact, it’s only now that I’m in
                            my later years that I’ve even thought twice about
                            it. We can be so used to speaking in our own
                            Christianese dialect that we forget that normal
                            people don’t speak like that.
                        </p>
                        <p>
                            The Greek word <b>λόγος</b> (<i>logos</i>—but not
                            the plural of <i>logo</i>) does NOT mean ‘word’ as
                            the word ‘word’ is normally used in modern English.
                            It would be usually better translated as ‘saying’,
                            ‘message’, ‘discourse’, ‘statement’, ‘account’,
                            ‘address’, ‘matter’, ‘idea’, ‘report’,
                            ‘presentation’, or similar. Just read some of the
                            Greek lexicons (for Strong’s #
                            <Link href='https://BibleHub.com/greek/3056.htm'>
                                3056
                            </Link>
                            ) and you’ll quickly discover that.
                        </p>
                        <p>
                            Now it’s true that the mother of a the rebellious
                            teenager might tell him/her: “I’d like to have a
                            word with you about the language that you’ve been
                            using.” Or someone might ask, “What’s the word on
                            the street about which Bible translation is best?”
                            So yes, some of that older usage still lingers on in
                            certain contexts. But would your president or
                            prime-minister give ‘a word’ to the press about the
                            new tax policy? Probably not.
                        </p>
                        <p>
                            The Bible is still often called ‘The Word of God’.
                            That’s simply archaic English. The word ‘word’ in
                            our English nearly always refers to these groups of
                            letters on this page separated by spaces. It’s time
                            that God started speaking our language in English
                            Bibles. At least ‘The Message’ translation gave some
                            thought as to how modern readers talk (and that was
                            some two decades ago now).
                        </p>
                        <p>
                            There’s a lot of other hang-over vocabulary that
                            only Christians now use. For example, have you been{' '}
                            <i>delivered</i> from your evil habits? Talking to a
                            gang member on the street, he’s not likely to tell
                            you that he’s hoping his brother will be delivered
                            out of prison this month. In mainstream English we
                            still use ‘delivered’ for pizzas and babies, but no
                            longer for chains and prisons. Being delivered is
                            retained in other contexts as a form of church
                            jargon—talking like someone out of a previous
                            century. Nowadays in real life, we are more likely
                            to use ‘set free’ for prisons and sins.
                        </p>
                        <p>
                            Churches have ‘Seeker services’ but when did you
                            last ask someone in the supermarket what they were{' '}
                            <i>seeking</i> there in the aisles? No. we use
                            ‘looking for’ now in mainstream English.
                        </p>
                        <p>
                            And don’t start me talking about what an{' '}
                            <i>epistle</i> is. I’m too busy writing{' '}
                            <i>letters</i>—no actually, I moved on past letters
                            to mostly emails over a decade ago. So you certainly
                            won’t find any <i>epistles</i> in the <i>OET</i>{' '}
                            (and probably not any <i>psalms</i> or{' '}
                            <i>testaments</i> either).
                        </p>
                        <p>
                            The <em>Open English Translation</em> is{' '}
                            <b>
                                a new, exciting, modern-English translation
                                designed especially to make it easier for you to
                                share the good message to those on the street
                            </b>
                            . Oh, and did I say it’s provocative (as in
                            provoking you to think)? Join us and help.
                        </p>
                        <p>
                            <small>
                                Robert Hunt, August 2023.
                                <br />
                                Street and door-to-door evangelist, public
                                school chaplain, prison Bible-study leader,
                                Bible teacher/preacher, and professional Bible
                                translator.
                            </small>
                        </p>
                        <h1 id='emotional'>
                            Our emotional attachment to Bible translations
                        </h1>
                        <p>
                            One thing that’s become increasingly apparent to me
                            as I’ve worked on the{' '}
                            <em>Open English Translation</em> of the Bible (
                            <em>OET</em>), is how much that Western Protestant
                            Christians are <b>emotionally</b> attached to their
                            favourite Bible translation(s). (This likely applies
                            to other groups as well, but I can’t speak for
                            them.) Despite being mono-lingual in most cases,
                            they’ll tell you that their Bibles{' '}
                            <em>feel accurate</em>, but of course, that’s an
                            argument from emotions rather than from logic or
                            linguistics.
                        </p>
                        <p>
                            Firstly there’s the KJB-only movement—a group
                            (particularly in the USA) that claims that the King
                            James Bible (a 400+-year old British English
                            translation that received hundreds of corrections
                            until 1769 and still contains some mistakes) is
                            somehow more perfect than any modern English
                            translation. Extremist holders of this view even
                            believe that missionaries must teach this
                            out-of-date and difficult-to-understand English all
                            around the world. We find those positions so
                            ridiculous that we don’t bother refuting them, but{' '}
                            <Link href='https://www.YouTube.com/results?search_query=mark+ward+kjv'>
                                others
                            </Link>{' '}
                            have done that very well. All we want to say here is
                            that we find KJB-onlyism to be an emotional
                            attachment to a particular (old) English Bible
                            translation without any logical reasoning—more a
                            case of religiosity than reasoned God-following.
                        </p>
                        <p>
                            Secondly, many people just trust their denomination
                            or pastor about their Bible translation. While this
                            isn’t necessary a bad thing, the expertise of most
                            pastors isn’t in linguistics and translation, nor
                            (by definition) is it in sharing the Christian
                            message with unchurched people who don’t necessarily
                            know all the Christian jargon (Christianese) yet.
                        </p>
                        <p>
                            Thirdly, most English Bibles are sold by large
                            multi-million dollar businesses with marketing
                            departments. These organisations are very involved
                            in advertising, including emails, videos, and other
                            solicitation where they often claim their
                            translation is best in class. Every single one of
                            them knows that no Biblical character is named
                            ‘James’ (just ask any European what their Bibles
                            call that book), but marketing departments don’t
                            want to rock the <del>boat</del> sales by making
                            those kinds of corrections.
                        </p>
                        <p>
                            Finally, there’s very many of us (yes, we were
                            exactly the same ourselves) who would read about{' '}
                            <em>the great earthquake</em> in Rev 16:18 without
                            ever thinking about how such a destructive event
                            could be called ‘great’ (as we mostly use the word
                            today, like a ‘great dinner’). Or those who can
                            quote John 3:16 from memory without ever giving a
                            single thought to why it begins with ‘For’. Or those
                            who can easily sing{' '}
                            <em>Great is thy faithfulness</em> without ever
                            realising that those words are in the wrong order
                            for modern speech.
                        </p>
                        <p>
                            At this point, most people tell me that the Bible is
                            <b>poetic</b>. Yes, some of it certainly is, but the
                            great majority of it is narrative. So no, the reason
                            it sounds ‘quaint’ is not that the Hebrew or Greek
                            was quaint, but simply because the English
                            translations that we get emotionally attached to
                            still have much old-fashioned use of English words
                            and phrases—many times following the original
                            languages too closely instead of translating into
                            our language, e.g., with phrases like{' '}
                            <em>son of God</em> instead of the more modern{' '}
                            <em>God’s son</em>.
                        </p>
                        <p>
                            So yes, we’re aware that the Open English
                            Translation will likely take a decade or so to make
                            any mark on the Bible market due to emotional
                            attachment and other factors (not to mention that it
                            won’t be finished for at least another two years).
                            But we’re aiming for the 2030’s generation who’ll be
                            looking for a Bible translation in their own
                            language.
                        </p>
                        <p>
                            <small>
                                Robert Hunt, October 2024.
                                <br />
                                Street and door-to-door evangelist, public
                                school chaplain, prison Bible-study leader,
                                Bible teacher/preacher, and professional Bible
                                translator.
                            </small>
                        </p>
                    </MainPageContent>
                    <SideBar></SideBar>
                </Page>
            </Main>
            <Footer />
        </>
    );
};

export default Home;
