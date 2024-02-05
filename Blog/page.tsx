"use client";


import { getAllBlogIds } from '../src/lib/blogs';
import Home from './blogs-home';

interface blog {
    params: { id: '3' };
}

// export async function getStaticProps() {
//     const blogs: blog[] = await getAllBlogIds();

//     return {
//         props: {
//             blogs: blogs,
//         },
//         revalidate: 3600,
//     };
// }

export default async function getStaticProps() {
    const blogs: blog[] = await getAllBlogIds();

    return <Home blogs={blogs} />;
}
