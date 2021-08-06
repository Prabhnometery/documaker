import Button from '@material-tailwind/react/Button';
import Icon from '@material-tailwind/react/Icon';
import { DocumentDuplicateIcon } from '@heroicons/react/outline';
import { DocumentSearchIcon } from '@heroicons/react/solid';

function Header() {
  return (
    <header className='sticky top-0 z-50 flex items-center px-4 py-2 shadow-md bg-white'>
      <Button
        color='gray'
        buttonType='outline'
        rounded={true}
        iconOnly={true}
        ripple='dark'
        className='md:inline-flex h-20 w-20 border-0'
      >
        <Icon name='menu' size='3xl'></Icon>
      </Button>
      <DocumentDuplicateIcon
        name='document'
        className='h-10 w-10 text-blue-700'
        size='5xl'
      />
      <h1 className='md:inline-flex ml-2 text-gray-500'>Documaker</h1>

      <div className='mx-5 md:mx-20 flex flex-grow item-center px-5 py-2 bg-gray-100 text-gray-600 rounded-lg focus-within:text-gray-600 focus-within:shadow-md '>
        <Icon name='search' size='3xl' color='gray' />

        <input
          type='text'
          placeholder='Search'
          className='flex-grow px-5 text-base bg-transparent outline-none'
        />
        <span className='flex py-2'>
          <span className='animate-ping absolute inline-flex h-3 w-3 rounded-full bg-blue-400 opacity-75'></span>
          <span className='relative inline-flex rounded-full h-3 w-3 bg-gray-700'></span>
        </span>
      </div>
      <Button
        color='gray'
        buttonType='outline'
        rounded={true}
        iconOnly={true}
        ripple='dark'
        className='ml-5 md:ml-20 h-20 w-20 border-0'
      >
        <Icon name='apps' size='3xl'>
          Search
        </Icon>
      </Button>

      <img
        loading='lazy'
        className='cursor-pointer h-12 w-12 rounded-full ml-2'
        src='https://w7.pngwing.com/pngs/703/141/png-transparent-animation-black-and-white-man-cartoon-avatar-cartoon-character-white-face.png'
        alt=''
      />
    </header>
  );
}

export default Header;
