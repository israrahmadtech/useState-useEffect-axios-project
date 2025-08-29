import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from './Card'
import Header from './Header'

function CardList() {

    const [data, setData] = useState(null) // Making useState() to store the data from API
    const [isLoading, setIsLoading] = useState(true) // Making it to handle loading
    const [isError, setIsError] = useState(false) // For error handling

    const [url, setUrl] = useState("users")

    useEffect(() => {
        setIsLoading(true) // Reset on every API call
        setIsError(false)  // Reset on every API call

        axios.get(`ttps://jsonplaceholder.typicode.com/${url}`)
            .then(response => {
                setData(response.data) // Saving API data into state, so we can handle it
                setIsLoading(false) // Making loading false, so it will not render/show
            })
            .catch(() => {
                setIsError(true) // making error true so error will show on error
                setIsLoading(false) // Making loading false, so it will not render/show on error
            })

    }, [url])

    return (
        <>
            <Header setUrl={setUrl} />
            <h2 className="list-name">{
                !isLoading && !isError && url === "users" ? "Users" :
                    url === "todos" ? "Todos" :
                        url === "posts" ? "Posts" :
                            url === "albums" ? "Albums" :
                                "Comments"
            }</h2>

            {isLoading && <h2 style={{ textAlign: "center" }}>Loading... <div className='loader'></div></h2>}
            {isError && <h2 style={{ textAlign: "center", color: "red" }}>Something went wrong!</h2>}
            
            <div className='card-list'>
                {!isLoading && !isError &&
                    (url === "users" && data?.slice(0, 10).map((item, index) => (
                        <Card key={index}>
                            <h4>Name: <span>{item?.name}</span></h4>
                            <h4>Username: <span>{item?.username}</span></h4>
                            <h4>Email: <span>{item?.email}</span></h4>
                            <h4>Phone: <span>{item?.phone}</span></h4>
                            <h4>ID: <span>{item?.id}</span></h4>
                        </Card>
                    )))
                }
                {!isLoading && !isError &&
                    (url === "todos" && data?.slice(0, 200).map((item, index) => (
                        <Card key={index}>
                            <h4>{item?.title ? item.title.charAt(0).toUpperCase() + item.title.slice(1) : "No Title"}</h4>
                            <h4>Completed: <span>{item?.completed ? "Yes" : "No"}</span></h4>
                            <h4>User ID: <span>{item?.userId}</span></h4>
                            <h4>ID: <span>{item?.id}</span></h4>
                        </Card>
                    )))
                }
                {!isLoading && !isError &&
                    (url === "posts" && data?.slice(0, 100).map((item, index) => (
                        <Card key={index}>
                            <h4>{item?.title ? item.title.charAt(0).toUpperCase() + item.title.slice(1) : "No Title"}</h4>
                            <p>{item?.body ? item.body.charAt(0).toUpperCase() + item.body.slice(1) : "No Content"}</p>
                        </Card>
                    )))
                }
                {!isLoading && !isError &&
                    (url === "albums" && data?.slice(0, 100).map((item, index) => (
                        <Card key={index}>
                            <h4>{item?.title ? item.title.charAt(0).toUpperCase() + item.title.slice(1) : "No Title"}</h4>
                            <h4>User ID: <span>{item?.userId}</span></h4>
                            <h4>ID: <span>{item?.id}</span></h4>
                        </Card>
                    )))
                }
                {!isLoading && !isError &&
                    (url === "comments" && data?.slice(0, 500).map((item, index) => (
                        <Card key={index}>
                            <p>{item?.body ? item.body.charAt(0).toUpperCase() + item.body.slice(1) : "No Content"}</p>
                        </Card>
                    )))
                }
            </div>
        </>
    )
}

export default CardList