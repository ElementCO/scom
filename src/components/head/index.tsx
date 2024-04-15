import React from "react";
import './index.scss'
import { useNavigate } from "react-router-dom";
import { ArrowDown } from '@react-vant/icons';
import wallet_logo from "@/assets/images/wallet_logo.png";
import head_add from "@/assets/images/head-add.png";
import wallet_ton from "@/assets/images/wallet-ton.png";
const Home: React.FC = () => {
  return (
    <>
      <div className="head-box">
        <div className="game-img">
          <img src={wallet_logo} alt="" />
        </div>
        <div className="select-box">
          <div className="price-num">1211.00</div>
          <i className="type">
            <img src={wallet_ton} alt="" />
          </i>
          <div className="ArrowDown">
            <ArrowDown />
          </div>
          <div className="add">
            <img src={head_add} alt="" />
          </div>
        </div>
        <div className="profile—picture">
          <img src={wallet_logo} alt="" />
        </div>
      </div>
    </>
  );
}

export default Home;
