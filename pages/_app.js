import React, { useState } from 'react'
import '../styles/global.css';
import styles from '../styles/style.module.css';
import Image from 'next/image';
import SmallTick from '../components/SmallTick';
import Success from '../components/Success';

export default function App() {
    const [subscribe, setSubscribe] = useState(false);
    const [email, setEmail] = useState('');
    const [submittedEmail, setSubmittedEmail] = useState('');
    const [isValid, setIsValid] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setEmail(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmittedEmail(email);
        setSubmitted(true);
        const isValidEmail = validateEmail(email);

        if (isValidEmail) {
            setIsValid(true);
            setSubscribe(true);
        } else {
            setIsValid(false);
        }
    }

    const handleClick = () => {
        setSubscribe(!subscribe);
    }

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    return (
        <div>
            {subscribe ? (
                <Success submittedEmail={submittedEmail} handleClick={handleClick} />
            ) : (
                <div className={styles.contentContainer}>
                    <div className={styles.content}>
                        <div className={styles.contentText}>
                            <h1 className={styles.contentHead}>Stay updated!</h1>
                            <p>Join 60,000+ product managers receiving monthly updates on:</p>
                            <div className={styles.contentBenefits}>
                                <div className={styles.contentBenefitsText}>
                                    <SmallTick />
                                    <p>Product discovery and building what matters</p>
                                </div>
                                <div className={styles.contentBenefitsText}>
                                    <SmallTick />
                                    <p>Measuring to ensure updates are a success</p>
                                </div>
                                <div className={styles.contentBenefitsText}>
                                    <SmallTick />
                                    <p>And much more!</p>
                                </div>
                            </div>
                            <div className={styles.email}>
                                <div className={styles.emailText}>
                                    <p className={styles.emailHeader}>Email address</p>
                                    {submitted && !isValid && (
                                        <p className={styles.emailErrorMessage}>Valid email required</p>
                                    )}
                                    
                                </div>
                                <form onSubmit={handleSubmit}>
                                    <input
                                        id='form'
                                        placeholder='email@company.com'
                                        value={email}
                                        onChange={handleChange}
                                        style={{ borderColor: submitted && !isValid ? 'hsl(4, 100%, 67%)' : 'hsl(231, 7%, 60%)' }}
                                        className={styles.input}
                                    />
                                    <button type="submit" className={styles.button}>
                                        Subscribe to monthly newsletter
                                    </button>
                                </form>
                            </div>
                        </div>
                        <div className={styles.imageContainer}>
                            <Image
                                src="/images/illustration-sign-up-desktop.svg"
                                alt="decorative image"
                                className={styles.image}
                                width={390}
                                height={500}
                                priority
                            />
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}