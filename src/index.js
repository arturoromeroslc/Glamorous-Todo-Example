import React from 'react'
import printMe from './print.js'
import './index.css'

var btn = document.createElement('button')
btn.innerHTML = 'Click me and check the console!'
btn.onclick = printMe
document.body.appendChild(btn)

console.log(React)
