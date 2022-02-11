import { useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import rehypePrism from 'rehype-prism-plus';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';

import MainPageContent from '../../Components/page/MainPageContent/MainPageContent';
import SideBar from '../../Components/page/MainPageContent/SideBar/SideBar';
import Page from '../../Components/page/page';
import Footer from '../../Layouts/Footer/Footer';
import Header from '../../Layouts/Header/Header';
import Main from '../../Layouts/main/main';
import { getAllBlogIds, getBlogData } from '../../lib/blogs';

export async function getStaticPaths() {
    const paths = await getAllBlogIds();
    return {
        paths,
        fallback: false,
    };
}

interface props {
    params: {
        id: string;
    };
}

export async function getStaticProps({ params }: props) {
    const { blog } = await getBlogData(params.id);
    return {
        props: {
            blog: blog,
        },
        revalidate: 3600,
    };
}

function Blog({ blog }: any) {
    useEffect(() => {
        console.log(blog);
    }, []);

    return (
        <>
            <Header />
            <Main>
                <Page>
                    <MainPageContent>
                        {blog.isEmpty ? (
                            blog.error
                        ) : (
                            <>
                                <h1>{blog.title}</h1>
                                <ReactMarkdown
                                    children={blog.data}
                                    rehypePlugins={[rehypeRaw, rehypePrism]}
                                    remarkPlugins={[remarkGfm]}
                                />
                                <span>{blog.author}</span>
                                <ul>
                                    {blog.labels.map((i: string) => (
                                        <li key={i.toString()}>{i}</li>
                                    ))}
                                </ul>
                                <span>created on{blog.created}</span>
                                <br />
                                <span>last edited on{blog.last_modified}</span>
                            </>
                        )}
                    </MainPageContent>
                    <SideBar></SideBar>
                </Page>
            </Main>
            <Footer />
        </>
    );
}

export default Blog;
