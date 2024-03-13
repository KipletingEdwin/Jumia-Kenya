import React from 'react'
import styles from './OrderCancellation.module.css';
import step1 from '../../assets/cancellation/Step1.png';
import step2 from '../../assets/cancellation/step2.png';
import step3 from '../../assets/cancellation/step3.png';
import step4 from '../../assets/cancellation/step4.png';
import step5 from '../../assets/cancellation/step6.png';

function OrderCancellation() {
  return (
    <section className={styles.container}>
        <div className={styles.stepZero}>
            <p> It's easy to cancel an order or an item you've purchased on Jumia. Here's a step-by-step guide on how to do it.  </p>
            <p> To cancel one item: </p>
            <div className={styles.steps}>
                <p> <span> Step 2:</span> Log in to your Jumia account. </p>
                <p> <span> Step 2:</span> Go to your "ORDERS" page. </p>
                <p> <span> Step 3:</span> Find the order that includes the item you want to cancel. </p>
                <p><span>  Step 4:</span> Click on "See Details" for that order. </p>
                <p> <span> Step 5:</span> Select the item you want to cancel. </p>
                <p> <span> Step 6:</span> Click the "Cancel Item" button and follow the prompts to complete the cancelation process. </p>
            </div>
        </div>

        {/* STEP ONE */}
        <div className={styles.stepOne}>
            <p>  To cancel an order: </p>
            <p> Step 1: Log in to your Jumia account. </p>
            <img srcSet={step1} alt='cancelation'/>

        </div>



       {/* STEP TWO */}
       <div className={styles.stepTwo}>
        <p> <span> Step 2:</span> Go to your "ORDERS" page. </p>
        <img src={step2} alt='stepTwo'/>
       </div>


       {/* STEP THREE */}

       <div className={styles.stepThree}>
        <p> <span> Step 3: </span> Find the order you want to cancel. </p>
        <img src={step3} alt='step-three'/>
       </div>

       {/* STEP FOUR */}

       <div className={styles.stepFour}>
        <p> <span> Step 4:</span> Click on "See Details" for that order. </p>
        <img src={step4} alt='step-four'/>
       </div>


    {/* STEP FIVE */}

    <div className={styles.stepFive}> 
    <p> <span> Step 5: </span> Click the "Cancel Order" button and follow the steps to confirm the cancelation. </p>
    <img src={step5} alt='cancel-order'/>
    </div>


    </section>
  )
}

export default OrderCancellation