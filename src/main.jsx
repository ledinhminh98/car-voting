import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import './index.css'
import image1 from '/src/assets/images/lamborghini.jpg'
import image2 from '/src/assets/images/lexus.jpg'
import porsche from '/src/assets/images/porsche.jpg'
import mercedes from '/src/assets/images/mercedes.jpg'

const images = [
  { position: [-2.15, 0, 1.5], rotation: [0, Math.PI / 2.5, 0], url: image1, item: 'Lamborghini' },
  { position: [-1.5, 0, 0.25], rotation: [0, Math.PI / 6, 0], url: image2, item: 'Lexus' },
  { position: [1.5, 0, 0.25], rotation: [0, -Math.PI / 6, 0], url: porsche, item: 'Porsche' },
  { position: [2.15, 0, 1.5], rotation: [0, -Math.PI / 2.5, 0], url: mercedes, item: 'Mercedes' }
]

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App images={images} />
  </React.StrictMode>,
)
