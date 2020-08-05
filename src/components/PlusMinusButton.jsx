import React, {useState} from 'react';
import { Button } from "@material-ui/core";

export default function ButtonCounter() {
  const initialState = 0;
  const [count, setCount] = useState(initialState);
  return (
   <div>
      <Button style = {{borderRadius: '50%', 
                        backgroundColor: '#364f6b',
                        marginRight: '77px',
                        height: '64px',
                        display: 'inline-block'}} 
              onClick={count >= 0 ? () => setCount(count => count - 1) : setCount(0)} 
              variant="contained" 
              color="primary" >
       -
      </Button>
      <p style = {{display: 'inline-block',
                  fontSize: '22px',
                  color: '#364f6b'}}>
      {count}
      </p>
      <Button style = {{borderRadius: '50%', 
                        backgroundColor: '#364f6b',
                        marginLeft: '77px',
                        height: '64px',
                        display: 'inline-block'}} 
              onClick={count <= 5 ? () => setCount(count => count + 1) : setCount(5)} 
              variant="contained" 
              color="primary" >
       +
      </Button>
    </div>
  );
}
