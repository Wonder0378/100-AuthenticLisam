import { Link } from 'react-router-dom'
import './css/ServiceHeader.css'


function ServiceHeader({ owner, subdirectory }) {
    var LiuIcon = 'src/assets/LiU_LisamLogo.png';
    var subowner = "";
    var newOwner = owner;
    if(subdirectory){
        subowner = owner.split(";")[1];
        newOwner = owner.split(";")[0];
        LiuIcon = '../src/assets/LiU_LisamLogo.png';
    }
    return (
        <div className='ServiceHeader'>
            <nav className="ServNavHeader">
                <Link to="/"><img id="ServLiuLogo" src={LiuIcon} alt="Liu Icon" /></Link>{" "}
                <Link to=""><h3>{newOwner}</h3></Link>
            </nav>
            <div className='ServSubHeader'>
                <a href="/">Start</a> /
                <a href="/">Lisam</a> /
                <a href="/">Your Course (TODO18 2026_VT_LP)</a> / 
                <a href='/sign-up'>{newOwner}</a>
                {subowner != "" ? (
                    <>/ <a href="">{subowner}</a></>
                ) : (
                    null
                )}
            </div>
        </div>
    )
}

export default ServiceHeader;