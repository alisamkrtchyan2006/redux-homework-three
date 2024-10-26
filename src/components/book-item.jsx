import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, useParams } from "react-router-dom"
import { getBook } from "../features/books/books.api"
import { AddComment } from "./add-comment"

export const BookItem = () => {
    const {id} = useParams()
    const dispatch = useDispatch()
    const current = useSelector(state => state.books.current)
    const [modalIsOpen, setModalIsOpen] = useState(false)


    useEffect(() => {
        dispatch(getBook(id))
    }, [id])



    return <>
        <h2>BookItem</h2>
        <Link className="links" to='/'>Home</Link>
        <Link className="links" to='/add'>Add book</Link>
         {
            current && <div className="book-item-block">
                <img
                    src={current.photo}
                    style={{width:300}}
                />
                <p>{current.title}</p>
                <strong>by {current.author}</strong>
                <button onClick={() => setModalIsOpen(true)}>Add Comment</button>
                <AddComment isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}/>
            </div>
         }
    </>
}