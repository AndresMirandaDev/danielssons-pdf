import { FaFileContract, FaHome } from 'react-icons/fa';


const navigationConfig = [
  {
    key: 'home',
    path: '/',
    title: 'Hem',
    icon: <FaHome className='font-'/>,
  },
  {
    key: 'reports',
    path: '/reports',
    title: 'Lön rapporter',
    icon: <FaFileContract className='font-'/>,
  },
];

export default navigationConfig;
