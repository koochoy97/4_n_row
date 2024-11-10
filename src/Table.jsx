import { useEffect, useState } from "react";
import { Disck } from "./Disck";
import { Turn_Display } from "./Turn_Display";
import { Win_modal } from "./Win_modal";
import { Player_Box_Score } from "./Player_Box_Score";
export function Table(props) {
  const rows = [5, 4, 3, 2, 1, 0];
  const columns = [0, 1, 2, 3, 4, 5, 6];

  const [col_selected, setCol_selected] = useState(null);
  const [player_1_score, setPlayer_1_score] = useState(0);
  const [player_2_score, setPlayer_2_score] = useState(0);
  const [reset, setReset] = useState(false);

  const [rows_index, setRows_index] = useState({
    0: -1,
    1: -1,
    2: -1,
    3: -1,
    4: -1,
    5: -1,
    6: -1,
  });

  const [player_1, setPlayer_1] = useState([]);
  const [player_2, setPlayer_2] = useState([]);

  const [player, setPlayer] = useState("player_1");

  const [game_result, setGame_result] = useState("");

  const [possible_positions, setPossible_positions] = useState({
    up: [],
    right: [],
    down: [],
    left: [],
    upRight: [],
    upLeft: [],
    downRight: [],
    downLeft: [],
  });

  //////////////////////EFECTS/////////////////////

  useEffect(() => {
    if (!game_result) {
      get_disk_in_column(col_selected, rows_index);
      calculate_positions_next_to_disk(rows_index[col_selected], col_selected);
    }
  }, [col_selected, rows_index, player, player_1, player_2]);

  useEffect(() => {
    add_player_positions();
  }, [col_selected, rows_index]);

  useEffect(() => {
    check_if_player_has_win();
    props.get_player_from_child(game_result);
    add_score();
  }, [player_1, player_2, game_result]);

  //Reinicio TOTAL
  useEffect(() => {
    play_again();
    setPlayer_1_score(0);
    setPlayer_2_score(0);
  }, [props.total_restart]);
  //////////////////////EFECTS/////////////////////

  function add_player_positions() {
    if (col_selected !== null) {
      if (player === "player_1") {
        setPlayer_2([
          ...player_2,
          rows_index[col_selected] + "-" + col_selected,
        ]);
      } else if (player === "player_2") {
        setPlayer_1([
          ...player_1,
          rows_index[col_selected] + "-" + col_selected,
        ]);
      }
    }
  }

  function change_player() {
    if (player === "player_1") {
      setPlayer("player_2");
    } else if (player === "player_2") {
      setPlayer("player_1");
    }
  }

  function check_if_player_has_win() {
    let win = 0;
    let temp_array = [];

    Object.entries(possible_positions).forEach(([key, value]) => {
      temp_array.push(value);
    });
    if (player_1.length > 0 || player_2.length > 0) {
      temp_array.forEach((element) => {
        if (
          element.every((position) => {
            if (player === "player_1") {
              return player_2.includes(position);
            } else if (player === "player_2") {
              return player_1.includes(position);
            }
          })
        ) {
          win = win + 1; // Incrementar el contador de victorias
        }
      });
    }

    if (win > 0) {
      if (player === "player_1") {
        setGame_result("player_2");
      } else if (player === "player_2") {
        setGame_result("player_1");
      }
    } else {
      setGame_result("");
    }
  }

  function calculate_positions_next_to_disk(coordinateX, coordinateY) {
    const temp = {
      up: [],
      right: [],
      down: [],
      left: [],
      upRight: [],
      upLeft: [],
      downRight: [],
      downLeft: [],
    };

    // up
    for (let i = 0; i < 4; i++) {
      temp.up.push(coordinateX + "-" + (coordinateY + i));
    }

    // right
    for (let i = 0; i < 4; i++) {
      temp.right.push(coordinateX + i + "-" + coordinateY);
    }

    // down
    for (let i = 0; i < 4; i++) {
      temp.down.push(coordinateX + "-" + (coordinateY - i));
    }

    // left
    for (let i = 0; i < 4; i++) {
      temp.left.push(coordinateX - i + "-" + coordinateY);
    }

    // diagonal up-right
    for (let i = 0; i < 4; i++) {
      temp.upRight.push(coordinateX + i + "-" + (coordinateY + i));
    }

    // diagonal up-left
    for (let i = 0; i < 4; i++) {
      temp.upLeft.push(coordinateX - i + "-" + (coordinateY + i));
    }

    // diagonal down-right
    for (let i = 0; i < 4; i++) {
      temp.downRight.push(coordinateX + i + "-" + (coordinateY - i));
    }

    // diagonal down-left
    for (let i = 0; i < 4; i++) {
      temp.downLeft.push(coordinateX - i + "-" + (coordinateY - i));
    }

    setPossible_positions((prevPossiblePositions) => ({
      ...prevPossiblePositions,
      ...temp,
    }));
  }

  function handle_click_on_column(column_index) {
    if (!game_result) {
      change_player();

      setCol_selected(column_index);

      setRows_index((prevRowsIndex) => ({
        ...prevRowsIndex,
        [column_index]: prevRowsIndex[column_index] + 1,
      }));
    }
  }

  function add_score() {
    if (game_result === "player_1") {
      setPlayer_1_score(player_1_score + 1);
    } else if (game_result === "player_2") {
      setPlayer_2_score(player_2_score + 1);
    }
  }

  function play_again() {
    setPlayer_1([]);
    setPlayer_2([]);
    setRows_index({
      0: -1,
      1: -1,
      2: -1,
      3: -1,
      4: -1,
      5: -1,
      6: -1,
    });
    setCol_selected(null);
    setReset(!reset);
    setGame_result("");
    console.log("reiniciar");
  }

  function get_disk_in_column(col_selected, row_index) {
    // 1. Primero detectar en que columna estoy
    // 2. Luego ver que disco es el que toca meter a la columna
    // 2.1 Buscar los discos que ya han sido seleccionados. Para esto puedo:
    // 2.1.2. Usar el contador de discos por columna, en el cual me muestra el indice de Y que deberá ser el siguiente.
    // Para esto necesito la columna seleccionada y el indice de la columna
  }
  return (
    <div className="flex justify-center flex-col items-center mb-16 relative mt-8 flex-wrap xl:flex-row">
      <div className="flex w-[316px] sm:w-[632px] xl:hidden mb-6">
        <Player_Box_Score player={"PLAYER 1"} score={player_1_score} />
        <Player_Box_Score player={"PLAYER 2"} score={player_2_score} />
      </div>
      <div className="hidden xl:flex">
        <Player_Box_Score player={"PLAYER 1"} score={player_1_score} />
      </div>

      <div className="relative w-[316px] h-[292px] sm:w-[632px] sm:h-[584px] bg-[#7944FF] rounded-3xl z-10">
        <img
          src="../public/images/board.svg"
          alt=""
          className="w-[316px] h-[292px] sm:w-[632px] sm:h-[584px] absolute top-0 left-0 z-40"
          style={{ pointerEvents: "none" }}
        />
        <img
          src="../public/images/board_shadow.svg"
          alt=""
          className="w-[316px] h-[302px]   sm:w-[632px] sm:h-[594px] absolute left-0 z-20"
          style={{ pointerEvents: "none" }}
        />

        <div
          className="grid_container  w-[316px] h-[292px] sm:w-[632px] sm:h-[584px] flex justify-center items-center  pb-[25px]
        sm:pb-[50px] px-[5px] "
        >
          {columns.map((column_index) => {
            return (
              <div
                className="rows_container flex h-full w-full m-[5px] flex-col"
                onClick={() => handle_click_on_column(column_index)}
              >
                {rows.map((row_index) => {
                  return (
                    <div className="cell_container w-full h-full rounded-full relative z-30 my-2">
                      <Disck
                        coordinate={{
                          x: column_index,
                          y: row_index,
                          id: column_index + "-" + row_index,
                        }}
                        player={player}
                        disk_selected={
                          !game_result
                            ? col_selected + "-" + rows_index[col_selected]
                            : ""
                        }
                        reset={reset}
                      />
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
      <div className="hidden xl:flex">
        <Player_Box_Score player={"PLAYER 2"} score={player_2_score} />
      </div>

      <Turn_Display
        player={player}
        setPlayer={setPlayer}
        game_result={game_result}
        open_menu={props.open_menu}
      />
      <Win_modal game_result={game_result} play_again={play_again} />
    </div>
  );
}
