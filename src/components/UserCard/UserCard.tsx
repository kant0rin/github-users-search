import React from 'react';
import {IUser} from "../../sections";

interface OwnProps {
  user: IUser
  setCurrentUser: (v: string) => void
  setIsModalActive: (e: boolean) => void
}

const UserCard: React.FC<OwnProps> = ({user, setCurrentUser, setIsModalActive}) => {
  return (
    <div
      key={user.id}
      className='flex w-full mb-4 bg-[#1e1e1e] text-start p-2 cursor-pointer'
      onClick={() => {
        setCurrentUser(user.login)
        setIsModalActive(true)
      }}
    >
      <img className='w-[100px] h-[100px] sm:mr-10 mr-4' src={user.avatar_url + '.jpg'} alt=""/>
      <div className='flex flex-col items-start sm:text-[20px] text-[16px]'>
        <p>Имя: {user.login}</p>
        <p className='mt-4'>id: {user.id}</p>
        <a href={user.html_url} className='mt-10 underline'>Подробнее</a>
      </div>
    </div>
  );
};

export default UserCard;
