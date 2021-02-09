import { render, screen } from '@testing-library/react';
import Header from '../Components/Header';

test('Checks if the Header Component Title has a Correct name', () => {
    render(<Header />)
    const text = screen.getByText(/✦ lMwenda/i)
    expect(text).toBeInTheDocument()
    console.log("Title Found and Passed")
})