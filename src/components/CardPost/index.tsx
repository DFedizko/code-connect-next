import Image from "next/image";
import { Avatar } from "../Avatar";
import type { Post } from "@/types/Post";

export const CardPost = ({ post }: { post: Post }) => {
    return (
        <article className="bg-cinza-escuro rounded-lg w-[486px]">
            <header className="bg-cinza-medio rounded-t-lg p-6">
                <figure>
                    <Image 
                        src={post.cover} 
                        alt={`Capa do post de ${post.title}`}
                        width={438} 
                        height={133}
                        className="rounded-lg"
                    />
                </figure>
            </header>
            <section className="px-4 pt-4 flex flex-col gap-2 pb-8">
                <h2 className="text-paragraph-semibold">{post.title}</h2>
                <p className="text-paragraph-small">{post.body}</p>
                <a href="/" className="text-paragraph decoration text-verde-destaque underline w-fit">Ver detalhes</a>
            </section>
            <footer className="px-4 pb-6 justify-self-end">
                <Avatar
                    username={post.author.username}
                    imageSrc={post.author.avatar}
                />
            </footer>
        </article>
    );
};
