import { useEffect, useState } from "react"
import { useUserContext } from "../context/userContext";
import { User } from "../types/dataTypes";

type FormData = { name: String; email: string; }

type FormProps = {
    handleSubmit: ({ name, email }: FormData) => void
}



const UserForm = ({ handleSubmit }: FormProps) => {
    const {
        setUser,
        setIsUserCreated,


    } = useUserContext()

    const [inputValue, setInputValue] = useState({ email: '', name: '' })
    const [error, setError] = useState('');
    const [isVisible, setVisible] = useState(true)

    const isValid = ({ name, email }: FormData) => {
        return name && name.length > 1 && email.includes('@')
    }

    useEffect(() => {
        if (!isValid(inputValue)) {
            setError('Navn og / eller e-post er ikke gyldig')
            setVisible(true)
        }
        else {
            setError('')
            setVisible(false)

        }

    }, [inputValue])

    const handleDataInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        const id = event.target?.id
        if (id && Object.keys(inputValue).includes(id)) {
            setInputValue((prev) => ({ ...prev, [id]: event.target.value }))
        }
    }


    const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        if (isValid(inputValue)) {
            setIsUserCreated(true);
            setUser(inputValue);
            handleSubmit(inputValue)
        }




    }

    return (
        <form className="userForm" data-testid="user-form" onSubmit={handleFormSubmit}>
            <label htmlFor="name">
                <input
                    id="name"
                    data-testid="name"
                    type="text"
                    placeholder="Navn"
                    onChange={handleDataInput}
                    value={inputValue.name}
                />
            </label>
            <label htmlFor="email">
                <input
                    id="email"
                    data-testid="email"
                    type="text"
                    placeholder="Email"
                    onChange={handleDataInput}
                    value={inputValue.email}
                />
            </label>
            {error ? (
                <span className="error" data-testid="error">
                    {error}
                </span>
            ) : null}
            <button type="submit" disabled={isVisible}>Create user</button>
        </form>
    )
}
export default UserForm;
