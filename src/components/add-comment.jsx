import Modal from "react-modal"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { useParams } from "react-router-dom"
import { addComment, getComments } from "../features/comments/comments.api"

export const AddComment = ({isOpen, onRequestClose}) => {


    const {id} = useParams()
    const dispatch = useDispatch()
    const [text, setText] = useState('')
    const [rate, setRate] = useState(1)


    const handleSubmit = async (e) => {
        e.preventDefault()
        await dispatch(addComment({text, rate, book:id}))
        dispatch(getComments(id))
        setText('')
        setRate(1)
        onRequestClose()
    }

    return <>
        <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
            <h2>Add Comment</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Comment:</label>
                    <input
                        value={text}
                        onChange={e => setText(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Rating:</label>
                    <select value={rate} onChange={e => setRate(e.target.value)}>
                        {[1,2,3,4,5].map(num => (
                            <option key={num} value={num}>{num}</option>
                        ))}
                    </select>
                </div>
                <button type="submit">Submit</button>
            </form>
        </Modal>
    </>
}