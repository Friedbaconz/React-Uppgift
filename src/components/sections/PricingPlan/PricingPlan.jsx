import React from 'react'
import './PricingPlan.css'
import Introduction from '../../elements/Introduction/Introduction'

function PricingPlan() {
  return (
    <section>
        <div className="pricing-bg">
            <div className="pricing-wrapper">
                <div className="pricing-content">
                    <div className="pricing-introduction">
                        <Introduction header="Pricing Plan" title="Find the Perfect Plan for Your Storage Needs"/>
                    </div>
                    <div className="prcing-sub-wrapper">
                        
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default PricingPlan