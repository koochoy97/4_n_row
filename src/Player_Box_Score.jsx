export function Player_Box_Score(props) {
  return (
    <div
      className="custom_shadow_div w-[150px]  bg-white border-[3px] border-black rounded-2xl flex flex-col text-center justify-between items-center relative text-[16px] mx-3
      sm:mx-8 sm:w-full sm:flex-row sm:text-[20px] sm:px-8 sm:py-2
      xl:flex-col xl:w-[147px] xl:h-[164px] xl:mx-14 xl:items-center xl:p-0"
    >
      <img
        src={
          props.player === "PLAYER 1"
            ? "../public/images/player-one.svg"
            : "../public/images/player-two.svg"
        }
        alt=""
        className={`absolute ${
          props.player === "PLAYER 1"
            ? "left-[-30px] xl:left-[30%]"
            : "right-[-30px] xl:right-[30%]"
        }
        xl:-top-[30px]`}
      />

      <p className=" text-[16px] sm:text-[20px] font-bold xl:mt-8">
        {props.player}
      </p>
      <p className=" font-bold  text-[32px] sm:text-[56px]">{props.score}</p>
    </div>
  );
}
