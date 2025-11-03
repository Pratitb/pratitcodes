import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import PillProvider from './context/pillContext/pillProvider.tsx'
import ProjectsProvider from './context/projectsContext/projectsProvider.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PillProvider>
      <ProjectsProvider>
        <App />
      </ProjectsProvider>
    </PillProvider>
  </StrictMode>,
)
