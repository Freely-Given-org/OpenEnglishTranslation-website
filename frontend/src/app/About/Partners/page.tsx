'use client';

import Image from 'next/image';
import Link from 'next/link';

import MainPageContent from '../../../Components/page/MainPageContent/MainPageContent';
import Page from '../../../Components/page/page';
import Footer from '../../../Layouts/Footer/Footer';
import Header from '../../../Layouts/Header/Header';
import Main from '../../../Layouts/main/main';

function Partners() {
    return (
        <>
            <Header />
            <Main>
                <Page>
                    <MainPageContent>
                        <h1>Our Partners</h1>
                        <p></p>

                        <h1 id='volunteers'>Volunteers wanted</h1>
                        <p>
                            Wanting to gift your God-given skills to the Bible
                            world? Excited that your work could be freely reused
                            by Bible translators across all the continents
                            (especially in the smaller language communities) and
                            for decades to come (because the source files are
                            available for future revisions)? Yes, we need you!
                        </p>
                        <p>
                            Sadly we’ve seen examples of older people who’ve
                            worked on Bible resources in their retirement years,
                            but didn’t make their source files publicly
                            available online. Often, their{' '}
                            <Link href='https://web.archive.org/web/20210309160638/https://www.isv.org/bible/'>
                                work
                            </Link>{' '}
                            or private website has disappeared offline once God
                            called them home. If you’re in your later years and
                            have skills to develop Bible resources, invest them
                            into a project where everything is{' '}
                            <Link href='https://GitHub.com/Freely-Given-org'>
                                online and public
                            </Link>{' '}
                            and is free and open for everyone to use and to
                            continue to build on and improve.
                        </p>
                        <h2 id='programmers'>Programmers</h2>
                        <p>
                            We are looking for techo geeks in the Bible world to
                            help us achieve this vision to provide a free and
                            open, modern, new English translation. If you’re
                            proficient in Python, Flutter/Dart, Rust, or Golang,
                            please do <Link href='/About/Contact'>contact</Link>{' '}
                            us.
                        </p>
                        <p>
                            We also need programmers to include the <em>OET</em>
                             into their existing Bible apps. Incorporating the{' '}
                            <em>OET</em> will definitely take more effort than
                            for conventional translations, because the design
                            has both a <em>Readers’ Version</em> and a{' '}
                            <em>Literal Version</em> that complement each other
                            and are intended to scroll together (or be printed
                            side-by-side), plus the fact that <em>OET</em>
                             ‘books’ are presented in a different order and
                            there’s no book named ‘James’. Also, terms like ‘New
                            Testament’ do not apply to the <em>OET</em>.
                        </p>
                        <div>
                            <Image
                                src={
                                    '/assets/john-schnobrich-2FPjlAyMQTA-unsplash.jpg'
                                }
                                alt='Picture of an open Bible'
                                width={500}
                                height={333.333}
                            />
                            <p>
                                  
                                <small>
                                    Photo by{' '}
                                    <Link href='https://unsplash.com/@johnschno?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>
                                        John Schnobrich
                                    </Link>{' '}
                                    on{' '}
                                    <Link href='https://unsplash.com/photos/2FPjlAyMQTA?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>
                                        Unsplash
                                    </Link>
                                </small>
                            </p>
                        </div>
                        <h2 id='designers'>Designers and artists</h2>
                        <p>
                            Are layout, colour groups, and CSS your cup of tea?
                            (Ours is Bible translation.) Think you could make
                            all of this more beautiful? If so, we could use you.
                        </p>
                        <p>
                            Could you provide black-and-white images to help our{' '}
                            <em>OET</em> readers understand the text? Or colour
                            diagrams or maps that could be at the back of an
                            open-licenced Bible? We certainly need you!
                        </p>
                        <h2 id='checkers'>Readers and checkers</h2>
                        <p>
                            Are you a <i>word-crafter</i>? As <em>OET</em> books
                            are being drafted, we need readers to look at the
                            English style. When translating, it’s sometimes
                            difficult to get the Greek words and word order out
                            of your mind and to think about how we’d get the
                            same thing across in our modern English. Other times
                            we might have chosen a modern idiom, but one that’s
                            not well-known in other English-speaking nations. So
                            we need readers to let us know if they can help make
                            the <em>Readers’ Version</em> more fluent and
                            natural.
                        </p>
                        <h2 id='consultants'>Bible consultants</h2>
                        <p>
                            If you’re a Bible translation consultant and/or a
                            Hebrew or Greek expert, we would value your help in
                            checking our drafts for accuracy and also for making
                            suggestions for improvement. Perhaps you could keep
                            the <em>OET</em> in a small window while you’re
                            checking a translation in another language. Any
                            feedback would be helpful.
                        </p>
                        <p>
                            Because the <em>OET</em> is a fresh translation from
                            the Hebrew and Greek (and not based on other English
                            translations), there’s a higher chance that our
                            initial drafts will contain errors, i.e., there’s
                            many places in an English Bible translation where
                            the meaning of the original writer could be
                            interpreted differently. That’s ok, unless we’ve
                            interpreted the original languages wrongly! We don’t
                            want that.
                        </p>
                        <h2 id='specialists'>Topic specialists</h2>
                        <p>
                            Perhaps you have a certain speciality and would like
                            to{' '}
                            <b>
                                improve or expand our drafts of the book
                                introductions
                            </b>
                            , or write a set of footnotes about some helpful
                            topic. One advantage of working in an open
                            translation, is that your scholarship is then freely
                            available to future generations as well.
                        </p>
                        <p>
                            We would like to have sets of open-licensed,
                            specialist footnotes and/or study-notes that can be
                            programmatically swapped in and out in order to
                            produce specialist Bible websites and/or specialist
                            printings. These include things like:
                        </p>
                        <ul>
                            <li>
                                notes for Muslim, Hindu, atheist, etc., readers
                            </li>
                            <li>notes on theological and doctrinal issues</li>
                            <li>
                                notes linking the ‘Hebrew Scriptures’ (Old
                                Testament) with the ‘Messianic Update’ (New
                                Testament) and vv.
                            </li>
                            <li>notes on archaeological discoveries</li>
                            <li>textual criticsm notes</li>
                            <li>and more...</li>
                        </ul>
                        <h2 id='languages'>Language Experts</h2>
                        <p>
                            The <em>OET</em> dream is actually a huge one that
                            could extend towards other languages beyond English.
                            Did you know that in many less prominent languages
                            of the world, the names of the Bible characters were
                            adapted or transliterated from the major language
                            (e.g., English or Spanish or French) names, and not
                            from the Hebrew or Greek names? So that means in
                            some cases for example, the people’s Hebrew names
                            were translated in Greek, then into English or
                            Spanish, etc., then into the country’s national
                            language, and then into the country’s minority
                            languages. Could this be improved? Not easily
                            because of the power of tradition, but that doesn’t
                            mean that it’s impossible.
                        </p>
                        <p>
                            Did you know that the NZ Māori (Te Reo Māori) Bible
                            does not necessarily use their best term for God (
                            <i>Atua</i>)? Wow, changing that now would be a huge
                            change! Also, did you know that some important
                            Biblical terms were just invented instead of
                            translated. For example, Eph. 6:2, “<b>Honour</b>{' '}
                            your father and mother…” became “Whaka<b>honor</b>
                            etia tou papa me tou whaea…”. Could this be
                            improved? Yes, it could! Similarly for Rom. 2:10,
                            “but <b>glory</b>, honor and peace for everyone…”
                            became “He <b>kororia</b> ia, he honore, he
                            rangimarie, …”.
                        </p>
                        <p>
                            What about <em>your</em> language? Could the Bible
                            translation you use be improved? Are the commercial
                            Bible publishing companies interested in doing this?
                            If not, maybe we could work together with you?
                        </p>
                        <p>
                            <small>
                                Just to clarify, we’re not here to judge those
                                who’ve gone before us and on whose shoulders we
                                all stand. But times certainly change and
                                languages constantly change as well, so maybe
                                the Bible translation world can also be
                                challenged to update and improve?
                            </small>
                        </p>
                        <h1 id='typesetters'>Typesetters</h1>
                        <p>
                            Are you an expert in{' '}
                            <Link href='https://pagedjs.org/'>Paged.js</Link>?
                            Or{' '}
                            <Link href='https://GitHub.com/Freely-Given-org/BibleTypesetter'>
                                SILE Typesetter
                            </Link>
                            ? Or{' '}
                            <Link href='https://software.sil.org/ptxprint/'>
                                PTXprint
                            </Link>
                            ? If someone could do the layout for us, we could
                            focus on completing, checking, and improving the
                            Bible text itself.
                        </p>
                        <p>
                            <small>
                                (In May 2023, we created one very-basic test
                                copy of the two-column <em>OET</em> with two
                                gospels using PTXprint, but we're ready now to
                                start looking at something more serious.)
                            </small>
                        </p>
                        <h1 id='sponsors'>Sponsors wanted</h1>
                        <p>
                            We also need financial help for this project to
                            advance at full speed. Although most of the work is
                            done by volunteers, we do need to cover our
                            computing costs (domain names, servers and services,
                            internet, electricity) as well as books and
                            reference materials, travel and conferences. Then
                            there’s also printing costs—only for small test runs
                            of Bible portions at this stage. We would also like
                            to be able to pay for services from contract
                            programmers and web developers. Again, please use
                            the <Link href='/About/Contact'>contact page</Link>{' '}
                            to get in touch directly.
                        </p>
                    </MainPageContent>
                </Page>
            </Main>
            <Footer />
        </>
    );
}

export default Partners;
