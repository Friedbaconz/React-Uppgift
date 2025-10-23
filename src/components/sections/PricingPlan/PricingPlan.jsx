import React from 'react'
import './PricingPlan.css'
import Introduction from '../../elements/Introduction/Introduction'
import PricingUnit from '../../elements/PricingUnit/PricingUnit'

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
                        <PricingUnit name="Small Unit" price="50"/>
                        <PricingUnit name="Medium Unit" price="100"/>
                        <PricingUnit name="Large Unit" price="150"/>
                        <PricingUnit name="Executive Unit" price="200"/>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default PricingPlan