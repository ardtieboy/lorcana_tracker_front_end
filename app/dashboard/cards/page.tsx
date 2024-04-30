import {Cards} from "@/app/ui/cards/cards";
import {Cardfilter} from "@/app/ui/filtering/cardfilter";
import {fetchExpansions} from "@/app/lib/data";
import Search from "@/app/ui/filtering/search";


export default async function Home({
                                       searchParams,
                                   }: {
    searchParams?: {
        set_id?: string
        selection_name?: string
        keyword?: string
    };
}) {
    const expansions = await fetchExpansions()

    const set_id = searchParams?.set_id || '';
    const selection_id = searchParams?.selection_name || '';
    const keyword = searchParams?.keyword || '';

    console.log("This is the set query: ", set_id)
    console.log("This is the selection query: ", selection_id)
    console.log("This is the keyword: ", keyword)


    return (
        <>
            {
                <div>
                    <h1>CARDS</h1>
                    <Cardfilter expansions={expansions}></Cardfilter>
                    <Search placeholder="Search for cards..."></Search>
                    <Cards setId={set_id} selectionId={selection_id} keyword={keyword}></Cards>
                </div>
            }
        </>
    )
}