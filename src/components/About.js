import Navbar from './Navbar'
function About(){
const list=['ReactJs','Angular'];
    return(
        <>
        <Navbar/>
        <div style={{backgroundColor:'indianred'}}>
            <h1 style={{textAlign:'center'}}>About</h1>
            <ul>
                {list.map((list,index)=><li key={list}>{list+index}</li>)}
            </ul>
        </div>

        </>
    )
}

export default About;