'use client';

import React from "react";
import {incrementNormalCountCardInCollection} from "@/app/lib/data";

export function Incrementer({
                            id,
                            normalCount
                         }: {
    id: string;
    normalCount: number;
}) {



    return (
        // Show a plus symbol here
        // link it to an action that increments the count
        // the action should do a put request to localhost:8080/card_in_collection
        // body: {"card_id":<id>, "owned_normal_copies": <normalCount + 1>}   P.S. It might be this doesn't work yet as I now realize I need to update the backend to allow this
        // and also updates the increment counter of the same card
            <button>+</button>
    );
}
