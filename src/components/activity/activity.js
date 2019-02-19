import React, { useState } from 'react';
import Resizable from 're-resizable';

const Activity = () => {
  const [width, setWidth] = useState(300);
  const [height, setHeight] = useState(300);
  console.log(height, width);
  return (
  <Resizable
    size={{ width, height }}
    onResizeStop={(e, direction, ref, d) => {
      console.log(e, direction, ref);
      setWidth(width + d.width);
      setHeight(height + d.height);
    }}
  >
    Hello there
  </Resizable>
  )
}

export default Activity;
