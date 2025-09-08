'use client';

import Link from 'next/link';

import MainPageContent from '../../../Components/page/MainPageContent/MainPageContent';
import Page from '../../../Components/page/page';
import Footer from '../../../Layouts/Footer/Footer';
import Header from '../../../Layouts/Header/Header';
import Main from '../../../Layouts/main/main';

function Stories() {
    return (
        <>
            <Header />
            <Main>
                <Page>
                    <MainPageContent>
                        <h1>
                            Stories about the <em>Open English Translation</em>
                        </h1>
                        <p>
                            Little snippets to help explain the <em>OET</em>
                        </p>
                        <h2>A ‘Yahweh’ translation</h2>
                        <p>
                            I grew up with Bibles with the term ‘L
                            <small>ORD</small>’ in them, and the only
                            translations that I was aware of that used ‘Yahweh’
                            (or ‘Jehovah’) were Roman Catholic Bibles. So when I
                            started reading the{' '}
                            <em>Open English Translation</em>, it definitely did
                            feel a bit unusual for a while.
                        </p>
                        <p>
                            However, I’m pleased to report that after a little
                            while (perhaps around a month), it started to feel
                            more natural, and certainly started to make more
                            sense, now to the point that reading Bibles with ‘L
                            <small>ORD</small>’ in them now feels odd or
                            old-fashioned.
                        </p>
                        <p>
                            For example, at church we looked at{' '}
                            <Link href='https://Freely-Given.org/OBD/par/PSA/C129V8.htm#Top'>
                                Song/Psalm 129:8
                            </Link>{' '}
                            which finishes with “We bless you all in Yahweh’s
                            name.” That seems to make so much more sense than
                            “We bless you all in the name of the L
                            <small>ORD</small>.” i.e., using the name which
                            we’re not allowed to pronounce and which many
                            Christians these days don’t even know! (Not to
                            mention that we had to add the English article ‘the’
                            even though that wasn’t in the Hebrew.) Obviously
                            people back in those times didn’t hesitate to
                            pronounce Yahweh’s name if they used it in
                            blessings!
                        </p>
                        <h2>More coming ...</h2>
                    </MainPageContent>
                </Page>
            </Main>
            <Footer />
        </>
    );
}

export default Stories;
