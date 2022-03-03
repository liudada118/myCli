import React from 'react'
import './app.css'
export default () => {
  return <div>
    <Demo name='ddd' />
    afaffasdfsdfsdfasfasdfsdfasdffadsfsfasdffadsfafasdsdsfd1</div>
}

interface Props{
  name : string
}
function Demo(props : Props){
  return <div>{props.name}</div>
}