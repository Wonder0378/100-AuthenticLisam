import { Link } from 'react-router-dom'
import './header.css'

function Header() {
    return ( 
        <div className="MainBar">
            <div className='selectionLogo'>
                <img src='src/assets/selection_logo.png'/>
            </div>
            <div className='liuLogo'>
                <img src="src/assets/liu_logo_blue.png"/>
            </div>
            <div className='SharePointText'><b>Sharepoint</b></div>
            <div className="SearchBar">
                <div className='lookingLogo'>
                    <img src='src/assets/looking_glass.png'/>
                </div>
                <input className='inputField' role='combobox' placeholder='Search multiple websites' />
                
            </div>
            <div className='utilIcons'>
                <div className="imageElements">
                    <img src="src\assets\agents_logo.png"/>
                </div>
                <div className="imageElements">
                    <img src="src\assets\settings_logo.png"/>
                </div>
                <div className="imageElements">
                    <img src="src\assets\question_logo.png"/>
                </div>
                <div className="imageElements">
                    <img src="src\assets\user_logo.png"/>
                </div>
            </div>
        </div>
    )
}

export default Header;