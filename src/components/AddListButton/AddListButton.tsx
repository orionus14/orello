import './AddListButton.scss'

interface AddListButtonProps {
  text: string;
}

const AddListButton = ({ text }: AddListButtonProps) => {
  return (
    <div className='hi'>
      hi
      <button className="add-list-btn">
        {text}
      </button>
    </div>

  )
}

export default AddListButton