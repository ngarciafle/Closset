'use client';

import Image from 'next/image';
import Form from 'next/form';
import { search } from '@/app/data/handleSearch'
import { User, Search, TextAlignJustify, LogOut, Settings } from 'lucide-react';
import Link from 'next/link';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';

export function Header() {
    return (
        <header className='bg-background-secondary flex flex-row pl-5 pr-4 pt-1 pb-2 m-0 w-full h-12  shrink-0 z-20 items-center '>
            <Menu>
                <MenuButton className='w-fit'>
                    <TextAlignJustify className='size-14 cursor-pointer pl-4 pr-4 scale-110'/>
                </MenuButton>
                <MenuItems className='grid grid-cols-1 h-screen bg-background-secondary transition ease-in-out duration-300 z-30 ' anchor="bottom start" transition>
                    <MenuItem>
                        <Link href="/" className='flex flex-row gap-4 hover:bg-gray-700 p-1 transition-all duration-300 rounded-md pl-2'>
                            <User className='size-4 my-auto'/>
                            <p>Dashboard</p>
                        </Link>
                    </MenuItem>
                
                </MenuItems>


            </Menu>


            <Link href="/" className='group grid grid-cols-1 grid-rows-1 ml-8 shrink-0'>
                <Image
                    className='cursor-pointer col-start-1 row-start-1 self-center justify-self-center group-hover:scale-110 transition-transform duration-300 group-hover:shadow-2xl'
                    src="/cuadro.png"
                    height={32}
                    width={100}
                    alt='App icon'
                />
                <p className='opacity-50 text-background col-start-1 row-start-1 z-20 group-hover:opacity-100 transition-opacity self-center justify-self-center font-barlow'>closset</p>
            </Link>


            <Form action={search} className='border-x-amber-50 w-full flex gap-0 ml-100'>
                <label htmlFor="searchInput" className='hidden'></label>
                <input type="text" id="searchInput" placeholder='Search' className='' minLength={3} required name='searchInput'/>

                <button>
                    <Search className='color-foreground cursor-pointer'/>
                </button>
            </Form>

            <Menu >
                <MenuButton className='rounded-full bg-background size-10 min-w-10 cursor-pointer justify-self-end relative'>
                    <User className='color-foreground m-auto size-8'/>
                </MenuButton>
                    <MenuItems className='grid grid-cols-1 w-36 mt-4 z-20 bg-white/5 rounded-md shadow-inner shadow-white/10 transition ease-in-out duration-300 ' anchor="bottom end" transition>
                        <MenuItem>
                            <Link href="/profile" className='flex flex-row gap-4 hover:bg-gray-700 p-1 transition-all duration-300 rounded-md pl-2'>
                                <User className='size-4 my-auto'/>
                                <p>Profile</p>
                            </Link>
                        </MenuItem>

                        <MenuItem>
                            <Link href="/settings" className='flex flex-row gap-4 hover:bg-gray-700 p-1 transition-all duration-300 rounded-md pl-2'>
                                <Settings className='size-4 my-auto'/>
                                <p>Settings</p>
                            </Link>
                        </MenuItem>

                        <MenuItem>
                            <Link href="/" className='flex flex-row gap-4 hover:bg-gray-700 p-1 transition-all duration-300 rounded-md pl-2'>
                                <LogOut className='size-4 my-auto'/>
                                <p>Log out</p>
                            </Link>
                        </MenuItem>

                    </MenuItems>
            </Menu>
        </header>
    )
}