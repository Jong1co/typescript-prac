{
  /**
   * Print Loading State
   */
  type LoadingState = {
    state: "loading";
  };

  type SuccessState = {
    state: "success";
    response: {
      body: string;
    };
  };

  type FailState = {
    state: "fail";
    reason: string;
  };

  type ResourceLoadState = LoadingState | SuccessState | FailState;

  function printLoginState(response: ResourceLoadState) {
    switch (response.state) {
      case "loading":
        console.log("👀 loading...");
        break;
      case "fail":
        console.log("😱 no network");
        break;
      case "success":
        console.log("😃 loaded");
        break;
      default:
        throw new Error(`undefined response`);
    }
  }

  printLoginState({ state: "loading" }); // 👀 loading...
  printLoginState({ state: "success", response: { body: "loaded" } }); // 😃 loaded
  printLoginState({ state: "fail", reason: "no network" }); // 😱 no network
}
