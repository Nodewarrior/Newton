import "./Home.css"

function Home() {
    return (
        <>
            <div className="home">
                <h1 className="heading">
                    A better way to ship web apps
                </h1>
                <p className="para-1">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
                <div className="email">
                    <input type="text" placeholder="Enter your email" />
                    <button>Start free trial</button>
                </div>
                <p className="para-2">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </p>
            </div>
        </>
    )
}

export default Home