import React, { useState } from 'react';
import { btn, divWrapper, divWrapper2, divWrapper3, divWrapper4, divWrapper6, header, header2, imgWrp, input1, input2, jacko, span, textrea } from './styles';
import logo from '../../images/5875388.jpg';

export default function Contact() {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const subject = encodeURIComponent('Contact Request');
        const body = encodeURIComponent(
            `${formData.message}\n\n\n${formData.name}\n\n${formData.email}`
        );
        const mailToUrl = `mailto:biksel09@gmail.com?subject=${subject}&body=${body}`;
        window.location.href = mailToUrl;
    };

    return (
        <div className={divWrapper} id="contact">
            <div className={divWrapper2}>
                {/* svg could be here */}
            </div>
            <div className={divWrapper3}>
                <div className={divWrapper4}>
                    <div>
                        <h2 className={header}>Happy Halloween!</h2>
                        <h4 className={header2}>Send me all of your questions in this simple form.</h4>
                    </div>
                    <div className={divWrapper6}>
                        {/* svg could be here */}
                    </div>
                    <div className={imgWrp}>
                        <img src={logo} className={jacko} alt="jackolantern" />
                    </div>
                </div>
                <form onSubmit={handleSubmit}>
                    <div>
                        <span
                            className={span}>Full Name</span>
                        <input
                            className={input1}
                            name="name"
                            label="name"
                            type="text"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder='Michael Audrey Myers'
                            required
                        />
                    </div>
                    <div className='mt-8'>
                        <span className={span}>Email</span>
                        <input
                            className={input2}
                            name="email"
                            label="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder='mmyers@haddonfield.com'
                            required
                        />
                    </div>
                    <div className='mt-8'>
                        <span className={span}>Message</span>
                        <textarea
                            className={textrea}
                            name="message"
                            label="Message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder='your text here'
                            required
                        ></textarea>
                    </div>
                    <div className='mt-8'>
                        <button className={btn}
                            type="submit"
                        >Send Message</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
