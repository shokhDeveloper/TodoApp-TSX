import React, { useEffect, useState } from "react"
import { Header, Home, Modal } from "./Components"
import { Todos } from "./Interfaces"
export const App = (): JSX.Element => {
  const [data, setData] = useState<Todos[]>([])
  const [editId, setEditId] = useState<number | undefined>()
  const [modal, setModal] = useState<boolean>(false)
  useEffect(() => {
    if(editId !== undefined){
      setModal(true)
    }
    console.log(editId)
  },[editId])
  return (
    <React.Fragment>
      <Header />
      <main>
      <Home setEditId={setEditId} data={data} setData={setData} title="Add todo" />
      <Modal data={data} modal={modal} editId={editId} setModal={setModal} setEditId={setEditId} setData={setData}/> 
      </main>
      
    </React.Fragment>
  )
}