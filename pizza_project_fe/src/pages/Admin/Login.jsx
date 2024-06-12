import { useState } from "react";

import { Typography, Input, Button } from "@material-tailwind/react";
import { EyeSlashIcon, EyeIcon } from "@heroicons/react/24/solid";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { update } from "../../redux/slices/alertSlice";
import Alert from "../../components/Alert";
import { useNavigate } from "react-router-dom";

export function Basic() {
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => setPasswordShown((cur) => !cur);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const isHiddenAlert = useSelector((state) => state.alert.hidden)
    const navigate = useNavigate();
    const handleLogin = async (e) => {
        e.preventDefault();
        const authenticationRequest = {
            email: username,
            password: password
        }
        try{
            const response = await axios.post('http://localhost:8080/api/v1/auth/authenticate', authenticationRequest)
            if(response.data){
                localStorage.setItem('token', response.data.result.token)
                localStorage.setItem('user', JSON.stringify(response.data.result.user))
                localStorage.setItem('token', response.data.result.token)
                localStorage.setItem('user', JSON.stringify(response.data.result.user))
                if(response.data.result.user.roles.some(role => role.name === 'MANAGER')) {
                    
                    navigate('/admin/dashboard')
                }            
                else{
                    navigate('/staff/order')
                }
            }
        }catch(error){
            console.log(error);
            dispatch(update({hidden: false, text: "Sai tài khoản hoặc mật khẩu"}))
        }
    }
  return (
    <div >
        <div className={`${ isHiddenAlert
          ? ""
          : "pointer-events-none brightness-50"
      } bg-white `}>
    <section className="flex justify-center text-center h-screen items-center p-8 bg-gradient-to-l from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
      <div className="border w-[500px] px-5 py-10 rounded-lg bg-white shadow-2xl">
        <Typography variant="h3" color="blue-gray" className="mb-2">
          Sign In
        </Typography>
        <Typography className="mb-16 text-gray-600 font-normal text-[18px]">
          Enter your username and password to sign in
        </Typography>
        <form onSubmit={handleLogin} className="mx-auto max-w-[24rem] text-left">
          <div className="mb-6">
            <label htmlFor="Username">
              <Typography
                variant="small"
                className="mb-2 block font-medium text-gray-900"
              >
                Your Username
              </Typography>
            </label>
            <Input
              id="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              color="gray"
              size="lg"
              type="Username"
              name="Username"
              placeholder="Username"
              className="w-full placeholder:opacity-100 focus:border-t-primary border-t-blue-gray-200"
              labelProps={{
                className: "hidden",
              }}
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password">
              <Typography
                variant="small"
                className="mb-2 block font-medium text-gray-900"
              >
                Password
              </Typography>
            </label>
            <Input
              size="lg"
              placeholder="********"
              value={password}
            onChange={(e) => setPassword(e.target.value)}
              labelProps={{
                className: "hidden",
              }}
              className="w-full placeholder:opacity-100 focus:border-t-primary border-t-blue-gray-200"
              type={passwordShown ? "text" : "password"}
              icon={
                <i onClick={togglePasswordVisiblity}>
                  {passwordShown ? (
                    <EyeIcon className="h-5 w-5" />
                  ) : (
                    <EyeSlashIcon className="h-5 w-5" />
                  )}
                </i>
              }
            />
          </div>
          <Button type="submit" color="gray" size="lg" className="mt-6" fullWidth>
            sign in
          </Button>
          <div className="!mt-4 flex justify-end">
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              variant="small"
              className="font-medium"
            >
              Forgot password
            </Typography>
          </div>
        </form>
      </div>
    </section>       
    </div>
    <div className={`fixed top-[40%] left-[35%] z-50 `}>
        {
          isHiddenAlert===false ? <Alert/> : ''
        }
    </div>
    </div>
  );
}

export default Basic;