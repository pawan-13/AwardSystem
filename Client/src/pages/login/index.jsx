import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import { useState } from "react"

const Login = () => {
    const [loginData, setLoginData] = useState({
        email: "",
        password: "",
    })
    const [signupData, setSignupData] = useState({
        email: "",
        password: "",
        username: "",
    })
    const [loginError, setLoginError] = useState({});
    const [signupError, setSignupError] = useState({});

    const handleLoginChange = (e) => {
        const { name, value } = e.target;
        setLoginData((prev) => {
            return ({
                ...prev,
                [name]: value
            })
        })
        if (loginError[name]) {
            setLoginError(prev => ({
                ...prev,
                [name]: ""
            }))
        }
    }

    const handleSignupChange = (e) => {
        const { name, value } = e.target;
        setSignupData((prev) => {
            return ({
                ...prev,
                [name]: value
            })
        })
        if (signupError[name]) {
            setSignupError(prev => ({
                ...prev,
                [name]: ""
            }))
        }
    }

    const validateLogin = () => {
        const { email, password } = loginData;
        const errors = {}

        if (!email || !email.trim()) {
            errors.email = "email is mandatory"
        }
        else if (!email.includes('@')) {
            errors.email = "@ should be included"
        }
        if (!password || !password.trim()) {
            errors.password = "password is mandatory"
        }
        else if (password.length < 8) {
            errors.password = "password should be greater than 8 characters"
        }

        return errors;
    }

    const validateSignup = () => {
        const { email, password, username } = signupData;
        const errors = {}

        if (!email || !email.trim()) {
            errors.email = "email is mandatory"
        }
        else if (!email.includes('@')) {
            errors.email = "@ should be included"
        }
        if (!password || !password.trim()) {
            errors.password = "password is mandatory"
        }
        else if (password.length < 8) {
            errors.password = "password should be greater than 8 characters"
        }
        if (!username || !username.trim()) {
            errors.username = "username is mandatory";
        }
        else if (username.length < 2) {
            errors.username = "username should be greater than 2 characters";
        }

        return errors;
    }

    const handleLogin = (e) => {
        e.preventDefault();
        const errors = validateLogin();

        if (Object.keys(errors).length === 0) {
            console.log('Login successful')
            setLoginData({
                email: "",
                password: "",
            })
            setLoginError({});
        }
        else {
            console.log('Login validation errors:', errors)
            setLoginError(errors);
        }
    }

    const handleSignup = (e) => {
        e.preventDefault();
        const errors = validateSignup();

        if (Object.keys(errors).length === 0) {
            console.log('Signup successful')
            setSignupData({
                email: "",
                password: "",
                username: "",
            })
            setSignupError({});
        }
        else {
            console.log('Signup validation errors:', errors)
            setSignupError(errors);
        }
    }


    return (
        <>
            <img src="https://assets.lummi.ai/assets/QmUWvnUB5wgQJsdWTRH1Ws8KKr3ArexjnUSqwohVhFCCvp?auto=format" className="w-screen h-screen relative" alt="award reconige award" />
            <div className="flex w-full bg-white max-w-sm flex-col gap-6 opacity-90 items-center rounded-md justify-center p-5 h-auto  absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <Tabs defaultValue="login">
                    <TabsList>
                        <TabsTrigger value="login">Login</TabsTrigger>
                        <TabsTrigger value="signup">SignUp</TabsTrigger>
                    </TabsList>
                    <TabsContent value="login">
                        <Card>
                            <CardHeader>
                                <CardTitle>Login</CardTitle>
                                <CardDescription>
                                    Login to your account. After signup, you will be able to log in
                                </CardDescription>
                            </CardHeader>
                            <form onSubmit={handleLogin}>
                                <CardContent className="grid gap-6">
                                    <div className="grid gap-3">
                                        <Label htmlFor="login-email">Email</Label>
                                        <Input
                                            id="login-email"
                                            name="email"
                                            type="email"
                                            value={loginData.email}
                                            placeholder="Enter your email"
                                            onChange={handleLoginChange}
                                        />
                                        {loginError.email && <p className="text-red-500 font-semibold text-sm -mt-2 -mb-2">{loginError.email}</p>}
                                    </div>
                                    <div className="grid gap-3">
                                        <Label htmlFor="login-password">Password</Label>
                                        <Input
                                            id="login-password"
                                            name="password"
                                            type="password"
                                            value={loginData.password}
                                            placeholder="Enter your password"
                                            onChange={handleLoginChange}
                                        />
                                        {loginError.password && <p className="text-red-500 font-semibold text-sm -mt-2 -mb-2">{loginError.password}</p>}
                                    </div>
                                </CardContent>
                                <CardFooter>
                                    <Button type="submit" variant="outline" className="bg-black text-white font-semibold">Login</Button>
                                </CardFooter>
                            </form>
                        </Card>
                    </TabsContent>
                    <TabsContent value="signup">
                        <Card>
                            <CardHeader>
                                <CardTitle>SignUp</CardTitle>
                                <CardDescription>
                                    Create a new account and click signup when you are done.
                                </CardDescription>
                            </CardHeader>
                            <form onSubmit={handleSignup}>
                                <CardContent className="grid gap-6">
                                    <div className="grid gap-3">
                                        <Label htmlFor="signup-username">User Name</Label>
                                        <Input
                                            id="signup-username"
                                            name="username"
                                            value={signupData.username}
                                            placeholder="Enter your username"
                                            onChange={handleSignupChange}
                                        />
                                        {signupError.username && <p className="text-red-500 font-semibold text-sm -mt-2 -mb-2">{signupError.username}</p>}
                                    </div>
                                    <div className="grid gap-3">
                                        <Label htmlFor="signup-email">Email</Label>
                                        <Input
                                            id="signup-email"
                                            name="email"
                                            value={signupData.email}
                                            type="email"
                                            placeholder="Enter your email"
                                            onChange={handleSignupChange}
                                        />
                                        {signupError.email && <p className="text-red-500 font-semibold text-sm -mt-2 -mb-2">{signupError.email}</p>}
                                    </div>
                                    <div className="grid gap-3">
                                        <Label htmlFor="signup-password">Password</Label>
                                        <Input
                                            id="signup-password"
                                            name="password"
                                            value={signupData.password}
                                            type="password"
                                            placeholder="Enter your password"
                                            onChange={handleSignupChange}
                                        />
                                        {signupError.password && <p className="text-red-500 font-semibold text-sm -mt-2 -mb-2">{signupError.password}</p>}
                                    </div>
                                </CardContent>
                                <CardFooter>
                                    <Button type="submit" variant="outline" className="bg-black text-white font-semibold">Signup</Button>
                                </CardFooter>
                            </form>
                        </Card>
                    </TabsContent>
                </Tabs>
            </div>
        </>
    )
}

export default Login;
