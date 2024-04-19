import Image from "next/image";

export function Card({
    title,
    image
}: {
    title: string;
    image: string;
}) {

    return (
        <div className="rounded-xl bg-gray-50 p-2 shadow-sm">
            <div className="flex p-4">
                <h3 className="ml-2 text-sm font-medium">{title}</h3>
            </div>
            <p className="rounded-xl bg-white px-4 py-8 text-center text-2xl">
                {title}
                <Image src={image} width={500} height={500} alt={title}/>
            </p>
        </div>
    );
}
