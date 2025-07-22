import './App.css'

import ctdLogo from './assets/icons/mono-blue-logo.svg'

function App() {
    return (
      <>
      <div className='coming-soon'>
        <h1>CTD Swag</h1>
        <div style={{ height: 100, width: 100 }}>
            <img src={ctdLogo} alt="Code the Dream Logo" />
        </div>
        <h2>Coming soon</h2>
      </div>
      </>
    )
}

export default App
