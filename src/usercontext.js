import React, { useState } from 'react';

let UserContext = React.createContext();

export default UserContext;

//UserProvider will provide data to all its children

export const UserProvider = ({children}) => {

    const [userList,setUserList]=useState([]);

    return(
        <UserContext.Provider value={{userList,setUserList}}>
            {children}
        </UserContext.Provider>
    );

}