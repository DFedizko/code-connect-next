import Image from "next/image";
import logo from "./logo.svg";

export const Aside = () => {
    return (
        <aside className="bg-cinza-escuro rounded-lg py-10 px-6">
            <Image
                src={logo}
                alt="Logo da Code Connect"
                width={127}
                height={40}
            />
        </aside>
    );
};
