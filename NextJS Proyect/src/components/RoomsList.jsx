import { DeleteOutlined, EllipsisOutlined, QuestionCircleOutlined } from '@ant-design/icons'
import { Tooltip } from 'antd'

const RoomsList = ({rooms}) => {

    return (
        <div className='flex flex-col items-start justify-center mt-3'>
            <div className='flex flex-row gap-2'>
                <h1 className='text-base font-bold text-white'>Tus salas</h1>
                <Tooltip placement="top" title="Only you can have three rooms maximum">
                    <QuestionCircleOutlined />
                </Tooltip>
            </div>
            {
                rooms.map((room) => (
                    <div key={room.id} className='flex flex-row items-center justify-between gap-4 w-full mt-4'>
                        <span className='text-white text-sm'>
                            <span className='text-white opacity-60'>Codigo: </span>
                            {room.code}
                        </span>
                        <span className='text-white text-sm'>
                            <span className='text-white opacity-60'>Expira: </span>
                            {room.expDate}
                        </span>
                        {
                            room.isPrivate ?
                                <span className='text-white text-sm font-bold'>Privada</span>
                                :
                                <span className='text-white text-sm font-bold'>Publica</span>
                        }
                        <button className='bg-purple hover:bg-violet-900 text-white text-sm font-bold py-1 px-2 rounded'>Ingresar</button>
                        <Tooltip placement="top" title="Delete a room">
                            <DeleteOutlined />
                        </Tooltip>
                        <EllipsisOutlined />
                    </div>
                ))
            }
        </div>
    )
}

export default RoomsList