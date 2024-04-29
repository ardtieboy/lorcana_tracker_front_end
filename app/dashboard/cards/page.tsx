import {Cards} from "@/app/ui/cards/cards";
import {Cardfilter} from "@/app/ui/cardfilter/cardfilter";
import {fetchExpansions} from "@/app/lib/data";


export default async function Home({
                                       searchParams,
                                   }: {
    searchParams?: {
        set?: string
        selection?: string
    };
}) {
    const expansions = await fetchExpansions()

    const setQuery = searchParams?.set || '';
    const selectionQuery = searchParams?.selection || '';

    console.log("This is the set query: ", setQuery)
    console.log("This is the selection query: ", selectionQuery)


    return (
        <>
            {
                <div>
                    <h1>CARDS</h1>
                    <Cardfilter expansions={expansions}></Cardfilter>
                    <Cards setQuery={setQuery} selectionQuery={selectionQuery}></Cards>
                </div>
            }
        </>
    )
}