import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import campus_connect_main from '/authentication/authentication_image.jpg'
import { toast } from 'react-toastify'
import axios from 'axios'
import { AppContext } from '../context/AppContext'

const SignUp = () => {

    const {backendUrl, token, setToken} = useContext(AppContext)

    const navigate = useNavigate()

    const [state, setState] = useState("Sign Up")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")
    const [loading, setLoading] = useState(false)

    const onSubmitHandler = async (event) => {
        event.preventDefault()
        setLoading(true)

        try {
            if (state === "Sign Up") {
                const {data} = await axios.post(backendUrl + "/api/user/register", {name, email, password})
                if (data.success) {
                    localStorage.setItem("token", data.token)
                    setToken(data.token)
                    console.log(data)
                    toast.success("Account Created Successfully")
                } else {
                    toast.error(data.message)
                }
                setLoading(false)
            } else {
                const {data} = await axios.post(backendUrl + "/api/user/login", {email, password})
                if (data.success) {
                    localStorage.setItem("token", data.token)
                    setToken(data.token)
                    toast.success("Logged In Successfully")
                } else {
                    toast.error(data.message)
                }
                setLoading(false)
            }

        } catch (error) {
            console.log(error)
            toast.error(error.message)
            setLoading(false)
        }
    }

    useEffect(() => {
        if (token) {
            navigate("/dashboard")
        }
    }, [token])

    return (
        <form onSubmit={onSubmitHandler} action="" className='h-[80vh] w-full flex flex-row'>
            <div className="flex-1 h-full hidden md:flex">
                <img onClick={() => navigate("/")} src={campus_connect_main} alt="" className='w-full h-full object-cover cursor-pointer' />
            </div>
            <div className="flex-1 h-full">
                <div className="flex flex-col h-full justify-between gap-3 m-auto p-8 min-w-[340px] sm:min-w-96 text-zinc-600 text-sm">
                    <p className='text-2xl font-semibold'>{state === "Sign Up" ? "Create Account" : "Login"}</p>
                    <p>Please {state === "Sign Up" ? "Sign Up" : "Log In"} to Explore More</p>
                    {
                        state === "Sign Up" &&
                        <div className="w-full">
                            <p>Full Name</p>
                            <input className='border border-zinc-300 rounded w-full p-2 mt-1' type="text" value={name} onChange={(e) => setName(e.target.value)} required/>
                        </div>
                    }
                    <div className="w-full">
                        <p>Email</p>
                        <input className='border border-zinc-300 rounded w-full p-2 mt-1' type="email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
                    </div>
                    <div className="w-full">
                        <p>Password</p>
                        <input className='border border-zinc-300 rounded w-full p-2 mt-1' type="password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
                    </div>
                    <button type='submit' className='bg-blue-400 text-white w-full py-2 rounded-md text-base'>{state === "Sign Up" ? `${loading ? "Signing Up..." : "Create Account"}` : `${loading ? "Loging In..." : "Log In"}`}</button>
                    {
                        state === "Sign Up"
                        ? <p>Already have an account? <span onClick={() => setState("Login")} className='text-blue-400 underline cursor-pointer'>Login here</span></p>
                        : <p>Create a new account? <span onClick={() => setState("Sign Up")} className='text-blue-400 underline cursor-pointer'>Click here</span></p>
                    }
                </div>
            </div>
        </form>
    )
}

export default SignUp