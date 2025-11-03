import Image from "next/image";

type AvatarProps = {
    username: string;
    imageSrc: string;
};

export const Avatar = ({ username, imageSrc }: AvatarProps) => {
    return (
        <ul className="flex items-center gap-2">
            <li className="rounded-full">
                <Image
                    src={imageSrc}
                    alt={`Avatar do(a) usuário(a) ${username}`}
                    width={32}
                    height={32}
                />
            </li>
            <li className="text-paragraph-small-semibold">@{username}</li>
        </ul>
    );
};
