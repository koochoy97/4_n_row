import { useEffect, useState } from "react";
import { useRef } from "react";

export function Disck(props) {
  const disk_ref = useRef(null);

  function handle_click() {}

  const [color, setColor] = useState("");
  const [drop, setDrop] = useState("");
  useEffect(() => {
    if (
      props.disk_selected === props.coordinate.id &&
      props.player === "player_1"
    ) {
      setDrop("drop");
    } else if (
      props.disk_selected === props.coordinate.id &&
      props.player === "player_2"
    ) {
      setDrop("drop");
    }
  }, [props.disk_selected, props.coordinate.id]);

  useEffect(() => {
    if (
      props.disk_selected === props.coordinate.id &&
      props.player === "player_1"
    ) {
      setColor("bg-[url(../public/images/yellow_disk.svg)] bg-cover top-[5px]");
    } else if (
      props.disk_selected === props.coordinate.id &&
      props.player === "player_2"
    ) {
      setColor("bg-[url(../public/images/red_disk.svg)] bg-cover top-[5px]");
    }
  }, [drop]);

  useEffect(() => {
    console.log("reset");
    setDrop("");
    setColor("");
  }, [props.reset]);
  return (
    <div
      className={`cell w-full h-full flex justify-center items-center  cursor-pointer rounded-full absolute top-0 left-0 ${color} ${drop}`}
      ref={disk_ref}
      onClick={handle_click}
    ></div>
  );
}
