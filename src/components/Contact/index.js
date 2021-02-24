import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';
import { Button, ListGroup, ListGroupItem } from 'react-bootstrap';

function Contact() {

    // This clears the input fields on the component load: { name: '', email: '', message: '' }
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const { name, email, message } = formState;
    const [errorMessage, setErrorMessage] = useState('');

    function handleChange(e) {

        if (e.target.name === 'Email') {
            const isValid = validateEmail(e.target.value);
            console.log(isValid);

            // isValid conditional statement
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required.`);
            } else if (!isValid) {
                setErrorMessage('Your email is invalid.');
            } else {
                setErrorMessage('');
            }
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required.`);
            } else {
                setErrorMessage('');
            }
        }


        // console.log('errorMessage', errorMessage);

        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value });
        }
    }
    // notice the console log is OUTSIDE the handleChange function because the asynchronous nature of the setFormState function will cause the console.log placed in the function body of handleChange to appear delayed in its ability to sync.  However, when we place the console.log in the scope of teh ContactForm function, we can see that the state is updated properly.
    // console.log(formState);

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    }
    return (

        <React.Fragment>

            <section id="contact-me" className="row mt-5">
                <div className="col-md-12">
                    <h2 className="section-title">Contact Me</h2>
                    <div className="mt-3 container">

                        {/* <form id="contact-form" onSubmit={handleSubmit}>
                            <div className="row mt-3">
                                <label className="col-md-3" htmlFor="name">Name:</label>
                                <input className="col-md-9" type="text" defaultValue={name} onBlur={handleChange} name="Name" />
                            </div>
                            <div className="row mt-3">
                                <label className="col-md-3" htmlFor="email">Email Address:</label>
                                <input className="col-md-9" type="email" defaultValue={email} name="Email" onBlur={handleChange} />
                            </div>
                            <div className="row mt-3">
                                <label className="col-md-3" htmlFor="message">Message:</label>
                                <textarea className="col-md-9" name="Message" defaultValue={message} onBlur={handleChange} rows="5" />
                            </div> */}

                        {/* the statement below means if(errorMessage)... */}
                        {/* {errorMessage && (
                                <div>
                                    <p className="error-text">{errorMessage}</p>
                                </div>
                            )}
                            <div className="row mt-3">
                                <div className="col-md-3"></div>
                                <button className="col-md-3" type="submit">Submit</button>

                            </div>

                        </form> */}
                        {/* <h4>Taylor Nyquist </h4> */}
                        {/* <Button className="text-info" variant="link" size="lg" href="tel:+16154387972">+1 615·438·7972</Button>
                        <br></br>
                        <Button className="text-info" variant="link" size="lg" href="mailto:tnyquist@gmail.com">tnyquist@gmail.com</Button>
                        <br></br>
                        <Button className="text-info" variant="link" size="lg" href="https://github.com/taylornyquist">GitHub</Button>
                        <br></br>
                        <Button className="text-info" variant="link" size="lg" href="https://www.linkedin.com/in/taylor-nyquist/">LinkedIn</Button>
                        <br></br>
                        <Button className="text-info" variant="link" size="lg" href="https://www.instagram.com/tnyquist/">Instagram</Button> */}
                        <Button className="text-info" variant="link" size="lg" href="mailto:tnyquist@gmail.com">tnyquist@gmail.com</Button>

                    </div>
                </div>
            </section>

        </React.Fragment>

    );

}

export default Contact;