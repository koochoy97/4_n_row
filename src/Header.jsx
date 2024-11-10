export function Header(props) {
  return (
    <div className="flex  w-[316px] sm:w-[632px] justify-between items-center mt-10">
      <button
        className="bg-[#5c2dd5] rounded-full py-2 px-4 text-white font-bold cursor-pointer"
        onClick={props.open_menu}
      >
        MENU
      </button>
      <img src="../public/images/logo.svg" alt="" />
      <button
        className="bg-[#5c2dd5] rounded-full py-2 px-4 text-white font-bold cursor-pointer"
        onClick={props.restart_total_game}
      >
        RESTART
      </button>
    </div>
  );
}
