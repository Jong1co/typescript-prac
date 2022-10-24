// {
//   // Union Types: OR
//   type Direction = "left" | "right" | "up" | "down";
//   function move(direction: Direction) {
//     console.log(direction);
//   }
//   move("left");

//   type TileSize = 8 | 16 | 31;
//   const tile: TileSize = 16;

//   //function: login -> success, fail
//   type SuccessState = {
//     response: {
//       body: string;
//     };
//   };
//   type FailState = {
//     reason: string;
//   };
//   type LoginState = SuccessState | FailState;
//   const login = (): LoginState => {
//     return {
//       response: {
//         body: "logged in!",
//       },
//     };
//   };

//   // printLoginState(state)
//   // success -> suc body
//   // fail -> fail reason
//   const printLoginState = (state: LoginState) => {
//     if ("response" in state) {
//       console.log(`suc ${state.response.body}`);
//     } else {
//       console.log(`fail ${state.reason}`);
//     }
//   };
// }
