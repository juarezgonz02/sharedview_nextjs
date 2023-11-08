import { Button } from 'antd';
import Image from 'next/image';

const Navbar = () => {
    return(
        <div className="flex flex-row items-center">
            <div className='w-1/2 flex justify-start'>
                <span>SharedView</span>
            </div>
            <div className='w-1/2 flex flex-row items-center'>
                <span>Time: </span>
                <Button>Login</Button>
            </div>
        </div>
    )
}

export default Navbar;