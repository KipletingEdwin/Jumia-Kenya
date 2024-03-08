import React from 'react'
import styles from './HelpCentre.module.css';

function HelpCentre() {
  return (
    <section className={styles.container}>
        <div className={styles.helpCentreContainer}>
            <div className={styles.help}>
                <h3>Help Center</h3>
                <h3> Hi, how can we help you?</h3>
            </div>

        </div>

    </section>
  )
}

export default HelpCentre