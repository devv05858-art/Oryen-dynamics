import {Routes,Route,useLocation} from 'react-router-dom';import {useEffect,Component} from 'react';
import Navbar from './components/Navbar';import Footer from './components/Footer';
import Home from './pages/Home';import About from './pages/About';import Services from './pages/Services';import Store from './pages/Store';
import Contact from './pages/Contact';import {Achievements,Gallery,Consultants} from './pages/Extra';import Info from './pages/Info';import Admin from './pages/Admin';
class Guard extends Component{
 state={e:null};static getDerivedStateFromError(e){return {e}}
 render(){const e=this.state.e;return e?<div className="wrap" style={{minHeight:'50vh'}}><h2>Something went wrong on this page</h2><p style={{wordBreak:'break-word'}}>{String(e&&e.message||e)}</p><a className="btn dark" href="#" onClick={ev=>{ev.preventDefault();this.setState({e:null})}}>Try again</a></div>:this.props.children}
}
export default function App(){
 const {pathname}=useLocation();useEffect(()=>{try{window.scrollTo(0,0)}catch(e){}},[pathname]);const admin=pathname==='/admin';
 return <>{!admin&&<Navbar/>}
  <Guard key={pathname}><Routes><Route path="/" element={<Home/>}/><Route path="/about" element={<About/>}/><Route path="/services" element={<Services/>}/><Route path="/store" element={<Store/>}/>
  <Route path="/gallery" element={<Gallery/>}/><Route path="/achievements" element={<Achievements/>}/><Route path="/consultants" element={<Consultants/>}/><Route path="/contact" element={<Contact/>}/>
  <Route path="/p/:slug" element={<Info/>}/><Route path="/admin" element={<Admin/>}/><Route path="*" element={<Info/>}/></Routes></Guard>
  {!admin&&<Footer/>}</>;
}
