import { useForm } from "react-hook-form"
import { useDispatch } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import { addBook } from "../features/books/books.api"

export const AddBook = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {register, reset, handleSubmit, formState:{errors}} = useForm()


    const onSubmit = async (data) => {
        await dispatch(addBook(data))
        navigate('/')
    }

    return <>
        <Link to='/'>Home</Link>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <lable>Title:</lable>
                <input
                    {...register('title', {required:"Title is required"})}
                />
                {errors.title && <p>{errors.title.message}</p>}
            </div>

            <div>
                <lable>Author:</lable>
                <input
                    {...register('author', {required:"Author is required"})}
                />
                {errors.author && <p>{errors.author.message}</p>}
            </div>

            <div>
                <lable>Photo URL:</lable>
                <input
                    {...register('photo', {required:"Photo URL is required"})}
                />
                {errors.photo && <p>{errors.photo.message}</p>}
            </div>
            <button type="submit">Add book</button>
        </form>
    </>
} 