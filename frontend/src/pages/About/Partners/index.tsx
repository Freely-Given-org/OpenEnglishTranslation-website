import Image from 'next/image';
import Link from 'next/link';

import HelpersPhoto from '../../../Assets/john-schnobrich-2FPjlAyMQTA-unsplash.jpg';
import MainPageContent from '../../../Components/page/MainPageContent/MainPageContent';
import Page from '../../../Components/page/page';
import Footer from '../../../Layouts/Footer/Footer';
import Header from '../../../Layouts/Header/Header';
import Main from '../../../Layouts/main/main';
import styles from '../../Home.module.scss';

function Partners() {
    return (
        <>
            <Header />
            <Main>
                <Page>
                    <MainPageContent>
                        <h1>Our Partners</h1>
                        <p></p>

                        <h1>Volunteers wanted</h1>
                        <h2>Programmers</h2>
                        <p>
                            We are looking for techo geeks in the Bible world to
                            help us achieve this vision to provide a free and
                            open, modern, new English translation. If you’re
                            proficient in Python, Flutter/Dart, Rust, or Golang,
                            please do <Link href='/About/Contact'>contact</Link>{' '}
                            us.
                        </p>
                        <p>
                            We also need programmers to include the <em>OET</em>{' '}
                            into their existing Bible apps. Incorporating the{' '}
                            <em>OET</em> will definitely take more effort than
                            for conventional translations, because the design
                            has both a <em>Literal Version</em> and a{' '}
                            <em>Readers’ Version</em> that complement each other
                            and are intended to scroll together (or be printed
                            side-by-side).
                        </p>
                        <h2>Designers and artists</h2>
                        <p>
                            Are layout, colour groups, and CSS your cup of tea?
                            (Ours is Bible translation.) Think you could make
                            all of this more beautiful? If so, we could use you.
                        </p>
                        <h2>Readers and checkers</h2>
                        <p>
                            Are you a <i>word-crafter</i>? As <em>OET</em> books
                            are being drafted, we need readers to look at the
                            English style. When translating, it’s sometimes
                            difficult to get the Greek words and word order out
                            of your mind and to think about how we’d say the
                            same thing in our modern English. Other times we
                            might have chosen a modern idiom, but one that’s not
                            known in other English-speaking nations. So we need
                            readers to let us know if they can help make the{' '}
                            <em>Readers’ Version</em> more natural.
                        </p>
                        <h2>Bible consultants</h2>
                        <p>
                            If you’re a Bible translation consultant and/or a
                            Hebrew or Greek expert, we would value your help in
                            checking our drafts for accuracy and also for making
                            suggestions for improvement. Or perhaps you have a
                            certain speciality and would like to improve or
                            expand our drafts of the book introductions, or
                            write a set of footnotes about some helpful topic.
                            One advantage of working in an open translation, is
                            that your scholarship is then freely available to
                            future generations as well.
                        </p>
                    </MainPageContent>
                    <div className={styles.bannerFeed}>
                        <Image
                            src={HelpersPhoto}
                            alt='Picture of an open Bible'
                            width={500}
                            height={333.333}
                            className={styles.helperPhoto}
                        />
                        <p>
                            Photo by{' '}
                            <Link href='https://unsplash.com/@johnschno?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>
                                John Schnobrich
                            </Link>{' '}
                            on{' '}
                            <Link href='https://unsplash.com/photos/2FPjlAyMQTA?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>
                                Unsplash
                            </Link>
                        </p>
                    </div>
                    <MainPageContent>
                        <h1>Sponsors wanted</h1>
                        <p>
                            We also need financial help for this project to
                            advance at full speed. Although most of the work is
                            done by volunteers, we do need to cover our
                            computing costs (domain names, servers and services,
                            internet, electricity) as well as travel and
                            conferences. We would also like to be able to pay
                            for services from contract programmers and web
                            developers. Then if there’s any extra, it will also
                            be appreciated for helping to pay the grocery bill.
                            Again, please use the{' '}
                            <Link href='/About/Contact'>contact page</Link> to
                            get in touch directly.
                        </p>
                    </MainPageContent>
                </Page>
            </Main>
            <Footer />
        </>
    );
}

export default Partners;
