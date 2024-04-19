import {Card} from "@/app/ui/card/card";
import {CardObject} from "@/app/lib/definitions";


export function Cards({cards}: {
    cards: CardObject[];
}) {

    return (
        <div className="rounded-xl bg-gray-50 p-2 shadow-sm">
            <div className="flex p-4">
                <h3 className="ml-2 text-sm font-medium">CARDS</h3>
            </div>
            <p className="rounded-xl bg-white px-4 py-8 text-center text-2xl">
                {
                    cards.map( (card) => {
                        return (<Card key={card.id} title={card.name} image={card.image}/> );
                    })
                }
                </p>
        </div>
    );
}
