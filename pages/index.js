import Header from '../components/Header';
import PortfolioChartOriginal from '../components/PortfolioChartOriginal';
import BuyTokens from '../components/BuyTokens';
import Notice from '../components/Notice';
import Assets from '../components/Assets';

import React from 'react';



//icons
import { BiDotsHorizontalRounded } from 'react-icons/bi'
import { AiOutlinePlus } from 'react-icons/ai'
import { Smartphone } from '@material-ui/icons';

const styles = {
  wrapper: 'w-screen h-screen flex-flex-col',
  mainContainer: 'w-2/3 h-full m-auto flex mt-16',
  leftMain: 'flex flex-col w-3/4 h-full p-6 overflow-y-scroll',
  portfolioAmountContainer: 'flex flex-col',
  portfolioAmount: 'text-white text-4xl',
  portfolioPercent: 'text-white font-bold text-sm',
  postHour: 'text-gray-400',
  chartContainer: 'text-5xl flex justify-center w-full h-1/3 text-white mt-11 mb-11',
  buyingPowerContainer: 'w-full border-t mb-24 border-b h-16 border-[#30363b] flex justify-between',
  buyingPowerTitle: 'text-white font-bolder text-lg',
  buyingPowerAmount: 'text-white font-bolder text-xl',
  notice: 'flex border border-[#30363b] mx-11 my-4 p-5 flex-col flex-1',
  noticeContainer: 'flex-1',
  noticeTitle: 'text-gray-500',
  noticeMessage: 'text-white font-bold',
  noticeCTA: 'font-bold text-green-500 cursor-pointer mt-5',
  rightMain: 'flex flex-col flex-1 h-4/5 bg-[#1E2123] mt-6 rounded-lg overflow-y-scroll noScroll',
  rightMainItem: 'flex items-center text-white p-5 border-b border-[#30363b]',
  itemTitle: 'flex-1 font-bold',
  moreOptions: 'cursor-pointer text-xl',
}

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <Header/>
      <div className={styles.mainContainer} >
        <div className={styles.leftMain} >
          <div className={styles.portfolioAmountContainer} >
            <div className={styles.portfolioAmount}>23 ETH</div>
            <div className={styles.portfolioPercent} >
              + 0.00001 (0.5%)
              <span className={styles.pastHour} >Past hour</span>
            </div>
          </div>
          <div>
            <div className={styles.chartContainer} >
              <PortfolioChartOriginal />
            </div>
          </div>
          <div className={styles.buyingPowerContainer} >
            <div className={styles.buyingPowerTitle}  >Buying power</div>
            <div className={styles.buyingPowerAmount} >12 ETH</div>
          </div>
          <div className={styles.notice}>
            <div className={styles.noticeContainer}>
              <div className={styles.noticeTitle}>Send funds</div>
              <div className={styles.noticeMessage}>
              Transfer your funds here.
              </div>
            </div>
            <BuyTokens />
          </div>
          <Notice />
        </div>
        <div className={styles.rightMain} >
          <div className={styles.rightMainItem} >
            <div className={styles.itemTitle} >
              Crypto Currencies
            </div>

            <BiDotsHorizontalRounded className={styles.moreOptions} />
          </div>


          { /** Map through coins and make asset componet for every coin */}
          <Assets coin={"BTC"} price={0.89}/>
          <Assets coin={"SOL"} price={-0.89}/>
          <Assets coin={"ETH"} price={1.89}/>
          <Assets coin={"USDC"} price={0.31}/>

          <div className={styles.rightMainItem}>
            <div className={styles.itemTitle} >
              Lists
            </div>
            <AiOutlinePlus className={styles.moreOptions} />
          </div>
        </div>
      </div>
    </div>
  )
}
