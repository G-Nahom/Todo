import {useRef,useState} from 'react';
import Navbar from './Navbar'
const Form=()=>{
    const borderStyle={
        border:'3px solid steelblue',
        boxShadow:'3px green inset'
    }

    const centerButton={
        display:'block',
        margin:'auto',
        
    }
    const [data,setData]=useState({});
    const  firstName=useRef();
    const  password = useRef();
    const  email = useRef();
    const handleSubmit=(data,event)=>{
        event.preventDefault();
       const tempdata={
            fname:firstName.current.value,
            email:email.current.value,
            password:password.current.value
        }
       // this.setData(tempdata);
       console.log(tempdata);
       alert('insered data')
       
    }
    return(
        
        <div className="jubotron">
            <Navbar/>
        <div  className="row">
            <div className="col"></div>

         <div  style={borderStyle} className="col card shadow">
         <form  onSubmit={handleSubmit}>
             <div className="card-title text-center"><h1>SIGN UP</h1></div>
             <div className="form-group">
            
             <input ref={firstName}  type="text" placeholder="First Name" className="form-control"/>
            </div>
            
            <br/>

             <div className="form-group">
             <input ref={email}  type="text" placeholder="Emial" className="form-control"/>
 
             </div>
             <br/>
             <div className="form-group">

             <input ref={password} name="password" type="password" placeholder="Password" className="form-control"/>
              
             </div>
             <button style={centerButton} className="btn btn-success text-ceter">Submit</button>
        <br/>
         </form>
         </div>
         <div className="col"></div>
        </div>
        </div>
    )
}

export default Form;