import React from "react"
import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import Navbar from "@/components/Layout/navbar"
import MySorobanReactProvider from "@/soroban/MySorobanReactProvider"

describe('Navbar component', () => {
    beforeEach(()=>{
        render(
            <MySorobanReactProvider>
                <Navbar />
            </MySorobanReactProvider>
        )
    })
    it('Should create a navbar', () => {
        const navbar = screen.getByTestId('navbar')
        expect(navbar).toBeDefined()
    })
    it('Should display the icon', () => {
        const icon = screen.getByTestId('navbar_icon')
        expect(icon).toBeDefined()
        expect(icon).toHaveStyle({width: '200px'})
    })
})
