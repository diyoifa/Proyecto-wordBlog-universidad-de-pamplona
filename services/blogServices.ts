import axios from 'axios'
// import { PostType} from '@/types/types'

 const API_URL = process.env.NEXTAUTH_URL

//obtener todos las categorias
const getData = async()=>{
    const res = await axios.get(`${API_URL}/api/category`)
    return res.data
}

//crear un post
const createPost = async(body:any)=>{
    const res = await axios.post(`${API_URL}/api/posts`, body)
    return res.data
}

//obtener todos los posts
const getPosts = async(page:any, cat:any)=>{
    const res = await axios.get(`${API_URL}/api/posts?page=${page || 1}&cat=${cat || ""}`)
    return res.data
}

const getSinglePost = async(slug:string)=>{
    // console.log(slug)
    const res = await axios.get(`${API_URL}/api/posts/${slug}`)
    // console.log("🚀 ~ file: blogServices.tsx:25 ~ getSinglePost ~ res:", res)
    return res.data
}

const getComments = async(slug:string)=>{
    // console.log(slug)
    const res = await axios.get(`${API_URL}/api/comments?postSlug=${slug}`)
    console.log("🚀 ~ file: blogServices.tsx:25 ~ getSinglePost ~ res:", res)    
    return res.data
}

const createComment = async(body: any)=>{
    // console.log(body)
    const res = await axios.post(`${API_URL}/api/comments`, body)
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