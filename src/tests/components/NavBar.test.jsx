import { render, screen, act } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar.jsx';

const testCart = [
    { 
        id: 1, 
        title: 'item 1', 
        price: 3.99, 
        image: 'test', 
        itemAmount: 1 
    },
    {
        id: 2,
        title: 'item 2',
        price: 5.99,
        image: 'test',
        itemAmount: 2
    }
];

describe('Nav bar', () => {
    it('renders with initial state', () => {
        render(
            <Router>
                <NavBar cart={[]} />
            </Router>
        );
        expect(screen.getByText('0')).toBeInTheDocument();
    });

    it('renders with cart quantity', async () => {
        render(
            <Router>
                <NavBar cart={testCart} />
            </Router>
        );
        expect(screen.getByText('3')).toBeInTheDocument();
    });
})