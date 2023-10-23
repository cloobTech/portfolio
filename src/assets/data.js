import python from '../assets/logos/python.png';
import nginx from '../assets/logos/nginx.png';
import react from '../assets/logos/react.png';
import mysql from '../assets/logos/mysql.png';
import firebase from '../assets/logos/firebase.png';
import redis from '../assets/logos/redis.png';
import typescript from '../assets/logos/typescript.png';

export const projectCardDetails = [
  {
    title: 'Smart Thrift',
    description: 'Loan and Thrift Management Application',
    stackImg: [python, react, mysql, redis, typescript],
    liveSite:
      'https://drive.google.com/file/d/1lyEp6nPbluGa3LoeDZOdulIsBRCkg0Jw/view?usp=share_link',
    github: 'https://github.com/cloobTech/Smart_Thrift',
  },
  {
    title: 'TaskPilot',
    description: 'Project Managemnet Application',
    stackImg: [python, nginx, react, mysql],
    liveSite: 'https://taskpilot.me',
    github: 'https://github.com/cloobTech/TaskPilot',
  },
  {
    title: 'Cloob Sales',
    description: 'Simple E-commerce website with payment options',
    stackImg: [react, firebase],
    liveSite: 'https://cloob-sales.web.app/',
    github: 'https://github.com/cloobTech/cloob-sales',
  },
];
