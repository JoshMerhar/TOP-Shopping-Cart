import { Link } from 'react-router-dom';
import './error.css';

const ErrorPage = () => {
    return (
        <div className='error-page'>
            <h1>Oh no, this page doesn't exist!</h1>
            <Link to='/'>
                You can go back to the home page by clicking here, though!
            </Link>
        </div>
    );
};

export default ErrorPage;