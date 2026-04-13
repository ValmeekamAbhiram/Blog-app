import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router";
import {useEffect} from 'react'
import { useAuth } from "../store/authStore";
import { pageBackground } from "../styles/Common";

function RootLayout() {

  //import check checkAuth
  let checkAuth=useAuth(state=>state.checkAuth)

  useEffect(()=>{
    checkAuth()
  },[])


  return (
    <div className={pageBackground}>
      <Header />
        <div className="max-w-5xl mx-auto">
          <Outlet />
        </div>
      <Footer />
    </div>
  );
}

export default RootLayout;