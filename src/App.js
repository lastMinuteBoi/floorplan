import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'

import './App.css'
import ResizableContent from './ResizableContent'

const App = () => {
  const [cubicles, setCubicles] = useState([])
  const [floor, setFloor] = useState([])

  for (let i=0; i < 8; i++) {
    cubicles.push(i*90)
  }

  for (let i=1; i <= 2; i++) {
    floor.push(i*400)
  }

  useEffect(() => {
    setCubicles(cubicles);
  }, [cubicles])

  useEffect(() => {
    setFloor(floor);
  }, [floor])

  return (
    <>
      {cubicles.map(cubicles => (
        <ResizableContent key ={cubicles} top={10} left={cubicles} width={80} height={80} aspectRatio={2}>
          <div className="content content1"></div>
        </ResizableContent>
      ))}

      {floor.map(floor => (
        <ResizableContent key ={floor} top={200} left={floor} width={300} height={300} aspectRatio={2}>
          <div className="content content2"></div>
        </ResizableContent>
      ))}

      {/* <ResizableContent top={600} left={0} width={100} height={100}>
      <div className="outer content content1">
        <div className="inner">
          <img src="http://placehold.it/500x500" alt="" />
        </div>
      </div>
      </ResizableContent> */}
    </>
  )
}

export default App;

ReactDOM.render(<App />, document.getElementById('root'))
