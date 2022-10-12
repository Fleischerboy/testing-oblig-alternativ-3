import { createContext, SetStateAction } from "react";
import useUser from "../hooks/useUser";
import React from "react";
import { User } from "../types/dataTypes";

export type UserContext = {
    isUserCreated?: boolean,
    setIsUserCreated: React.Dispatch<SetStateAction<boolean>>
    user: User | undefined;
    setUser: React.Dispatch<React.SetStateAction<User | undefined>>,
}

const UserContext = createContext<UserContext | undefined>(undefined);




export const UserProvider = ({ children }: { children: React.ReactNode }) => {
    const {
        isUserCreated,
        user,
        setIsUserCreated,
        setUser

    } = useUser();

    return (
        <UserContext.Provider value={
            {
                isUserCreated,
                user,
                setIsUserCreated,
                setUser,

            }
        }
        >
            {children}
        </UserContext.Provider >
    )


};

export const useUserContext = () => {
    const context = React.useContext(UserContext)
    if (!context) throw new Error('UserContext must have a UserProvider')
    return context
} 