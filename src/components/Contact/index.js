import React from 'react';
import { btn, divWrapper, divWrapper2, divWrapper3, divWrapper4, divWrapper5, divWrapper6, header, imgWrp, input1, input2, jacko, span, textrea, } from './styles';
import logo from '../../images/5875388.jpg';

export default function Contact() {
    return (
        <div className={divWrapper} id="contact">
            <div className={divWrapper2}>
                {/* svg supposed to be here */}
            </div>
            <div className={divWrapper3}>
                <div className={divWrapper4}>
                    <div>
                        <h2 className={header}>Lets talk about something</h2>
                        <div className={divWrapper5}>
                            Hate Forms?
                            Send us an <span className='underline'>Email</span> instead.
                        </div>
                    </div>
                    <div className={divWrapper6}>
                        {/* svg supposed to be */}
                    </div>
                        <div className={imgWrp}>
                        <img src={logo} className={jacko} alt="jackolantern" />
                        </div>
                </div>
                <div>
                    <div>
                        <span
                            className={span}>Full Name</span>
                            <input
                                className={input1}
                                type="text"
                                placeholder='Michael Audrey Myers'/>
                    </div>
                    <div className='mt-8'>
                        <span className={span}>Email</span>
                        <input className={input2} type="text" placeholder='mmyers@haddonfield.com'/>
                    </div>
                    <div className='mt-8'>
                        <span className={span}>Message</span>
                        <textarea className={textrea} placeholder='your text here'></textarea>
                    </div>
                    <div className='mt-8'>
                        <button className={btn}>Send Message</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
