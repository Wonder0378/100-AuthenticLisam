import "./TopBar.css"

function TopBar({ page, setPage }) {
    return (
        <div className="mainTopbar">
            <div className="textBoxesLeft">
                Start / <a onClick={() => {setPage("main")}}>Lisam</a> {page === "course" ? "/ Webbu Hackathon 2026" : ""}
            </div>
            <div className="textBoxesRight">
                Courses and programs
            </div>
        </div>
    )
}

export default TopBar