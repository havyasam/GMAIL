import react from 'react'
import '../css/Main.css'
import ReactDOM from 'react-dom'
import gmail from '../myImage/gmail.png'
import search from '../myImage/search.png'
import customer from '../myImage/customer-service.png'
import settings from '../myImage/settings.png'
import settingslider from '../myImage/settings-sliders.png'
import apps from '../myImage/apps.png'

const Main=()=>{
    return(
        <>
        <div className="main-flex">
        <img className="mail-image"src={gmail} alt="" width="40px" height="40px" />
            <div className='mail'><p className='font-mail'>Gmail</p></div>
            <div className='search'>
                <form class="example" action="/action_page.php">
                <img className="search-image"src={search} alt="" width="20px" height="25px" />
                <img className="slider-image"src={settingslider} alt="" width="20px"/>
                <input className='input-box' type="text" placeholder="       Search mails..." name="" />
                
                
                </form>
              
            </div>
            <div className='icon-padding add'><img src={customer} alt="" /></div>
            <div className='icon-padding setting'><img src={settings} alt="" /></div>
            <div className='icon-padding account'><img src={apps} alt="" /></div>
            <div className='icon-padding sign'>Sign</div>
        </div>

        </>
    )
}
export default Main;