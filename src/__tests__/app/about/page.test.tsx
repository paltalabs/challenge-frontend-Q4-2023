import React from "react"
import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import About from "@/app/about/page"

describe('About page', () => {
    beforeEach(()=>{
        render(<About />)
    })
    it('Should render the panel with classname properly', () => {
        const panel = screen.getByTestId('about_panel')
        expect(panel).toBeDefined()
        const expected_classname = 'about__panel'
        expect(panel).toHaveClass(expected_classname)
    })
})
