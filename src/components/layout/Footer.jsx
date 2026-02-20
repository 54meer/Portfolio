import { FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:flex justify-between gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <img alt="Sameer Sayed" className="w-16" src="/logo.png"></img>
            <p className="text-gray-600 mb-4 max-w-md">
              Creating amazing products and services that make a difference in people's lives.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-700">Contact</h4>
            <ul className="space-y-2 text-gray-600">
              <li>sameer.sayed890@gmail.com</li>
              <li className="flex items-center gap-2">
                <a
                  href="https://www.linkedin.com/in/sameer-sayed-a98549203/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl hover:text-blue-600"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="https://github.com/54meer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl hover:text-dark"
                >
                  <FaGithub />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 text-sm">
            &copy; {currentYear} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;