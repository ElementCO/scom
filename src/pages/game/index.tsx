import React, { useState, useRef } from "react";
import { useTonConnect } from "../../hooks/useTonConnect";
import { Address, toNano } from "ton";
import "./index.scss";
import { LuckyWheel } from "@lucky-canvas/react";
import wheelBg from "@/assets/images/wheel_bg.png";
import wheelPlay from "@/assets/images/wheel_play.png";
import Head from "@/components/head";
import { TonConnectButton } from "@tonconnect/ui-react";
import { getLotteryProducts, getLotteryDraw } from "@/apis/lottery";

type IPrize = {
  id: number;
  imgs: { src: string; width: string; height?: string; top?: string }[];
};

const Home: React.FC = () => {
  const { sender, connected } = useTonConnect();
  console.log(connected);
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
  const [prizes, setPrizes] = useState<IPrize[]>([]);
  const [buttons] = useState([
    {
      background: "transparent",

      imgs: [{ src: wheelPlay, width: "83px", height: "103px", top: "-62px" }],
    },
  ]);
  const myLucky = useRef<typeof LuckyWheel | null>();
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [tonAmount, setTonAmount] = useState("0.3");
  const [tonRecipient, setTonRecipient] = useState(
    "0QCiWGtKXzu76Xyyiw7Qvhv9Twj0eDh6ad2Yum-XDBan3zEw"
  );

  const startPrize = () => {
    sender.send({
      to: Address.parse(tonRecipient),
      value: toNano(tonAmount),
    });

    setIsPlaying(true);
    myLucky.current!.play();
  };
  const endPrize = async () => {
    const { data } = await getLotteryDraw<{ id: number }>();
    const index = prizes.findIndex((prize) => prize.id === data.id);
    setIsPlaying(false);
    myLucky.current!.stop(index);
  };

  async function fetchLotteryProducts() {
    const { data } = await getLotteryProducts<
      { id: number; name: string; img: string }[]
    >();
    console.log(data);

    const prizes = data.map(({ img, id }) => ({
      id,
      imgs: [{ src: img, width: "40%", top: "30%" }],
    }));

    setPrizes(prizes);
  }

  // useEffect(() => {
  //   fetchLotteryProducts();
  // }, []);

  return (
    <>
      <Head />
      <TonConnectButton />
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
