import Homepage from "./Homepage";
import {fireEvent, render, screen} from "@testing-library/react";

describe('The Homepage', () => {
    it('displays an initial value for the counter', () => {
        render(<Homepage/>)

        expect(screen.getByText('Counter: 0')).toBeInTheDocument()
    });

    it('can increment the counter by one', async () => {
        render(<Homepage/>)

        await fireEvent.click(screen.getByText('increment'))
        expect(screen.getByText('Counter: 1')).toBeInTheDocument()

        await fireEvent.click(screen.getByText('increment'))
        expect(screen.getByText('Counter: 2')).toBeInTheDocument()

        await fireEvent.click(screen.getByText('increment'))
        expect(screen.getByText('Counter: 3')).toBeInTheDocument()
    });

    it('can decrement the counter by one', async () => {
        render(<Homepage/>)
        await fireEvent.click(screen.getByText('increment'))
        await fireEvent.click(screen.getByText('increment'))
        await fireEvent.click(screen.getByText('increment'))

        await fireEvent.click(screen.getByText('decrement'))
        expect(screen.getByText('Counter: 2')).toBeInTheDocument()

        await fireEvent.click(screen.getByText('decrement'))
        expect(screen.getByText('Counter: 1')).toBeInTheDocument()

        await fireEvent.click(screen.getByText('decrement'))
        expect(screen.getByText('Counter: 0')).toBeInTheDocument()
    });

    it('cannot decrement the counter below zero', async () => {
        render(<Homepage/>)

        await fireEvent.click(screen.getByText('decrement'))
        expect(screen.getByText('Counter: 0')).toBeInTheDocument()
    });
});






