import React from 'react'

const data = [
    {
        "name": "vs-code-portfolio",
        "private": true,
        "version": "0.0.0",
        "type": "module",
        "scripts": {
          "dev": "vite",
          "build": "vite build",
          "preview": "vite preview"
        },
        "dependencies": {
          "framer-motion": "^10.2.5",
          "randomcolor": "^0.6.2",
          "react": "^18.2.0",
          "react-dom": "^18.2.0",
          "react-icons": "^4.8.0",
          "react-router-dom": "^6.9.0",
          "react-type-animation": "^2.1.2",
          "sass": "^1.59.2"
        },
        "devDependencies": {
          "@types/react": "^18.0.27",
          "@types/react-dom": "^18.0.10",
          "@vitejs/plugin-react": "^3.1.0",
          "vite": "^4.1.0"
        }
      }
]
const Package = () => {
  return (
    <div>
        
        <pre style={{fontSize:'20px'}}>{JSON.stringify(data, null, 2)}</pre>
        
    </div>
  )
}

export default Package