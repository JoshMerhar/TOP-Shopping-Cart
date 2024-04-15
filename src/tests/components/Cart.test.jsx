import { vi } from 'vitest';
import { render, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Cart from '../../components/Cart/Cart.jsx';

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

describe('Cart page', () => {
    it('renders cart with initial state', () => {
        const { getByText } = render(<Cart cart={testCart} />);
        expect(getByText('item 1')).toBeInTheDocument();
    });

    it('renders message when cart is empty', async () => {
        render(<Cart  cart={[]} />);
        await screen.findByText(/nothing/i);
    });

    it('displays total cost of cart', async () => {
        render(<Cart cart={testCart} />);
        await screen.findByText(/15.97/i);
    });
})

describe('Cart interaction', () => {
    it('removes item from cart', async () => {
        const setCartMock = vi.fn();
        const user = userEvent.setup();
        render(<Cart cart={testCart} setCart={setCartMock} />);
        await screen.findByText(/item 2/i);
        const removeButtons = await screen.findAllByText(/Remove/i);
        await act(async () => {
            await user.click(removeButtons[1]);
        });
        expect(setCartMock).toHaveBeenCalledWith(expect.arrayContaining([
            expect.objectContaining({ id: 1 }),
            expect.not.objectContaining({ id: 2 })
        ]));
    });

    it('completes purchase', async () => {
        const setCartMock = vi.fn();
        const user = userEvent.setup();
        render(<Cart cart={testCart} setCart={setCartMock} />);
        const checkoutButton = await screen.findByText(/Checkout/i);
        await act(async () => {
            await user.click(checkoutButton);
        });
        await screen.findByText(/Thanks/i);
    });
})