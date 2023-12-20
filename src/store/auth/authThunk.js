import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { firebaseAuth } from "../../firebase/firebaseConfigure";
import { createUserInCollection, getUserFromCollection } from "../../services/userServices";
import { setIsAuthenticates, setUserLogged } from "./auth";

export const createUser = (newUser) => {
   return async () => {
    try {
        const {user} = await createUserWithEmailAndPassword(
            firebaseAuth,
            newUser.email,
            newUser.password
        );
        await updateProfile(firebaseAuth.currentUser, {
            displayName: newUser.name
        });
        const createdUser = createUserInCollection(
            user.uid,
            newUser
        )
    } catch (error) {
        console.log(error);
    }
   } 
}

export const loginWithEmailAndPassword = (loggedUser) => {
    return async (dispatch) => {
        try {
            console.log(loggedUser)
            const {user} = await signInWithEmailAndPassword(
                firebaseAuth,
                loggedUser.email,
                loggedUser.password
            );
            const foundUser = await getUserFromCollection(user.uid);
            dispatch(setUserLogged(foundUser));
            dispatch(setIsAuthenticates());
        } catch (error) {
            console.log(error)
        }
    }
}