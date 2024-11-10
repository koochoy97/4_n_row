import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
export function Menu(props) {
  const [scale, setScale] = useState("scale-0");

  useEffect(() => {
    console.log(props.open_menu);

    if (!props.open_menu) {
      setScale("scale-0");
    } else {
      setScale("scale-100");
    }
  }, [props.open_menu]);

  return (
    <div
      className={`absolute w-full h-full bg-black top-0 left-0 z-[55] bg-opacity-50 flex justify-center items-center transform ${scale} origin-center transition-all duration-200`}
    >
      <div className="custom_shadow_div w-[450px] rounded-[40px] border-[3px] p-11 border-black z-[70]  bg-[#7944FF] justify-center items-center flex flex-col">
        <h2 className="text-[56px] text-white font-bold align-center">PAUSE</h2>
        <button
          className="custom_shadow_div my-3 bg-white w-full py-4 rounded-2xl border-[3px] border-black font-bold text-[20px]"
          onClick={() => {
            props.setOpen_menu(false);
          }}
        >
          CONTINUE GAME
        </button>

        <button
          className="custom_shadow_div my-3 bg-white w-full py-4 rounded-2xl border-[3px] border-black font-bold text-[20px]"
          onClick={() => {
            props.setTotal_restart(!props.total_restart);
            props.setOpen_menu(false);
          }}
        >
          RESTART
        </button>

        <Link to="/" className="w-full h-full">
          <button className="custom_shadow_div my-3 bg-[#FD6687] w-full py-4 rounded-2xl border-[3px] border-black font-bold text-[20px]">
            QUIT GAME
          </button>
        </Link>
      </div>
    </div>
  );
}
