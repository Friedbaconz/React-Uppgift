import React from 'react'
import './Brands.css'

function Brands() {
  return (
    <section className="brands">
        <div className="brands-bg">
            <div className="brands-wrapper">
                <a className="brands-logo-link" href="..."><img className="brands-logo" src="./Logoipsum1.svg" alt="" /></a>
                <a className="brands-logo-link" href="..."><img className="brands-logo" src="./Logoipsum2.svg" alt="" /></a>
                <a className="brands-logo-link" href="..."><img className="brands-logo" src="./Logoipsum3.svg" alt="" /></a>
                <a className="brands-logo-link" href="..."><img className="brands-logo" src="./Logoipsum4.svg" alt="" /></a>
                <a className="brands-logo-link" href="..."><img className="brands-logo" src="./Logoipsum5.svg" alt="" /></a>
            </div>
        </div>
    </section>
  )
}

export default Brands