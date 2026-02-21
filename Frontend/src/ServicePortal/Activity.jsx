import ServiceHeader from "./ServiceHeader";
import './css/Activity.css'

function Activity({name}) {
    const thisArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
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
                    </div>
                    <table style={{width: "100%"}}>
                        <thead className="group-header">
                            <tr>
                                <th style={{width: "30%"}}>Group</th>
                                <th>Member Name</th>
                            </tr>
                        </thead>
                        <tbody className="group-column">
                            {thisArray.map(element => {
                                return (
                                    <tr className="Group">
                                        <td style={{width: "30%"}}>{element}</td>
                                        <td style={{width: "50%"}}>Someone idk</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default Activity;