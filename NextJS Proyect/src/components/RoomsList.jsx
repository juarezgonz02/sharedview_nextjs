import React from 'react'
import { DeleteOutlined, EllipsisOutlined, QuestionCircleOutlined } from '@ant-design/icons'
import { Tooltip, Popconfirm } from 'antd'


const RoomsTable = ({rooms}) => {
    return (
        <>
            {
                rooms.map((room) => (
                    <div key={room.id} className='flex flex-row items-center tablet:justify-evenly gap-4 mt-4 tablet:w-full phone:gap-2'>
                        <span className='text-white text-sm phone:text-xs'>
                            <span className='text-white opacity-60'>Codigo: </span>
                            {room.code}
                        </span>
                        <span className='text-white text-sm phone:text-xs'>
                            <span className='text-white opacity-60'>Expira: </span>
                            {room.expDate}
                        </span>
                        {
                            room.isPrivate ?
                                <span className='text-white text-sm font-bold phone:text-xs'>Privada</span>
                                :
                                <span className='text-white text-sm font-bold phone:text-xs'>Publica</span>
                        }
                        <button className='bg-purple hover:bg-violet-900 text-white text-sm font-bold py-1 px-2 rounded phone:px-1 phone:text-xs'>Ingresar</button>
                        <div className='flex flex-row gap-2'>
                        <Popconfirm
                            title="Delete the task"
                            description="Are you sure to delete this task?"
                            okType='danger'
                            okText="Yes"
                            cancelButtonProps={{ type: 'text' }}
                            icon={<QuestionCircleOutlined
                                style={{ color: 'red' }} />}
                        >
                            <DeleteOutlined />
                        </Popconfirm>
                        <EllipsisOutlined />
                        </div>
                    </div>
                ))
            }
        </>
    )
}


    const RoomsList = ({ rooms }) => {

        return (
            <div className='flex flex-col mt-3 tablet:items-center'>
                <div className='flex flex-row gap-2'>
                    <h1 className='text-base font-bold text-white phone:text-sm'>Tus salas</h1>
                    <Tooltip placement="top" title="Only you can have three rooms maximum">
                        <QuestionCircleOutlined />
                    </Tooltip>
                </div>
                <RoomsTable rooms={rooms} />
            </div>
        )
    }

    export default RoomsList;