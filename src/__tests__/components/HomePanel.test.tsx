import React from "react"
import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import HomePanel from "@/components/HomePanel"
import MySorobanReactProvider from "@/soroban/MySorobanReactProvider"

describe('HomePanel', () => {
    beforeEach(()=>{
        render(
            <MySorobanReactProvider>
                <HomePanel/>
            </MySorobanReactProvider>
        )
    })
    it('Should create a button', () => {
        const panel = screen.getByTestId('home_panel')
        expect(panel).toBeDefined()
    })
    it('Should apply the classname properly', ()=>{
        const panel = screen.getByTestId('home_panel')
        expect(panel).toHaveClass('home_panel')

    })
})
