import { useState, useEffect } from 'react'
import Posts from "../components/Post.jsx"
import { getPosts } from '../services/post.js'

export default function Home() {
    const [ posts, setPosts ] = useState([])

const fetchPosts = async () => {
    const allPosts = await getPosts()
    setPosts(allPosts)
}

useEffect(() => {
    fetchPosts()
}, [posts])

    return (
        <>
        <h1>Digigram</h1>
        {posts.map((post) => (
            <Posts key={post._id} post={post} />
        ))}
        </>
    )
}