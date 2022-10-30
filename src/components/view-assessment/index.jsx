import React from 'react'
import { assessmentQuestions } from '../../lib/assessment-questions';
import './index.css'

export default function ViewAssessment(props) {
    const value = true;
    return (
        <div className="view-assessment-container">
          <div className="table-header">Assessment Data</div>
            <table className="va-table">
                <tr className='va-row'>
                    {/* <thead className='va-header'> */}
                    <th className='va-index'>
                        Sr.
                    </th>
                    <th className='va-question'>
                        Questions
                    </th>
                    <th className='va-description'>
                        Answer
                    </th>
                    {/* </thead> */}
                </tr>
                {Object.keys(assessmentQuestions).map((key, index) => {
                    return (
                        <tr className="va-row" key={key}>
                            <td className="va-index" >{index+1}</td>
                            <td className="va-question">{ assessmentQuestions[key]}</td>
                            <td className="va-description">{value?'YES':'NO' }</td>
        </tr>
                    )
                })

                }
      </table>
    </div>
    )
}