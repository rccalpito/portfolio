import { FunctionComponent } from "react"
import '../index.css'
import '../App.css'

const Home: FunctionComponent = () => {

  return (
    <header className="siteHeader">
      <h1 className="siteHeader_title">Robert Calpito</h1>
      <h5>Wanna-be designer & actually developer</h5>
      <nav className="siteHeader_navigation">
        <ol className="navigation">home</ol>
        <ol className="navigation">projects</ol>
        <ol className="navigation">contact</ol>
      </nav>
    </header>
  )
}

export default Home