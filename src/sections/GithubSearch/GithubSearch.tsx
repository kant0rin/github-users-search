import React, {useState} from 'react';
import Modal from "../../components/Modal/Modal.tsx";
import axios from "axios";
import Search from "../../components/Search/Search.tsx";
import Error from "../../components/Error/Error.tsx";
import Loading from "../../components/Loading/Loading.tsx";
import UserList from "../../components/UserList/UserList.tsx";

export interface IUser {
  login: string
  avatar_url : string
  id: number
  html_url: string
}
export interface IUsers {
  count: number
  users: IUser[]
}


const GithubSearch: React.FC = () => {

  const [query, setQuery] = useState<string>('')
  const [users, setUsers] = useState<IUsers>({count: 0, users: []})
  const [error, setError] = useState<string | null>(null)
  const [sort, setSort] = useState<string>('desc')
  const [currentPagination, setCurrentPagination] = useState({page: 1, pageSize: 10})
  const [isModalActive, setIsModalActive] = useState<boolean>(false)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [currentUser, setCurrentUser] = useState<string>('')

  //TODO Написать 3 теста

  const fetchUsers = async (query: string, page: number = 1, pageSize: number = 10, sort: string = 'desc') => {
    setIsLoading(true)
    try {
      const response = await axios.get(
        `https://api.github.com/search/users?q=${query}`, {params:
            {'per_page':pageSize, 'page': page, 'sort': 'repositories', 'order': sort}
        })
      const data = await response.data
      setIsLoading(false)
      if (data.total_count !== 0){
        setError(null)
        setUsers({
          count: data.total_count,
          users: data.items
        })
      } else {
        setUsers({count: 0,
          users: []})
        setError('Такой пользователь не найден')
      }
    } catch (e)  {
      if (e?.response?.status === 422) {
        setUsers({count: 0, users:[]})
        setIsLoading(false)
        setError('Такой пользователь не найден')
      } else if (e?.response?.status === 403)  {
        setUsers({count: 0, users:[]})
        setIsLoading(false)
        setError('Превышен лимит запросов по API')
      }
    }
  }

  return (
    <section className='w-full justify-center items-center flex p-8 flex-col text-center'>
      <h1 className='lg:text-3xl text-2xl pb-4'>Тестовое задание: Поиск пользователей GitHub.</h1>
      <Modal
        isActive={isModalActive}
        setActive={setIsModalActive}
        currentUser={currentUser}
      />
      <Search
        query={query}
        setQuery={setQuery}
        setCurrentPagination={setCurrentPagination}
        fetchUsers={fetchUsers}
        sort={sort}
      />
      <Error error={error}/>
      <Loading isLoading={isLoading}/>
      <UserList
        users={users}
        setSort={setSort}
        setCurrentPagination={setCurrentPagination}
        fetchUsers={fetchUsers}
        query={query}
        currentPagination={currentPagination}
        sort={sort}
        setCurrentUser={setCurrentUser}
        setIsModalActive={setIsModalActive}
      />
    </section>)
};

export default GithubSearch

