'use client'

import { Metadata } from "next"
import { Posts } from "@/component/Posts"
import { PostSearch } from "@/component/PostsSearch"


export const metadata: Metadata ={
    title: 'Blog | Next App',
}

export default function Blog (){
    

    return (
        <>
            <h1>Blog page</h1>
            <PostSearch/>
            <Posts/>
            
        </>
    )
}