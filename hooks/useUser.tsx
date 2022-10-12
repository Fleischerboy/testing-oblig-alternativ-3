import { useState } from "react";
import { User } from "../types/dataTypes";

export default function useUser(init?: User) {
    const [isUserCreated, setIsUserCreated] = useState(false)
    const [user, setUser] = useState(init)



    return {
        isUserCreated,
        user,
        setIsUserCreated,
        setUser

    }
}

