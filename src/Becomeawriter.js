import React, { useState } from 'react';
import { Data } from './Data';

function Becomeawriter() {
    const [data, setData] = useState([]);
    const [user, setUser] = useState({
        name: "",
        interest: "",
        message: ""
      });
    
      const handleFormSubmit = (e) => {
        e.preventDefault();
    
        setData([...data, user]);
      };

    return (
<div className='writer-author-form'> 
<div className='writer'>
    <div className='writer-heading'>Become a <span>Writer</span> </div>
    <div className='writer-sub'>Are you one among such technical writers who is curious about technology and put your observations into blogs? We welcome you.</div>
    <div className='writer-sub'>MindMajix provides an opportunity to submit tecnical articles as guest posts on MindMajix.</div>
    <div className='writer-sub'>You could also be a part of MindMajix Authors community.</div>
</div>
    <div className='form-main'>
    <div className='form-heading'><span>Share</span> your experience with us:</div>
    <form className = "author-form" onSubmit={handleFormSubmit}>
       <input className='form-name' type="text"  placeholder="Name"  onChange={(e) => setUser({ ...user, name: e.target.value })}/>
       <input className='form-interest' type="text"  placeholder="Area Of Interest"  onChange={(e) => setUser({ ...user, interest: e.target.value })}/>
       <input className='form-message' type="text"  placeholder="Message"  onChange={(e) => setUser({ ...user, message: e.target.value })}/>
       <div className='submit' type="submit">Submit</div>
       </form>
    </div>
</div>
    )
}
export default Becomeawriter;

