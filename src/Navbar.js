import { FiPhoneCall } from 'react-icons/fi';
import { FaRegUserCircle } from 'react-icons/fa';
import { MdSearch } from 'react-icons/md';
import { BiChevronDown } from 'react-icons/bi';



const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="nav1">
        <ul>
          <li className="fiphone"><FiPhoneCall /></li>
          <li className="learning-advisor">Connect With Learning Advisor</li>
          <li className='corporate-traning'>Corporate Training</li>
          <li className='instructor'>Become an Instructor</li>
          <li className='blog'>Blog</li>
        </ul>
      </div>
      <div className="nav2">

        <div className='logo' ><img src="https://cdn.mindmajix.com/mern/images/logo-d.svg" alt="logo" /></div>

        <div>          <i className="searchicon" aria-hidden="true"><MdSearch /></i>
          < input className="search" type="text" placeholder="search"></input>
        </div>
        <div className="Course">
          <button className="Coursebtn">Course</button>
          <div className='arrow-down'><BiChevronDown /></div>
        </div>


        <div className="container">
          <div className="bar1">
            <li className="bar"></li>
            <li className="bar"></li>
            <li className="bar"></li>
          </div>

          <div className="side">Course</div>
        </div>
        <div className="sign">
          <FaRegUserCircle />
        </div>
      </div>
      <div className='all-authors-flex'>
        <div className='head-tagline'>
          <div className='breadcrumb'>
            <a className="logo1" href="https://mindmajix.com/">Home </a>    {">"}      <a>Authors</a>
          </div>
          <div className='all-authors'>All Authors</div>
          <div className='tagline'>Learn new skills, pursue your interests or advance your career with our online courses</div>
        </div>
        <img className='all-authors-img' src='https://cdn.mindmajix.com/mern/images/allcourses.svg' alt='img'></img>
      </div>
    </div>



  );
}

export default Navbar;