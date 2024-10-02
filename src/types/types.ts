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

export interface IItems {
    items: Item[];
}