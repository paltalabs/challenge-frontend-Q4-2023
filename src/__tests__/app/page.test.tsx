import React from "react"
import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import App from "@/app/page"
import MySorobanReactProvider from "@/soroban/MySorobanReactProvider"

describe('Home page', () => {
    beforeEach(()=>{
        render(
            <MySorobanReactProvider>
                <App />
            </MySorobanReactProvider>
        )
    }) 
    it('Should render the panel with classname properly', () => {
        const panel = screen.getByTestId('home_panel')
        expect(panel).toBeDefined()
        const expected_classname = 'home_panel'
        expect(panel).toHaveClass(expected_classname)
    }) 
})
