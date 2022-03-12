import React, {useState} from 'react'
import {Link} from 'react-router-dom'

function Forms () {
  const [name,setName] = useState('')
  const [bandwitch,setBandwitch] = useState('')

  function handleName(e) {
    setName(e.target.value)
  }

  function handleBandwitch(e) {
    setBandwitch(e.target.value)
  }

  function handleSubmit(e) {
    const URL = "https://api.whatsapp.com/send?phone=6285156397094&text=halo%20saya%20"+name+"%20saya%20ingin%20internet%2020%"+bandwitch+"mbps"
    window.location.assign(URL)
    e.preventDefault()
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name :</label>
          <input value={name} onChange={handleName}/>
        </div>
        <div>
          <label>Bandwitch :</label>
          <input value={bandwitch} onChange={handleBandwitch}/>
        </div>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default Forms