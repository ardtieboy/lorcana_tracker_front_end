'use client';


import {Button} from "@/app/ui/button";
import {SetObject} from "@/app/lib/definitions";
import { useSearchParams, usePathname, useRouter } from 'next/navigation';

const selection = [
    {id: 1, name: 'all'},
    {id: 2, name: 'missing'},
    {id: 3, name: 'owned'}
]


export function Cardfilter({expansions}: {expansions: SetObject[]}) {

    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    function setSearchQuery(payload: FormData)  {
        // probably want to do some form validation to make sure the expansions and selection are valid

        const expansion_id = payload.get('expansion_id')
        const selection_name = payload.get('selection_name')
        const params = new URLSearchParams(searchParams);

        if (expansion_id) {
            params.set('set_id', expansion_id.toString())
        } else {
            params.delete('set_id');
        }

        if (selection_name) {
            params.set('selection_name', selection_name.toString())
        } else {
            params.delete('selection_name');
        }

        replace(`${pathname}?${params.toString()}`)
    }

    // probably want to do some search param validation to make sure the expansions and selection are valid
    console.log("These are the current searchParams: ", searchParams)

    return (
        <form action={setSearchQuery}>
            <div className="mb-4">
                <label htmlFor="expansion_id" className="mb-2 block text-sm font-medium">
                    Choose an expansion:
                </label>
                <div className="relative">
                    <select
                        id="expansion_id"
                        name="expansion_id"
                        className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                        defaultValue={searchParams.get('set_id')?.toString() || "" }
                        aria-describedby="customer-error"
                    >
                        <option value="" disabled>
                            Select an expansion
                        </option>
                        {expansions.map((expansion) => (
                            <option key={expansion.set_id} value={expansion.set_id}>
                                {expansion.set_name}
                            </option>
                        ))}


                    </select>
                </div>
            </div>
            <div className="mb-4">
                <label htmlFor="selection_name" className="mb-2 block text-sm font-medium">
                    Choose a selection:
                </label>
                <div className="relative">
                    <select
                        id="selection_name"
                        name="selection_name"
                        className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                        defaultValue={searchParams.get('selection_name')?.toString() || "" }
                        aria-describedby="customer-error"
                    >
                        <option value="" disabled>
                            Select a selection
                        </option>
                        {
                            selection.map((s) => (
                                <option key={s.id} value={s.name}>
                                    {s.name}
                                </option>
                            ))
                        }

                    </select>
                </div>
            </div>
            <div className="mt-6 flex justify-end gap-4">
                <Button type="submit">Search</Button>
            </div>
        </form>
    )
}


