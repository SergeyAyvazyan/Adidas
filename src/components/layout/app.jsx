import React from 'react';
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'

import { faTwitter,faFacebook,faPinterest, faGithub, faWhatsapp, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-regular-svg-icons'
library.add(faTwitter, faFacebook, faPinterest, faGithub, faWhatsapp, faInstagram, faHouse, faUser)

const App = () => {
  return (
    <>
      <header className="w-full h-24  flex justify-center">
        <div className="w-11/12 h-full flex justify-between items-center">
          <div className="w-1/3 h-5/6">
            <Image className="h-11 w-16" src="/adidas.png " width={100} height={100}></Image>
          </div>
          <div className="w-1/3 h-5/60 ">
            <ul className="flex  justify-around font-bold cursor-pointer ">
              <li>MEN</li>
              <li>WOMEN</li>
              <li>KIDS</li>
              <li className="font-light">SALE</li>
              <li className="font-light">3 STRIPE LIFE</li>
            </ul>
          </div>
          <div className="w-4/5/">
            <div className='max-w-xs mx-auto'>
              <div
                className="relative flex items-center ml-32 w-4/5 h-12 rounded-lg focus-within:shadow-lg bg-white overflow-hidden">
                <div className="grid place-items-center h-full w-12 text-gray-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                       stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                  </svg>
                </div>

                <input
                  className="peer h-full w-1/2 outline-none text-sm text-gray-700 pr-2"
                  type="text"
                  id="search"
                  placeholder="Search something.."/>
              </div>
            </div>


          </div>


            <div className="w-28 flex justify-end mr-9 items-center  h-1/2">
              <Image className="h-6 w-6" src="/people-icon.png" width={100} height={100}></Image>
            </div>

        </div>
      </header>

    </>

  );
};

export default App;