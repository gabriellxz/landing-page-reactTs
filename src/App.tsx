import { IconNavigation } from '@tabler/icons-react'
import './App.css'
import { useState } from 'react'

function App() {

  const [open, setOpen] = useState(false)

  return (
    <>
      <div className='container-header'>
        <header>
          <nav className='nav-desktop'>
            <div className='navbar-desktop'>
              <div className="container-logo">
                {/* <img src="" alt="" /> */}
                <h1>EEEP AFS</h1>
              </div>
              <ul className='ul-desktop'>
                <li>
                  <a href="">
                    Início
                  </a>
                </li>
                <li>
                  <a href="">
                    Sobre a AFS
                  </a>
                </li>
                <li>
                  <a href="">
                    Cursos
                  </a>
                </li>
                <li>
                  <a href="">
                    Fale conosco
                  </a>
                </li>
              </ul>
            </div>
          </nav>
          <div className="nav-mobile">
            <IconNavigation onClick={() => setOpen(!open)} />
          </div>
        </header>
        {open &&
          <ul className='ul-mobile'>
            <li>
              <a href="">
                Início
              </a>
            </li>
            <li>
              <a href="">
                Sobre a AFS
              </a>
            </li>
            <li>
              <a href="">
                Cursos
              </a>
            </li>
            <li>
              <a href="">
                Fale conosco
              </a>
            </li>
          </ul>
        }
      </div>
      <main>
        
      </main>
    </>
  )
}

export default App
