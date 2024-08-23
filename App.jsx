
import './App.css'
import Starter from './components/starter'
import Supervisor from './components/Supervisor'
import SearchPhoto from './assets/030-search.svg'
import KarmaImage from './assets/009-idea.svg'
import CalculatorImage from './assets/045-software.svg'
import TeamBuilderImage from './assets/002-homepage.svg'

function App() {
 

  return (
    <>
    <Starter />
    <Supervisor title="Supervisor" description="Monitors activity to identify project roadblocks" img={SearchPhoto}/>
    <Supervisor title="Teambuilder" description="Scans our talent network to create the optimal team for your project" img={TeamBuilderImage}/>
    <Supervisor title="Karma" description="Regularly evaluates our talent to ensure quality" img={ KarmaImage }/>
    <Supervisor title="Calculator" description="Uses data from past projects to provide better delivery estimates" img={CalculatorImage}/>
    </>
  )
}

export default App
