import { useNavigate } from "react-router-dom"

export const Component = () => {

    const navigate = useNavigate()

    return (
        <button onClick={() => navigate('/hello')}>click</button>
    )
}