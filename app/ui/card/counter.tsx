'use client';

import React from "react";
import {incrementNormalCountCardInCollection} from "@/app/lib/data";

export function Counter({
                            id,
                            normalCount
                         }: {
    id: string;
    normalCount: number;
}) {


    const [count, setCount] = React.useState(normalCount);

    const a = incrementNormalCountCardInCollection.bind(null, id);
    const b = a.bind(null, count);


    return (
            <button  onClick={b}>Normal: {count}</button>
    );
}
