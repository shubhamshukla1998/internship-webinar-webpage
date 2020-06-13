import React,{Component} from 'react';
import webinarData from './dummy.js';
import Webbody from '../../components/webinarbody/webinarmain'
class WebinarMain extends Component {
     
    
             render(){
                let webinarShowArray = webinarData.map( wd => {
                    return(<div class='col-sm-12 col-md-4 col-lg-4' style={{marginBottom:'20px'}}>
                                <Webbody data={wd.id}/>
                         </div>) })
                return(
                    <div className='container'>
                       <div className='row'>
                       {webinarShowArray}
                       </div>
           
                   </div>
       
                    )

             }
             
            
    

        
    
}

export default WebinarMain;