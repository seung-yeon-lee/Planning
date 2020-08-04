export const CREATE_PROJECT = "project/CREATE_PROJECT";

export const createProject = (data) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const authId = getState().firebase.auth.uid;
    firestore
      .collection("projects")
      .add({
        ...data,
        phoneNumber: profile.phoneNumber,
        nickName: profile.nickName,
        authorId: authId,
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
