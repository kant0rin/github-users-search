import React, {useEffect, useState} from 'react';
import axios from "axios";
import * as classNames from "classnames";
import {Circles} from "react-loader-spinner";

interface IUserInfo {
  login: string,
  id: number,
  html_url: string,
  avatar_url: string
  company: string,
  location: string,
  name: string
}

interface OwnProps {
  isActive: boolean
  setActive: (e: boolean) => void,
  currentUser: string
}

const Modal: React.FC<OwnProps> = ({isActive, setActive, currentUser}) => {

  const [userInfo, setUserInfo] = useState<IUserInfo>(
    {
      login: '',
      id: 0,
      html_url: '',
      avatar_url: '',
      company: '',
      location: '',
      name: ''
    }
  )
  const [isLoading, setIsLoading] = useState<boolean>(false)

  useEffect(() => {
    fetchUser(currentUser)
  }, [currentUser])

  const fetchUser = async (login: string) => {
    setIsLoading(true)
    const response = await axios.get(`https://api.github.com/users/${login}`)
    const data = await response.data
    setUserInfo(data)
    setIsLoading(false)
  }

  return (
    <div
      className={classNames(' cursor-pointer w-screen h-screen bg-[rgba(0,0,0,0.5)] fixed top-0 left-0 z-10 flex justify-center items-center', {'block': isActive}, {'hidden': !isActive})}
      onClick={(e) => {
        setActive(false)
      }}
    >
      {
        isLoading
          ? <Circles
            height="80"
            width="80"
            color="white"
            ariaLabel="circles-loading"
            wrapperStyle={{'marginTop': '10px'}}
            wrapperClass=""
            visible={true}
          /> : <div className='flex flex-col bg-[#2f2f2f] p-12 cursor-auto rounded-md relative items-center'
                    onClick={e => e.stopPropagation()}>
            <button className='absolute right-[10px] top-[10px] cursor-pointer'
                    onClick={(e) => {
                      setUserInfo({
                        login: '',
                        id: 0,
                        html_url: '',
                        avatar_url: '',
                        company: '',
                        location: '',
                        name: ''
                      })
                      setActive(false)
                    }}
            >Закрыть
            </button>
            <img src={userInfo.avatar_url + '.jpg'} alt="img" className='w-[200px] mb-4'/>
            <h1 className='mb-4 text-xl'>Логин: {userInfo.login}</h1>
            <h2 className='text-xl mb-4'>ID: {userInfo.id}</h2>
            <h2 className='text-xl mb-4'>Имя: {userInfo.name}</h2>
            <h2 className='text-xl mb-4'>Компания: {userInfo.company}</h2>
            <h2 className='text-xl mb-4'>Страна: {userInfo.location}</h2>
            <a href={userInfo.html_url} className='underline text-xl'>Перейти на GitHub</a>
          </div>
      }
    </div>
  );
};

export default Modal;
