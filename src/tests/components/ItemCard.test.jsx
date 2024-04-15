import { vi } from 'vitest';
import { render, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ItemCard from '../../components/ItemCard/ItemCard.jsx';

describe('Item card', () => {
    it('renders card with initial state', () => {
        const { getByText, getByRole } =  render(
        <ItemCard
          id={1}
          title={'test item'}
          price={3.99}
          image={'test'} 
          rating={{ rate: 1 }}
        />
        );
        
        expect(getByText('test item')).toBeInTheDocument();
        expect(getByText('Price: $3.99')).toBeInTheDocument();
        expect(getByRole('textbox', { name: '' })).toHaveValue('1');
    });

    it('adds and subtracts quantity', async () => {
        const user = userEvent.setup();
        const { getByRole } = render(
        <ItemCard
          id={1}
          title={'test item'}
          price={3.99}
          image={'test'} 
          rating={{ rate: 1 }}
        />
        );

        const addButton = getByRole('button', { name: '+' });
        const subtractButton = getByRole('button', { name: '-' });
        const input = getByRole('textbox', { name: '' });

        await user.click(addButton);
        expect(input).toHaveValue('2');

        await user.click(subtractButton);
        expect(input).toHaveValue('1');
    })

    it('handles typed quantity', async () => {
      const user = userEvent.setup();  
      const { getByRole } = render(
        <ItemCard
          id={1}
          title={'test item'}
          price={3.99}
          image={'test'} 
          rating={{ rate: 1 }}
        />
        );

        const input = getByRole('textbox', { name: '' });
        await user.type(input, '0');
        expect(input).toHaveValue('10');
    });

    it('resets input value after item added to cart', async () => {
        const setCartMock = vi.fn();
        const user = userEvent.setup();
        const { getByRole } = render(
        <ItemCard
          id={1}
          title={'test item'}
          price={3.99}
          image={'test'} 
          rating={{ rate: 1 }}
          setCart={setCartMock}
        />
        );

        const input = getByRole('textbox', { name: '' });
        const submitButton = await screen.findByText(/Add to cart/i);
        await user.type(input, '0');
        await act(async () => {
            await user.click(submitButton);
        });
        expect(input).toHaveValue('1');
    });
})

