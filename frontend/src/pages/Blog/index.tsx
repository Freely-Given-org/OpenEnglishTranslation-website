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
                        <h1>Work in progress</h1>
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
                    </MainPageContent>
                    <SideBar></SideBar>
                </Page>
            </Main>
            <Footer />
        </>
    );
};

export default Home;
