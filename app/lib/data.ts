import {CardInCollectionObject, CardObject, SetObject} from "@/app/lib/definitions";

import fetch from 'node-fetch';

export async function fetchAllCards() {
    const response = await fetch('http://localhost:8080/card');
    console.log("Doing a query to: " + response.url)
    return await response.json() as CardObject[]
}

export async function fetchOwnedCards() {
    const response = await fetch('http://localhost:8080/card_in_collection');
    console.log("Doing a query to: " + response.url)
    return await response.json() as CardInCollectionObject[]
}


export async function fetchRequestedCards(setId: string, selectionName: string, keyword: string) {
    console.log("Fetching cards from the backend: "+ setId + " -- " + selectionName)
    console.log("Search term is: ")
    var allCards = await fetchAllCards()
    const ownedCards = await fetchOwnedCards()

    // console.warn("Received query but not doing anything with it now: ", query)
    // const queryParam = new URLSearchParams();
    // if (setId != "") {
    //     queryParam.append('set_id', setId);
    // } else {
    //     queryParam.delete('set_id')
    // }
    // if (selectionName != "") {
    //     queryParam.append('selection_name', selectionName);
    // } else {
    //     queryParam.delete('selection_name')
    // }
    // const response = await fetch('http://localhost:8080/card?' + queryParam );
    // Do we want to do the query at the server or here by filtering all cards?


    if (setId != "") {
        allCards = allCards.filter( (card) => card.set_id === setId)
    }

    if (selectionName != "") {
        if (selectionName === "owned") {
            allCards = allCards.filter( (card) =>
                ownedCards.map((card) => card.card_id).includes(card.id)
            )
        } else if (selectionName === "missing") {
            allCards = allCards.filter( (card) =>
                !ownedCards.map((card) => card.card_id).includes(card.id)
            )
        } else if (selectionName != "all"){
            console.error("Unknown selection name: ", selectionName)
        }
    }

    if (keyword != "") {
        allCards = allCards.filter( card => {
            return card.name.toLowerCase().includes(keyword.toLowerCase()) || card.body_text.toLowerCase().includes(keyword.toLowerCase()) || card.flavor_text.toLowerCase().includes(keyword.toLowerCase())
        })
    }

    return allCards.sort((one, two) => (one.card_num < two.card_num ? -1 : 1));

}

export async function fetchExpansions() {
    console.log("Fetching expansions from the backend")
    const response = await fetch('http://localhost:8080/set');
    return await response.json() as SetObject[]
}