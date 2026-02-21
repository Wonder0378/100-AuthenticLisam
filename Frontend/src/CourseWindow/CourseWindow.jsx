import './CourseWindow.css'

function CourseWindow({ setPage }) {
    
    return (
        <div className='courseWindow'>
            <div className='TitleBar'>
                <div className="CourseLogo"><img src="src/assets/course_logo.png" alt="" /></div>
                <h2>Webbu Hackathon 2026</h2>
                <div className='MembersLogo'><img src="src/assets/members_logo.png" alt="" /></div>
                <div className='spacer2'></div>
                <div className='PrivateGroup'>Private Group</div>
                <div className='CourseUtils'>
                    <div className='SharePart'>
                        <img src="src/assets/share_logo.png" alt="" />
                        Share ▽
                    </div>
                    <div className='Dots'>
                        <h3>...</h3>
                    </div>
                </div>
            </div>
            <div className='CourseContent'>
                <div className='CourseSideBar'>
                    <nav class="nav2">
                        <a href="#">Home</a>
                        <a href="#">Course plan</a>
                        <a href="#">Course documents</a>
                        <a href="#">Collaborative workspace</a>
                        <a href='#'>Members and groups</a>
                        <a href='#'>Schedule</a>
                        <a href='#'>Assessment record</a>
                        <a href='#'>Quiz</a>
                        <a href='/turn-in'>Submissions</a>
                        <a href='/sign-up'>Signup</a>
                        <a href='#'>Teams</a>
                    </nav>
                </div>
                <div className='MainContentView'>
                    <div className='row1'>
                        <h2>Welcome to your Classroom!</h2>
                        <h3>Write your text here</h3>
                    </div>
                    <div className='row2'>
                        <h3>News from your classroom</h3>
                        <h8>There is nothing to see here</h8>
                    </div>
                    <div className='row3'>
                        <h3>Contact us teachers</h3>
                        <h8>Edit the page and add a user</h8>
                    </div>
                </div>
            </div>
        </div>
    );
    
}

export default CourseWindow