import './App.css'
import MobNavBar from './components/mobNavBar'
import Work from './components/work'

const App = () => {

  return (
    <div className="min-h-screen bg-mainBg">
      <div className='container'>
        <MobNavBar />
        <Work />
      </div>
    </div>
  )
}

export default App
