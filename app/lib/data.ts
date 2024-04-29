import {CardObject, SetObject} from "@/app/lib/definitions";

import fetch from 'node-fetch';


export async function fetchAllCards(setId: string, selectionName: string) {
    console.log("Fetching cards from the backend: "+ setId + " -- " + selectionName)
    // console.warn("Received query but not doing anything with it now: ", query)
    const queryParam = new URLSearchParams();
    if (setId != "") {
        queryParam.append('set_id', setId);
    } else {
        queryParam.delete('set_id')
    }
    if (selectionName != "") {
        queryParam.append('selection_name', selectionName);
    } else {
        queryParam.delete('selection_name')
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