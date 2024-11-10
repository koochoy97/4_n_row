import { Link } from "react-router-dom";
export default function Home() {
  return (
    <div className=" w-full h-lvh bg-[#7944FF] flex justify-center items-center flex-col">
      <img src="../public/images/logo.svg" alt="" />

      <div className="flex flex-col justify-center items-center w-[350px] mt-20">
        <Link
          to="/game"
          className="custom_shadow_div my-3 bg-[#FFCE67] w-full py-4 rounded-2xl border-[3px] border-black font-bold text-[24px] flex justify-between items-center px-4"
        >
          <p>PLAY VS PLAYER</p>
          <img src="../public/images/player-vs-player.svg" alt="" />
        </Link>

        <Link
          to="/rules"
          className="custom_shadow_div my-3 bg-white w-full py-4 rounded-2xl border-[3px] border-black font-bold text-[24px] flex justify-between items-center px-4"
        >
          <p>GAME RULES</p>
        </Link>
      </div>
    </div>
  );
}
