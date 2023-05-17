import { useState } from 'react';
import { updateComment, deleteComment } from '../services/post.js'

export default function Comment(props) {
    const {comment, user, fetchComments, setToggle } = props
    const [commentUpdate, setUpdateComment] = useState("")

    const handleUpdateChange = (e) => {
        setUpdateComment({
            content: e.target.value,
        })
    }

    const handleUpdate = async (e) => {
        e.preventDefault();
        await commentUpdate(comment._id, pledgeUpdate)
        setToggle(prev => !prev)
    }

    const handleDelete = async (e) => {
        e.preventDefault();
        await deleteComment(comment._id)
        setToggle(prev => !prev)
    }

    return (
        <div>{comment?.email}: ${comment?.content}
        { user?.email === comment?.email && 
          (<>
            <form onSubmit={handleUpdate}>
                <input type="text" placeholder="Type here" onChange={handleUpdateChange} />
                <input type="submit" value="Update Comment!" />
            </form>
            <form onSubmit={handleDelete}>
                <input type="submit" value="Delete Comment!" />
            </form>
            </>)
        }
        </div>
    )

}