import {CardObject, SetObject} from "@/app/lib/definitions";

import fetch from 'node-fetch';


export async function fetchAllCards(setQuery: string, selectionQuery: string) {
    console.log("Fetching cards from the backend: "+ setQuery + " -- " + selectionQuery)
    // console.warn("Received query but not doing anything with it now: ", query)
    const queryParam = new URLSearchParams();
    if (setQuery != "") {
        queryParam.append('set_id', setQuery);
    } else {
        queryParam.delete('set_id')
    }
    if (selectionQuery != "") {
        queryParam.append('selection_id', selectionQuery);
    } else {
        queryParam.delete('selection_id')
    }
    const response = await fetch('http://localhost:8080/card?' + queryParam );
    console.log("Doing a query to: " + response.url)
    return await response.json() as CardObject[]
}

export async function fetchExpansions() {
    console.log("Fetching expansions from the backend")
    const response = await fetch('http://localhost:8080/set');
    return await response.json() as SetObject[]
}