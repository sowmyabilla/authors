import React from 'react'
import {FaLinkedin,FaTwitter,FaFacebookF,FaInstagram,FaYoutube} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='footer-main'>
          <div className='footer'>
        <div className='ficons'>
            <ul className='ficon-list'>
              <li><a className='ficon' href="https://www.facebook.com/MindMajixTechnologies" target="_blank"><FaFacebookF  /></a></li>
              <li><a className='ficon' href="https://twitter.com/mindmajix" target="_blank"><FaTwitter /></a></li>
              <li><a className='ficon' href="https://www.instagram.com/mindmajix/" target="_blank"><FaInstagram /></a></li>
              <li><a className='ficon' href="https://www.linkedin.com/company/mindmajix" target="_blank"><FaLinkedin /></a></li>
              <li><a className='ficon' href="https://www.youtube.com/c/mindmajix" target="_blank"><FaYoutube /></a></li>
            </ul>
        </div>
            <div className='line1'></div>
                  <div className='ftcc-main'>
                    <div className='ftccs'>Trending Course Categories</div>
                      <div className='line'></div>
                      <ul className='ftcc-list'>
                        <li className='ftccli'>Business Intelligence & Analytics Courses</li>
                        <li className='ftccli'>Cloud Computing Courses</li>
                        <li className='ftccli'>Programming & Frameworks Courses</li>
                        <li className='ftccli'>Customer Relationship Management Courses</li>
                        <li className='ftccli'>Database Management and Administration Courses</li>
                        <li className='ftccli'>Business Process Management Courses</li>
                        <li className='ftccli'>Software and Automation Testing Courses</li>
                        <li className='ftccli'>IT Service Management Courses</li>
                        <li className='ftccli'>RPA Certification Courses</li>
                      </ul>
                    </div>

                  <div className='ftc-fc-main'> 
                    <div className='ftc-main' >
                      <div className='ftcs'>Trending Courses</div>
                      <div className='line'></div>
                      <ul className='ftc-list'>
                        <li className='ftccli'>Power BI Training</li>
                        <li className='ftccli'>Google Cloud Training</li>
                        <li className='ftccli'>Salesforce Training</li>
                        <li className='ftccli'>Oracle DBA Training</li>
                        <li className='ftccli'> Training</li>
                        <li className='ftccli'> Training</li>
                        <li className='ftccli'>Jira Training</li>
                        <li className='ftccli'>Python Training</li>
                        <li className='ftccli'>ServiceNow Training</li>
                      </ul>
                    </div>
                    <div className='fc-flex-main'>
                    <div className='fc-flex'>Company</div>
                    <div className='line'></div>
                      <ul className='fc-flex-list'>
                        <li className='ftccli'>About US</li>
                        <li className='ftccli'>Contact Us</li>
                        <li className='ftccli'>Refund Policy</li>
                        <li className='ftccli'>Reviews</li>
                        <li className='ftccli'>Team</li>
                      </ul>
                      </div>
                    </div> 

                    <div className='fpc-main'>
                      <div className='fpcs'>Popular Courses</div>
                      <div className='line'></div>
                      <ul className='fpc-list'>
                      <li className='ftccli'>Agile Training</li>
                      <li className='ftccli'>ArcSight Training</li>
                      <li className='ftccli'>CybarArk Training</li>
                      <li className='ftccli'>Workday Training</li>
                      <li className='ftccli'> Training</li>
                      <li className='ftccli'>AWS Training</li>
                      <li className='ftccli'> Alteryx Training</li>
                      <li className='ftccli'>Powershell Training</li>
                      <li className='ftccli'> Training</li>
                      </ul>
                    </div>

                  <div className='ffb-fwwu-fd-flex'>
                    <div className='ffb-main'>
                      <div className='ffbs'>For Businesses</div>
                      <div className='line'></div>
                      <ul className='ffb-list'>
                      <li className='ftccli'>Corporate Training</li>
                      </ul>
                    </div>

                    <div className='fwwu-main'>
                      <div className='fwwus'>Work with us</div>
                      <div className='line'></div>
                      <ul className='fwwu-list'>
                        <li className='ftccli'>Hire From US</li>
                        <li className='ftccli'>Become an instructor</li>
                        <li className='ftccli'>Write for us</li>
                      </ul>
                      </div>
  
                    <div className='fd-main'>
                      <div className='fds'>Discover</div>
                      <div className='line'></div>
                      <ul className='fd-list'>
                        <li className='ftccli'>Community</li>
                        <li className='ftccli'>Blog</li>
                        <li className='ftccli'>Sample Resumes</li>
                      </ul>
                    </div>
                  </div> 
                </div>

          <div className='fc-main'>
            <div className='fcs'>Company</div>
            <ul className='fc-list'>
              <li className='fc-sublist'>About US</li>
              <li className='fc-sublist'>Contact Us</li>
              <li className='fc-sublist'>Refund Policy</li>
              <li className='fc-sublist'>Reviews</li>
              <li className='fc-sublist'>Team</li>
            </ul>
            </div>

            <div className='fcopyrights'>Copyright © 2013 - 2022 MindMajix Technologies - An Appmajix Company. All Rights Reserved.</div>

            <div className='fdisclaimer'>
              Disclaimer: All the course names, logos, and certification titles
              we use are their respective owners' property. The firm, service,
              or product names on the website are solely for identification
              purposes. We do not own, endorse or have the copyright of any
              brand/logo/name in any manner. Few graphics on our website are
              freely available on public domains.
            </div>
         
  
    </div>  
  )
}

export default Footer

