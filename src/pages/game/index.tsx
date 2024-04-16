import React, { useState, useRef } from "react";
import "./index.scss";
import { LuckyWheel } from "@lucky-canvas/react";
import wheelBg from "@/assets/images/wheel_bg.png";
import wheelPlay from "@/assets/images/wheel_play.png";
import prizeBoMa from "@/assets/images/prizes/baoma@2x.png";
import prizeHongQi from "@/assets/images/prizes/hongqi@2x.png";
import prizeMeta60 from "@/assets/images/prizes/meta60@2x.png";
import prizeShouZhuo from "@/assets/images/prizes/shouzhuo@2x.png";
import prizeXiangLian from "@/assets/images/prizes/xianglian@2x.png";
import prizeXiaomi from "@/assets/images/prizes/xiaomi@2x.png";
import Head from "@/components/head";
import { getLotteryProducts } from "@/apis/lottery";

getLotteryProducts();

const Home: React.FC = () => {
  const [blocks] = useState([
    {
      padding: "10px",
      imgs: [
        {
          src: wheelBg,
          width: "100%",
          rotate: true,
        },
      ],
    },
  ]);
  const [prizes] = useState([
    {
      fonts: [
        { text: "宝马530", fontSize: "14px", fontColor: "#551A7E", top: "20%" },
      ],
      imgs: [{ src: prizeBoMa, width: "40%", top: "30%" }],
    },
    {
      fonts: [
        {
          text: "周大福金手镯",
          fontSize: "14px",
          fontColor: "#551A7E",
          top: "20%",
        },
      ],
      imgs: [{ src: prizeShouZhuo, width: "40%", top: "30%" }],
    },
    {
      fonts: [
        {
          text: "xiaomi 13 Ultra",
          fontSize: "14px",
          fontColor: "#551A7E",
          top: "20%",
        },
      ],
      imgs: [{ src: prizeXiaomi, width: "20%", top: "40%" }],
    },
    {
      fonts: [
        { text: "红旗H9", fontSize: "14px", fontColor: "#551A7E", top: "20%" },
      ],
      imgs: [{ src: prizeHongQi, width: "40%", top: "30%" }],
    },
    {
      fonts: [
        {
          text: "周大福黄金项链",
          fontSize: "14px",
          fontColor: "#551A7E",
          top: "20%",
        },
      ],
      imgs: [{ src: prizeXiangLian, width: "40%", top: "30%" }],
    },
    {
      fonts: [
        {
          text: "Mate60 RS",
          fontSize: "14px",
          fontColor: "#551A7E",
          top: "20%",
        },
      ],
      imgs: [{ src: prizeMeta60, width: "22%", top: "40%" }],
    },
  ]);
  const [buttons] = useState([
    {
      background: "transparent",

      imgs: [{ src: wheelPlay, width: "83px", height: "103px", top: "-62px" }],
    },
  ]);
  const myLucky = useRef<typeof LuckyWheel | null>();
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const startPrize = () => {
    setIsPlaying(true);
    myLucky.current!.play();
  };
  const endPrize = () => {
    setIsPlaying(false);
    myLucky.current!.stop(Math.floor(Math.random() * prizes.length));
  };
  return (
    <>
      <Head />
      <div className="game-box tw-text-white tw-text-[13px]">
        <div className="game-turntable-box">
          <div className="turntable">
            <LuckyWheel
              ref={myLucky}
              width="300px"
              height="300px"
              blocks={blocks}
              prizes={prizes}
              buttons={buttons}
              onEnd={(prize) => {
                // 抽奖结束会触发end回调
                console.log(prize);
              }}
            />
          </div>
          <div className="remaining-times">
            <span>剩余次数</span>
            <b>3次</b>
          </div>
          <div className="start">
            {isPlaying ? (
              <b onClick={endPrize}>结束抽奖</b>
            ) : (
              <b onClick={startPrize}>开始抽奖</b>
            )}
          </div>
        </div>

        <div className="game-winning-record">
          <ul>
            <li>
              <span>wefkjflek</span>
              <b>获得 24.00 代币</b>
            </li>
            <li>
              <span>wefkjflek</span>
              <b>获得 24.00 代币</b>
            </li>
            <li>
              <span>wefkjflek</span>
              <b>获得 24.00 代币</b>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Home;
