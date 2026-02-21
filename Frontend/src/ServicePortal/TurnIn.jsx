import ServiceHeader from "./ServiceHeader";
import './css/TurnIn.css'

function TurnIn() {
    return (
        <>
        <ServiceHeader owner="Assignments"/>
        <div className="container">
            <div className="TitleCard">
                <h1 className="title">My Assignments</h1>
                <h2 className="subtitle">Very Important Course</h2>
            </div>

            <div className="info-box">
                <span className="info-icon">i</span>
                You currently don't have any assignments.
            </div>

            <div className="table-responsive">
                <table className="submissions-table">
                <thead>
                    <tr>
                    <th>Name</th>
                    <th>Start-date</th>
                    <th>Deadline</th>
                    <th>End-date</th>
                    <th className="sortable">Assignment Status <span className="arrow">↑</span></th>
                    <th>Review Status</th>
                    <th>Judgement</th>
                    <th>Type</th>
                    </tr>
                </thead>
                <tbody>
                    {/* Här kan du mappa data senare */}
                    <tr className="empty-row">
                    <td colSpan="8"></td>
                    </tr>
                </tbody>
                </table>
            </div>
            </div>
        </>
    )
}

export default TurnIn;