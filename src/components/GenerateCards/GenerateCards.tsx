import './GenerateCards.scss'

interface itemList {
    itemList: JSX.Element[];
}

const GenerateCards = ({ itemList }: itemList) => {
    return (
        <>
            {itemList.map((item, index) => (
                <div
                    className='card-item'
                    key={index}>{item}</div>
            ))}
        </>
    )
}

export default GenerateCards