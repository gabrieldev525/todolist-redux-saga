// React
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

// Third party
import { BsTrashFill } from 'react-icons/bs'
import { Icon, Loader } from 'semantic-ui-react'

// Project
import { IState } from '../../store/modules/utils'
import { ITodoResults } from '../../store/modules/todo/types'
import { createTodoItem, fetchTodoList, removeTodoItem } from '../../store/modules/todo/actions'

// Local
import './style.css'

const App = () => {
  // state
  const [inputField, setInputField] = useState('')
  const [isLoading, setIsLoading] = useState(true)

  // hooks
  const dispatch = useDispatch()

  // redux
  const todo: ITodoResults = useSelector<IState, ITodoResults>(store => store.todo)

  // others
  useEffect(() => {
    setIsLoading(true)
    dispatch(fetchTodoList(() => setIsLoading(false)))
  }, [])

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const data = {
      title: inputField
    }

    dispatch(createTodoItem(data, () => setInputField('')))
  }

  const onClickRemove = (pk) => {
    dispatch(removeTodoItem(pk))
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => setInputField(event.target.value)


  if(isLoading)
    return (
      <Loader active inverted />
    )

  return (
    <div className='container'>
      <h3 className='title'>Lista de atividades</h3>
      <span className='subtitle'>Preencha o campo abaixo para inserir uma nova atividade</span>
      <form onSubmit={onSubmit}>
        <input type='text' onChange={handleChange} value={inputField} />
        <input type='submit' value='add' />
      </form>

      {
        todo.results.length == 0 ? (
          <div className='no-results'>
            <Icon name='search' />
            <p>Nenhum registro encontrado</p>
          </div>
        ) : (
          <table>
            <thead>
              <tr>
                <td>Nome da tarefa</td>
                <td width="10%"></td>
              </tr>
            </thead>
            <tbody>
              {
                todo.results.map(item => {
                  return (
                    <tr key={item.id}>
                      <td>{item.title}</td>
                      <td>
                        <BsTrashFill
                          className='remove-button'
                          onClick={() => onClickRemove(item.id)}/>
                      </td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
        )
      }
    </div>
  )
}

export default App;