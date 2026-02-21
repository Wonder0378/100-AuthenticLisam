import ServiceHeader from "./ServiceHeader";
import './css/SignUp.css'

const exampleSignUp = [{
    activity : "Hackathon?",
    signup_time : "2026-02-22",
    status : "Not Signed Up",
    sign_ups : "Webbus jätteroliga hackathon",
    link : "Hackathon"
}, {
    activity : "Hacking Alexander's computer",
    signup_time : "2026-02-22",
    status : "Signed Up",
    sign_ups : "You can't hide forever",
    link : "Alexander"
}]

function SignUp() {
    return (
        <>
        <ServiceHeader owner="Activities"/>
        <div className="signup-container">
            <div className="TitleCard">
                <h1 className="title">Sign Up</h1>
            </div>

            <div className="signup-table-responsive">
                <table className="signup-table">
                    <thead>
                        <tr>
                            <th style={{width: "30%", minWidth: "8rem"}}>Activity</th>
                            <th style={{width: "8%", minWidth: "4rem"}}>Sign-up time</th>
                            <th style={{width: "8%", minWidth: "4rem"}}>Status</th>
                            <th style={{width: "40%"}}>Sign-ups</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* Här kan du mappa data senare */}
                        {exampleSignUp.length !== 0 ? exampleSignUp.map(activity => {
                            return (
                                <tr className="Activity">
                                    <th style={{width: "30%", minWidth: "8rem"}}><a href={'/sign-up/'+activity.link}>{activity.activity}</a></th>
                                    <th style={{width: "8%", minWidth: "4rem"}}>{activity.signup_time}</th>
                                    <th style={{width: "8%", minWidth: "4rem", color: activity.status === "Signed Up" ? "green" : "red"}}>{activity.status}</th>
                                    <th style={{width: "40%"}}>{activity.sign_ups}</th>
                                </tr>
                            )
                        }) : (
                            <tr className="empty-row">
                                <td colSpan="8"></td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
        </>
    )
}

export default SignUp;