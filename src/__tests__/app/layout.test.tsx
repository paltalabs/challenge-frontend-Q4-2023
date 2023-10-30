import React from "react"
import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import RootLayout from "@/app/layout"
import { Manrope } from 'next/font/google'
import MySorobanReactProvider from "@/soroban/MySorobanReactProvider"

const main_font = Manrope()

describe('Layout', () => {
    beforeEach(()=>{
        render(
            <MySorobanReactProvider>
                <RootLayout/>
            </MySorobanReactProvider>
        )
    })
    it('Should render the body properly', () => {
        const body = screen.getByTestId('body')
        expect(body).toBeDefined()
    })
    it('Should apply the font classname', () => {
        const body = screen.getByTestId('body')
        expect(body).toHaveClass(main_font.className)
    })
    it('Should render a navbar', ()=>{
        const navbar = screen.getByTestId('navbar')
        expect(navbar).toBeDefined()
    })
})
