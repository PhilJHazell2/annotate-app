import React, {useEffect, useState, useContext} from 'react';
import firebase from 'firebase';

export const UserContext = React.createContext();

export const UserProvider = (props) => {
    const[session, setSession] = useState({user: null, loading: true});

    useEffect(() => {
        firebase.auth().onAuthStateChanged((user) =>{
            setSession({loading: false, user})
        })
        return;
    }, []);

    return (
        <UserContext.Provider value={session}>
         {!session.loading && props.children}
        </UserContext.Provider>
    );
}

export const useSession = () => {
    const session = useContext(UserContext);
    return session;
}