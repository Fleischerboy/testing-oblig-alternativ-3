import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi, } from "vitest";
import UserForm from '../components/UserForm';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom'
import { UserProvider, useUserContext } from "../context/userContext";


describe('UserForm', () => {
    const handleSubmit = vi.fn()


    describe("When rendering form", () => {

        /*
        let nameInput: any
        let emailInput: any
        let button: any

        beforeEach(() => {
            render(<UserForm handleSubmit={handleSubmit} />)
            nameInput = screen.queryByTestId("name")
            emailInput = screen.queryByTestId("email")
            button = screen.queryByRole('button')
        })
        */


        it("should render UserForm", () => {
            render(
                <UserProvider>
                    <UserForm handleSubmit={handleSubmit} />
                </UserProvider>
            );
            const nameInput = screen.queryByTestId("name")
            const emailInput = screen.queryByTestId("email")
            const button = screen.queryByRole('button')
            expect(nameInput).toBeInTheDocument();
            expect(emailInput).toBeInTheDocument();
            expect(button).toBeInTheDocument();

        })

        it("should disable submit button ", async () => {
            render(
                <UserProvider>
                    <UserForm handleSubmit={handleSubmit} />
                </UserProvider>
            );
            const submitButton = await screen.findByRole('button');
            expect(submitButton).toBeDisabled()


        });


        it("should enable submit button when userForm is valid", async () => {
            render(
                <UserProvider>
                    <UserForm handleSubmit={handleSubmit} />
                </UserProvider>
            );
            const nameInput = await screen.findByTestId("name")
            const emailInput = await screen.findByTestId("email")
            const submitButton = await screen.findByRole('button');
            expect(submitButton).toBeDisabled()
            await userEvent.type(nameInput, "Philip")
            await userEvent.type(emailInput, "Philip.eiler@hotmail.com")
            expect(submitButton).toBeEnabled()


        });

        it("should not enable submit button when userForm is invalid", async () => {
            render(
                <UserProvider>
                    <UserForm handleSubmit={handleSubmit} />
                </UserProvider>
            );
            const nameInput = await screen.findByTestId("name")
            const emailInput = await screen.findByTestId("email")
            const submitButton = await screen.findByRole('button');
            expect(submitButton).toBeDisabled()
            await userEvent.type(nameInput, "Philip")
            await userEvent.type(emailInput, "Philip.eilerhotmail.com")
            expect(submitButton).toBeDisabled()



        });

        it("should show error when userForm is invalid", async () => {
            render(
                <UserProvider>
                    <UserForm handleSubmit={handleSubmit} />
                </UserProvider>
            );
            const nameInput = await screen.findByTestId("name")
            const emailInput = await screen.findByTestId("email")
            const submitButton = await screen.findByRole('button');
            const error = await screen.findByTestId("error")
            expect(submitButton).toBeDisabled()
            await userEvent.type(nameInput, "Philip")
            await userEvent.type(emailInput, "Philip.eilerhotmail.com")
            expect(submitButton).toBeDisabled()
            expect(error).toBeInTheDocument();
        });


        it("should remove error when userForm is valid", async () => {
            render(
                <UserProvider>
                    <UserForm handleSubmit={handleSubmit} />
                </UserProvider>
            );
            const nameInput = await screen.findByTestId("name")
            const emailInput = await screen.findByTestId("email")
            const submitButton = await screen.findByRole('button');
            const error = await screen.findByTestId("error")
            expect(submitButton).toBeDisabled()
            await userEvent.type(nameInput, "Philip")
            await userEvent.type(emailInput, "Philip.eiler@hotmail.com")
            expect(submitButton).toBeEnabled();
            expect(error).not.toBeInTheDocument();
        });



    })


    describe('When submitting form', () => {

        it('should handle submitting form', async () => {
            render(
                <UserProvider>
                    <UserForm handleSubmit={handleSubmit} />
                </UserProvider>

            );
            const nameInput = await screen.findByTestId("name")
            const emailInput = await screen.findByTestId("email")
            const submitButton = await screen.findByRole('button');
            expect(submitButton).toBeDisabled()
            await userEvent.type(nameInput, "Philip")
            await userEvent.type(emailInput, "Philip.eiler@hotmail.com")
            expect(submitButton).toBeEnabled();
            await userEvent.click(submitButton)
            expect(handleSubmit).toBeCalledTimes(1);
            expect(handleSubmit).toHaveBeenCalledWith({
                name: "Philip",
                email: "Philip.eiler@hotmail.com"
            })
        })


    })



})
