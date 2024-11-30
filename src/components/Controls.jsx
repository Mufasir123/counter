import { useRef } from 'react'
import { useDispatch } from 'react-redux'

const Controls = () => {


  const dispatch = useDispatch()
  const inputElement = useRef();

  const handleIncrement = ( )=>{
    dispatch({type: 'INCREMENT',})
  }
  const handleDecrement = ( )=>{
    dispatch({type: 'DECREMENT',})
  }
  const handlePrivacyToogle = ( )=>{
    dispatch({type: 'PRIVACY_TOOGLE',})
  }


  const handleAdd = ( )=>{
    dispatch({type: 'ADD',payload:{
      num: inputElement.current.value,
    },
  });
  inputElement.current.value = "";
  }



  const handleSubtract = ( )=>{
    dispatch({type: 'SUBTRACT',payload:{
      num: inputElement.current.value
    }
  })
  inputElement.current.value = "";
  }
  

  return (

    <>
    <div>
      <button type="button" className="gap-5 btn btn-primary" 
      onClick={handleIncrement}
      >+1</button>
      <button type="button" className="gap-5  btn btn-success"
      onClick={handleDecrement}>-1</button>
      <button type="button" className="gap-5  btn btn-warning"
      onClick={handlePrivacyToogle}>Privacy Toggle</button>
    </div>

    <div>
      <input type="text" className="number-input" placeholder='Enter number' ref={inputElement}/>
      <button type="button" className="gap-5 btn btn-info"
      onClick={handleAdd}>Add</button>
      <button type="button" className="gap-5 btn btn-danger"
      onClick={handleSubtract}>Subtract</button>
    </div>
    </>
  )
}

export default Controls
