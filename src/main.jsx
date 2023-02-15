import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import bugatti from '/src/assets/images/bugatti.jpg'
import lamborghini from '/src/assets/images/lamborghini.jpg'
import mercedes from '/src/assets/images/mercedes.jpg'
import porsche from '/src/assets/images/porsche.jpg'

const images = [
  { position: [-2.15, 0, 1.5], rotation: [0, Math.PI / 2.5, 0], url: lamborghini, item: 'Lamborghini' },
  { position: [-1.5, 0, 0.25], rotation: [0, Math.PI / 6, 0], url: bugatti, item: 'Bugatti' },
  { position: [1.5, 0, 0.25], rotation: [0, -Math.PI / 6, 0], url: porsche, item: 'Porsche' },
  { position: [2.15, 0, 1.5], rotation: [0, -Math.PI / 2.5, 0], url: mercedes, item: 'Mercedes' }
]

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App images={images} />
  </React.StrictMode>,
)
