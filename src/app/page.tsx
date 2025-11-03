import { CardPost } from "@/components/CardPost";
import logger from "@/logger";
import type { Post } from "@/types/Post";
import Link from "next/link";

type PostsResponse = {
    first: number;
    prev: number | null;
    next: number | null;
    last: number;
    pages: number;
    items: number;
    data: Post[] | [];
};

const responseFallback = {
    first: 0,
    prev: null,
    next: null,
    last: 0,
    pages: 0,
    items: 0,
    data: [],
};

const getAllPosts = async (
    { page }: { page: string }
): Promise<PostsResponse> => {
    const response = await fetch(
        `http://localhost:3042/posts?_page=${page}&_per_page=6`
    ).catch(err => {
        logger.error(`Erro de rede: ${err.message}`)
    });

    if (!response || !response.ok) {
        logger.error("Problema ao obter os posts");  
        return responseFallback; 
    }

    return await response.json();
}

export default async function Home({ searchParams }: {
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
 }) {
    const currentPage = (await searchParams)?.page ?? "1";
     
    const { data: posts, prev, next } = await getAllPosts({ 
        page: Array.isArray(currentPage) ? currentPage[0] : currentPage 
    });

    return (
        <main className="flex flex-wrap gap-6 justify-between">
            {posts.map((post: Post) => <CardPost key={post.id} post={post} />)}
            {prev && 
                <Link 
                    className="text-link-verde-pastel mx-auto pt-8" 
                    href={`/?page=${prev}`
                }>
                    Página anterior
                </Link>
            }
            {next && 
                <Link 
                    className="text-link-verde-pastel mx-auto pt-8" 
                    href={`/?page=${next}`
                }>
                    Próxima página
                </Link>
            }
        </main>
    );
}
