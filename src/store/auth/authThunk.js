import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { firebaseAuth, firebaseDB } from "../../firebase/firebaseConfigure";
import {
  createUserInCollection,
  getUserFromCollection,
} from "../../services/userServices";
import { setIsAuthenticates, setUpdateUser, setUserLogged } from "./auth";
import { doc, updateDoc } from "firebase/firestore";

export const createUser = (newUser) => {
  return async () => {
    try {
      const { user } = await createUserWithEmailAndPassword(
        firebaseAuth,
        newUser.email,
        newUser.password
      );
      await updateProfile(firebaseAuth.currentUser, {
        displayName: newUser.name,
      });
      const createdUser = createUserInCollection(user.uid, newUser);
    } catch (error) {
      console.log(error);
    }
  };
};

export const loginWithEmailAndPassword = (loggedUser) => {
  return async (dispatch) => {
    try {
      const { user } = await signInWithEmailAndPassword(
        firebaseAuth,
        loggedUser.email,
        loggedUser.password
      );
      const foundUser = await getUserFromCollection(user.uid);
      dispatch(setUserLogged(foundUser));
      dispatch(setIsAuthenticates());
    } catch (error) {
      console.log(error);
    }
  };
};

export const signOff = () => {
  return async (dispatch) => {
    try {
      await firebaseAuth.signOut();
      dispatch(setIsAuthenticates());
      dispatch(setUserLogged(null));
    } catch (error) {
      console.log(error);
    }
  };
};

export const updateUser = (idUser, updateInfo) => {
    return async (dispatch) => {
        try {
            const userRef = doc(firebaseDB, 'users', idUser);
            const response = await updateDoc(userRef, updateInfo);
            dispatch(setUpdateUser(updateInfo));
        } catch (error) {
            console.log(error)
        }
    }
}
