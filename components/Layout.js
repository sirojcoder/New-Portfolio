//fonst
import {Sora, } from '@next/font/google'
import NextTopLoader from 'nextjs-toploader';
//fons settings
const sora = Sora({
  subsets:['latin'],
  variable: '--font-sora',
  weight: ['100','200','300','400','500','600','700','800']
})


import Nav from '../components/Nav'
import Header from '../components/Header'
import TopLeftImg from '../components/TopLeftImg'

const Layout = ({children}) => {
  return (
    <div className={`page bg-site text-white bg-cover bg-no-repeat ${sora.variable} font-sora relative`}>
      <TopLeftImg />
      <Nav />
      <Header />
      <NextTopLoader color='#f13024' />
      {children}
    </div>
  )
    
  
 
};

export default Layout;
