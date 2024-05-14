import React from 'react'
import Button from 'react-bootstrap/Button'
import background1 from '../../../img/background1.jpg'
import background2 from '../../../img/background2.webp'
import background3 from '../../../img/background3.webp'
import './BackgroundSelector.css'

export default function FontSelector() {
  const [ disabled1, setDisabled1] = React.useState(false);
  const [ disabled2, setDisabled2] = React.useState(false);
  const [ disabled3, setDisabled3] = React.useState(false);

  return (
    <div>
      <div className="fontSelectorMenu">
        <Button variant="outline-dark" disabled = {disabled1} onClick={
          () => {
            setDisabled1(true);
            setDisabled2(false);
            setDisabled3(false);
          }
        }><img src={background1} alt=''/></Button>
        <Button variant="outline-dark" disabled = {disabled2}onClick={
          () => {
            setDisabled1(false);
            setDisabled2(true);
            setDisabled3(false);
          }
        }><img src={background2} alt=''/></Button>
        <Button variant="outline-dark" disabled = {disabled3}onClick={
          () => {
            setDisabled1(false);
            setDisabled2(false);
            setDisabled3(true);
          }
        }><img src={background3} alt=''/></Button>
      </div>
    </div>
  )
}
