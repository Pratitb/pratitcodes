import './App.css'
import MobNavBar from './components/mobNavBar'
import Work from './components/work'

function App() {

  return (
    <div className="min-h-screen bg-mainBg">
      <div className='container'>
        {/* Mobile Navbar */}
        <MobNavBar />
        <Work />
      </div>
    </div>
  )
}

export default App
