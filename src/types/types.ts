// CardList and CardItem
export interface IName {
    name: string
    id: string
}

// Generate Items
interface Item {
    id: string;
    name: string;
}

export enum ItemType {
    list = 'list',
    card = 'card'
}

export interface IItems {
    items: Item[];
    type: ItemType
}

// ListsField and CardList
import { Card } from "../store/actions/cardActions";
import { ListItem } from "../store/actions/listActions";
export interface RootState {
    cards: {
        cards: Card[];
    };
    lists: {
        lists: ListItem[];
    };
}