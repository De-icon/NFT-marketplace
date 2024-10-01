import { useEffect, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '@/utils/AuthContext'
import {HeroImage,} from '@/assets/NFTs/index'
import { Button } from '@/components/ui/button'
import { LockIcon, User } from 'lucide-react'


const Login = () => {
  const {user, loginUser} = useAuth()
  const navigate = useNavigate()

  const loginForm = useRef<HTMLFormElement>(null)

  useEffect(() => {
    if (user){
      navigate('/')
    }
  }, [user, navigate]) // Add dependencies to useEffect

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const email = loginForm.current?.email.value
    const password = loginForm.current?.password.value
    
    const userInfo = {email, password}

    await loginUser(userInfo)
    // The navigation will be handled in the AuthContext after successful login
  }

  return (
    <div className=" w-full h-full grid md:grid-cols-2 font-WorkSans gap-5">
      <img src={HeroImage}   />
        <div className=" p-5 max-w-lg">
          <h1 className=' text-2xl md:text-6xl font-bold mb-2 '>Login Account</h1>
          <p className=' text-lg md:text-2xl'>Welcome Back! enter your details to continue.</p>
          <form onSubmit={handleSubmit} ref={loginForm} className=' mt-5 flex flex-col space-y-5 '> 

            <div className=" bg-white rounded-2xl flex space-x-2 p-2 overflow-x-hidden text-background">
                <label><User size={30} color='#000' /></label>
                <input 
                  className=' w-full outline-none border-none'
                  required
                  type="email" 
                  name="email"
                  placeholder="Enter Address"
                  />
            </div>

            <div className=" bg-white rounded-2xl flex space-x-2 p-2 overflow-x-hidden text-background">
                <label><LockIcon size={30} color='#000'/></label>
                <input 
                  className=' w-full outline-none border-none'
                  type="password" 
                  name="password"
                  placeholder="Password"
                  autoComplete="password"
                  />
            </div>


            <div>
                <Button 
                type="submit" 
                value="Login"
                className=' w-full text-lg mb-2' >
                  LogIn
                </Button>

            </div>

          </form>

          <p>Don't have an account? <Link to="/register">Register</Link></p>

        </div>
    </div>
  )
}
export default Login