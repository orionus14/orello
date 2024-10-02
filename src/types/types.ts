// CardList and CardItem
export interface IName {
    name: string
    id: string
}

// Generate Items
interface Item {
    id: string;
    element: JSX.Element
}

export enum ItemType {
    list = 'list',
    card = 'card'
}

export interface IItems {
    items: Item[];
    type: ItemType
}