import React from 'react'
import react,{ useState } from 'react'

function App() {
  const[ count, setCount  ]=useState(0)
   return (
    <div>
<button className='n' onClick={()=> setCount(count + 1)}>+</button>
<h2 className='s'>{count}</h2>
<button className='a' onClick={() =>setCount(count - 1)}>-</button>
<button className='j' onClick={()=> setCount(0)}>reset</button>
    </div>
  )
}

export default App