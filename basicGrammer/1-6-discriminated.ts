{
  //discriminated
  type SuccessState = {
    result: "success";
    response: {
      body: string;
    };
  };
  type FailState = {
    result: "fail";
    reason: string;
  };
  type LoginState = SuccessState | FailState;
  function login(): LoginState {
    return {
      result: "success",
      response: {
        body: "logged in!",
      },
    };
  }

  // printLoginState(state)
  // success -> suc body
  // fail -> fail reason
  function printLoginState(state: LoginState) {
    if (state.result === "success") {
      console.log(`suc ${state.response.body}`);
    } else {
      console.log(`fail ${state.reason}`);
    }
  }
}
