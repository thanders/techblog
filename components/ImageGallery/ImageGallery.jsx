import React, { useState, useEffect } from "react";
import { buttonContainer } from "./imageGallery.module.css";
import Image from 'next/image';

export default function ImageGallery({ imagePaths, width, height }) {

  const [count, setCount] = useState(0);
  const cursorPointer= {cursor: 'pointer', padding: '15px' };

  const handleChange = (change) => {
    if(change === 'increment' && count < imagePaths.length - 1) {
      setCount(count+1);
    }
    if(change === 'decrement' && count > 0) {
      setCount(count-1);
    }
  }


  return (
    <div style={{ width }}>
      <Image
        id='productImage'
        src={imagePaths[count].url}
        alt="keyboard_inputs"
        width={width}
        height={height}
        placeholder="blur"
        blurDataURL="/vercel.svg"
      />

      <div className={buttonContainer}>
        <a onClick={() => handleChange('decrement')} style={cursorPointer} >
          <div >
            Previous
          </div>
        </a>
        <div>{count+1} / {imagePaths.length}</div>
        <a onClick={() => handleChange('increment')} style={cursorPointer} >
          <div>
            Next
          </div>
        </a>
      </div>
      <div style={{ padding: '0px 0px 0px 20px', textAlign: 'center' }}>
        {imagePaths[count].citation}
      </div>
    </div>
  );
}