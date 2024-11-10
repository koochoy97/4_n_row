import { useEffect, useState } from "react";

export function Turn_Display(props) {
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    if (!props.game_result && !props.open_menu) {
      let interval = setInterval(() => {
        setTimer(timer + 1);
      }, 1000);

      if (timer === 10) {
        if (props.player === "player_1") {
          props.setPlayer("player_2");
        } else if (props.player === "player_2") {
          props.setPlayer("player_1");
        }
      }

      return () => clearInterval(interval); // Limpiar el intervalo al desmontar o al cambiar
    }
  }, [timer, props.game_result, props.open_menu]);

  useEffect(() => {
    setTimer(0);
  }, [props.player]);

  return (
    <div className="absolute z-50 -bottom-[140px]  sm:-bottom-[123px]">
      <div className="w-full h-full relative">
        <svg
          width="197"
          height="165"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          className="custom_shadow"
        >
          <defs>
            <filter
              x="-4.2%"
              y="-4.2%"
              width="108.4%"
              height="116.2%"
              filterUnits="objectBoundingBox"
              id="a"
            >
              <feMorphology
                radius="3"
                operator="dilate"
                in="SourceAlpha"
                result="shadowSpreadOuter1"
              ></feMorphology>
              <feOffset
                dy="10"
                in="shadowSpreadOuter1"
                result="shadowOffsetOuter1"
              ></feOffset>
              <feComposite
                in="shadowOffsetOuter1"
                in2="SourceAlpha"
                operator="out"
                result="shadowOffsetOuter1"
              ></feComposite>
              <feColorMatrix
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"
                in="shadowOffsetOuter1"
              ></feColorMatrix>
            </filter>
            <path
              d="M12.239 34.847 87.279 3.25a20 20 0 0 1 15.454-.029l75.96 31.65A20 20 0 0 1 191 53.333V130c0 11.046-8.954 20-20 20H20c-11.046 0-20-8.954-20-20V53.28a20 20 0 0 1 12.239-18.433Z"
              id="b"
            ></path>
          </defs>
          <g transform="translate(3 2)" fill="none" fill-rule="evenodd">
            <use fill="#000" filter="url(#a)" xlink:href="#b"></use>
            <path
              className="transition-all duration-500"
              class="_footer__turn-svg_fki82_44"
              stroke="#000"
              stroke-width="3"
              d="M86.697 1.868a21.5 21.5 0 0 1 16.613-.03l75.96 31.65a21.478 21.478 0 0 1 9.62 7.92 21.478 21.478 0 0 1 3.61 11.925V130a21.433 21.433 0 0 1-6.297 15.203A21.433 21.433 0 0 1 171 151.5H20a21.433 21.433 0 0 1-15.203-6.297A21.433 21.433 0 0 1-1.5 130V53.28c0-4.326 1.296-8.44 3.589-11.893a21.478 21.478 0 0 1 9.568-7.923Z"
              fill={props.player === "player_1" ? "#fd6687" : "#FFCE67"}
            ></path>
          </g>
        </svg>
        <div className="  absolute top-0 w-full h-full flex items-center justify-center flex-col p-5">
          <p className="text-[16px] font-bold">
            {props.player === "player_1"
              ? "PLAYER 1'S TURN"
              : "PLAYER 2'S TURN"}
          </p>
          <p className="text-[56px] font-bold leading-tight">{timer}s</p>
        </div>
      </div>
    </div>
  );
}
