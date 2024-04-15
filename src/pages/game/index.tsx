import React from "react";
import './index.scss'
const Home: React.FC = () => (
  <div className="game-box tw-text-white tw-text-[13px]">
    <div className="game-turntable-box">
      <div className="turntable"></div>
      <div className="remaining-times">
        <span>剩余次数</span>
        <b>3次</b>
      </div>
      <div className="start">
        <b>开始抽奖</b>
      </div>
    </div>

    <div className="game-winning-record">
      <ul>
        <li><span>wefkjflek</span><b>获得 24.00 代币</b></li>
        <li><span>wefkjflek</span><b>获得 24.00 代币</b></li>
        <li><span>wefkjflek</span><b>获得 24.00 代币</b></li>
      </ul>
    </div>
  </div>
);

export default Home;
