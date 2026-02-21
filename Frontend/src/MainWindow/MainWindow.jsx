import './MainWindow.css'
import { useNavigate } from "react-router-dom"

function MainWindow({ setPage}) {
    const navigate = useNavigate();

    return (
        <div className='mainWindow'>
            <div className='MainWindowBar'>
                <div class="left">
                    <img src="src/assets/lisam_logo.png" class="logo" />
                    <nav class="nav">
                    <a href="#">Homepage</a>
                    <a href="#">Courses and programs</a>
                    <a href="#">Lisam-news</a>
                    <a href="#">Current</a>
                    </nav>
                </div>
                <div class="right">
                    <div class="language">
                    Svenska ▼
                    </div>
                </div>
            </div>
            <div className="coursesAndNews">
                <div className="coursesAndPrograms">
                    <div className="coursesAndProgramsTop">
                        <div className="leftPart">
                            <div><h2>Courses and programs</h2></div>
                            <div className='questionMark'><img src="src/assets/question_mark_white_logo.png" alt="" /></div>
                        </div>
                        <div className="rightPart">Show all</div>
                    </div>
                    <div className="courseObject">
                        <h4>6CDDD - Computer Science and Engineering, M Sc in Engineering</h4>
                    </div>
                    <div className="courseObject">
                        <h4>TDDE68 - Concurrent programming and Operating Systems</h4>
                    </div>
                    <div onClick={() => setPage("course")} className="courseObject">
                        <h4>Haka26 - Webbu Hackathon 2026</h4>
                    </div>
                </div>
                <div className="spacer"></div>
                <div className="signUp">
                    <div className="coursesAndProgramsTop">
                        <div className="leftPart">
                            <div><h2>Current for you</h2></div>
                            <div className='questionMark'><img src="src/assets/question_mark_white_logo.png" alt="" /></div>
                        </div>
                        <div className="rightPart">Show all</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainWindow