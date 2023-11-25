import React, { useState } from 'react'
import { DeleteOutlined, EllipsisOutlined, QuestionCircleOutlined, UsergroupAddOutlined } from '@ant-design/icons'
import { Tooltip, Popconfirm, ConfigProvider } from 'antd'
import { Modal } from 'antd';
import ChangeState from './ChangeState';
import AddUsers from './AddUsers';
import Link from 'next/link';


const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
    const formattedDate = new Date(dateString).toLocaleDateString(undefined, options);
    return formattedDate;
};


const RoomsTable = ({ rooms, deleteRoom, getRooms}) => {
    const [selectedRoomCode, setSelectedRoomCode] = useState(null);
    const [stateRoom, setStateRoom] = useState(null);
    const [isStateOpen, setIsStateOpen] = useState(false);
    const [isAddUserOpen, setIsAddUserOpen] = useState(false);

    const showFormState = (code, state) => (e) => {
        e.preventDefault();
        setSelectedRoomCode(code);
        setStateRoom(state);
        setIsStateOpen(true);
    };

    const showAddUser = (code) => (e) => {
        e.preventDefault();
        setSelectedRoomCode(code);
        setIsAddUserOpen(true);
    }

    const handleAddUserOk = () => {
        setIsAddUserOpen(false);
    }

    const handleAddUserCancel = (addformRef) => {
        addformRef.current?.resetFields();
        setIsAddUserOpen(false);
    }

    const handleStateOk = () => {
        setIsStateOpen(false);
    };
    const handleStateCancel = () => {
        setIsStateOpen(false);
    };

    const confirm = (code) => (e) => {
        e.preventDefault();
        deleteRoom(code);
    }

    return (
        <>
            {
                rooms.map(room => (
                    <div key={room.code} className='flex flex-row items-center tablet:justify-evenly gap-4 mt-6 tablet:w-full phone:gap-2'>
                        <span className='text-white text-sm phone:text-xs'>
                            <span className='text-white opacity-60'>Codigo: </span>
                            {room.code}
                        </span>
                        <span className='text-white text-sm phone:text-xs'>
                            <span className='text-white opacity-60'>Expira: </span>
                            {formatDate(room.expirationDate)}
                        </span>
                        <span className='text-white text-sm font-bold phone:text-xs'>
                            {room.isPublic ? 'Publica' : 'Privada'}
                        </span>
                        <Link href={`${room.code}`}>
                            <button className='bg-purple hover:bg-violet-900 text-white text-sm font-bold py-1 px-2 rounded phone:px-1 phone:text-xs'>Ingresar</button>
                        </Link>
                        <div className='flex flex-row gap-2'>
                            <Popconfirm
                                title="Delete the task"
                                description="Are you sure to delete this task?"
                                okType='danger'
                                okText="Yes"
                                onConfirm={confirm(room.code)}
                                cancelButtonProps={{ type: 'text' }}
                                icon={<QuestionCircleOutlined
                                    style={{ color: 'red' }} />}
                            >
                                <DeleteOutlined />
                            </Popconfirm>
                            <EllipsisOutlined onClick={showFormState(room.code, room.isPublic)} />
                            <ConfigProvider
                                theme={{
                                    components: {
                                        Button: {
                                            colorBgTextHover: "#fff",
                                            colorPrimaryHover: "#fff",
                                            colorTextDisabled: "rgba(255, 255, 255, 0.5)",
                                            colorBgContainerDisabled: "rgba(127, 25, 180, 0.5))",
                                            colorPrimaryActive: "#fff",
                                        },
                                        Modal: {
                                            contentBg: "#121212",
                                            headerBg: "#121212",
                                            titleColor: "#fff",
                                        },
                                    },
                                }}
                            >
                                <Modal title="Cambiar el estado" open={isStateOpen} footer={null} closeIcon={false}>
                                    <ChangeState handleStateOk={handleStateOk} handleStateCancel={handleStateCancel} code={selectedRoomCode} state={stateRoom} getRooms={getRooms}/>
                                </Modal>
                                {
                                    room.isPublic === false ?
                                        <UsergroupAddOutlined onClick={showAddUser(room.code)} />
                                        :
                                        null
                                }
                                <Modal title="Agregar usuarios" open={isAddUserOpen} footer={null} closeIcon={false}>
                                    <AddUsers handleAddUserOk={handleAddUserOk} handleAddUserCancel={handleAddUserCancel} code={selectedRoomCode} getRooms={getRooms}/>
                                </Modal>
                            </ConfigProvider>
                        </div>
                    </div>
                ))
            }
        </>
    )
}


const RoomsList = ({ rooms, deleteRoom, getRooms }) => {
    return (
        <div className='flex flex-col mt-3 tablet:items-center'>
            <div className='flex flex-row gap-2'>
                <h1 className='text-base font-bold text-white phone:text-sm'>Tus salas</h1>
                <Tooltip placement="top" title="Only you can have three rooms maximum">
                    <QuestionCircleOutlined />
                </Tooltip>
            </div>
            <RoomsTable rooms={rooms} deleteRoom={deleteRoom} getRooms={getRooms} />
        </div>
    )
}

export default RoomsList;


