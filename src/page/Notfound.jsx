import React from 'react'
import Orb from '../lib/404.jsx';
import Lightning from '../lib/404.jsx';
import './Notfound.css'
const Notfound = () => {
  return (
   
<>
<h1 className='text-center ' > 404 Page is not found</h1>
    <div style={{ width: '100%', height: '600px', position: 'relative' }}>
    <Lightning
      hue={220}
      xOffset={0}
      speed={1}
      intensity={1}
      size={1}
    />
  </div>  
</>  
)
}

export default Notfound;