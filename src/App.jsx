import { Suspense } from 'react'
import './App.css'
import Countries from './components/countries/countries'


 const countriespromise = fetch("https://openapi.programming-hero.com/api/all").then(res => res.json())
function App() {
  
  return (
    <>
  <Suspense fallback={<h1>countries Loading</h1>}>
    <Countries countriespromise= {countriespromise}></Countries>
  </Suspense>

</>
  )
}

export default App
