import ServiceHeader from "./ServiceHeader";
import './css/Activity.css'

function Activity({name}) {
    return (
        <>
            <ServiceHeader owner={"Activities;" + name} subdirectory={true}/>
            <div className="activityContainer">
                <h1 className="activityTitle">{name}</h1>
                
                <p className="groups-text">
                    Presentation Sign Up
                </p>

                <div className="registration-section">
                    <span className="label">Signup Dates</span>
                    <p className="date-text">2026-02-22 13:00 - 2026-02-22 15:00</p>
                </div>

                <div className="card">
                    <div className="card-header">
                        <h2>Signup</h2>
                    </div>
                    
                    <div className="card-body">
                        <div className="info-column">
                            <span className="label">Place</span>
                            <p className="value">Studenthuset</p>
                        </div>
                        <div className="info-column">
                            <span className="label">Signups</span>
                            <p className="value">10 / 0</p>
                        </div>
                        <div className="Group Column">

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Activity;