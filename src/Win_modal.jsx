import { useEffect, useState } from "react";

export function Win_modal(props) {
  //let width = "291px";
  //let height = "177px";

  const [scale, setScale] = useState("scale-0");

  useEffect(() => {
    if (props.game_result === "player_1" || props.game_result === "player_2") {
      setScale("scale-100");
    } else {
      setScale("scale-0");
    }
  }, [props.game_result]);

  return (
    <div
      className={`custom_shadow_div w-[291px] h-[177px] absolute z-50 bg- flex flex-col bg-white justify-center items-center border-[3px] border-black rounded-3xl transition-all duration-500 overflow-hidden transfrom origin-center ${scale}  -bottom-[150px] sm:-bottom-[123px]`}
    >
      <p className="font-bold">
        {props.game_result === "player_1"
          ? "PLAYER 1"
          : props.game_result === "player_2"
          ? "PLAYER 2"
          : ""}
      </p>
      <p className="text-[56px] font-bold">WINS</p>
      <button
        className="bg-[#5c2dd5] rounded-full text-white font-bold px-4 py-2"
        onClick={props.play_again}
      >
        PLAY AGAIN
      </button>
    </div>
  );
}
