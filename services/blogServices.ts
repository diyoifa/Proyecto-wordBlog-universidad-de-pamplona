import axios from 'axios'
// import { PostType} from '@/types/types'

//obtener todos las categorias
const getData = async()=>{
    const res = await axios.get(`${process.env.NEXTAUTH_URL}/api/category`)
    return res.data
}

//crear un post
const createPost = async(body:any)=>{
    const res = await axios.post(`http://localhost:3000/api/posts`, body)
    return res.data
}

//obtener todos los posts
const getPosts = async(page:any, cat:any)=>{
    const res = await axios.get(`http://localhost:3000/api/posts?page=${page || 1}&cat=${cat || ""}`)
    return res.data
}

const getSinglePost = async(slug:string)=>{
    // console.log(slug)
    const res = await axios.get(`http://localhost:3000/api/posts/${slug}`)
    // console.log("🚀 ~ file: blogServices.tsx:25 ~ getSinglePost ~ res:", res)
    return res.data
}

const getComments = async(slug:string)=>{
    // console.log(slug)
    const res = await axios.get(`http://localhost:3000/api/comments?postSlug=${slug}`)
    console.log("🚀 ~ file: blogServices.tsx:25 ~ getSinglePost ~ res:", res)    
    return res.data
}

const createComment = async(body: any)=>{
    // console.log(body)
    const res = await axios.post(`http://localhost:3000/api/comments`, body)
    return res.data
}

const blogServices = {
    getData,
    createPost,
    getPosts,
    getSinglePost,
    createComment,
    getComments
}

export default blogServices