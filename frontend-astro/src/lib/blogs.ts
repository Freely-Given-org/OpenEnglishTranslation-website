const serverURL = import.meta.env.PUBLIC_API_URL;

export async function getAllBlogIds() {
    try {
        const response = await fetch(`${serverURL}/api/blogs/published/`);
        const blogs = await response.json();
        return blogs.map((blog: any) => ({
            params: { id: blog.id.toString() },
        }));
    } catch {
        return [{ params: { id: 'error' } }];
    }
}

export async function getBlogData(pk: string) {
    let query = pk ? `pk=${pk}` : '';
    try {
        const response = await fetch(`${serverURL}/api/blogs/published/?${query}`);
        const data = await response.json();
        return { blog: data };
    } catch (error) {
        console.error('get blogs error:', error);
        return { blog: { error: 'ERROR SERVER NOT WORKING', isEmpty: true } };
    }
}

export async function getBlogsById({ pk, title }: { pk?: number; title?: string }) {
    let query = '';
    if (pk) query = `pk=${pk}`;
    else if (title) query = `title=${title}`;
    try {
        const response = await fetch(`${serverURL}/api/blogs/published/?${query}`);
        const data = await response.json();
        return { blog: data };
    } catch (error) {
        console.error('get blogs by id error:', error);
        return { blog: { error: 'ERROR SERVER NOT WORKING', isEmpty: true } };
    }
}
