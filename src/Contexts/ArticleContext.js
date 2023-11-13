import { useContext, createContext, useState, useEffect } from "react";

const ArticleContext = createContext()
export const useArticles = () => useContext(ArticleContext)

export const ArticleProvider = ({children}) => {
    const [articles, setArticles] = useState([])
    const [article, setArticle] = useState({})

    useEffect(() => {
        getArticles()
    }, [])

    const getArticle = async (id) => {
        try {
            const result = await fetch(`https://win23-assignment.azurewebsites.net/api/articles/${id}`)
            if (result.status === 200) {
                setArticle(await result.json())
            }
            else {
                console.log(`${result.statusText}`)
            } 
        }
        catch (error) {
            console.error('Error:', error)
        }
        
    }

    const getArticles = async () => {
        const result = await fetch('https://win23-assignment.azurewebsites.net/api/articles')
        setArticles(await result.json())
    }

   

    return (
        <ArticleContext.Provider value={{article, articles, getArticle, getArticles}}>
            {children}
        </ArticleContext.Provider>
    )
}