'use server';


export type Query = {
    set_id: string,
    selection_id: number
}

export async function filter(prevState: Query, event: FormData) {

    console.log("Filtering now...")
    console.log("This is the new event: ", event)

    // console.log("Returning: ", {queriedSet: event.get("query"), selection: prevState.selection})
    // return {set_id: event.get("set_id")?.toString() : "", selection_id: parseInt(event.get("selection_id")?.toString())}
    return {set_id: "XXX", selection_id: 69}
}


// Questions
// 1. can't I pass the full value {expansion} to the 'value' param instad of expansion.set_id?