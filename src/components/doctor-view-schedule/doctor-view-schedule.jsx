import React from 'react'
import '../counselor-view-schedule/view-schedule.css'
import { PathConstants } from '../../lib/path-constants'
import { Link } from 'react-router-dom';

function searchFunctionDoctor() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("mySearch");
    filter = input.value.toUpperCase();
    table = document.getElementById("myScheduleTable");
    console.log(input);
    console.log(table);
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[1];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}

export default function DoctorViewScheduleComponent() {

    return (
        <>
            <h2 className='schedule-table-header' style={{ fontSize: '40px' }}>Appointment Schedule</h2>

            <div>
                <input type="search" id="mySearch" onKeyUp={() => searchFunctionDoctor()}
                    placeholder="🔍 Search for Date.." title="Type in a name" >
                </input>

                <table className='schedule' id='myScheduleTable'>
                    <tbody>
                        <tr>
                            <th>Patient Name</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>View Assessment</th>
                        </tr>
                        <tr>
                            <td>Alfreds Futterkiste</td>
                            <td>Maria Anders</td>
                            <td>Germany</td>
                            <td><Link className='view-file-button' to={PathConstants.CounselorLOP}>View File</Link></td>
                        </tr>
                        <tr>
                            <td>Centro comercial Moctezuma</td>
                            <td>Francisco Chang</td>
                            <td>Mexico</td>
                            <td><Link className='view-file-button' to={PathConstants.CounselorLOP}>View File</Link></td>
                        </tr>
                        <tr>
                            <td>Ernst Handel</td>
                            <td>Roland Mendel</td>
                            <td>Austria</td>
                            <td><Link className='view-file-button' to={PathConstants.CounselorLOP}>View File</Link></td>
                        </tr>
                        <tr>
                            <td>Island Trading</td>
                            <td>Helen Bennett</td>
                            <td>UK</td>
                            <td><Link className='view-file-button' to={PathConstants.CounselorLOP}>View File</Link></td>
                        </tr>
                        <tr>
                            <td>Laughing Bacchus Winecellars</td>
                            <td>Yoshi Tannamuri</td>
                            <td>Canada</td>
                            <td><Link className='view-file-button' to={PathConstants.CounselorLOP}>View File</Link></td>
                        </tr>
                        <tr>
                            <td>Magazzini Alimentari Riuniti</td>
                            <td>Giovanni Rovelli</td>
                            <td>Italy</td>
                            <td><Link className='view-file-button' to={PathConstants.CounselorLOP}>View File</Link></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <br></br>
            <div className="schedule-pagination schedule-table-header">
                <Link to={PathConstants.CounselorHome} >&laquo;</Link>
                <Link to={PathConstants.CounselorHome} >1</Link>
                <Link to={PathConstants.CounselorHome} className="active">2</Link>
                <Link to={PathConstants.CounselorHome} >3</Link>
                <Link to={PathConstants.CounselorHome} >4</Link>
                <Link to={PathConstants.CounselorHome} >5</Link>
                <Link to={PathConstants.CounselorHome} >6</Link>
                <Link to={PathConstants.CounselorHome} >&raquo;</Link>
            </div>
            <div className='extra'></div>
        </>
    )
}