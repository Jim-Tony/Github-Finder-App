function Footer() {
    const currentYear = new Date().getFullYear();
  return (
    <footer className="footer p-6 bg-gray-700 text-primary-content footer-center">
        <p className='text-sky-400'>&copy;{currentYear} All rights reserved</p>
    </footer>
  )
}

export default Footer