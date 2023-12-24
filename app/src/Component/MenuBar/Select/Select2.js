import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { BiSolidDownArrow } from 'react-icons/bi'
import { Link } from 'react-router-dom'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

function Select2() {
    return (
        <Menu as="div" className="relative inline-block text-left">
            <div>
                <Menu.Button className="inline-flex w-full justify-center gap-x-1.5  bg-transparent px-3 py-2 text-sm">
                    Shop
                    <BiSolidDownArrow className='mt-1' size={12} />
                </Menu.Button>
            </div>

            <Transition as={Fragment} enter="transition ease-out duration-100" enterFrom="transform opacity-0 scale-95" enterTo="transform opacity-100 scale-100" leave="transition ease-in duration-75" leaveFrom="transform opacity-100 scale-100" leaveTo="transform opacity-0 scale-95" >
                <Menu.Items className="absolute flex justify-between left-1 right-0 z-10  float-right mt-2 py-3 w-[55vw] px-3 origin-top-right bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                        <Menu.Item>
                            {({ active }) => (
                                <Link to='/' className={classNames(active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-3 font-semibold text-lg')}   >  SHOP LIST   </Link>)}
                        </Menu.Item>

                        <Menu.Item>
                            {({ active }) => (
                                <Link to='/' className={classNames(active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm')}   >  Shop Sidebar  </Link>)}
                        </Menu.Item>

                        <Menu.Item>
                            {({ active }) => (
                                <Link to='/' className={classNames(active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm')} >   Shop Fullwidth  </Link>)}
                        </Menu.Item>

                        <Menu.Item>
                            {({ active }) => (
                                <Link to='/' className={classNames(active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm')} >   Shop List View  </Link>)}
                        </Menu.Item>
                    </div>

                    <div className="py-1">
                        <Menu.Item>
                            {({ active }) => (
                                <Link to='/' className={classNames(active ? 'bg-gray-100 text-gray-900 ' : 'text-gray-700', 'block px-4 py-3 font-semibold text-lg')}   >  PRODUCT LAYOUTS   </Link>)}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                                <Link to='/' className={classNames(active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm')}   >  Horizonral Thumbnail   </Link>)}
                        </Menu.Item>

                        <Menu.Item>
                            {({ active }) => (
                                <Link to='/' className={classNames(active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm')}   >  Gallery Thumbnail  </Link>)}
                        </Menu.Item>

                        <Menu.Item>
                            {({ active }) => (
                                <Link to='/' className={classNames(active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm')} >   Sticky Summary  </Link>)}
                        </Menu.Item>


                    </div>

                    <div className="py-1">
                        <Menu.Item>
                            {({ active }) => (
                                <Link to='/' className={classNames(active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-3 font-semibold text-lg')}   >  POLULAR CATEGORY   </Link>)}
                        </Menu.Item>

                        <Menu.Item>
                            {({ active }) => (
                                <Link to='/' className={classNames(active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm')}   >  Phone & Tablet  </Link>)}
                        </Menu.Item>

                        <Menu.Item>
                            {({ active }) => (
                                <Link to='/' className={classNames(active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm')} >   Gaming & Sports  </Link>)}
                        </Menu.Item>

                        <Menu.Item>
                            {({ active }) => (
                                <Link to='/' className={classNames(active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm')} >   Fashion Clothes  </Link>)}
                        </Menu.Item>
                    </div>
                    <div className=''>
                        <img className='h-[26vh]' src='http://localhost:3000/static/media/banner-3.e64695712eae5a86971b.png' alt='' />
                    </div>

                </Menu.Items>
            </Transition>

        </Menu>
    )
}
export default Select2;
