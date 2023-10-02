import { ChevronDownIcon, ChevronUpIcon, HeartIcon, EllipsisHorizontalIcon, LinkIcon, ShareIcon, PaperAirplaneIcon } from '@heroicons/react/20/solid';
import React, { useState } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import HeroIconButton from '../../common/HeroIconButton';
import Dashboard from '../Dashboard/Dashboard';

function Snap() {
  const [comments, setComments] = useState(true)

  return (
    <div>
      <div className='w-full mt-3'>
        <div className='w-9/12 mx-auto shadow-xl border rounded-[2.5rem]'>
          <div className='p-4  flex flex-wrap sm:flex-nowrap'>
            <div className='w-full ml-0'>
              <a target="_blank" href="https://i.pinimg.com/474x/57/8d/08/578d081755bf2c42280452ae92e9161e.jpg">
                <LazyLoadImage
                  effect='blur'
                  className='rounded-[2.5rem] cursor-zoom-in'
                  src='https://i.pinimg.com/474x/57/8d/08/578d081755bf2c42280452ae92e9161e.jpg'
                  alt='something'
                  key='1'
                />
              </a>
            </div>
            <div className='w-full' id='rightSide'>
              <div className='p-4 relative h-full'>
                {/* Left Side */}
                <div className='main mt-3 flex justify-between'>
                  <div className=''>
                    <HeroIconButton className='mr-2' ButtonIcon={EllipsisHorizontalIcon} IconButtonLabel='View Menu' />
                    <HeroIconButton className='mr-2' ButtonIcon={ShareIcon} IconButtonLabel='Share' />
                    <HeroIconButton className='mr-2' ButtonIcon={LinkIcon} IconButtonLabel='Link Copy' />
                  </div>
                  <div>
                    <button type="button" className="text-red-700 border border-red-700 hover:bg-red-700 hover:text-white  focus:outline-none focus:ring-red-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-red-500 dark:text-red-500 dark:focus:ring-red-800 dark:hover:bg-red-500">
                      <HeartIcon fill="currentColor" className="w-5 h-5 " />
                      <span className="sr-only">Star Snap</span>
                    </button>
                  </div>
                </div>
                {/* Right Side */}
                <div className='main '>
                  <div className='my-5'>
                    <h4 className="text-3xl font-bold text-start">Ringtones Ringtones And Wallpapers - Free By Zedge™</h4>
                  </div>
                  <div>
                    <p className="text-start text-gray-500 dark:text-gray-400 hover:text-black">Get started with an enterprise-level, profesionally designed, fully responsive, and HTML semantic set of web pages, sections and over 400+ components crafted with the utility classes from Tailwind CSS and based on the Flowbite component library</p>
                  </div>
                  <div>
                    <div className='flex mt-10 items-center'>
                      <h6 className="text-lg text-start font-bold mr-3">4 Comments </h6>
                      <HeroIconButton ButtonIcon={comments === true ? ChevronDownIcon : ChevronUpIcon} onClick={() => setComments(!comments)} IconButtonLabel='comments toogle' />
                    </div>
                  </div>
                  <div className=''>
                    <div className='text-start flex items-center'>
                      <div className='mr-2'>
                        <img
                          className="h-8 w-8 rounded-full"
                          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                          alt=""
                        />
                      </div>
                      <div>
                        <div><a href="" className='text-black font-bold hover:underline'>Nemo</a> agency police further apologies i enhance creatment for the sake of earth</div>
                        <div>time , reply , react and more</div>
                      </div>
                    </div>
                    <div className='text-start flex items-center'>
                      <div className='mr-2'>
                        <img
                          className="h-8 w-8 rounded-full"
                          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                          alt=""
                        />
                      </div>
                      <div>
                        <div><a href="" className='text-black font-bold hover:underline'>Nemo</a> agency police further apologies i enhance creatment for the sake of earth</div>
                        <div>time , reply , react and more</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='absolute bottom-4 border-t w-full h-22 bg-white'>
                  <div className='mt-6'>
                    <div className='float-right mr-4 mb-4' data-dial-toggle="speed-dial-menu-square">
                      <button type="button" className="text-red-700 border border-red-700 hover:bg-red-700 hover:text-white  focus:outline-none focus:ring-red-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-red-500 dark:text-red-500 dark:focus:ring-red-800 dark:hover:bg-red-500">
                        <HeartIcon fill="currentColor" className="w-5 h-5 " />
                        <span className="sr-only">Star Snap</span>
                      </button>
                    </div>
                    <div className='w-[99%]'>
                      <form>
                        <div class="relative">
                          <input type="text" id="search" class="block w-full p-4 text-gray-900 border border-gray-300 rounded-full bg-gray-200 hover:bg-gray-300 focus:outline-none focus:bg-white" placeholder="Search" required />
                          {/* <button type="submit" class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button> */}
                          <button type="submit" className="absolute right-2.5 bottom-2.5 bg-red-600  focus:ring-4 focus:outline-none focus:shadow-none py-2 border border-red-700 hover:bg-red-700 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-red-500 dark:text-red-500 ">
                            <PaperAirplaneIcon fill='currentColor' className="h-5 w-5 text-white" />
                            <span className="sr-only">Star Snap</span>

                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Snap