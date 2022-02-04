import { useEffect } from 'react';

import MainPageContent from '../../Components/page/MainPageContent/MainPageContent';
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
        id: string
    }
}

export async function getStaticProps({ params }: props) {
    const { blog } = await getBlogData(params.id);
    return {
      props: {
        blog: blog,
      },
      revalidate: 10,
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
                        {blog.isEmpty ? blog.error :
                        <>
                            <h1>{blog.title}</h1>
                            <p>{blog.content}</p>
                            <span>{blog.author}</span>
                            <ul>
                                {blog.labels.map((i: string) => (
                                    <li>{i}</li>
                                ))}
                            </ul>
                            <span>created on{blog.created}</span>
                            <br />
                            <span>last edited on{blog.last_modified}</span>
                        </>
                        }
                    </MainPageContent>
                </Page>
            </Main>
            <Footer />
        </>
    );
}

export default Blog;
