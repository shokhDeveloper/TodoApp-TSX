import React, { ChangeEvent, KeyboardEvent, useEffect, useRef, useState } from "react";
import { Todo, Todos } from "../Interfaces";
import homeModule from "./home.module.css";
import { TodoList } from "./TodoList";
interface homeProps {
    title: string,
    setData: React.Dispatch<React.SetStateAction<Todos[]>>,
    data: Todos[],
    setEditId: React.Dispatch<React.SetStateAction<number | undefined>>
}
export const Home = ({ title, setData, data, setEditId }: homeProps): JSX.Element => {
    let [todoTitle, setTodoTitle] = useState<string>()
    const handleChange = (event: KeyboardEvent<HTMLInputElement>): void => {
        let element = event.target as HTMLInputElement
        setTodoTitle(element.value)
    }
    const handleSub = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault()
        let element = event.target as HTMLFormElement
        let elTodoInput = element.parentNode?.querySelector("input") as HTMLInputElement
        if (!todoTitle?.length) return setTodoTitle("")
        else {
            let todo: Todo = {
                name: todoTitle,
                id: new Date().getTime(),
                isComplate: false
            }
            setData((todos) => [...todos, todo])
            elTodoInput.value = ''
        }
    }
    useEffect(() => {
        console.log(data)
    }, [data])
    return (
        <section className={homeModule.site__todo}>
            <div className="container">
                <div className={homeModule.site_todo__inner}>
                    <h3 className={homeModule.site_todo__title}>{title}</h3>
                    <div className={homeModule.site_todo__top}>
                        <button form="form" className={homeModule.site_todo__btn.concat(" border-transparent")}>Add Todo + </button>
                    </div>
                    <div className={homeModule.site__form_box}>
                        <form onSubmit={handleSub} className={homeModule.site__form} id="form"></form>
                        <input onKeyUp={handleChange} form="form" className={homeModule.site_todo__input.concat(" border-transparent")} type="text" placeholder="Create Todo" />
                    </div>
                    <TodoList setEditId={setEditId} data={data} setData={setData} />
                </div>
            </div>
        </section>
    )
}