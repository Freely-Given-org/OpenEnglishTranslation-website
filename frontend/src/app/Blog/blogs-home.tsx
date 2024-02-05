"use client";

import { Link } from "@mui/material";
import MainPageContent from "Components/page/MainPageContent/MainPageContent";
import SideBar from "Components/page/MainPageContent/SideBar/SideBar";
import Page from "Components/page/page";
import Footer from "Layouts/Footer/Footer";
import Header from "Layouts/Header/Header";
import Main from "Layouts/main/main";

const Home = ({ blogs }: any) => {
    return (
        <>
            <Header />
            <Main>
                <Page>
                    <MainPageContent>
                        <ul>
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
                        </ul>
                        <h1>What’s that ‘for’?</h1>
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
                            So here's the rub: If modern English Bible
                            translations frequently use the conjunction ‘for’,
                            but if it's never/rarely used in our speech, then
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
                        <h1>Which ‘word’?</h1>
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
                        <p>1
                            Now it’s true that the mother of a the rebellious1
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
                    </MainPageContent>
                    <SideBar></SideBar>
                </Page>
            </Main>
            <Footer />
        </>
    );
};


export default Home;