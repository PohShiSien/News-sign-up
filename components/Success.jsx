import React from 'react'
import BigTick from '../components/BigTick'
import styles from '../styles/style.module.css'

export default function Success({ submittedEmail, handleClick }) {
    return (
        <>
            <div className={styles.contentContainer}>
                <div className={styles.successContent}>
                    <BigTick />
                    <h1>
                        Thanks for Subscribing!
                    </h1>
                    <p>A confirmation email has been sent to <span className={styles.emailBold}>{submittedEmail}</span>. Please open it and click the button inside to confirm your subsciption.</p>
                    <button className={styles.successButton} onClick={handleClick}>
                        Dismiss message
                    </button>
                </div>
            </div>
        </>
    )
}