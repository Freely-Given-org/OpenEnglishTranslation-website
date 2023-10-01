import type { NextPage } from 'next';
import Link from 'next/link';

import MainPageContent from '../../Components/page/MainPageContent/MainPageContent';
import SideBar from '../../Components/page/MainPageContent/SideBar/SideBar';
import Page from '../../Components/page/page';
import Footer from '../../Layouts/Footer/Footer';
import Header from '../../Layouts/Header/Header';
import Main from '../../Layouts/main/main';
import { getAllBlogIds } from '../../lib/blogs';

interface blog {
    params: { id: '3' };
}

export async function getStaticProps() {
    const blogs: blog[] = await getAllBlogIds();

    return {
        props: {
            blogs: blogs,
        },
        revalidate: 3600,
    };
}

const Home: NextPage = ({ blogs }: any) => {
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
                        <h1>Which ‘word’?</h1>
                        <p>
                            In the beginning was ‘the word’{' '}
                            <small>
                                (Jn 1:1a in{' '}
                                <Link href='https://Freely-Given.org/OBD/pa/JHN/C1V1.htm#ULT'>
                                    many Bibles
                                </Link>
                                )
                            </small>
                            . Which word was it? ‘Hello!’ ‘Create!’ ‘Big Bang!’
                            No, that’s two words.
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
                            the plural of
                            <i>logo</i>) does NOT mean ‘word’ as the word ‘word’
                            is normally used in modern English. It would be
                            usually better translated as ‘saying’, ‘message’,
                            ‘discourse’, ‘statement’, ‘account’, ‘address’,
                            ‘matter’, ‘idea’, ‘report’, ‘presentation’, or
                            similar. Just read some of the Greek lexicons (for
                            Strong’s #
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
                            thought as to how modern readers talk (some two
                            decades ago now).
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
                            century. Nowadays we are more likely to use ‘set
                            free’ for prisons and sins.
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
                            to mostly emails over a decade ago.
                        </p>
                        <p>
                            The <em>Open English Translation</em> is a new,
                            exciting, modern-English translation designed
                            especially to make it easier for you to share the
                            good message to those on the street. Oh, and did I
                            say it’s provocative (as in provoking you to think)?
                            Join us and help.
                        </p>
                        <p>
                            <small>
                                Robert Hunt, August 2023.
                                <br />
                                Street evangelist, public school chaplain,
                                prison Bible-study leader, and Bible translator.
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
