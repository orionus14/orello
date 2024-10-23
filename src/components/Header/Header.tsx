import { useEffect, useState } from 'react'
import './Header.scss'
import { HexColorPicker } from 'react-colorful';

const Header = () => {
  const [showColorPicker, setShowColorPicker] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState(() => {
    const savedColor = localStorage.getItem('backgroundColor');
    return savedColor ? savedColor : '#3a3a3a';
  })

  const handleColorChange = (color: string) => {
    setBackgroundColor(color);
    document.documentElement.style.setProperty('--background-color', color);
  }
  
  useEffect(() => {
    document.documentElement.style.setProperty('--background-color', backgroundColor);
  }, []);
  
  useEffect(() => {
    localStorage.setItem('backgroundColor', backgroundColor);
  }, [backgroundColor]);

  return (
    <header className='header'>
      <div className='change-background'>
        Change Background
        <div
          className="change-background-btn"
          style={{ backgroundColor }}
          onClick={() => setShowColorPicker(!showColorPicker)}
        >
        </div>
        {showColorPicker && (
          <div className='color-picker'>
            <HexColorPicker color={backgroundColor} onChange={handleColorChange} />
          </div>
        )}
      </div>
    </header>
  )
}

export default Header