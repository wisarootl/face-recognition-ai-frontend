import React from 'react'
import './FaceRecognition.css'

const FaceRecognition = ({ imageUrl, faceBoxes }) => {
  var input_image = document.getElementById('inputimage')
  var dummy_height = 0

  if (input_image !== null) {
    dummy_height = input_image.clientHeight
  } else {
    dummy_height = 0
  }
  dummy_height = dummy_height.toString() + 'px'

  return (
    <div className="center ma">
      <div className="absolute mt2">
        <img id="inputimage" alt="" src={imageUrl} width="500px" height="auto" />
        {faceBoxes?.map((face, index) => (
          <div
            className="bounding-box"
            key={index}
            style={{
              top: face.topRow,
              bottom: face.bottomRow,
              left: face.leftCol,
              right: face.rightCol
            }}
          ></div>
        ))}
      </div>
      <div className="dummy" style={{ height: dummy_height }}></div>
    </div>
  )
}

export default FaceRecognition
