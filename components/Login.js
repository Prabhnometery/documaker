import Button from '@material-tailwind/react/Button';
import { signIn } from 'next-auth/client';
import { DocumentDuplicateIcon } from '@heroicons/react/outline';

function Login() {
  return (
    <div className='flex flex-col items-center jutsify-center min-h-screen py-20'>
      <DocumentDuplicateIcon
        className='animate-pulse h-40 w-40 text-blue-700'
        size='9xl'
      />
      <Button
        color='blue'
        buttonType='filled'
        ripple='light'
        onClick={signIn}
        className='transition duration-500 ease-in-out bg-blue-600 hover:bg-red-600 transform hover:-translate-y-1 hover:scale-110 w-44 mt-10'
      >
        Login
      </Button>
    </div>
  );
}

export default Login;
