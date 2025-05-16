import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header';
import News from './components/news';

function App() {
  const [navClicked, setNavClicked] = useState(false);

  const [count, setCount] = useState(0)
  const [country, setCountry] = useState()
  return (
    <>
    <Header onCountryChange={setCountry} nav={setNavClicked}/>
    <News country={country} navClicked={navClicked} />
    </>
  )
}

export default App
