import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from './Card'
import Header from './Header'

function CardList() {

    const [data, setData] = useState(null) // Making useState() to store the data from API
    const [loading, setLoading] = useState(true) // Making it to handle loading
    const [error, isError] = useState(false) // For error handling

    const [url, setUrl] = useState("users")

    useEffect(() => {
        setLoading(true) // Reset on every API call
        isError(false)  // Reset on every API call

        axios.get(`https://jsonplaceholder.typicode.com/${url}`)
            .then(response => {
                setData(response.data) // Saving API data into state, so we can handle it
                setLoading(false) // Making loading false, so it will not render/show
            })
            .catch(() => {
                isError(true) // making error true so error will show on error
                setLoading(false) // Making loading false, so it will not render/show on error
            })

    }, [url])

    return (
        <>
            <Header setUrl={setUrl} />
            {loading && <h2 style={{textAlign: "center"}}>Loading... <div className='loader'></div></h2>}
            {error && <h2 style={{textAlign: "center", color: "red"}}>Something went wrong!</h2>}
            <div className='card-list'>
                {
                    url === "users" && data?.slice(0, 10).map((item, index) => (
                        <Card key={index}>
                            <h4>Name: <span>{item?.name}</span></h4>
                            <h4>Username: <span>{item?.username}</span></h4>
                            <h4>Email: <span>{item?.email}</span></h4>
                            <h4>Phone: <span>{item?.phone}</span></h4>
                            <h4>ID: <span>{item?.id}</span></h4>
                        </Card>
                    ))
                }
                {
                    url === "todos" && data?.slice(0, 200).map((item, index) => (
                        <Card key={index}>
                            <h4>{item?.title ? item.title.charAt(0).toUpperCase() + item.title.slice(1) : "No Title"}</h4>
                            <h4>Completed: <span>{item?.completed ? "Yes" : "No"}</span></h4>
                            <h4>User ID: <span>{item?.userId}</span></h4>
                            <h4>ID: <span>{item?.id}</span></h4>
                        </Card>
                    ))
                }
                {
                    url === "posts" && data?.slice(0, 100).map((item, index) => (
                        <Card key={index}>
                            <h4>{item?.title ? item.title.charAt(0).toUpperCase() + item.title.slice(1) : "No Title"}</h4>
                            <p>{item?.body ? item.body.charAt(0).toUpperCase() + item.body.slice(1) : "No Content"}</p>
                        </Card>
                    ))
                }
                {
                    url === "albums" && data?.slice(0, 100).map((item, index) => (
                        <Card key={index}>
                            <h4>{item?.title ? item.title.charAt(0).toUpperCase() + item.title.slice(1) : "No Title"}</h4>
                            <h4>User ID: <span>{item?.userId}</span></h4>
                            <h4>ID: <span>{item?.id}</span></h4>
                        </Card>
                    ))
                }
                {
                    url === "comments" && data?.slice(0, 500).map((item, index) => (
                        <Card key={index}>
                            <p>{item?.body ? item.body.charAt(0).toUpperCase() + item.body.slice(1) : "No Content"}</p>
                        </Card>
                    ))
                }
            </div>
        </>
    )
}

export default CardList