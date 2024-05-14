import React from 'react'
import Button from 'react-bootstrap/Button'
import font1 from '../../../img/font1.jpg'
import font2 from '../../../img/font2.webp'
import font3 from '../../../img/font3.webp'
import './BackgroundSelector.css'

export default function FontSelector() {
  return (
    <div>
      <div className="fontSelectorMenu">
        <Button variant="outline-dark"><img src={font1} alt=''/></Button>
        <Button variant="outline-dark"><img src={font2} alt=''/></Button>
        <Button variant="outline-dark"><img src={font3} alt=''/></Button>
      </div>
    </div>
  )
}
