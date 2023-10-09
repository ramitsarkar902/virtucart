import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-12 mt-[10rem] flex flex-col w-full">
      <div className="mx-auto flex justify-between items-center w-[90%]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="col-span-2 lg:col-span-1">
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <p>Email: ramitsarkar902@gmail.com</p>
            <p>Phone: +(91) 9434973413</p>
            <p>
              Address: Manipal University Jaipur, Bagru-303007, Rajasthan, India
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">Explore</h2>
            <ul>
              <li className="mb-2">
                <a href="#">Home</a>
              </li>
              <li className="mb-2">
                <a href="#">Shop</a>
              </li>
              <li className="mb-2">
                <a href="#">About Us</a>
              </li>
              <li className="mb-2">
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">Categories</h2>
            <ul>
              <li className="mb-2">
                <a href="#">Clothing</a>
              </li>
              <li className="mb-2">
                <a href="#">Shoes</a>
              </li>
              <li className="mb-2">
                <a href="#">Accessories</a>
              </li>
              <li className="mb-2">
                <a href="#">Sale</a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">Follow Us</h2>
            <ul className="flex space-x-4">
              <li>
                <a href="#">
                  <i className="fab fa-facebook"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-pinterest"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mt-8 text-center">
        <p>&copy; 2023 VirtuCart. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
