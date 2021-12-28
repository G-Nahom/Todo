const Form=()=>{
    const borderStyle={
        border:'3px solid steelblue',
        boxShadow:'3px green inset'
    }

    const centerButton={
        display:'block',
        margin:'auto',
        
    }
    
    const handleSubmit=(event)=>{
       event.preventDefault();
    }
    return(

        <div className="jubotron">
        <div  className="row">
            <div className="col"></div>

         <div  style={borderStyle} className="col card shadow">
         <form  onSubmit={handleSubmit}>
             <div className="card-title text-center"><h1>SIGN UP</h1></div>
             <div className="form-group">
            
             <input type="text" placeholder="First Name" className="form-control"/>
            </div>
            <br/>

             <div className="form-group">
             <input type="text" placeholder="Emial" className="form-control"/>
 
             </div>
             <br/>
             <div className="form-group">

             <input type="password" placeholder="Password" className="form-control"/>
 <br></br>
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