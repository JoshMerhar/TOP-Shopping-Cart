import { vi } from 'vitest';
import { render, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Shop from '../../components/Shop/Shop.jsx';

const testItems = [
    {
        id: 1,
        title: 'item 1',
        price: 3.99,
        image: 'test',
        rating: 'test',
    },
];

describe('Shop page', () => {
    it('renders loading screen', async () => {
        render(<Shop itemData={testItems}/>);
        await screen.findByText(/LOADING/i);
    });

    it('loading screen disappears after items render', async () => {
        render(<Shop itemData={testItems}/>);
        await screen.findByText(/LOADING/i, { timeout: 1000, shouldDisappear: true });
    });

    it('renders item info', async () => {
        render(<Shop itemData={testItems}/>);
        await screen.findByText(/item 1/i);
    });
})

describe('Shop interaction', () => {
    it('adds item to cart', async () => {
        const setCartMock = vi.fn();
        const user = userEvent.setup();
        render(<Shop itemData={testItems} setCart={setCartMock}/>);
        await screen.findByText(/item 1/i);
        const addItemButton = await screen.findByText(/Add to cart/i);
        await act(async () => {
            await user.click(addItemButton);
        });
        expect(setCartMock).toHaveBeenCalledWith([{ id: 1, title: 'item 1', price: 3.99, image: 'test', itemAmount: 1 }]);
    });
})