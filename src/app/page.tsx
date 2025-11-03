import { CardPost } from "@/components/CardPost";
import logger from "@/logger";
import type { Post } from "@/types/Post";

const getAllPosts = async (): Promise<Post[]> => {
    const response = await fetch("http://localhost:3042/posts")
        .catch(err => {
            logger.error(`Erro de rede: ${err.message}`);
            return null;
        });
        
    if (!response || !response.ok) {
        logger.error("Problema ao obter os posts");
        return [];
    }
    
    return await response.json();
}

export default async function Home() {
    const posts = await getAllPosts();
    
    return (
        <main className="flex flex-wrap gap-6 justify-between">
            {posts.map(post => <CardPost key={post.id} post={post} />)}
        </main>
    );
}
