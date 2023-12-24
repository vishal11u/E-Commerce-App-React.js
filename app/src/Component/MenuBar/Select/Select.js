import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { BiSolidDownArrow } from 'react-icons/bi'
import { Link } from 'react-router-dom'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

function Select() {
    return (
        <Menu as="div" className="relative inline-block text-left">
            <div>
                <Menu.Button className="inline-flex w-full justify-center gap-x-1.5  bg-transparent px-3 py-2 text-sm ">
                    Homepage
                    <BiSolidDownArrow className='mt-1' size={12} />
                </Menu.Button>
            </div>

            <Transition as={Fragment} enter="transition ease-out duration-100" enterFrom="transform opacity-0 scale-95" enterTo="transform opacity-100 scale-100" leave="transition ease-in duration-75" leaveFrom="transform opacity-100 scale-100" leaveTo="transform opacity-0 scale-95" >
                <Menu.Items className="absolute right-0 z-10 mt-2 w-40 py-1 origin-top-right bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">

                        <Menu.Item>
                            {({ active }) => (
                                <Link to='/' className={classNames(active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm')}   >  Home One   </Link>)}
                        </Menu.Item>

                        <Menu.Item>
                            {({ active }) => (
                                <Link to='/' className={classNames(active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm')}   >  Home Two  </Link>)}
                        </Menu.Item>

                        <Menu.Item>
                            {({ active }) => (
                                <Link to='/' className={classNames(active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm')} >   Home Three  </Link>)}
                        </Menu.Item>

                        <Menu.Item>
                            {({ active }) => (
                                <Link to='/' className={classNames(active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm')} >   Home Four  </Link>)}
                        </Menu.Item>                     
                    </div>
                </Menu.Items>
            </Transition>

        </Menu>
    )
}
export default Select;
