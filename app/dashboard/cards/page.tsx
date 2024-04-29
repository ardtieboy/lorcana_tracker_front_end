import {Cards} from "@/app/ui/cards/cards";
import {Cardfilter} from "@/app/ui/cardfilter/cardfilter";
import {fetchExpansions} from "@/app/lib/data";


export default async function Home({
                                       searchParams,
                                   }: {
    searchParams?: {
        set_id?: string
        selection_name?: string
    };
}) {
    const expansions = await fetchExpansions()

    const set_id = searchParams?.set_id || '';
    const selection_id = searchParams?.selection_name || '';

    console.log("This is the set query: ", set_id)
    console.log("This is the selection query: ", selection_id)


    return (
        <>
            {
                <div>
                    <h1>CARDS</h1>
                    <Cardfilter expansions={expansions}></Cardfilter>
                    <Cards setId={set_id} selectionId={selection_id}></Cards>
                </div>
            }
        </>
    )
}