import './Header.css'

const Header = () => {
    return (
        <div className='header-container'>
            <img src={`${process.env.PUBLIC_URL}/images/aim_logo.png`} alt='The AIM logo, a stethocope shaped as a heart.' className='aim-logo'/>
            <div className='titles-wrapper'>
                <h1>AIM</h1>   
                <p>
                    Accessibility and Inclusivity in Medicine Club
                    <br/>University of Alberta
                </p>  
            </div>
               
        </div>
        
    )
}

export default Header