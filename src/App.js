import { useState } from "react";

export default function App() {

  let [step, setStep] = useState(1)
  let [count, setCount] = useState(0)
  const date = new Date('june 12 2024')
  date.setDate((date.getDate() + count))

  function resetHandler(event) {
    setCount(0)
    setStep(1)
  }

  return (
    <div style={{ textAlign: 'center',marginTop:'100px' }}>
      {/* <div>
    <button  onClick={()=>setStep(pre=>pre-1)}>-</button>
     Step: {step}
     <button onClick={()=>setStep(pre=>pre+1)}>+</button>
    </div>
     <div>
     <button onClick={()=>setCount(pre=>pre-step)}>-</button>
     Count: {count}
     <button onClick={()=>setCount(pre=>pre+step)}>+</button>
     </div> */}

      <div>
        <input type="range" min={0} max={10} value={step} onChange={e => setStep(Number(e.target.value))} />
        {step}
      </div>
      <div>
        <button onClick={() => setCount(pre => pre - step)}>-</button>
        <input type="number" value={count} onChange={e => setCount(Number(e.target.value))} />
        <button onClick={() => setCount(pre => pre + step)}>+</button>
      </div>

      <p>{count == 0 ? 'today is ' : count > 0 ? count + ' day from ' : Math.abs(count) + ' day age was '} {date.toDateString()}</p>
      {step != 1 || count != 0 ?
        <button onClick={resetHandler}>Reset</button> :
        null
      }
    </div>
  )
}