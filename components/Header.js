/*
 * Project: Jacqueline Taylor & Friends
 *
 * Created on Wed Apr 06 2022
 *
 * Filename: Header.js
 *
 * Copyright (c) 2022 Bujisoft
 */

// ADJUST COLOR TO GRADIENT Add Link and pages

import Image from 'next/image'
import Logo from '../public/images/jlogo.png';

const Header = () => {
    return (
      <header className='p-3 bg-primary text-white'>
        <div className='container'>
          <div className='d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start'>
            <a
              href='#'
              className='d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none'
            >
              <Image
              src={Logo}
              width={100}
              height={50}
              alt=""
              ></Image>
            </a>
  
            <ul className='nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0'>
              <li>
                <a href='#' className='nav-link px-2 text-secondary'>
                  Home
                </a>
              </li>
              <li>
                <a href='#' className='nav-link px-2 text-white'>
                  News
                </a>
              </li>
              <li>
                <a href='#' className='nav-link px-2 text-white'>
                  About
                </a>
              </li>
              <li>
                <a href='#' className='nav-link px-2 text-white'>
                  Contact
                </a>
              </li>
              {/* <li>
                <a href='#' className='nav-link px-2 text-white'>
                  nnn
                </a>
              </li> */}
            </ul>
  
            <form className='col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3'>
              <input
                type='search'
                className='form-control form-control-dark'
                placeholder='Search...'
                aria-label='Search'
              />
            </form>
            {/* TODO: refactor component/sign-log */}
            <div className='text-end'>
              <button type='button' className='btn btn-outline-light me-2'>
                Login
              </button>
              <button type='button' className='btn btn-warning'>
                Sign-up
              </button>
            </div>
            {/* End -- sign-log */}
          </div>
        </div>
      </header>
    );
  };
  export default Header;