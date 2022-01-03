import React,{Component} from  'react';
import {Button} from 'primereact/button';
import {Card} from 'primereact/card'
import  axios  from 'axios';
import { InputText } from 'primereact/inputtext';
import {DataTable} from 'primereact/datatable'
import {Column} from 'primereact/column'
import {Calendar} from 'primereact/calendar'

class Form extends Component{

    constructor(){
        super();
        this.state={
           
                Deivice_Name:'',
                Device_Model:'',
                Production_Year:'',
                IMEIL:'',
                Produced_By:''
            ,
            data:[]
        }
       
    }
    
    componentDidMount(){
       axios.get('http://localhost:8000/deviceapi').then(
           (res)=>{
                this.setState({data:res.data})
               console.log('responese',this.state.data);
           }
       ).catch('Error')
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        const formData={
            Deivice_Name:this.state.Deivice_Name,
            Device_Model:this.state.Device_Model,
            Production_Year:this.state.Production_Year,
            IMEIL:this.state.IMEIL,
            Produced_By:this.state.Produced_By
        }
        const header=  {
            'Access-Control-Allow-Origin' : '*',
            'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
            }
        axios.post( 'http://localhost:8000/deviceapi',
            formData,{header}
           
          ).then((res)=>console.log(res)).catch('Error');
       // axios.post('http://localhost:8000/deviceapi',{formData}).then((res)=>console.log(res)).catch('Eroor')
        console.log('submitted..',formData);
    }
    
    render=()=>{
        const marginStyle={
            marginBottom:'10px',
            marginTop:'10px'
        }  
        const inputStyle={
            width:'50%',
            display:'block',
            margin:'auto'
        }
        const paginatorLeft = <Button type="button" icon="pi pi-refresh" className="p-button-text" />;
        const paginatorRight = <Button type="button" icon="pi pi-cloud" className="p-button-text" />;
        
        return(
            <div className='container rounded bg-secondary mt-5'>
                <h2 className='text-center shadow rounded bg-warning text-danger'>Electronic Device Data <i className='pi pi-user'></i> </h2>
              <div className='d-flex justify-content-center'>
              <Card style={{width:'70%'}}>
             <div>
             <form>
              <div style={marginStyle} className="">
                <i className="pi" />
                <InputText style={inputStyle}  value={this.state.Deivice_Name}  onChange={(e) => this.setState({Deivice_Name:e.target.value})} placeholder="Device Name" />
            </div>
            
            <div>
            <span style={marginStyle}>
                <i className="" />
                <InputText style={inputStyle} value={this.state.Device_Model}  onChange={(e) => this.setState({Device_Model:e.target.value} )} placeholder="Device Model" />
            </span>
            
            </div>
            <div style={inputStyle}>
            <Calendar style={{marginTop:'10px',width:'100%'}} placeholder='Production Date' value={this.state.Production_Year} dateFormat="dd/mm/yy"  onChange={(e) => this.setState({Production_Year:e.target.value})}/>
            </div>
            <div style={marginStyle} className=''>
                <i className=''/>
                <InputText  style={inputStyle} value={this.state.IMEIL} type='number'  onChange={(e)=>this.setState({IMEIL:e.target.value})}  placeholder='IMEIL'/>
            </div>
            <div style={marginStyle} className=''>
                <i className=''/>
                <InputText  style={inputStyle} value={this.state.Produced_By} type='text'  onChange={(e)=>this.setState({Produced_By:e.target.value})}  placeholder='Produced By'/>
            </div>
            
            <br/>        
                <Button onClick={this.handleSubmit} className='p-button-info'style={{display:'block',margin:'auto'}} label="Send"><i className='pi pi-send'></i></Button>
            </form>   
             </div>
              </Card>
              </div>
            <div className='card'>
            <DataTable value={this.state.data}
            paginator responsiveLayout="scroll"
            paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
            currentPageReportTemplate="Showing {first} to {last} of {totalRecords}" rows={2} rowsPerPageOptions={[10,20,50]}
            paginatorLeft={paginatorLeft} paginatorRight={paginatorRight}
            >
              <Column field='Deivice_Name' header='Deivice_Name' sortable/>
              <Column field='Device_Model' header='Device_Model'/>
              <Column field='Produced_By' header='Produced_By'/>
              <Column field='Production_Year' header='Production_Year'/>
             
              </DataTable>
                </div>
             </div>
        )
    }
}

export default Form;