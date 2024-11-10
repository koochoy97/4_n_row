import { Link } from "react-router-dom";
export default function Rules() {
  return (
    <div className="w-full h-screen flex justify-center items-center bg-[#7944FF]">
      <div className="custom_shadow_div max-w-[468px] flex justify-center items-center p-6 py-10 border-[3px] border-black bg-white rounded-[40px] flex-col relative">
        <h1 className="font-bold text-[56px]">RULES</h1>
        <h2 className="text-left w-full text-[20px] font-bold text-[#7944FF]">
          OBJECTIVE
        </h2>
        <p className="text-left text-[#626262] font-bold">
          Be the first player to connect 4 of the same colored discs in a row
          (either vertically, horizontally, or diagonally).
        </p>
        <h2 className="text-left w-full text-[20px] font-bold text-[#7944FF] mt-4">
          HOW TO PLAY
        </h2>
        <ol className="list-decimal list-outside text-left text-[#626262] font-bold pl-4 space-y-2">
          <li>Red goes first in the first game.</li>
          <li>
            Players must alternate turns, and only one disc can be dropped in
            each turn.
          </li>
          <li>The game ends when there is a 4-in-a-row or a stalemate.</li>
          <li>
            The starter of the previous game goes second in the next game.
          </li>
        </ol>

        <Link to="/" className="absolute bottom-[-35px]">
          <img src="../public/images/icon-check.svg" alt="" />
        </Link>
      </div>
    </div>
  );
}
