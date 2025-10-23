import React from 'react'
import './PricingUnit.css'
import DarkButton from '../Button/Darkbutton/DarkButton'

function PricingUnit({price, name }) {
    return (
        <div className="PricingUnit-bg">
            <div className='PricingUnit-wrapper'>
                <div>
                    <p className='unitname'>{name}</p>
                </div>
                <div className="unit-price">
                    <div>
                        <img className="unit-img" src="./Moneysign.svg" alt="" />
                    </div>
                    <div>
                        <p className='unit-number'> {price} </p>
                    </div>
                    <div className='unit-month-wrapper'>
                        <p className='unit-month'>/month</p>
                    </div>
                </div>
                <div className='unit-text-wrapper'>
                    <p className="unit-text">
                        Phasellus sollicitudin sapien eu massa accumsan, quis semper odio suscipit.
                    </p>
                </div>
                <div className='unit-splitter'></div>
                <div className='unit-list-wrapper'>
                    <div className='unit-list'>
                        <i class="bi bi-check-circle-fill" id="unit-icon"></i>
                        <p className='unit-plan'>Nam nec ipsum in dolor</p>
                    </div>
                    <div className='unit-list'>
                        <i class="bi bi-check-circle-fill" id="unit-icon"></i>
                        <p className='unit-plan'>Fusce nec ligula ut arcu</p>
                    </div>
                    <div className='unit-list'>
                        <i class="bi bi-check-circle-fill" id="unit-icon"></i>
                        <p className='unit-plan'>Aliquam pulvinar arcu in</p>
                    </div>
                    <div className='unit-list'>
                        <i class="bi bi-check-circle-fill" id="unit-icon"></i>
                        <p className='unit-plan'>Duis gravida enim porta</p>
                    </div>
                    <div className='unit-list'>
                        <i class="bi bi-check-circle-fill" id="unit-icon"></i>
                        <p className='unit-plan'>Etiam eget libero non ligula</p>
                    </div>
                </div>
                <div className='unit-button'>
                    <div className='unit-button-box'>
                        <DarkButton text="Rent Now" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PricingUnit