import React, { useEffect, useState } from 'react'

const CategoriesBox = () => {

    const [categories, setCategories] = useState([])

    useEffect(() => {  
        getCategories()
    }, [])

    const getCategories = async () => {
        const result = await fetch('https://win23-assignment.azurewebsites.net/api/articles')

        if (result.status === 200) {
            setCategories(await result.json())
        }     
    }

    const categoryIsBusiness = []
    const categoryIsIt = []
    const categoryIsEducation = []

    categories.forEach((item) => {
        if (item.category === 'Företag') {
            categoryIsBusiness.push(item)
        }
        else if (item.category === 'IT') {
            categoryIsIt.push(item)
        }
        else if (item.category === 'Utbildning') 
            categoryIsEducation.push(item)
    })


  return (
    <>
        <div className="categories-list">
            <div className="listed-category">
                <h5>Företag - </h5><p>{categoryIsBusiness.length} artiklar</p>
            </div>
            <div className="listed-category">
                <h5>IT - </h5><p>{categoryIsIt.length} artiklar</p>
            </div>
            <div className="listed-category">
                <h5>Utbildning - </h5><p>{categoryIsEducation.length} artiklar</p>
            </div>
        </div>
    </>
  )
}

export default CategoriesBox