export const CREATE_PROJECT = "project/CREATE_PROJECT";

export const createProject = (data) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    firestore
      .collection("projects")
      .add({
        ...data,
        phoneNumber: "00000000",
        nickName: "React",
        createdAt: new Date(),
      })
      .then(() => {
        dispatch({ type: "CREATE_PROJECT", data });
      })
      .catch((err) => {
        dispatch({ type: "CREATE_ERROR", err });
      });
  };
};
