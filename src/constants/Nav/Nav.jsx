import React from "react";

import { RiNotification3Line } from "react-icons/ri";
import { BsFillCreditCard2BackFill, BsChevronBarExpand } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import { CgMenu } from "react-icons/cg";
import { MdSearch } from "react-icons/md";

import "./Nav.scss";


export default function Nav() {
  
  return (
    <nav className='nav'>
      <div className='nav__item'>
        <div className='nav__logo'>
          <BsChevronBarExpand />
          My logo
        </div>
      </div>
      <div className='nav__item'>
        <form className='nav__search'>
          <input type='search' placeholder='find imagenes' size={50} />
          <label>
            <MdSearch />
          </label>
        </form>
      </div>
      <div className='nav__item'>
        
        <button className='btn'>
          <span className='bell'>
            <RiNotification3Line />
          </span>
          <span className='bell__notification'>1</span>
        </button>
        <button className='btn'>
          <span className='credit'>
            <BsFillCreditCard2BackFill />
          </span>
          <span className='credit__text'>12,300</span>
        </button>
        <button className='btn'>
          <FaUser />
        </button>
        <button className='btn' onClick={(e)=>{
            e.target.classList.toggle('active');
        }}>
            <CgMenu />
        </button>
      </div>
    </nav>
  );
}
