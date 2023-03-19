import react from 'react'
import { Link,useNavigate } from 'react-router-dom'

function Home()
{
    return(
        <div>
            <Link to='/login'>hello</Link>
        </div>
    )
}

export default Home;