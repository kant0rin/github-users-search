import React from 'react';
import {Button, Input} from "antd";

type OwnProps = {
  query: string,
  setQuery: (e: string) => void
  fetchUsers: (query: string, page: number, pageSize: number, sort: string) => void
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  setCurrentPagination: ({page, pageSize}) => void,
  sort: string
}

export const SEARCH_TEST_IDS = {
  LOGIN: 'user-login',
  CONTAINER: 'modal-container',
};

const Search: React.FC<OwnProps> = (
  {
    query,
    setQuery,
    fetchUsers,
    setCurrentPagination,
    sort
  }
) => {
  return (

    <form
      onSubmit={(event) => {
        event.preventDefault()
        setCurrentPagination({page: 1, pageSize: 10})
        fetchUsers(query, 1, 10, sort)
      }}
      className='flex items-center w-full justify-center'
    >
      <Input
        className='w-[320px] sm:text-xl text-lg p-2 mr-2 text-black relative h-full'
        placeholder='Напишите имя пользователя'
        value={query}
        onChange={(value: React.ChangeEvent<HTMLInputElement>) => setQuery(value.target.value) }
      />
      <Button
        className='bg-[#1677ff] h-[46px] sm:text-xl text-lg'
        type="primary"
        onClick={() => {
          setCurrentPagination({page: 1, pageSize: 10})
          fetchUsers(query, 1, 10, sort)
        }
        }
      >
        Поиск</Button>
    </form>
  );
};

export default Search
