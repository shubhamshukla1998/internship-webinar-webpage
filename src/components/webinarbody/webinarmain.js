import React,{Component} from 'react';
import './webinarmain.css';
import webinarData from '../../pages/webinarmain/dummy';


class Webbody extends Component {
 
  render() {
    const deta = webinarData.find( dat => 
        dat.id === this.props.data );
        console.log(deta.id);

    //const mealdis = avameals.filter(meal=> meal.categoryIds.indexOf(cate_id) >= 0);

    return(
        <div className='webinarblock' >
        <div className='webinar-heading'>
            <h4>{deta.webinarName}</h4>
        </div>
        <div className='row'>
            <span className='webinar-details'>
               
    <i class="fa fa-calendar icn" aria-hidden="true" > { deta.date}</i>
                    </span>
            
            <span className='webinar-details'>
    <i class="fa fa-clock icn " aria-hidden="true"> { deta.time}</i>
                </span>
            
            <span className='webinar-details'>
    <i class="fa fa-user icn" aria-hidden="true"> {deta.registered}</i>
            </span>
            
        </div>
        <hr/>
        <div className='row' >
            <div className='col-sm-1 col-md-2'>
            <img className='inst-img' src="https://www.techgig.com/files/image_1591097834.jpg"  alt='not show'></img>
            </div>
            <div className='col-sm-5 col-md-9 col-lg-9'>
                <div>
    <h5 style={{color:'grey'}}>{deta.instructorName}</h5>
                </div>
                <div>
    <span className='ins-details'>{deta.instructorRole}</span>
                </div>
                <div>
    <span className='ins-details'>{deta.company}</span>
                </div>

            </div>

           <div className='row' >
               <div className='col-sm-4 col-md-4' style={{margin:'20px 0px 0px 10px'}}>
               <input className='btn-class btn1' type='button' value='Book your seat'/>
               </div>
           
               </div> 
        </div>
    </div>
    )
        }
}

export default Webbody;