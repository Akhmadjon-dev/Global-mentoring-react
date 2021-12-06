import '@testing-library/jest-dom/extend-expect'
import * as React from 'react'
import ReactDOM from 'react-dom'
import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'


import Card from '../Card';


describe('Card', () => {

    const props = {
        movie: {
            budget: 0,
            genres: ['Animation', 'Adventure', 'Family', 'Comedy'],
            id: 269149,
            overview: "Determined to prove herself, Officer Judy Hopps, the first bunny on Zootopia's police force, jumps at the chance to crack her first  Nick Wilde to solve the mystery.",
            poster_path: "https://image.tmdb.org/t/p/w500/sM33SANp9z6rXW8Itn7NnG1GOEs.jpg",
            release_date: "2016-02-11",
            revenue: 1023784195,
            runtime: 108,
            tagline: "Welcome to the urban jungle.",
            title: "Zootopia",
            vote_average: 7.7,
            vote_count: 6795,
        },
        selectMovieHandler: jest.fn(), 
        deleteHandler: jest.fn(),
        edit: jest.fn(),
    }

    let container: HTMLElement; 

    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
        ReactDOM.render(<Card {...props} />, container);
    });

    afterEach(() => {
        document.body.removeChild(container);
        container.remove();
    });


    it('should render an input with title', () => {
        expect(container.querySelector("[data-test='title']")).toBeInTheDocument()
        // expect(container.querySelector("[data-test='title']")).toEqual("Zootopia")
    })

    it('should render an input with release date', () => {
        expect(container.querySelector("[data-test='release-date']")).toBeInTheDocument()
        // expect(container.querySelector("[data-test='release-date']")).toBe("2016-02-11")
    })

    it('should render an input with runtime', () => {
        expect(container.querySelector("[data-test='runtime']")).toBeInTheDocument()
        // expect(container.querySelector("[data-test='runtime']")).toBe("108")
    })
    
    // it('should render an input with a label', () => {
    //     render(<Input {...props} label="test" />)
    //     expect(screen.getByLabelText('test')).toBeInTheDocument()
    // })
    
    // it('should render an input with a placeholder', () => {
    //     render(<Input {...props} placeholder="test" />)
    //     expect(screen.getByPlaceholderText('test')).toBeInTheDocument()
    // })
    
    // it('should render an input with a value', () => {
    //     render(<Input {...props} value="test" />)
    //     expect(screen.getByDisplayValue('test')).toBeInTheDocument()
    // })
    
    // it('should render an input with a type', () => {
    //     render(<Input {...props} type="text" />)
    //     expect(screen.getByRole('textbox')).toHaveAttribute('type', 'text')
    // })
    
    // it('should render an input with a name', () => {
    //     render(<Input {...props} name="test" />)
    //     expect(screen.getByRole('text')).toHaveAttribute('name', 'test')
    // })    
    
    // it('should render an input with a onChange attribute', () => {
    //     const mockFn = jest.fn()
    //     render(<Input {...props} onchange={mockFn} />)
    //     userEvent.type(screen.getByRole('textbox'), 'test')
    //     expect(mockFn).toHaveBeenCalled()
    // })
})  
