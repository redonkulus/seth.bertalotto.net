import { useLoaderData } from 'remix';
import type { LoaderFunction } from 'remix';
import { getPost } from '~/models/post.server';
import invariant from 'tiny-invariant';
import { Comfortable } from '~/components/layouts';

export const loader: LoaderFunction = async ({ params }) => {
    invariant(params.slug, 'expected params.slug');
    return getPost(params.slug);
};

export default function PostSlug() {
    const post = useLoaderData();
    return (
        <Comfortable>
            <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </Comfortable>
    );
}
