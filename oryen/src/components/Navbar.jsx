import {NavLink,Link} from 'react-router-dom';import {src} from '../img';
const links=[['/','Home'],['/about','About Us'],['/gallery','Gig Gallery'],['/achievements','Achievements'],['/services','Services'],['/consultants','Consultants'],['/store','Store'],['/contact','Contact Us']];
export default function Navbar(){
 return <header className="nav"><Link to="/"><img src={src('logo')} alt="Oryen Dynamics" className="logo"/></Link>
  <nav>{links.map(([to,t])=><NavLink key={to} to={to} end={to==='/'}>{t}</NavLink>)}</nav>
  <div className="row0"><Link to="/admin" className="adm">Admin</Link><Link to="/contact" className="btn dark">Get In Touch <span className="ar">→</span></Link></div></header>;
}
