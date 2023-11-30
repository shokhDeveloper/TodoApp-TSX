import HomeModule from "../home.module.css";
import { Todo, Todos } from "../../Interfaces";
import ModalModule from "./moda.module.css";    
import React, { ChangeEvent, Dispatch, SetStateAction, useEffect, useState } from "react"
interface modalProps {
    data: Todos[],
    modal: boolean,
    setModal: Dispatch<SetStateAction<boolean>>,
    setEditId: Dispatch<SetStateAction<number | undefined>>,
    editId:number | undefined,
    setData: Dispatch<SetStateAction<Todos[]>>
}
export const Modal = ({modal, setModal, setEditId, editId, data, setData}:modalProps):JSX.Element => {
    const [editTodo, setEditTodo] = useState<Todos[]>()
    const [editValue, setEditValue] = useState<string>()
    const handleCloseModal = ():void => {
        setModal(false)
        setEditId(undefined)
    }
    const handleIncludeTodo = (): Todo[] => {
        let todo: Todo[] | undefined = data?.filter(item => item.id === editId)
        setEditTodo(todo)
        return todo
    }
    const handleChange = (event:ChangeEvent<HTMLInputElement>):void => {
        setEditValue(event.target.value)
    }
    const handleSub = (event:React.FormEvent<HTMLFormElement>) :void => {
        event.preventDefault()
        if(editValue?.length){
            let idx:number|undefined = data?.findIndex((item:Todo) => item.id == editId)
            data[idx].name = editValue
            setData(data)
            setModal(false)
            setEditId(undefined)
        }
    }
    useEffect(() => {
        if(editId){
            handleIncludeTodo()
        }
    },[editId])
    return(
        <div className={ModalModule.modal__overlay} style={{display: modal ? "flex": "none"}}>
            <div className={ModalModule.modal}>
                <div className={ModalModule.modal__top}>
                    <h3 className={ModalModule.modal__title}>Edit Todo</h3>
                    <button onClick={() => handleCloseModal()} className={ModalModule.modal__btn?.concat(" border-transparent")}>X</button>
                </div>
                <div className={ModalModule.modal__body}>
                    {editTodo?.map((item:Todo)=> {
                        return(
                            <form key={item.id} onSubmit={handleSub}>
                                <input onChange={handleChange} className={HomeModule.site_todo__input.concat(" border-transparent")} type="text" defaultValue={item.name} />
                                <button className={HomeModule.site_todo__btn.concat(" border-transparent")} type="submit">Update</button>
                            </form>    
                        )
                    })}
                </div>
            </div>
        </div>
    )
}