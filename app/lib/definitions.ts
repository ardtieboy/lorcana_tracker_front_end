export type CardObject = {
    name: string;
    id: string;
    image: string;
    set_id: string;
    card_num: number;
};

export type SetObject = {
    set_name: string;
    set_id: string;
    set_num: number;
};

export type SelectionType = {
    name: string;
    id: number;
};

export type CardInCollectionObject = {
    card_id: string;
    owned_normal_copies: number
    owned_foil_copies: number
    whish_list: boolean
};
