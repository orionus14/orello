import './GenerateCards.scss'

interface CardItem {
    id: string;
    element: JSX.Element
}

interface Cards {
    cards: CardItem[];
}

const GenerateCards = ({ cards }: Cards) => {
    return (
        <>
            {cards.map(card => (
                <div
                    className='card-item'
                    key={card.id}>{card.element}</div>
            ))}
        </>
    )
}

export default GenerateCards