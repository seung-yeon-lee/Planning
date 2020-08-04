const initState = {
  projects: [{ id: "1", title: "Description", content: "FireBase" }],
};

const projectReducer = (state = initState, action) => {
  const { type, data } = action;
  switch (type) {
    case "CREATE_PROJECT": {
      console.log("create", data);
    }
    case "CREATE_ERR":
      console.log("Created Err");
      return state;
    default:
      return state;
  }
};

export default projectReducer;
