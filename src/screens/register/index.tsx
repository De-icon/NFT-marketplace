

import  {useRef} from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '@/utils/AuthContext'

import { LockIcon, User } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { HeroImage } from '@/assets/NFTs'


const Register = () => {
  const registerForm = useRef<HTMLFormElement>(null)
  const {registerUser} = useAuth()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (registerForm.current) {
      const name = registerForm.current.name.value
      const email = registerForm.current.email.value
      const password1 = registerForm.current.password1.value
      const password2 = registerForm.current.password2.value

      if(password1 !== password2){
          alert('Passwords did not match!')
          return 
      }
      
      const userInfo = {name, email, password1, password2}

      registerUser(userInfo)
    }
  }

  return (
    <div className=" w-full h-full grid md:grid-cols-2 font-WorkSans gap-5">
        <img src={HeroImage}   />
      <div className=" p-5 max-w-lg">
      <h1 className=' text-2xl md:text-6xl font-bold mb-2 '>Create Account</h1>
      <p className=' text-lg md:text-2xl'>Welcome Back! enter your details to continue.</p>
        <form ref={registerForm} onSubmit={handleSubmit} className=' mt-5 flex flex-col space-y-5 '>

        <div className=" bg-white rounded-2xl flex space-x-2 p-2 overflow-x-hidden text-background">
        <label><User size={30} color='#000'/></label>
              <input 
              className=' w-full outline-none border-none'
                required
                type="text" 
                name="name"
                placeholder="Username"
                />
          </div>

          <div className=" bg-white rounded-2xl flex space-x-2 p-2 overflow-x-hidden text-background">
          <label><User size={30} color='#000'/></label>
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
                name="password1" 
                placeholder=" Password"
                autoComplete="password1"
                />
          </div>

          <div className=" bg-white rounded-2xl flex space-x-2 p-2 overflow-x-hidden text-background">
          <label><LockIcon size={30} color='#000'/></label>
              <input 
              className=' w-full outline-none border-none'
                type="password"
                name="password2" 
                placeholder="Confirm Password"
                autoComplete="password2"
                />
          </div>


          <div>

            <Button 
                type="submit" 
                value="Register"
                className=' w-full text-lg mb-2' >
                  Register
            </Button>

          </div>

        </form>

        <p>Already have an account? <Link to="/login">Login</Link></p>

      </div>
  </div>
  )
}

export default Register