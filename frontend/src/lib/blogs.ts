import GET from 'axios';
import matter from 'gray-matter';

export async function getAllBlogIds() {
    const blogs: any = await GET(
        `http://127.0.0.1:8080/api/blogs/published/`,
    ).catch((err) => console.log(err));
    // console.log(blogs.data[0].id);
    return await blogs.data.map((blog: any) => {
        return {
            params: {
                id: blog.id.toString(),
            },
        };
    });
}

export async function getBlogData(pk: string) {
    let query: string;
    if (pk) query = 'pk=' + pk;
    else query = '';

    const blogQuery: any = await GET(
        `http://127.0.0.1:8080/api/blogs/published/?${query}`,
    );
    const matterResult = matter(blogQuery.data.body);
    delete matterResult.orig;

    const blog = ({ ...blogQuery.data, ...matterResult});
        console.log(blog);
        
    return {
        blog: blog,
    };
}

interface querys {
    pk?: number;
    title?: string;
}

export async function getBlogsById({ pk, title }: querys) {
    let query: string;
    if (pk) query = 'pk=' + pk;
    else if (title) query = 'title=' + title;
    else query = '';
    let error;
    const blogs = await GET(
        `http://127.0.0.1:8080/api/blogs/published/?${query}`,
    ).catch((err) => {
        error = err.response.data;
    });
    if (blogs) return blogs.data;
    else return error;

    //     const matterResult = matter(fileContents)

    //     // Combine the data with the id
    //     return {
    //       id,
    //       ...matterResult.data
    //     }
    //   })
}
