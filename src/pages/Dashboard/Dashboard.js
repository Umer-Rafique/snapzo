import React, { useState, useEffect } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import ImageCard from '../../common/ImageCard';


function Dashboard() {

  const [data, setData] = useState()

  useEffect(() => {

    const Images = [
      {
        id: 1,
        title: 'natural_beautty',
        url: 'https://i.pinimg.com/474x/f3/eb/db/f3ebdb8d070cb214caa536c71b132546.jpg'
      },
      {
        id: 2,
        title: 'natural_beautty',
        url: 'https://i.pinimg.com/474x/f4/b4/4a/f4b44a8df34f1ba81039e4576fea7c02.jpg'
      },
      {
        id: 3,
        title: 'natural_beautty',
        url: 'https://source.unsplash.com/wfalq01jJuU'
      },
      {
        id: 4,
        title: 'natural_beautty',
        url: 'https://source.unsplash.com/rMHNK_skwwU'
      },
      {
        id: 5,
        title: 'natural_beautty',
        url: 'https://source.unsplash.com/WBMjuGpbrCQ'
      },
      {
        id: 6,
        title: 'natural_beautty',
        url: 'https://source.unsplash.com/nCUZ5BYBL_o'
      },
      {
        id: 7,
        title: 'natural_beautty',
        url: 'https://source.unsplash.com/3u4fzMQZhjc'
      },
      {
        id: 8,
        title: 'natural_beautty',
        url: 'https://source.unsplash.com/haOIqIPSwps'
      },
      {
        id: 9,
        title: 'natural_beautty',
        url: 'https://source.unsplash.com/3UrYD7NNVxk'
      },
      {
        id: 10,
        title: 'natural_beautty',
        url: 'https://source.unsplash.com/fm1JKDItlVM'
      },
      {
        id: 11,
        title: 'natural_beautty',
        url: 'https://source.unsplash.com/qPpq1EVs8vw'
      },
      {
        id: 12,
        title: 'natural_beautty',
        url: 'https://source.unsplash.com/xRyL63AwZFE'
      },
      {
        id: 13,
        title: 'natural_beautty',
        url: 'https://source.unsplash.com/XeNKWTiCPNw'
      },
      {
        id: 14,
        title: 'natural_beautty',
        url: 'https://source.unsplash.com/DFt3T5r_4FE'
      },
      {
        id: 15,
        title: 'natural_beautty',
        url: 'https://source.unsplash.com/Ebwp2-6BG8E'
      },
      {
        id: 16,
        title: 'natural_beautty',
        url: 'https://i.pinimg.com/474x/57/8d/08/578d081755bf2c42280452ae92e9161e.jpg'
      },
      {
        id: 17,
        title: 'Apple wallpaper',
        url: 'https://i.pinimg.com/474x/2e/58/bf/2e58bf018d061e2ac1bb05035de1e5e3.jpg'
      },
      {
        id: 18,
        title: 'Apple Logo',
        url: 'https://i.pinimg.com/474x/64/a2/2f/64a22fea2199c6d1335f60344c7beb4b.jpg'
      },
      {
        id: 19,
        title: 'Apple Logo',
        url: 'https://i.pinimg.com/474x/b3/02/c7/b302c75c4019ec9ff6553e7c8d824ea2.jpg'
      },
      {
        id: 1,
        title: 'natural_beautty',
        url: 'https://i.pinimg.com/474x/f3/eb/db/f3ebdb8d070cb214caa536c71b132546.jpg'
      },
      {
        id: 2,
        title: 'natural_beautty',
        url: 'https://i.pinimg.com/474x/f4/b4/4a/f4b44a8df34f1ba81039e4576fea7c02.jpg'
      },
      {
        id: 3,
        title: 'natural_beautty',
        url: 'https://source.unsplash.com/wfalq01jJuU'
      },
      {
        id: 4,
        title: 'natural_beautty',
        url: 'https://source.unsplash.com/rMHNK_skwwU'
      },
      {
        id: 5,
        title: 'natural_beautty',
        url: 'https://source.unsplash.com/WBMjuGpbrCQ'
      },
      {
        id: 6,
        title: 'natural_beautty',
        url: 'https://source.unsplash.com/nCUZ5BYBL_o'
      },
      {
        id: 7,
        title: 'natural_beautty',
        url: 'https://source.unsplash.com/3u4fzMQZhjc'
      },
      {
        id: 8,
        title: 'natural_beautty',
        url: 'https://source.unsplash.com/haOIqIPSwps'
      },
      {
        id: 9,
        title: 'natural_beautty',
        url: 'https://source.unsplash.com/3UrYD7NNVxk'
      },
      {
        id: 10,
        title: 'natural_beautty',
        url: 'https://source.unsplash.com/fm1JKDItlVM'
      },
      {
        id: 11,
        title: 'natural_beautty',
        url: 'https://source.unsplash.com/qPpq1EVs8vw'
      },
      {
        id: 12,
        title: 'natural_beautty',
        url: 'https://source.unsplash.com/xRyL63AwZFE'
      },
      {
        id: 13,
        title: 'natural_beautty',
        url: 'https://source.unsplash.com/XeNKWTiCPNw'
      },
      {
        id: 14,
        title: 'natural_beautty',
        url: 'https://source.unsplash.com/DFt3T5r_4FE'
      },
      {
        id: 15,
        title: 'natural_beautty',
        url: 'https://source.unsplash.com/Ebwp2-6BG8E'
      },
      {
        id: 16,
        title: 'natural_beautty',
        url: 'https://i.pinimg.com/474x/57/8d/08/578d081755bf2c42280452ae92e9161e.jpg'
      },
      {
        id: 17,
        title: 'Apple wallpaper',
        url: 'https://i.pinimg.com/474x/2e/58/bf/2e58bf018d061e2ac1bb05035de1e5e3.jpg'
      },
      {
        id: 18,
        title: 'Apple Logo',
        url: 'https://i.pinimg.com/474x/64/a2/2f/64a22fea2199c6d1335f60344c7beb4b.jpg'
      },
      {
        id: 19,
        title: 'Apple Logo',
        url: 'https://i.pinimg.com/474x/b3/02/c7/b302c75c4019ec9ff6553e7c8d824ea2.jpg'
      },
      {
        id: 1,
        title: 'natural_beautty',
        url: 'https://i.pinimg.com/474x/f3/eb/db/f3ebdb8d070cb214caa536c71b132546.jpg'
      },
      {
        id: 2,
        title: 'natural_beautty',
        url: 'https://i.pinimg.com/474x/f4/b4/4a/f4b44a8df34f1ba81039e4576fea7c02.jpg'
      },
      {
        id: 3,
        title: 'natural_beautty',
        url: 'https://source.unsplash.com/wfalq01jJuU'
      },
      {
        id: 4,
        title: 'natural_beautty',
        url: 'https://source.unsplash.com/rMHNK_skwwU'
      },
      {
        id: 5,
        title: 'natural_beautty',
        url: 'https://source.unsplash.com/WBMjuGpbrCQ'
      },
      {
        id: 6,
        title: 'natural_beautty',
        url: 'https://source.unsplash.com/nCUZ5BYBL_o'
      },
      {
        id: 7,
        title: 'natural_beautty',
        url: 'https://source.unsplash.com/3u4fzMQZhjc'
      },
      {
        id: 8,
        title: 'natural_beautty',
        url: 'https://source.unsplash.com/haOIqIPSwps'
      },
      {
        id: 9,
        title: 'natural_beautty',
        url: 'https://source.unsplash.com/3UrYD7NNVxk'
      },
      {
        id: 10,
        title: 'natural_beautty',
        url: 'https://source.unsplash.com/fm1JKDItlVM'
      },
      {
        id: 11,
        title: 'natural_beautty',
        url: 'https://source.unsplash.com/qPpq1EVs8vw'
      },
      {
        id: 12,
        title: 'natural_beautty',
        url: 'https://source.unsplash.com/xRyL63AwZFE'
      },
      {
        id: 13,
        title: 'natural_beautty',
        url: 'https://source.unsplash.com/XeNKWTiCPNw'
      },
      {
        id: 14,
        title: 'natural_beautty',
        url: 'https://source.unsplash.com/DFt3T5r_4FE'
      },
      {
        id: 15,
        title: 'natural_beautty',
        url: 'https://source.unsplash.com/Ebwp2-6BG8E'
      },
      {
        id: 16,
        title: 'natural_beautty',
        url: 'https://i.pinimg.com/474x/57/8d/08/578d081755bf2c42280452ae92e9161e.jpg'
      },
      {
        id: 17,
        title: 'Apple wallpaper',
        url: 'https://i.pinimg.com/474x/2e/58/bf/2e58bf018d061e2ac1bb05035de1e5e3.jpg'
      },
      {
        id: 18,
        title: 'Apple Logo',
        url: 'https://i.pinimg.com/474x/64/a2/2f/64a22fea2199c6d1335f60344c7beb4b.jpg'
      },
      {
        id: 19,
        title: 'Apple Logo',
        url: 'https://i.pinimg.com/474x/b3/02/c7/b302c75c4019ec9ff6553e7c8d824ea2.jpg'
      },
      {
        id: 1,
        title: 'natural_beautty',
        url: 'https://i.pinimg.com/474x/f3/eb/db/f3ebdb8d070cb214caa536c71b132546.jpg'
      },
      {
        id: 2,
        title: 'natural_beautty',
        url: 'https://i.pinimg.com/474x/f4/b4/4a/f4b44a8df34f1ba81039e4576fea7c02.jpg'
      },
      {
        id: 3,
        title: 'natural_beautty',
        url: 'https://source.unsplash.com/wfalq01jJuU'
      },
      {
        id: 4,
        title: 'natural_beautty',
        url: 'https://source.unsplash.com/rMHNK_skwwU'
      },
      {
        id: 5,
        title: 'natural_beautty',
        url: 'https://source.unsplash.com/WBMjuGpbrCQ'
      },
      {
        id: 6,
        title: 'natural_beautty',
        url: 'https://source.unsplash.com/nCUZ5BYBL_o'
      },
      {
        id: 7,
        title: 'natural_beautty',
        url: 'https://source.unsplash.com/3u4fzMQZhjc'
      },
      {
        id: 8,
        title: 'natural_beautty',
        url: 'https://source.unsplash.com/haOIqIPSwps'
      },
      {
        id: 9,
        title: 'natural_beautty',
        url: 'https://source.unsplash.com/3UrYD7NNVxk'
      },
      {
        id: 10,
        title: 'natural_beautty',
        url: 'https://source.unsplash.com/fm1JKDItlVM'
      },
      {
        id: 11,
        title: 'natural_beautty',
        url: 'https://source.unsplash.com/qPpq1EVs8vw'
      },
      {
        id: 12,
        title: 'natural_beautty',
        url: 'https://source.unsplash.com/xRyL63AwZFE'
      },
      {
        id: 13,
        title: 'natural_beautty',
        url: 'https://source.unsplash.com/XeNKWTiCPNw'
      },
      {
        id: 14,
        title: 'natural_beautty',
        url: 'https://source.unsplash.com/DFt3T5r_4FE'
      },
      {
        id: 15,
        title: 'natural_beautty',
        url: 'https://source.unsplash.com/Ebwp2-6BG8E'
      },
      {
        id: 16,
        title: 'natural_beautty',
        url: 'https://i.pinimg.com/474x/57/8d/08/578d081755bf2c42280452ae92e9161e.jpg'
      },
      {
        id: 17,
        title: 'Apple wallpaper',
        url: 'https://i.pinimg.com/474x/2e/58/bf/2e58bf018d061e2ac1bb05035de1e5e3.jpg'
      },
      {
        id: 18,
        title: 'Apple Logo',
        url: 'https://i.pinimg.com/474x/64/a2/2f/64a22fea2199c6d1335f60344c7beb4b.jpg'
      },
      {
        id: 19,
        title: 'Apple Logo',
        url: 'https://i.pinimg.com/474x/b3/02/c7/b302c75c4019ec9ff6553e7c8d824ea2.jpg'
      },
      {
        id: 1,
        title: 'natural_beautty',
        url: 'https://i.pinimg.com/474x/f3/eb/db/f3ebdb8d070cb214caa536c71b132546.jpg'
      },
      {
        id: 2,
        title: 'natural_beautty',
        url: 'https://i.pinimg.com/474x/f4/b4/4a/f4b44a8df34f1ba81039e4576fea7c02.jpg'
      },
      {
        id: 3,
        title: 'natural_beautty',
        url: 'https://source.unsplash.com/wfalq01jJuU'
      },
      {
        id: 4,
        title: 'natural_beautty',
        url: 'https://source.unsplash.com/rMHNK_skwwU'
      },
      {
        id: 5,
        title: 'natural_beautty',
        url: 'https://source.unsplash.com/WBMjuGpbrCQ'
      },
      {
        id: 6,
        title: 'natural_beautty',
        url: 'https://source.unsplash.com/nCUZ5BYBL_o'
      },
      {
        id: 7,
        title: 'natural_beautty',
        url: 'https://source.unsplash.com/3u4fzMQZhjc'
      },
      {
        id: 8,
        title: 'natural_beautty',
        url: 'https://source.unsplash.com/haOIqIPSwps'
      },
      {
        id: 9,
        title: 'natural_beautty',
        url: 'https://source.unsplash.com/3UrYD7NNVxk'
      },
      {
        id: 10,
        title: 'natural_beautty',
        url: 'https://source.unsplash.com/fm1JKDItlVM'
      },
      {
        id: 11,
        title: 'natural_beautty',
        url: 'https://source.unsplash.com/qPpq1EVs8vw'
      },
      {
        id: 12,
        title: 'natural_beautty',
        url: 'https://source.unsplash.com/xRyL63AwZFE'
      },
      {
        id: 13,
        title: 'natural_beautty',
        url: 'https://source.unsplash.com/XeNKWTiCPNw'
      },
      {
        id: 14,
        title: 'natural_beautty',
        url: 'https://source.unsplash.com/DFt3T5r_4FE'
      },
      {
        id: 15,
        title: 'natural_beautty',
        url: 'https://source.unsplash.com/Ebwp2-6BG8E'
      },
      {
        id: 16,
        title: 'natural_beautty',
        url: 'https://i.pinimg.com/474x/57/8d/08/578d081755bf2c42280452ae92e9161e.jpg'
      },
      {
        id: 17,
        title: 'Apple wallpaper',
        url: 'https://i.pinimg.com/474x/2e/58/bf/2e58bf018d061e2ac1bb05035de1e5e3.jpg'
      },
      {
        id: 18,
        title: 'Apple Logo',
        url: 'https://i.pinimg.com/474x/64/a2/2f/64a22fea2199c6d1335f60344c7beb4b.jpg'
      },
      {
        id: 19,
        title: 'Apple Logo',
        url: 'https://i.pinimg.com/474x/b3/02/c7/b302c75c4019ec9ff6553e7c8d824ea2.jpg'
      },
      {
        id: 1,
        title: 'natural_beautty',
        url: 'https://i.pinimg.com/474x/f3/eb/db/f3ebdb8d070cb214caa536c71b132546.jpg'
      },
      {
        id: 2,
        title: 'natural_beautty',
        url: 'https://i.pinimg.com/474x/f4/b4/4a/f4b44a8df34f1ba81039e4576fea7c02.jpg'
      },
      {
        id: 3,
        title: 'natural_beautty',
        url: 'https://source.unsplash.com/wfalq01jJuU'
      },
      {
        id: 4,
        title: 'natural_beautty',
        url: 'https://source.unsplash.com/rMHNK_skwwU'
      },
      {
        id: 5,
        title: 'natural_beautty',
        url: 'https://source.unsplash.com/WBMjuGpbrCQ'
      },
      {
        id: 6,
        title: 'natural_beautty',
        url: 'https://source.unsplash.com/nCUZ5BYBL_o'
      },
      {
        id: 7,
        title: 'natural_beautty',
        url: 'https://source.unsplash.com/3u4fzMQZhjc'
      },
      {
        id: 8,
        title: 'natural_beautty',
        url: 'https://source.unsplash.com/haOIqIPSwps'
      },
      {
        id: 9,
        title: 'natural_beautty',
        url: 'https://source.unsplash.com/3UrYD7NNVxk'
      },
      {
        id: 10,
        title: 'natural_beautty',
        url: 'https://source.unsplash.com/fm1JKDItlVM'
      },
      {
        id: 11,
        title: 'natural_beautty',
        url: 'https://source.unsplash.com/qPpq1EVs8vw'
      },
      {
        id: 12,
        title: 'natural_beautty',
        url: 'https://source.unsplash.com/xRyL63AwZFE'
      },
      {
        id: 13,
        title: 'natural_beautty',
        url: 'https://source.unsplash.com/XeNKWTiCPNw'
      },
      {
        id: 14,
        title: 'natural_beautty',
        url: 'https://source.unsplash.com/DFt3T5r_4FE'
      },
      {
        id: 15,
        title: 'natural_beautty',
        url: 'https://source.unsplash.com/Ebwp2-6BG8E'
      },
      {
        id: 16,
        title: 'natural_beautty',
        url: 'https://i.pinimg.com/474x/57/8d/08/578d081755bf2c42280452ae92e9161e.jpg'
      },
      {
        id: 17,
        title: 'Apple wallpaper',
        url: 'https://i.pinimg.com/474x/2e/58/bf/2e58bf018d061e2ac1bb05035de1e5e3.jpg'
      },
      {
        id: 18,
        title: 'Apple Logo',
        url: 'https://i.pinimg.com/474x/64/a2/2f/64a22fea2199c6d1335f60344c7beb4b.jpg'
      },
      {
        id: 19,
        title: 'Apple Logo',
        url: 'https://i.pinimg.com/474x/b3/02/c7/b302c75c4019ec9ff6553e7c8d824ea2.jpg'
      },
      {
        id: 1,
        title: 'natural_beautty',
        url: 'https://i.pinimg.com/474x/f3/eb/db/f3ebdb8d070cb214caa536c71b132546.jpg'
      },
      {
        id: 2,
        title: 'natural_beautty',
        url: 'https://i.pinimg.com/474x/f4/b4/4a/f4b44a8df34f1ba81039e4576fea7c02.jpg'
      },
      {
        id: 3,
        title: 'natural_beautty',
        url: 'https://source.unsplash.com/wfalq01jJuU'
      },
      {
        id: 4,
        title: 'natural_beautty',
        url: 'https://source.unsplash.com/rMHNK_skwwU'
      },
      {
        id: 5,
        title: 'natural_beautty',
        url: 'https://source.unsplash.com/WBMjuGpbrCQ'
      },
      {
        id: 6,
        title: 'natural_beautty',
        url: 'https://source.unsplash.com/nCUZ5BYBL_o'
      },
      {
        id: 7,
        title: 'natural_beautty',
        url: 'https://source.unsplash.com/3u4fzMQZhjc'
      },
      {
        id: 8,
        title: 'natural_beautty',
        url: 'https://source.unsplash.com/haOIqIPSwps'
      },
      {
        id: 9,
        title: 'natural_beautty',
        url: 'https://source.unsplash.com/3UrYD7NNVxk'
      },
      {
        id: 10,
        title: 'natural_beautty',
        url: 'https://source.unsplash.com/fm1JKDItlVM'
      },
      {
        id: 11,
        title: 'natural_beautty',
        url: 'https://source.unsplash.com/qPpq1EVs8vw'
      },
      {
        id: 12,
        title: 'natural_beautty',
        url: 'https://source.unsplash.com/xRyL63AwZFE'
      },
      {
        id: 13,
        title: 'natural_beautty',
        url: 'https://source.unsplash.com/XeNKWTiCPNw'
      },
      {
        id: 14,
        title: 'natural_beautty',
        url: 'https://source.unsplash.com/DFt3T5r_4FE'
      },
      {
        id: 15,
        title: 'natural_beautty',
        url: 'https://source.unsplash.com/Ebwp2-6BG8E'
      },
      {
        id: 16,
        title: 'natural_beautty',
        url: 'https://i.pinimg.com/474x/57/8d/08/578d081755bf2c42280452ae92e9161e.jpg'
      },
      {
        id: 17,
        title: 'Apple wallpaper',
        url: 'https://i.pinimg.com/474x/2e/58/bf/2e58bf018d061e2ac1bb05035de1e5e3.jpg'
      },
      {
        id: 18,
        title: 'Apple Logo',
        url: 'https://i.pinimg.com/474x/64/a2/2f/64a22fea2199c6d1335f60344c7beb4b.jpg'
      },
      {
        id: 19,
        title: 'Apple Logo',
        url: 'https://i.pinimg.com/474x/b3/02/c7/b302c75c4019ec9ff6553e7c8d824ea2.jpg'
      }
    ]
    setData(Images);

  }, []);

  return (
    <>
      <div id="controls-carousel" className="hidden sm:block relative w-full" data-carousel="static">
        <div className="relative h-56 overflow-hidden md:h-96">
          <div className="duration-700 ease-in-out" data-carousel-item>
            <LazyLoadImage
              effect='blur'
              src="https://images.unsplash.com/photo-1442120108414-42e7ea50d0b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2749&q=80https://images.unsplash.com/photo-1442120108414-42e7ea50d0b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2749&q=80"
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="..."
              width='100%'
            />
          </div>
        </div>
      </div>
      
      <div className="p-5 sm:p-8">
        <div className="columns-2 gap-5 sm:columns-4 sm:gap-3 md:columns-5 lg:columns-6 2xl:columns-9 [&>div:not(:first-child)]:mt-3">
          {data?.map((item) => (
            <ImageCard key={item.id} image={item} />
          ))}
        </div>
      </div>


    </>
  )
}

export default Dashboard