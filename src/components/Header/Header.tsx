import { useEffect, useState } from 'react'
import classes from './Header.module.scss'
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
    <header className={classes['header']}>
      <a
        href="#"
        className={classes['logo-name']}
      >
        Orello
      </a>
      <div className={classes['change-background']}>
        Change Background
        <div
          className={classes['change-background-btn']}
          style={{ backgroundColor }}
          onClick={() => setShowColorPicker(!showColorPicker)}
        >
        </div>
        {showColorPicker && (
          <div className={classes['color-picker']}>
            <HexColorPicker color={backgroundColor} onChange={handleColorChange} />
          </div>
        )}
      </div>
    </header>
  )
}

export default Header