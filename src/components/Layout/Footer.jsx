const Footer = () => {
  return (
    <footer className="bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 p-4 mt-auto border-t border-gray-300 dark:border-gray-700 transition-colors duration-300">
      <div className="container mx-auto text-center text-sm max-w-7xl">
        &copy; {new Date().getFullYear()} My React Blog.
      </div>
    </footer>
  );
};

export default Footer;