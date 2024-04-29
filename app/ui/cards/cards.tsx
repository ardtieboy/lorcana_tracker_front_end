import {Card} from "@/app/ui/card/card";
import {fetchAllCards} from "@/app/lib/data";


export async function Cards({
                                setQuery,
                                selectionQuery,
                            }: {
    setQuery: string;
    selectionQuery: string;
}) {

    const cards = await fetchAllCards(setQuery, selectionQuery)

    return (
        <div className="rounded-xl grid grid-cols-4 gap-4">
            {
                cards.map( (card) => {
                    return (<Card key={card.id} title={card.name} image={card.image}/> );
                })
            }
        </div>
    );
}
