import GET from 'axios';
const serverURL = process.env.DJAGO_SERVER_URL as string;

export async function getAllBlogIds() {
    try {
        const blogs: any = await GET(`${serverURL}/api/blogs/published/`);

        return await blogs.data.map((blog: any) => {
            return {
                params: {
                    id: blog.id.toString(),
                },
            };
        });
    } catch (err) {
        return [{ params: { id: 'error' } }];
    }
}

export async function getBlogData(pk: string) {
    let query: string;
    if (pk) query = 'pk=' + pk;
    else query = '';

    try {
        const blogQuery: any = await GET(
            `${serverURL}/api/blogs/published/?${query}`,
        );
        return {
            blog: blogQuery.data,
        };
    } catch (error) {
        return { blog: { error: 'ERROR SERVER NOT WORKING', isEmpty: true } };
    }
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
    try {
        const blogQuery: any = await GET(
            `${serverURL}/api/blogs/published/?${query}`,
        );
        return {
            blog: blogQuery.data,
        };
    } catch (err) {
        return error;
    }
}
