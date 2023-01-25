import React from 'react'
import '../styles/globals.css'

function Home() {
  return (
    <>
      {/* Alright, it's TERMINAL time o7 */}
      {/* <div className="grid h-screen place-items-center text-white z-10">
         */}
      <div className="scale-80 md:scale-100 h-screen flex justify-center items-center ">
        <div id="termcard" className="w-3/4 lg:w-2/4 h-3/4 text-gray-300 bg-neutral-900 shadow-lg overflow-hidden text-sm border border-gray-500 hover:border-blue-400 rounded-xl rounded-t-xl py-4 px-4 overflow-y-scroll scrollbar-none">
          <div className="h-96 p-1 font-mono">
            {/* Content before-cline */}
            <div className="mt-12 mb-8 mx-6">
              <div className="flex justify-center items-center">
                {/* Icon */}
                <img className="w-32 h-32 rounded-full" src="/profile.png" alt="" />
              </div>
              

              {/* Description */}
              <div className="flex justify-center items-center text-center py-6">
                <span className='block'>
                  Hello, I am disrupt, also known as kitsu. <br />
                  This is my personal website, so feel free to look around. <br />
                  Run the <b>help</b> command to get a list of commands.
                </span>
                
              </div>
              <hr className='border-gray-500' />
            </div>

            {/* Content */}
            <div id="pr-cmd" className='hidden'>
                <span id="previous-command">
                  <span className="bg-gray-600 rounded-md mr-2">
                    <span className="bg-blue-900 rounded-md">&nbsp; guest@nodisrupt.net &nbsp;</span>
                    <span className="mx-1">~</span>
                  </span>
                </span>
                <span id="term-prompt-old"></span>
              </div>
            <div className="flex">
              <span id="command-result" className='mb-4'>
                
              </span>
            </div>

            {/* prefix */}
            <span className="bg-gray-600 rounded-md mr-2">
              <span className="bg-blue-900 rounded-md">&nbsp; guest@nodisrupt.net &nbsp;</span>
              <span className="mx-1">~</span>
            </span>
            
            <input id="term-prompt" type="text" className='bg-neutral-900/[0.01] ring-neutral-900 focus:outline-0 w-auto relative bottom-0' autoFocus/>
            <div className="w-full mb-1">
              <span className='text-neutral-900'>
                {/* This is just a dirty little spacer trick, sorry */}
                .
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* </div> */}
      {/* and allll the way at the bottom, let's include some keyboard shortcuts for the user to use */}
      <div className="hidden md:block fixed bottom-14 right-20 -mr-2">
         <span className="text-white">
          <b>Help</b> Command:
         </span>
      </div>
      <div className="hidden md:block fixed bottom-6 right-4">
        <kbd className="px-2 py-1.5 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500">Ctrl</kbd>
        <span className="text-white mx-2">+</span>
        <kbd className="px-2 py-1.5 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500">Shift</kbd>
        <span className="text-white mx-2">+</span>
        <kbd className="px-2 py-1.5 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500">H</kbd>



      </div>
    </>
  )
}

export default Home