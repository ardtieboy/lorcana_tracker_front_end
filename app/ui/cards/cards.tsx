import {Card} from "@/app/ui/card/card";
import {fetchRequestedCards} from "@/app/lib/data";


export async function Cards({
                                setId,
                                selectionId,
                                keyword
                            }: {
    setId: string;
    selectionId: string;
    keyword: string
}) {

    const cards = await fetchRequestedCards(setId, selectionId, keyword)

    return (
        <div className="rounded-xl grid grid-cols-8 gap-8">
            {
                cards.map( (card) => {
                    return (<Card key={card.id} title={card.name} image={card.image}/> );
                })
            }
        </div>
    );
}
