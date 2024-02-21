import "./Dropdown.css"



export default function Dropdown() {
    return (
    <div className="dropdown">
        <div className="current-option">
            <span>Option</span>
            <div className="arrow"></div>
        </div>
        <div className="options">
            <div className="option">
                <span>Option</span>
            </div>
        </div>
    </div>
    );
}