import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi, } from "vitest";
import UserForm from '../components/UserForm';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom'
import { UserProvider, useUserContext } from "../context/userContext";
import Home from '../pages';

describe('should render content inside index/home page at path: "/"', () => {

    it('should render userForm on home page', async () => {
        render(
            <UserProvider>
                <Home />
            </UserProvider>
        );
        const userForm = await screen.findByTestId("user-form")
        expect(userForm).toBeInTheDocument();


    })

    it('should render UserProfile component and not UserForm when user is created', async () => {
        render(
            <UserProvider>
                <Home />
            </UserProvider>
        );
        const nameInput = await screen.findByTestId("name")
        const emailInput = await screen.findByTestId("email")
        const submitButton = await screen.findByRole('button');
        const userForm = await screen.findByTestId("user-form")
        expect(userForm).toBeInTheDocument();
        await userEvent.type(nameInput, "Philip")
        await userEvent.type(emailInput, "Philip.eiler@hotmail.com")
        await userEvent.click(submitButton)
        const welcomeMsg = await screen.findByTestId('profile-welcomemsg');
        expect(welcomeMsg).toBeInTheDocument();
        expect(userForm).not.toBeInTheDocument();
    });



});