import firebase from 'firebase';
import 'firebase/auth';

export const signup = async ({ email, password }) => {

    const resp = await firebase.auth().createUserWithEmailAndPassword(email, password);
    const user = resp.user;
    await user.updateProfile({ email: `${email}`});
    return user;

}