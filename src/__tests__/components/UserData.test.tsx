import React from "react"
import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import UserData from "@/components/UserData"
import MySorobanReactProvider from "@/soroban/MySorobanReactProvider"

describe('User data display', () => {
    beforeEach(()=>{
        render(
            <MySorobanReactProvider>
                <UserData/>
            </MySorobanReactProvider>
        )
    })
    it('Should render the main title, the adress field and the button', () => {
        const main_title = screen.getByTestId('header')
        expect(main_title).toBeDefined

        const address = screen.getByTestId('address')
        expect(address).toBeDefined
        
        const button = screen.getByRole('button')
        expect(button).toBeDefined
        
    })
})