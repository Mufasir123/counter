import React from 'react'

const Container = ({children}) => {
  return (
    <div>
      <div className="card" style={{width: "80%"}}>
   {children}
  </div>
</div>

  )
}

export default Container
