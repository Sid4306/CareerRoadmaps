import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa"

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full md:w-1/3 text-center md:text-left">
            <h3 className="text-lg font-semibold mb-2">CareerLaunch</h3>
            <p className="text-sm">Empowering your career journey</p>
          </div>
          <div className="w-full md:w-1/3 text-center my-4 md:my-0">
            <ul className="flex justify-center space-x-4">
              <li>
                <a href="#" className="hover:text-accent transition-colors duration-300">
                  <FaGithub size={24} />
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors duration-300">
                  <FaTwitter size={24} />
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors duration-300">
                  <FaLinkedin size={24} />
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/3 text-center md:text-right">
            <p className="text-sm">&copy; 2023 CareerLaunch. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

