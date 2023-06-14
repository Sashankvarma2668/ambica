import React from 'react'
import { Fragment } from 'react';
import { Transition } from "@headlessui/react";
import { useState } from 'react';

const Dropdown = () => {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <Transition
    show={isOpen} // Added the show prop to handle the visibility of the dropdown menu
    as={Fragment}
    enter="transition duration-100 ease-out"
    enterFrom="transform opacity-0 scale-95"
    enterTo="transform opacity-100 scale-100"
    leave="transition duration-75 ease-out"
    leaveFrom="transform opacity-100 scale-100"
    leaveTo="transform opacity-0 scale-95"
  >
    <div className="origin-top-right absolute right-0 mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
      <div className="py-1">
        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
          Herbal
        </a>
        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
          API/Bulk Drugs
        </a>
        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
          Personal Care
        </a>
        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
          International
        </a>
      </div>
    </div>
  </Transition>
  )
}

export default Dropdown
