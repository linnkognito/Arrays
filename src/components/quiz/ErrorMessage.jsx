import { NavLink } from 'react-router-dom';
import Button from '../common/Button';

function ErrorMessage() {
  return (
    <div className='m-auto'>
      <h3 className='text-orange'>😳 Sorry! Failed to fetch quiz data</h3>

      <NavLink to='/'>
        <Button className='button w-full'>Back to home</Button>
      </NavLink>
    </div>
  );
}

export default ErrorMessage;
