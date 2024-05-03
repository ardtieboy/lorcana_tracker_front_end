import Image from "next/image";
import {Counter} from "@/app/ui/card/counter";

export function Card({
    id,
    title,
    image
}: {
    id: string;
    title: string;
    image: string;
}) {

    return (
        <div className="rounded-xl bg-gray-50 p-2 shadow-sm">

                <p className="rounded-xl bg-white px-4 py-8 text-center text-2xl">
                    {title}
                    <Image src={image} width={500} height={500} alt={title}/>
                    <Counter id={id}/>
                </p>
        </div>
    );
}
