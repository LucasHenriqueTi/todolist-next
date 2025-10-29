import { getPosts } from "@/services/getPosts"

const Page = async () => {
    const posts = await getPosts();

    return (
        <div>
            {posts.map((post: any) => (
                <div key={post.slug}>
                    <h2>{post.title}</h2>
                    <p>{post.summary}</p>
                    <small>{post.date}</small>
                    <div>Tags: {post.tags.join(", ")}</div>
                    <br />
                </div>
            ))}
        </div>
    );
};

export default Page;