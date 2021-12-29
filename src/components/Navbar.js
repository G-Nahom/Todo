
import {Link} from 'react-router-dom'
 function Navbar(){
      return(
        <div className='shadow'>
               <div className='row bg-dark'>
               <div className='col'></div>
               <div className='col d-flex flex-row'>
                   <Link className='p-3 text-light' to='/home'>Home</Link>
                   <Link className='p-3 text-light' to='/about'>About</Link>
                   <Link className='p-3 text-light' to='/form'>Form</Link>
               </div>
               </div>
            </div>
      )
}

export default Navbar;