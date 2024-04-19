import {CardObject} from "@/app/lib/definitions";

import fetch from 'node-fetch';


export async function fetchAllCards() {
    console.log("Fetching cards from the backend")
    const response = await fetch('http://localhost:8080/card');
    const cards: CardObject[] = await response.json() as CardObject[];
    console.log(cards)
    return cards
}