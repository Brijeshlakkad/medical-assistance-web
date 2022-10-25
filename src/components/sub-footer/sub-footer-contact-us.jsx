import React from 'react'
import './sub-footer.css'

export default function SubFooterContactUsComponent() {
    return (
        <div className='form-container'>
            <h5 class="text"><strong>Send us a Messgae</strong></h5>
            <form>
                <div class="form-group">
                    <input type="text" className="form-control" id="Name" placeholder="Your Name" />
                </div>
                <br />
                <div class="form-group">
                    <input type="email" className="form-control" id="Email" placeholder="Your Email" />
                </div>
                <br />
                <div class="form-group">
                    <textarea class="form-control" id="query" rows="3" placeholder="Post your Query..." ></textarea>
                </div>
                <br />
                <input type="submit" class="btn btn-primary" />
            </form>
        </div>
    )
}