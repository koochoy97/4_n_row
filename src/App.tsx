import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Table } from "./Table.jsx";
import { Test } from "./Test.jsx";
import { Header } from "./Header.jsx";
import { Menu } from "./Menu.jsx";
function App() {
  const [count, setCount] = useState(0);
  const [child_data, setChild_data] = useState("");
  const [total_restart, setTotal_restart] = useState(false);
  const [open_menu, setOpen_menu] = useState(false);
  function send_player_to_parent(e) {
    setChild_data(e);
  }

  function get_restar_signal_from_child() {
    setTotal_restart(!total_restart);
  }

  function get_open_menu_signal_from_child() {
    setOpen_menu(!open_menu);
  }

  return (
    <div className={`bg-[#7944FF] w-full flex flex-col items-center`}>
      <Menu
        open_menu={open_menu}
        setOpen_menu={setOpen_menu}
        setTotal_restart={setTotal_restart}
        total_restart={total_restart}
      />
      <Header
        restart_total_game={get_restar_signal_from_child}
        open_menu={get_open_menu_signal_from_child}
      />
      <Table
        get_player_from_child={send_player_to_parent}
        total_restart={total_restart}
        open_menu={open_menu}
      />
      <div
        className={`w-full h-[236px] ${
          child_data === "player_1"
            ? "bg-[#fd6687]"
            : child_data === "player_2"
            ? "bg-[#FFCE67]"
            : "bg-[#5c2dd5]"
        } rounded-t-[60px] absolute bottom-0 z-0`}
      ></div>
    </div>
  );
}

export default App;
