/* This example requires Tailwind CSS v2.0+ */
import React from 'react'
import { Menu } from '@headlessui/react'
import { classNames } from '../functions/styling'
import { ExternalLink } from './Link'
import { ReactComponent as MenuIcon } from '../assets/images/menu.svg'
import { NavLink } from './Link'

export default function MoreMenu() {

    return (
        <Menu>
            {({ open }) => (
                <>
                    <Menu.Button
                        className={classNames(open ? 'text-secondary' : 'text-primary', 'focus:outline-none')}
                    >
                        <MenuIcon
                            title="More"
                            className={classNames(
                                open ? 'text-gray-600' : 'text-gray-400',
                                'inline-flex items-center h-5 w-5 group-hover:text-secondary hover:text-high-emphesis'
                            )}
                            aria-hidden="true"
                        />
                    </Menu.Button>
                    <Menu.Items className='absolute z-10 bottom-auto lg:top-12 left-full transform -translate-x-full mt-3 px-2 w-screen max-w-xs sm:px-0 rounded-lg'>
                    <Menu.Item>
                            {({ active }) => (
                                <NavLink
                                key={`Home`}
                                to='/'
                                    className={`${active} relative grid gap-2 bg-dark-900 px-5 py-6 sm:gap-8 hover:bg-dark-700`}
                                >
                                    Home
                                </NavLink>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                                <NavLink
                                key={`Swap`}
                                to='/swap'
                                    className={`${active} relative grid gap-2 bg-dark-900 px-5 py-6 sm:gap-8 hover:bg-dark-700`}
                                >
                                    Swap
                                </NavLink>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                               <NavLink
                               key={`Pool`}
                               to='/pool'
                                   className={`${active} relative grid gap-2 bg-dark-900 px-5 py-6 sm:gap-8 hover:bg-dark-700`}
                               >
                                   Pool
                               </NavLink>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                                <NavLink
                                key={`Yield`} 
                                to='/yield'
                                    className={`${active} relative grid gap-2 bg-dark-900 px-5 py-6 sm:gap-8 hover:bg-dark-700`}
                                >
                                    Yield
                                </NavLink>
                            )}
                        </Menu.Item>
                        {/* <Menu.Item>
                            {({ active }) => (
                               <NavLink
                               key={`Migrate`}
                               to='/migrate'
                                   className={`${active} relative grid gap-2 bg-dark-900 px-5 py-6 sm:gap-8 hover:bg-dark-700`}
                               >
                                   Migrate
                               </NavLink>
                            )}
                        </Menu.Item> */}
                    </Menu.Items>
                </>
            )}
        </Menu>
    )
}
