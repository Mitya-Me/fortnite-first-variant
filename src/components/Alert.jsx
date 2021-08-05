import {useEffect, useContext} from 'react'
import { ShopContext} from '../context'

const Alert = (props) => {
    const { closeAlert, alertName } = useContext(ShopContext);

    useEffect(() => {
        const timerId = setTimeout(closeAlert, 1000);

        return () => {
            clearTimeout(timerId);
        }
    }, [alertName]);

    return (
        <div className='alert'>
            {alertName} added
        </div>
    )
}

export default Alert
