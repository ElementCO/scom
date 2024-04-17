import React from "react";
import './wallet.scss'
import { useNavigate, Link } from "react-router-dom";
import { Input, hooks } from 'react-vant';
import walletstep from "@/assets/images/wallet-step.png";

const Home: React.FC = () => {
  const navigate = useNavigate();
  const [state, updateState] = hooks.useSetState({
    num: ''
  })
  const backHandle = function() {
    navigate(-1);
  }
  return (
    <div className="my-wallet-financial">
      <div className="my-wallet-financial-records">
        <div className="my-wallet-financial-records-top">
          <b>钱包</b>
          <i onClick={() => backHandle() }></i>
        </div>
        <div className="my-financial-records-property">
          <b>兑换</b>
        </div>
        <div className="convert-box">
          <div className="convert-box-l">
            <i></i>
            <b>代币</b>
          </div>
          <div className="convert-box-c">
            <img src={walletstep} alt="" />
          </div>
          <div className="convert-box-r">
            <i></i>
            <b>Ton</b>
          </div>
        </div>
        <div className="collectionWallet">
          <div className="collectionWallet-title">
            收款钱包
          </div>
          <div className="collectionWallet-type">
            <b>tg钱包</b>
          </div>
        </div>
        <div className="exchange-quantity">
          <div className="exchange-quantity-title">
            <span>兑换数量</span>
            <span>代币数量：<b>1000:00</b></span>
          </div>
          <div className="collectionWallet-type">
            <Input
              value={state.num}
              type='number'
              onChange={num => updateState({ num })}
              placeholder=''
            />
          </div>
          <div className="button-group">
            <b>全部</b>
            <b>25%</b>
            <b>50%</b>
            <b>75%</b>
          </div>
          <div className="exchange-btn">
            兑换
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
