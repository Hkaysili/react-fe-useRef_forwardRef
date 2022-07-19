import {useRef, forwardRef} from 'react';
import './App.css';

// ref aktarımı --> component'e
const Input = forwardRef((props, ref)  => {
  return <input ref={ref} type="text" {...props}/>
}) 

function App() {
  const inputRefFirst = useRef();
  const inputRefSecond = useRef();

  const focusInput_useRef = () => { 
    inputRefFirst.current.focus()
  }
  const focusInput_forwardRef = () => { 
    inputRefSecond.current.focus()
  }

  return (
    <div className="App">
        <h3>useRef & forwardRef Usage</h3>
        <hr/>
        <div style={{display:"flex", gap:"5px", justifyContent:"center", alignItems:"center"}}> 
          {/*    ******* useRef Kullanımı ********* */}
          <input type="text" ref={inputRefFirst}/>
          <button onClick={focusInput_useRef}>Focusla</button>  

          {/*    ******* forwardRef Kullanımı ********* */}
          <Input ref={inputRefSecond} /> 
          <button onClick={focusInput_forwardRef}>Focusla</button>
        </div>
    </div>
  );
}

export default App;
