'use client';

import React from "react";
import {incrementNormalCountCardInCollection} from "@/app/lib/data";

export function Counter({
                             id,
                         }: {
    id: string;
}) {


    const [count, setCount] = React.useState(0);

    const a = incrementNormalCountCardInCollection.bind(null, id);
    const b = a.bind(null, count);


    return (
            <button  onClick={b}>Normal: {count}</button>
    );
}
