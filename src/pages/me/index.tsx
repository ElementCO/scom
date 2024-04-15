import React from "react";
import './index.scss'

import wallet_logo from "@/assets/images/wallet_logo.png";
interface Mylist {
  id: number;
  price: string;
  name: string;
};

const Home: React.FC = () => {
  const list: Mylist[] = [
    {
      id: 1,
      name: "抽奖获得",
      price: "+25.00"
    },
    {
      id: 2,
      name: "兑换TON",
      price: "-25.00"
    },
    {
      id: 3,
      name: "抽奖获得",
      price: "+25.00"
    },
    {
      id: 4,
      name: "抽奖获得",
      price: "+25.00"
    },
    {
      id: 4,
      name: "兑换TON",
      price: "-25.00"
    },
    {
      id: 4,
      name: "兑换TON",
      price: "-25.00"
    },
    {
      id: 4,
      name: "抽奖获得",
      price: "+25.00"
    }
  ];
  return (
    <div className="my-financial">
      <div className="my-financial-records">
        <div className="my-financial-records-top">
          <img src={wallet_logo} alt="" />
          <b>Martin Johnson</b>
          <i></i>
        </div>
        <div className="my-financial-records-property">
          <div>
            <span>代币资产</span>
            <b>1000.00</b>
          </div>
          <div>
            <b>SWAP</b>
          </div>
        </div>

        <div className="my-financial-records-box">
          <div className="my-financial-records-box-title">
            <i></i>
            <b>资金记录</b>
          </div>
          <div className="my-financial-records-box-list">
            <ul>
              {
                list.map((item) => (
                  <li key={item.id}>
                    <span>{item.name}</span>
                    <b>{item.price}</b>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
