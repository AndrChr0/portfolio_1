function Footer() {
  return (
    <footer className='flex flex-col justify-between font-extralight items-center h-16 md:h-24 bg-black text-white'>
      <p className='py-4'>Andreas Christiansen 2025</p>
      <a
        className='bg-white text-black p-1 rounded-md font-normal mb-4 hover:bg-black hover:text-white'
        href='#top'
      >
        Back to top
      </a>
    </footer>
  );
}

export default Footer;
