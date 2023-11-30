import { Todo, Todos } from "../Interfaces";
import homeModule from "./home.module.css";
import React, { useState } from "react"
interface TodoListProps {
    data: Todos[],
    setData: React.Dispatch<React.SetStateAction<Todos[]>>,
    setEditId: React.Dispatch<React.SetStateAction<number | undefined>>
}
export const TodoList = ({ data, setData, setEditId }: TodoListProps): JSX.Element => {
    const handleDelete = (id: number): void => {
        let filter: Todos[] | undefined = data?.filter((item: Todo) => item.id !== id)
        setData(filter)
    }
    const handleEdit = (id: number): void => {
        setEditId(id)

    }
    return (
        <React.Fragment>
            {data?.length ? (
                <ul className={homeModule.site_todo__list}>
                    {data?.map(item => {
                        return (
                            <li key={item.id} className={homeModule.site__todo_item}>
                                <h3>{item.name}</h3>
                                <div className={homeModule.site_todo_btn__box}>
                                    <button onClick={() => handleDelete(item.id)} className={homeModule.site_todo_btn__delete.concat(" border-transparent")}>Delete</button>
                                    <button onClick={() => handleEdit(item.id)} className={homeModule.site_todo_btn__edit?.concat(" border-transparent")}>Edit</button>
                                </div>
                            </li>
                        )
                    })}
                </ul>
            ) : (
                <div className="error__text">
                       <h2 className="error__title">There are no todos yet</h2>
                  
                </div>
            )}
        </React.Fragment>
    )
}