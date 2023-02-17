import React from 'react';
import {Routes,Route} from 'react-router-dom'
import LandingPage from './screens/LandingPage/LandingPage'
import {SignUp} from './screens/SignUp/SignUp'
import {Login} from './screens/Login/Login'
import AboutUs from './screens/AboutUs/AboutUs'
import ContactUs from './screens/ContactUs/ContactUs';
import ComparePackage from './screens/ComparePackage/ComparePackage';
import UserDashboard from './screens/User_Dashboard/UserDashboard'
import UserSummary from './screens/User_Dashboard/Summary/UserSummary'
import UserEditProfile from './screens/User_Dashboard/EditProfile/UserEditProfile'
import UserMessage from './screens/User_Dashboard/Message/UserMessage'
import CSPDashboard from './screens/CSP_Dashboard/CSP_Dashboard'
import CSPSummary from './screens/CSP_Dashboard/Summary/CSP_Summary'
import CSPEditProfile from './screens/CSP_Dashboard/EditProfile/CSP_EditProfile'
import CSPMessage from './screens/CSP_Dashboard/Message/CSP_Message'
import PackageDetail from './screens/PackageDetail/PackageDetail';
import Layout from './Components/Layout';
import RequiredLogin from './Components/RequiredLogin';
import PersistentLogin from './Components/PersistentLogin';
import ForgetPassword from './screens/NewPassword/ForgetPassword';
import ResetPassword from './screens/NewPassword/ResetPassword';
import './App.css';


function App() {


  const Roles = {
    provide_service : 'service_provider',
    use_service : 'service_user'
  }



  return (
    <>

<Routes>


               {/* Public Screens */}

<Route path='/' element={<Layout/>}>

  <Route exact path='/' element={<LandingPage />}/>
  <Route path='/signup' element={<SignUp />}/>
  <Route path='/login' element={<Login />}/>
  <Route path='/aboutus' element={<AboutUs />}/>
  <Route path='contactus' element={<ContactUs />} />
  <Route path='/compare-package' element={<ComparePackage />}  />
  <Route path='/package-details' element={<PackageDetail />}  />
  <Route path='/forget-password' element={<ForgetPassword/>}/>
  <Route path='/reset-password' element={<ResetPassword/>}/>

   {/* {Persistent Login Route} */}
   <Route element={<PersistentLogin />}>

   
                   {/* {Private Screens For user} */}

 <Route element={<RequiredLogin allowRole={Roles.use_service} />}>

  <Route path='/user-dashboard' element={<UserDashboard />}/>
  <Route path='/user-summary' element={<UserSummary />}  />
  <Route path='/user-editProfile' element={<UserEditProfile />}  />
  <Route path='/user-message' element={<UserMessage />}  />

  </Route>


                     {/* {Private Screens For CSP} */}

  <Route element={<RequiredLogin allowRole={Roles.provide_service} />}>

  <Route path='/csp-dashboard' element={<CSPDashboard />}/>
  <Route path='/csp-summary' element={<CSPSummary />}  />
  <Route path='/csp-editProfile' element={<CSPEditProfile />}  />
  <Route path='/csp-message' element={<CSPMessage />}  />

  </Route>

  

  </Route>
     {/* {Persistent Login Route} */}

     </Route>

  
</Routes>


    </>
    
  );
}

export default App;
