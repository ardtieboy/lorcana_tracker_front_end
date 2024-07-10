import {
    Card} from "@/app/ui/card/card";
import {fetchOwnedCards, fetchRequestedCards} from "@/app/lib/data";


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
    const ownedCards = await fetchOwnedCards()

    return (
        <div className="rounded-xl grid grid-cols-8 gap-8">
            {
                cards.map( (card) => {
                    var normalCount = ownedCards.find( (ownedCard) => ownedCard.card_id === card.id)?.owned_normal_copies;
                    console.log(card.id)
                    console.log("Normal count: ", normalCount)
                    if (normalCount === undefined) {
                        normalCount = 0;
                    }
                    return (
                        <Card key={card.id} id={card.id} title={card.name} image={card.image} normalCount={normalCount}/>
                    );
                })
            }
        </div>
    );
}
