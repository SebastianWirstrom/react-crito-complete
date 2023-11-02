import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const NewsDetailsSection = () => {
    const [article, setArticle] = useState({})
    const {id} = useParams()

    useEffect(() => {
        getArticle()
    }, [])

    const getArticle = async () => {
        if (id !== '') {
            const result = await fetch(`https://win23-assignment.azurewebsites.net/api/articles/${id}`)

            if (result.status === 200) {
                setArticle(await result.json())
            }
        }
        
    }

  return (
    <div>{id}</div>
  )
}

export default NewsDetailsSection