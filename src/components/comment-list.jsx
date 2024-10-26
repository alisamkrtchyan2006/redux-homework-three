import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { getComments } from "../features/comments/comments.api"

export const CommentList = () => {
    const dispatch = useDispatch()
    const comments = useSelector(state => state.comments.items)
    const { id } = useParams()

    useEffect(() => {
        dispatch(getComments(id))
    }, [id])

    return (
        <>
            <h2>CommentList</h2>
            {comments.length === 0 ? (
                <p>No comments yet</p>
            ) : (
                comments.map(comment => {
                    const filledStarsCount = Math.max(1, Math.min(comment.rate, 5))
                    const filledStars = new Array(filledStarsCount).fill("https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678064-star-512.png")
                    const unfilledStars = new Array(5 - comment.rate).fill("https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678064-star-512.png")

                    return (
                        <div key={comment.id}>
                            <p>{comment.text}</p>
                            {filledStars.map((star, index) => (
                                <img key={`filled-${index}`} src={star} style={{ width: 20 }} alt="Filled Star" />
                            ))}
                            {unfilledStars.map((star, index) => (
                                <img key={`unfilled-${index}`} src="https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678064-star-512.png" style={{ width: 20, opacity: 0.3 }} alt="Unfilled Star" /> // Example opacity for unfilled stars
                            ))}
                        </div>
                    )
                })
            )}
        </>
    )
}
