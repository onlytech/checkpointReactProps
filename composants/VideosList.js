const videos = [
    {
        id:"bMknfKXIFA8",
        author:"Test A",
        titre:"React Course - Beginner's Tutorial for React JavaScript Library [2022]",
        description:"Learn React by building eight real-world projects and solving 140+ coding challenges. You can also follow this course interactively on Scrimba: https://scrimba.com/learn/learnreact",
        vues:"603 k",
        date:"26/01/2022"

    },
    {
        id:"4UZrsTqkcW4",
        author:"Test B",
        titre:"Full React Course 2020 - Learn Fundamentals, Hooks, Context API, React Router, Custom Hooks",
        description:"React JS Tutorial - Get up & running with React JS: the most popular JavaScript library in the world!",
        vues:"1.8M",
        date:"15/04/2021"

    },
    {
        id:"hQAHSlTtcmY",
        author:"Test C",
        titre:"Learn React In 30 Minutes",
        description:"Full React Course: https://courses.webdevsimplified.com/",
        vues:"650k",
        date:"07/02/2021"

    },
    {
        id:"b9eMGE7QtTk4",
        author:"Test D",
        titre:"React JS Crash Course 2022 | Build an App and Master React in 1 Hour",
        description:"",
        vues:"84k",
        date:"02/02/2020"

    },
    {
        id:"bMknfKXIFA8",
        author:"Test A",
        titre:"React Course - Beginner's Tutorial for React JavaScript Library [2022]",
        description:"Learn React by building eight real-world projects and solving 140+ coding challenges. You can also follow this course interactively on Scrimba: https://scrimba.com/learn/learnreact",
        vues:"603 k",
        date:"26/01/2022"

    },
    {
        id:"4UZrsTqkcW4",
        author:"Test B",
        titre:"Full React Course 2020 - Learn Fundamentals, Hooks, Context API, React Router, Custom Hooks",
        description:"React JS Tutorial - Get up & running with React JS: the most popular JavaScript library in the world!",
        vues:"1.8M",
        date:"15/04/2021"

    },
    {
        id:"hQAHSlTtcmY",
        author:"Test C",
        titre:"Learn React In 30 Minutes",
        description:"Full React Course: https://courses.webdevsimplified.com/",
        vues:"650k",
        date:"07/02/2021"

    },
    {
        id:"b9eMGE7QtTk4",
        author:"Test D",
        titre:"React JS Crash Course 2022 | Build an App and Master React in 1 Hour",
        description:"",
        vues:"84k",
        date:"02/02/2020"

    }
]

function ListVideos() {
    return (
        <div className="container">
            <div className="row">
                <div className="videos">
                    {videos.map((video) => (
                    <div className="video col-lg-3">
                        <div className="thumbnail">
                            <img src={`https://img.youtube.com/vi/${video.id}/default.jpg`} alt="" />   
                        </div>
                        <div className="details">
                            <div className="author">
                                <img src="https://yt3.ggpht.com/nJb9GrMyi-SqzSkP0E4zAv9gDSlYCg8NQibGVGtcDuqKOci7qLTLbha1WKD06zHIfGSab6CPlQ=s68-c-k-c0x00ffffff-no-rj" alt="" />
                            </div>
                            <div className="title">
                                <h3>{video.titre}</h3>
                                <a href="">{video.author}</a>
                                <span>{video.vues} Views • {video.date} </span>
                            </div>
                        </div>
                    </div>
                    ))}


                </div>
            </div>
        
        </div>
    )
}

export default ListVideos