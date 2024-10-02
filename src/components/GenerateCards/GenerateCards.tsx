import classes from './GenerateCards.module.scss'

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
                    className={classes['card-item']}
                    key={card.id}>{card.element}</div>
            ))}
        </>
    )
}

export default GenerateCards