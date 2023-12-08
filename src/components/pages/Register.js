import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button, Card } from 'antd';
import { Navigate } from 'react-router-dom';

import RegionCard from '../views/RegionCard';
import RegionSelectCard from '../views/RegionSelectCard';
import AccountReg from '../views/AccountReg';

function Register() {
  const userInfo = JSON.parse(localStorage.getItem('userInfo'))
  const [step, setStep] = useState(0);
  const [region, setRegion] = useState({ code: "GB", title: "United Kingdom" })

  const increment = (stepIncrement) => {

    if ((step + stepIncrement) >= 2)
      setStep(2);
    else
      setStep(step + stepIncrement);
  }

  const decrement = (stepDecrement) => {
    if ((step - stepDecrement) <= 0)
      setStep(0);
    else
      setStep(step - stepDecrement);
  }

  return (
    <>
      {(userInfo && userInfo.email) ? <Navigate to="/"></Navigate> :
        <motion.div
          className="text-center relative"
          animate={{
            scale: [1, 1],
            opacity: [0, 1]
          }}
          transition={{ duration: 2 }}
        >

          <img src="/assets/img/mark2.png" className="w-16 absolute top-0 mt-8 ml-24" />
          {step == 0 &&
            <RegionCard className="absolute top-0 w-screen h-screen register-back" stepIncrement={() => increment(1)} accountStep={() => increment(2)} country={region} />
          }
          {step == 1 &&
            <RegionSelectCard className="absolute top-0 w-screen h-screen register-back" setRegion={setRegion} stepDecrement={() => decrement(1)} />
          }
          {step == 2 &&
            <AccountReg className="absolute top-0 w-screen h-screen login-back" stepLogIn={() => increment(1)} country={region} />
          }
        </motion.div>}
    </>
  );
}

export default Register;
