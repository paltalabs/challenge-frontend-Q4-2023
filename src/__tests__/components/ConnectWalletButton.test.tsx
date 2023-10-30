import React from "react"
import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import ConnectWalletButton from "@/components/ConnectWalletButton"
import MySorobanReactProvider from "@/soroban/MySorobanReactProvider"

describe('Connect wallet button component', () => {
    const button_caption = 'Connect'
    beforeEach(()=>{
        render(
            <MySorobanReactProvider>
                <ConnectWalletButton caption={button_caption}/>
            </MySorobanReactProvider>
        )
    })
    it('Should render the button container', ()=>{
        const button_container = screen.getByTestId('button_container')
        expect(button_container).toBeDefined()
    })
    it('should apply the classname properly to the container', ()=>{
        const button_container = screen.getByTestId('button_container')
        expect(button_container).toHaveClass('ConnectButton')
    })
    it('Should create a button', () => {
        const button = screen.getByRole('button')
        expect(button).toBeDefined()
    })
})
