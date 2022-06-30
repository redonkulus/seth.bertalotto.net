import { Link, useLoaderData } from '@remix-run/react';
import { getPosts } from '~/models/post.server';
import type { Post } from '~/models/post.server';
import { Comfortable } from '~/components/Layouts';

export const loader = () => {
    return getPosts();
};

export default function Posts() {
    const posts = useLoaderData<Post[]>();
    return (
        <Comfortable>
            <h1>Posts</h1>
            <ul>
                {posts.map((post) => (
                    <li key={post.slug}>
                        <Link to={post.slug}>{post.title}</Link>
                    </li>
                ))}
            </ul>
        </Comfortable>
    );
}
