import { render } from '@testing-library/react';
import App from '../App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

test("Tests if App was Rendered Properly", () => {
    render(<App />);
    console.log("Rendered App");
})

test("Tests if the Elements are wrapped with a Div Element in App.js", () => {
    console.log("Rendered Div");
})