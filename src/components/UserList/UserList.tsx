import React from 'react';
import {Pagination, Select} from "antd";
import {IUser, IUsers} from "../../sections";
import UserCard from "../UserCard/UserCard.tsx";

interface OwnProps{
  users: IUsers
  setSort: (e: string) => void
  fetchUsers: (query: string, page: number, pageSize: number, sort: string) => void
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  setCurrentPagination: ({page, pageSize}) => void
  query: string
  currentPagination: {page: number, pageSize: number},
  sort: string
  setCurrentUser: (e: string) => void
  setIsModalActive: (e: boolean) => void
}

const UserList: React.FC<OwnProps> =
  (
    {users,
      setSort,
      setCurrentPagination,
      fetchUsers, query,
      currentPagination,
      sort,
      setCurrentUser,
      setIsModalActive
    }
  ) => {
  return (
    <div>
      {
        users.count !== 0 &&
          <div className='flex flex-col max-w-[800px] w-full h-[70vh] mt-10 overflow-y-scroll items-start'>
              <Select
                  defaultValue='desc'
                  className='w-[240px] mb-4'
                  options={[
                    { value: 'desc', label: 'Сортировка: по убыванию' },
                    { value: 'asc', label: 'Сортировка: по возрастанию' },
                  ]}
                  onChange={(value) => {
                    setSort(value)
                    setCurrentPagination({page: 1, pageSize: 10})
                    fetchUsers(query, 1, 10, value)
                  }}
              />
            {users.users.map((user: IUser) => <UserCard key={user.id} user={user} setCurrentUser={setCurrentUser} setIsModalActive={setIsModalActive}/>)}
          </div>
      }
      <Pagination
        className='mt-4'
        defaultCurrent={1}
        current={currentPagination.page}
        pageSize={currentPagination.pageSize}

        //GitHup API запрещает делать запрос на >1000 пользователь
        total={users.count > 1000 ? 999 : users.count}

        onChange={(page, pageSize) => {
          setCurrentPagination({page, pageSize})
          fetchUsers(query, page, pageSize, sort)
        }}

      />
    </div>
  );
};

export default UserList;
