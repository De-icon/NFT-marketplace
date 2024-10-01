import { createContext, useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ID} from 'appwrite';
import { account } from "@/appwriteConfig";

const AuthContext = createContext<{
  user: Record<string, unknown> | null
  loginUser: (userInfo: { email: string; password: string }) => Promise<void>
  logoutUser: () => Promise<void>
  registerUser: (userInfo: { email: string; password1: string; name: string }) => Promise<void>
  loading: boolean
} | undefined>(undefined)

export const AuthProvider = ({children}: {children: React.ReactNode}) => {
        const navigate = useNavigate()
       
        const [loading, setLoading] = useState(true)
        const [user, setUser] = useState<Record<string, unknown> | null>(null)

        useEffect(() => {
            //setLoading(false)
            checkUserStatus()
         }, [])

         const loginUser = async (userInfo: {email: string, password: string}) => {
            setLoading(true)
        
            console.log('userInfo',userInfo)
        
            try{
                const response = await account.createSession(userInfo.email, userInfo.password)
                const accountDetails = await account.get();
                setUser(accountDetails)
                navigate('/') // Add this line to redirect to the home page
            }catch(error){
                console.error(error)
            }
            setLoading(false)
        }

        const logoutUser = async () => {
            await account.deleteSession('current');
            setUser(null)
            navigate('/') // Add this line to redirect to the home page after logout
        }

         const registerUser = async (userInfo: {email: string, password1: string, name: string}) => {
            setLoading(true)

            try{
                
                const response = await account.create(ID.unique(), userInfo.email, userInfo.password1, userInfo.name);
        
                await account.createSession(userInfo.email, userInfo.password1)
                const accountDetails = await account.get();
                setUser(accountDetails)
                navigate('/')
            }catch(error){
                console.error(error)
            }
        
            setLoading(false)
         }

         const checkUserStatus = async () => {
            try{
                const accountDetails = await account.get();
                setUser(accountDetails)
            }catch(error){
                console.log(error)
            }
            setLoading(false)
         }

         const contextData = {
            user,
            loginUser,
            logoutUser,
            registerUser
        }
        

    return(
        <AuthContext.Provider value={contextData}>
            {loading ? <p>Loading...</p> : children}
        </AuthContext.Provider>
    )

}
//Custom Hook
export const useAuth = () => { return useContext(AuthContext) }
export default AuthContext;