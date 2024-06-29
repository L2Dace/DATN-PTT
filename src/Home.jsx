/* eslint-disable no-unused-vars */
import { useState, useEffect, useRef } from "react";
import App from "./App.jsx";
import "./index.css";
import { Canvas } from "@react-three/fiber";
import { Loader } from "@react-three/drei";
import ObjectInformation from "./components/ObjectInformation.jsx";
import UTEInfo from "./components/UTEInfo.jsx";
import HuanChuongLaoDongInfo from "./components/HuanChuongLaoDongInfo.jsx";
import CoThiDuaInfo from "./components/CoThiDuaInfo.jsx";
import ISOInfo from "./components/chungnhanISOinfo.jsx";
import CNGDInfo from "./components/chungnhangiaoduc.jsx";
import BGM from "../public/assets/BGM.mp3";

const Home = () => {
  const [showCoverPage, setShowCoverPage] = useState(true);
  const [showInstruction, setShowInstruction] = useState(true);
  const [showUI, setShowUI] = useState(true);
  // const [showSound, setShowSound] = useState(true);

  const [currentStage, setCurrentStage] = useState(false);

  const audioRef = useRef(new Audio(BGM));
  audioRef.current.volume = 0.4;
  audioRef.current.loop = true;
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.code === "KeyH") {
        setShowUI((prevShowUI) => !prevShowUI);
      }
      if (event.code === "KeyI") {
        setShowInstruction((prevShowInstruction) => !prevShowInstruction);
      }
      if (event.code === "KeyM") {
        // setShowSound((prevShowSound) => !prevShowSound);
        setIsPlayingMusic((prevPlayingMusic) => !prevPlayingMusic);
      }
      if (event.code === "KeyC") {
        setCurrentStage(null);
        // const popupElement = document.getElementById("popup");
        // if (popupElement) {
        //   popupElement.style.display = "none";
        // }
      }
    };

    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  useEffect(() => {
    if (isPlayingMusic) {
      audioRef.current.play();
    }

    return () => {
      audioRef.current.pause();
    };
  }, [isPlayingMusic]);

  const handleInstructionButtonClick = () => {
    setShowInstruction((prevShowInstruction) => !prevShowInstruction);
  };
  const exitInstruction = () => {
    setShowInstruction(false);
  };

  const exitCoverPage = () => {
    setShowCoverPage(false);
    setIsPlayingMusic(true);
  };
  // const handleSoundButtonClick = () => {
  //   setShowSound((prevShowSound) => !prevShowSound);
  //   setIsPlayingMusic((prevPlayingMusic) => !prevPlayingMusic);
  // };

  return (
    <div
      id="container"
      className="w-full h-screen relative flex justify-center items-center "
    >
      {showCoverPage && (
        <div
          id="CoverPage"
          className="w-full h-screen absolute flex z-20 bg-black text-white py-20"
        >
          <div className="container mx-auto flex flex-col md:flex-row items-center my-12 md:my-24">
            <div className="flex flex-col w-full lg:w-2/3 justify-center items-start p-8">
              <p className="text-2xl p-2 text-yellow-300 mb-4 tracking-loose">
                Chào mừng bạn đến tham quan
              </p>
              <h2 className="text-3xl md:text-5xl leading-relaxed md:leading-snug mb-2">
                Phòng Truyền thống
              </h2>
              <h2 className="text-3xl md:text-5xl leading-relaxed md:leading-snug mb-2">
                Trường Đại học Sư phạm Kỹ thuật
              </h2>

              {/* <p className="text-sm md:text-base text-gray-50 mb-4">
              Explore your favourite events and register now to showcase your
              talent and win exciting prizes.
            </p> */}
              <a
                onClick={exitCoverPage}
                href="#"
                className="bg-transparent mt-4 hover:bg-yellow-300 text-yellow-300 hover:text-black rounded shadow hover:shadow-lg py-2 px-4 border border-yellow-300 hover:border-transparent"
              >
                Tham quan
              </a>
            </div>
            <div className="p-8 mt-12 mb-6 md:mb-0 md:mt-0 ml-0 md:ml-12 lg:w-1/3  justify-center">
              <div className="h-auto flex flex-wrap content-center">
                {/* <div>
                  <video className="w-full h-auto max-w-full" controls autoPlay>
                    <source
                      src="../public/assets/introvideo.mp4"
                      type="video/mp4"
                    />
                  </video>
                </div> */}
                <div>
                  <img
                    className="inline-block mt-24 md:mt-0 p-8 md:p-0"
                    src="https://scontent.fdad1-3.fna.fbcdn.net/v/t39.30808-6/279525519_5092006547551423_7981801745803409556_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFX0bpZs9yie1_6_5f9aI0JFeZNrf5fALEV5k2t_l8AsZBjC23Ukuhpq8RnyC7WJxAf7FaYHZn4VdwfewldHNOG&_nc_ohc=USlUYX5FhCkQ7kNvgGgpo5C&_nc_ht=scontent.fdad1-3.fna&oh=00_AYA-oqaD1nluSeRq3vcdnOBdDNLzXHZ2QhRIraUXrr90QQ&oe=6674CFFD"
                  />
                </div>
                {/* <div>
                <img
                  className="inline-block mt-28  lg:block"
                  src="https://user-images.githubusercontent.com/54521023/116969939-c1d5f180-acd4-11eb-8ad4-9ab9143bdb50.png"
                />
              </div> */}
              </div>
            </div>
          </div>
        </div>
      )}

      {showInstruction && (
        <div
          onClick={exitInstruction}
          id="instruction"
          className="absolute z-10 flex flex-col w-2/5 h-auto bg-black/30 rounded-2xl backdrop-filter backdrop-blur-sm cursor-pointer "
        >
          {/* {currentStage && <ObjectInformation currentStage={currentStage} />} */}
          {/* <!-- Header --> */}
          <div className="flex w-full h-auto justify-center items-center">
            <div className="flex w-10/12 h-auto py-3 justify-center items-center text-4xl font-bold">
              HƯỚNG DẪN
            </div>
          </div>
          {/* <!-- Modal Content--> */}
          <div className="flex flex-col w-full h-full py-10 px-2 justify-center items-center rounded text-center text-2xl text-white-500">
            <p>A/S/W/D để di chuyển</p>
            <p>V: Thay đổi góc nhìn</p>
            <p>Shift: Chạy</p>
            <p>Space: Nhảy</p>
            <p>Giữ E: Hành động đặc biệt</p>
            <p>M: Bật/tắt âm thanh</p>
            <p>I: Bật/tắt hướng dẫn</p>
          </div>
          {/* <!-- End of Modal Content--> */}
          <div className="bottom-0 flex flex-col w-full h-full py-10 px-2 justify-center items-center rounded text-center font-thin text-sm text-white-500">
            <p>Nhấn vào màn hình hoặc nhấn I để tắt hướng dẫn</p>
          </div>
        </div>
      )}

      {/* Popup thong tin */}
      <div
        id="popup"
        className="absolute z-10 flex flex-col w-4/5 h-auto bg-black/30 rounded-2xl backdrop-filter backdrop-blur-sm cursor-pointer "
      >
        {currentStage && <ObjectInformation currentStage={currentStage} />}
      </div>

      {/* UI BUTTON */}
      {showUI && (
        <>
          <button
            id="InstructionButton"
            onClick={handleInstructionButtonClick}
            className="absolute bottom-5 right-5 z-10 rounded-full bg-black/30 w-8 h-8 justify-center items-center shadow-md cursor-pointer"
          >
            {/* <span className="flex flex-col justify-center items-center h-full text-white font-bold text-lg ">
          ?
        </span> */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"
              />
            </svg>
          </button>
          <button
            id="SoundButton"
            // onClick={handleSoundButtonClick}
            onClick={() => setIsPlayingMusic(!isPlayingMusic)}
            className="absolute bottom-14 right-5 z-10 rounded-full bg-black/30 w-8 h-8 justify-center items-center shadow-md cursor-pointer"
          >
            {!isPlayingMusic ? (
              <svg
                id="mute"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="-2 -2 28 28"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 9.75 19.5 12m0 0 2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25m-10.5-6 4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z"
                />
              </svg>
            ) : (
              <svg
                id="unmute"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="-2 -2 28 28"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.114 5.636a9 9 0 0 1 0 12.728M16.463 8.288a5.25 5.25 0 0 1 0 7.424M6.75 8.25l4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z"
                />
              </svg>
            )}
          </button>
        </>
      )}

      <div className="aim"></div>
      <Canvas shadows>
        <UTEInfo setCurrentStage={setCurrentStage} position={[0, 2, -9]} />
        <HuanChuongLaoDongInfo
          setCurrentStage={setCurrentStage}
          position={[-7.8, 2.5, -3]}
        />
        <CoThiDuaInfo
          setCurrentStage={setCurrentStage}
          position={[-5.4, 2, -8.1]}
        />
        <ISOInfo setCurrentStage={setCurrentStage} position={[3.7, 2.5, 4.6]} />
        <CNGDInfo
          setCurrentStage={setCurrentStage}
          position={[5.4, 2.5, 4.6]}
        />
        <App />
      </Canvas>
      <Loader />
    </div>
  );
};

export default Home;
