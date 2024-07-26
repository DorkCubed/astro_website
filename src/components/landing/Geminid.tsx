import './Geminid.css';
import { useState, useEffect } from 'react';

function getAngle() {
    return Math.atan((0.55 * window.innerHeight) / (0.92 * window.innerWidth));
}

function Geminid() {
    const [angle, setAngle] = useState(getAngle().toString());

    useEffect(() => {
        function handleWindowResize() { setAngle(getAngle().toString()) }
        window.addEventListener('resize', handleWindowResize);

        return () => { window.removeEventListener('resize', handleWindowResize); }
    }, []);

    return (
        <>
            {console.log(angle)}
            <div className='geminid' style={{ rotate: `-${angle}rad` }}>
                <div className='geminid_head'></div>
                <div className='geminid_tail'></div>
            </div >
        </>
    )
}

export default Geminid;