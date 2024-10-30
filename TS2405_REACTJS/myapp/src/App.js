import './App.css';
import NavBar from './components/Header/NavBar';
import Footer from './components/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import BackTop from './components/Footer/BackTop';
import Home from './pages/Home';
import About from './pages/About';
import Product from './pages/Product';
import Blog from './pages/Blog';
import Feature from './pages/Feature';
import Testimonial from './pages/Testimonial';
import ContactUs from './pages/ContactUs';
import { useState } from 'react';

function App() {
  const [isDetailsVisible, setIsDetailsVisible] = useState(false);

  const toggleDetails = () => {
    setIsDetailsVisible(prev => !prev);
  };

  return (
    <div className="relative p-4">
      <div className="bg-white border border-gray-200 rounded-lg shadow-md p-4 flex items-center space-x-4">
        <div className="flex-shrink-0">
          <img
            src="https://cdn-new.topcv.vn/unsafe/140x/https://static.topcv.vn/company_logos/cong-ty-tnhh-kohnan-viet-nam-61949ebb1b4d7.jpg"
            alt="Logo"
            className="w-20 h-20 object-contain"
          />
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-green-600">
            Key Account Executive (Kênh Bea...
          </h3>
          <p className="text-sm text-gray-500">CÔNG TY TNHH AMERI GROUP</p>
          <div className="flex items-center space-x-2 mt-2">
            <span className="bg-gray-100 text-gray-700 text-xs font-medium px-2 py-1 rounded">
              20 - 25 triệu
            </span>
            <span className="bg-gray-100 text-gray-700 text-xs font-medium px-2 py-1 rounded">
              Hồ Chí Minh
            </span>
          </div>
        </div>
        <div className="flex-shrink-0">
          <button onClick={toggleDetails} className="focus:outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-400 hover:text-red-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 15l7-7 7 7"
              />
            </svg>
          </button>
        </div>
      </div>

      <div
        className={`absolute top-full left-0 w-full bg-white shadow-md rounded-lg p-6 transition-opacity duration-300 ${isDetailsVisible ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
      >
        <div className="flex items-center space-x-4">
          <img
            src="https://cdn-new.topcv.vn/unsafe/140x/https://static.topcv.vn/company_logos/cong-ty-tnhh-kohnan-viet-nam-61949ebb1b4d7.jpg"
            alt="Company Logo"
            className="w-16 h-16 object-contain"
          />
          <div>
            <h3 className="text-xl font-semibold text-gray-700">Nhân Viên Xử Lý Đơn Hàng / Process</h3>
            <p className="text-sm text-gray-500">CÔNG TY TNHH GLODIVAL</p>
            <div className="flex items-center space-x-2 mt-2 text-sm">
              <span className="bg-gray-100 px-2 py-1 rounded">Trên 8.5 triệu</span>
              <span className="bg-gray-100 px-2 py-1 rounded">Hồ Chí Minh</span>
            </div>
          </div>
        </div>
        <div className="mt-6">
          <h4 className="text-green-600 font-semibold">Mô tả công việc</h4>
          <ul className="mt-2 list-disc list-inside text-gray-700">
            <li>Chuẩn bị hồ sơ theo yêu cầu và quy trình, quy định của công ty</li>
            <li>Xử lý hồ sơ các thị trường</li>
            <li>Phối hợp với CSKH để hoàn thành hồ sơ cho khách hàng</li>
            <li>Báo cáo theo ngày, tháng, quý cho quản lý hoặc cấp trên trực tiếp</li>
          </ul>
        </div>
        <div className="mt-6">
          <h4 className="text-green-600 font-semibold">Thời gian làm việc</h4>
          <ul className="mt-2 text-gray-700">
            <li><strong>Ca 1</strong>: 7h30 đến 16h60</li>
            <li><strong>Ca 2</strong>: 13h đến 21h</li>
          </ul>
        </div>
        <div className="mt-6 flex space-x-4">
          <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">Ứng tuyển</button>
          <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300">Xem chi tiết</button>
        </div>
      </div>
    </div>
  );
}

export default App;
