function Spinner() {
  return (
    <div className='flex items-center mt-5'>
      <img
        src='/img/spinner.png'
        alt='Loading spinner'
        className='animate-spin rounded-full w-10 border-t-4 border-b-4 border-blue-500'
      />
    </div>
  );
}

export default Spinner;
