import React from 'react'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'
import './Start.css'

export default function Start() {
  return (
    <div>
      <div className="container">
        <h2>Создайте свою викторину</h2>
        <Link to='backgroundSelector'>
          <Button variant="outline-dark" size="lg" className='button-enter'>Созать тест</Button>
        </Link>
      </div>
    </div>
  )
}
