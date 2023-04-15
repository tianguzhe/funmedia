import { useEffect, useMemo, useState } from "react";

import "./App.scss";
import PortalDialog from "./components/PortalDialog";

const tele = window.Telegram.WebApp;

function App() {
  useEffect(() => {
    tele.ready();

    console.log(tele);
  }, []);

  const [isPortalVisible, setIsPortalVisible] = useState(false);

  const showPortal = () => {
    setIsPortalVisible(true);
  };

  const hidePortal = () => {
    setIsPortalVisible(false);
  };

  const userInfo = {
    username: "螺",
    jiff: "123.63",
    watch_time: "123.63",
    giving: "0",
    auth: "default",
    code: "无",
  };

  return (
    <>
      <div className="App">
        <div className="dec">
          <img
            className="img"
            src="https://i.328888.xyz/2023/04/15/i7Mzsz.jpeg"
            alt=""
          />
          <div className="title">FunMedia</div>
        </div>

        <div className="info">
          <div className="title">账号信息</div>
          <div>用户名 {userInfo.username}</div>
          <div>观看时长 {userInfo.watch_time}</div>
          <div>当前权限 {userInfo.auth}</div>
        </div>

        <div className="rewards">
          <div className="title">积分信息</div>
          <div className="count">可用积分 {userInfo.jiff}</div>
          <div className="wrap">
            <div
              className="item"
              style={{
                background: "#fbb023",
              }}
              onClick={() => {
                showPortal();
                document.body.style.overflow = "hidden";
              }}
            >
              <div className="detail">解锁NSFW</div>
              <div className="detail-dec">消耗100积分</div>
            </div>
            <div
              className="item"
              style={{
                background: "#36d399",
              }}
              onClick={() => {
                alert("等待api接入,购买失败");
              }}
            >
              <div className="detail">生成邀请码</div>
              <div className="detail-dec">消耗188积分</div>
            </div>
          </div>
        </div>

        <RankList />
      </div>
      <PortalDialog visible={isPortalVisible}>
        <>
          <div>确定购买?</div>
          <div>
            <div
              onClick={() => {
                document.body.style.overflow = "auto";
                setIsPortalVisible(false);
              }}
            >
              取消
            </div>
            <div
              onClick={() => {
                setIsPortalVisible(false);
                document.body.style.overflow = "auto";
                alert("等待api接入,购买失败");
              }}
            >
              确定
            </div>
          </div>
        </>
      </PortalDialog>
    </>
  );
}

const RankList: React.FC = () => {
  const [index, setIndex] = useState(0);

  // const [data, setData] = useState([]);

  //   1. GGBond: 864.07
  // 2. LilAoAo: 463.57
  // 3. J000ker: 415.75
  // 4. domoxiaojun: 406.19
  // 5. fox1085: 374.38
  // 6. ALAM228: 367.83
  // 7. LinkaW: 297.41
  // 8. happyxiao: 267.21
  // 9. iyyynn: 232.80
  // 10. Alive_X: 217.49

  const mockTimeData = [
    { name: "GGBond", reward: 864.07 },
    { name: "GGBond", reward: 864.07 },
    { name: "GGBond", reward: 864.07 },
    { name: "GGBond", reward: 864.07 },
    { name: "GGBond", reward: 864.07 },
    { name: "GGBond", reward: 864.07 },
    { name: "GGBond", reward: 864.07 },
    { name: "GGBond", reward: 864.07 },
    { name: "GGBond", reward: 864.07 },
    { name: "GGBond", reward: 864.07 },
  ];

  const mockGivData = [
    { name: "Alive_X", reward: 267.21 },
    { name: "Alive_X", reward: 267.21 },
    { name: "Alive_X", reward: 267.21 },
    { name: "Alive_X", reward: 267.21 },
    { name: "Alive_X", reward: 267.21 },
    { name: "Alive_X", reward: 267.21 },
    { name: "Alive_X", reward: 267.21 },
    { name: "Alive_X", reward: 267.21 },
    { name: "Alive_X", reward: 267.21 },
    { name: "Alive_X", reward: 267.21 },
  ];

  const mockRewardData = [
    { name: "yikwing", reward: 374.38 },
    { name: "yikwing", reward: 374.38 },
    { name: "yikwing", reward: 374.38 },
    { name: "yikwing", reward: 374.38 },
    { name: "yikwing", reward: 374.38 },
    { name: "yikwing", reward: 374.38 },
    { name: "yikwing", reward: 374.38 },
    { name: "yikwing", reward: 374.38 },
    { name: "yikwing", reward: 374.38 },
    { name: "yikwing", reward: 374.38 },
  ];

  const data = useMemo(() => {
    if (index == 0) return mockTimeData;
    if (index == 1) return mockGivData;
    if (index == 2) return mockRewardData;
  }, [index]);

  return (
    <div className="rank">
      <div
        className="flexR"
        style={{
          marginBottom: "16px",
        }}
      >
        <div
          className="tab-title"
          style={{
            borderBottom: index == 0 ? "2px solid #fbd26a" : "",
          }}
          onClick={() => {
            setIndex(0);
          }}
        >
          积分榜
        </div>
        <div
          className="tab-title"
          style={{
            borderBottom: index == 1 ? "2px solid #fbd26a" : "",
          }}
          onClick={() => {
            setIndex(1);
          }}
        >
          捐赠榜
        </div>
        <div
          className="tab-title"
          style={{
            borderBottom: index == 2 ? "2px solid #fbd26a" : "",
          }}
          onClick={() => {
            setIndex(2);
          }}
        >
          时长榜
        </div>
      </div>
      {data.map((item, index) => (
        <div
          className="flexR j-space-between"
          style={{
            marginBottom: "4px",
          }}
        >
          <div>
            {index + 1}. {item.name}
          </div>
          <div>{item.reward}</div>
        </div>
      ))}
    </div>
  );
};

export default App;
