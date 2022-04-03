import React from 'react'
import Image from 'next/image'
import logo from '../assets/logo.png';
import { AiOutlineSearch } from 'react-icons/ai'

const Header = () => {

  const styles = {
    container: 'flex w-screen h-16 bg-black px-10 py-3 mb-5 fixed top-0 flex-wrap max-h-full',
    leftHeader: 'flex flex-1 md:justify-start justify-center xs:justify-center flex-wrap',
    Logo: 'object-contain cursor-pointer h-auto w-100',
    searchWrapper: 'flex flex-1 justify-center',
    searchInputContainer: 'text-white items-center flex flex-1 justify-start border border-gray-400 hover:bg-[#1E2123] duration-300 p-3 rounded-lg max-w-xs',
    searchicon: 'text-gray-400 text-3xl mr-3',
    searchInputWrapper: 'text-gray-400 text-lg w-full',
    searchInput: 'bg-transparent outline-none w-full',
    rightHeader: 'flex items-center lg:justify-evenly md:justify-end sm:justify-center text-white gap-8 flex-wrap',
    menuItem: 'cursor-pointer font-bold hover:text-green-500',
  }

  //Make dynamic afterwards
  const isAuthenticated = true;
  const formatedAccount = '0xB0c...FDe';

  return (
    <div className={styles.container} style={{ height: "fit-content",
    zIndex: "1",
 }}>
      <div className={styles.leftHeader} style={{ minWidth: "200px" }}>
        < Image src={logo} width={200} height={40} className={ styles.Logo } style={{ flexBasis: "50%" }}/>
        <div className={styles.searchWrapper}  style={{ flexBasis: "50%", minWidth: "200px" }}>
          <div className={styles.searchInputContainer}>
            <AiOutlineSearch className={styles.searchicon} />
            <div className={styles.searchInputWrapper}>
              <input placeholder='Search.....' className={styles.searchInput} />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.rightHeader} style={{ margin: "auto" }}>
        <div className={styles.menuItem} >Rewards</div>
        <div className={styles.menuItem} >Portfolio</div>
        <div className={styles.menuItem} >Cash</div>
        <div className={styles.menuItem} >Messages</div>

        {isAuthenticated && (
          <>
            <div className={styles.menuItem} >{formatedAccount}</div>
            <div className={styles.menuItem} onClick={() => connectedWallet()}>Logout</div>
          </>
        )}

        {!isAuthenticated && (
          <div className={styles.menuItem} onClick={() => connectedWallet()}>Login</div>
        )}

      </div>
    </div>
  )
}

export default Header