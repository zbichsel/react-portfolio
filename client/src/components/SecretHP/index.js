import React from 'react';
import pic from '../../images/valentine.jpeg';
import { divWrapper, divImg, divH1 } from './styles';
import { motion } from 'framer-motion';

export default function SecretHP() {

    const headVariant = {
        visible: { 
            opacity: 1,
            scale: 1,
            transition: { duration: 3 }
        },
        hidden: {
            opacity: 0,
            scale: 0
        }
    };

    const Heading = () => {
        return (
            <motion.div
                variants={headVariant}
                initial="hidden"
                animate="visible"
            >
                <h1
                    className={divH1}
                >
                    It's always someone you know!
                </h1>
            </motion.div>
        );
        };

        return (
            <div
                className={divWrapper}
            >
                <div
                    className={divImg}
                    style={{ backgroundImage: `url(${pic})` }}>
                </div>
                <Heading />
            </div>
        );
    };