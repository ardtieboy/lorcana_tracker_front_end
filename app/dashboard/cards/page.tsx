import {Cards} from "@/app/ui/cards/cards";
import {fetchAllCards} from "@/app/lib/data";


export default async function Home() {
    const fetchedCards = await fetchAllCards()
    return (
        <>
            {
                <div>
                    <h1>CARDS</h1>
                    <Cards cards={fetchedCards}></Cards>
                </div>
            }
        </>
    )
}