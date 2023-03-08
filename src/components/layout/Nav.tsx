import Link from 'next/link';
import { FaUser } from 'react-icons/fa';

const Nav = () => {
  return (
    <>
      <div className='navbar bg-teal-200'>
        <div className='flex-1'>
          <Link href='/' className='btn-ghost btn text-xl normal-case'>
            daisyUI
          </Link>
        </div>
        <div className='flex-none'>
          <ul className='menu menu-horizontal px-1'>
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <Link
                href='/account/signup'
                className='text-black-700 mt-4 mr-4 block hover:font-semibold lg:mt-0 lg:inline-block'
              >
                Item 2
              </Link>
            </li>
            <li tabIndex={0} className='relative'>
              <a className='bg-slate-100 hover:bg-slate-300'>
                <FaUser />
              </a>
              <ul className='right-1 w-44 bg-base-100 p-2'>
                <li>
                  <Link
                    href='/account/signup'
                    className='text-black-700 mt-4 mr-4 block hover:font-semibold lg:mt-0 lg:inline-block'
                  >
                    Sign Up
                  </Link>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Nav;
