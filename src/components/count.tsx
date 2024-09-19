import { useState } from 'react'
import { Button } from 'react-bootstrap';

const Count = () => {

    const [count, setCount] = useState<number>(0);



  return (
    <div>
        <Button variant='danger' onClick={() => setCount(count - 1 )}>-</Button>
        <h1>Count: {count}</h1>
        <Button variant='success' onClick={() => setCount(count + 1 )}>-</Button>
    </div>
  )
}

export default Count