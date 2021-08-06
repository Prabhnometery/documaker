import Button from '@material-tailwind/react/Button';
import Icon from '@material-tailwind/react/Icon';

function Section() {
  return (
    <section className='bg-[#F8F9FA] pb-10 px-10'>
      <div className='max-w-3xl mx-auto'>
        <div className='flex items-center justify-between py-6'>
          <h2 className='text-gray-700 text-lg'>Create a new document</h2>
          <Button
            color='gray'
            buttonType='outline'
            iconOnly={true}
            ripple='dark'
            className='border-0'
          >
            <Icon name='more_vert' size='3xl'>
              Search
            </Icon>
          </Button>
        </div>

        <div>
          <div className='py-4'>
            <Button
              color='gray'
              buttonType='outline'
              iconOnly={true}
              ripple='dark'
              className='animate-bounce h-20 w-20 border-2 cursor-pointer hover:border-blue-700'
            >
              <Icon name='add' size='3xl'></Icon>
            </Button>
          </div>

          <p className='font-semibold text-sm text-gray-700'>Blank Document</p>
        </div>
      </div>
    </section>
  );
}

export default Section;
