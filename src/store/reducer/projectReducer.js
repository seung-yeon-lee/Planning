const initState = {
  projects: [{ id: "1", title: "Description", content: "FireBase" }],
  entities: {},
};

const projectReducer = (state = initState, action) => {
  const { type, data } = action;
  switch (type) {
    case "CREATE_PROJECT":
      console.log("create", data);
      return state;
    case "CREATE_ERR":
      console.log("Created Err");
      return state;
    default:
      return state;
  }
};

export default projectReducer;
