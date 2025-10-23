import React from 'react'
import './OurService.css'
import Texttile from '../../elements/Texttile/Texttile'
import Introduction from '../../elements/Introduction/Introduction'

function OurService() {
  return (
    <section>
        <div className="ourservice-bg">
            <div className="ourservice-wrapper">
                <div className="ourservice-content">
                    <div className="ourservice-info">
                        <Introduction header="Our Services" title="Specialized Storage for Every Special Item" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie nisl sed dui lacinia gravida. Nulla quis nulla leo. Mauris ac blandit nisi non sodales augue. Phasellus eget elit gravida."/>
                    </div>
                    <div className="ourservice-tiles">
                        <div className="ourservice-texttilewrapper">
                            <div className="ourservice-texttile-box">
                                <Texttile title="Diverse Unit Sizes" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."/>
                            </div>
                            <div className="ourservice-texttile-box">
                                <Texttile title="Moving Assistance" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."/>
                            </div>
                        </div>
                        <div className="ourservice-tile-box"></div>
                        <div className="ourservice-texttilewrapper">
                            <div className="ourservice-texttile-box">
                                <Texttile title="Vehicle Storage" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."/>
                            </div>
                            <div className="ourservice-texttile-box">
                              <Texttile title="Top-Notch Security" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."/>  
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default OurService