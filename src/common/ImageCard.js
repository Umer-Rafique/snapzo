import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

function ImageCard({ image }) {
  return (
    <div className=''>
      <a target="_blank" href={image.url} rel="noreferrer">
        <LazyLoadImage
          effect='blur'
          className='rounded-2xl cursor-zoom-in'
          src={image.url}
          alt={image.title}
          key={image.id}
        />
      </a>
    </div>
  )
}

export default ImageCard