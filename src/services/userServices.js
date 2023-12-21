import { doc, getDoc, setDoc } from "firebase/firestore";
import { firebaseDB } from "../firebase/firebaseConfigure";

const collection = "users";

export const createUserInCollection = async (uid, newUser) => {
  try {
    const newUserRef = doc(firebaseDB, collection, uid);
    await setDoc(newUserRef, newUser);
    return {
      ok: true,
      user: {
        id: uid,
        ...newUser,
      },
    };
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const getUserFromCollection = async (uid) => {
  try {
    const userRef = doc(firebaseDB, collection, uid);
    const user = await getDoc(userRef);
    if (user.exists()) {
      return {
        id: user.id,
        ...user.data(),
      };
    } else {
      return null;
    }
  } catch (error) {
    console.log(error);
    return null;
  }
};
