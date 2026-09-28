import {Link,useLocation} from 'react-router-dom';import {useData} from '../store';import {src} from '../img';import Icon from './Icon';
const Soc=()=><div className="soc">{['in','ig','yt','f','x'].map(s=><a key={s} href="#" onClick={e=>e.preventDefault()}>{s}</a>)}</div>;
const Col=({h,ls})=><div><h4>{h}</h4>{ls.map(([t,to])=><Link key={t} to={to}>{t}</Link>)}</div>;
const Logo=()=><span className="logochip"><img src={src('logo')} alt="Oryen Dynamics"/></span>;
export default function Footer(){
 const {pathname}=useLocation();const {data:{contact:c,contactHome:h}}=useData();
 if(pathname==='/')return <footer className="foot"><div className="wrap fgrid">
  <div><Logo/><p>We engineer intelligent biomedical technologies and smart systems that empower people and organizations worldwide.</p><Soc/></div>
  <Col h="Quick Links" ls={[['Home','/'],['About','/about'],['Products','/store'],['Services','/services'],['Gallery & Achievements','/achievements'],['Contact','/contact']]}/>
  <Col h="Resources" ls={[['Investor Relations','/p/investor-relations'],['Careers','/p/careers'],['Downloads','/p/downloads'],['Support Center','/p/support-center'],['Blog','/p/blog'],['Privacy Policy','/p/privacy-policy']]}/>
  <Col h="Products" ls={[['All Products','/store'],['New Arrivals','/store'],['Best Sellers','/store'],['Solutions','/services'],['Accessories','/store']]}/>
  <div><h4>Contact Us</h4><a href={'mailto:'+h.email}><Icon n="mail" s={15}/> {h.email}</a><a href={'tel:'+h.phone}><Icon n="phone" s={15}/> {h.phone}</a><span><Icon n="pin" s={15}/> {h.address}</span><Link to="/contact" className="btn ghost">Request a Callback</Link></div></div>
  <div className="copy">© 2024 Oryen Dynamics. All Rights Reserved.</div></footer>;
 return <footer className="foot"><div className="wrap fgrid">
  <div><Logo/><p>Innovation meets impact. We build biotech products and digital solutions that empower a better tomorrow.</p><Soc/></div>
  <Col h="Quick Links" ls={[['Home','/'],['Gig Gallery','/gallery'],['Achievements','/achievements'],['Services','/services'],['Consultants','/consultants'],['Store','/store'],['About Us','/about']]}/>
  <Col h="Company" ls={[['About Us','/about'],['Our Mission','/about'],['Careers','/p/careers'],['Blog','/p/blog'],['Privacy Policy','/p/privacy-policy'],['Terms & Conditions','/p/terms-and-conditions']]}/>
  <Col h="Services" ls={[['Biotech Solutions','/services'],['Web Development','/services'],['App Development','/services'],['UI/UX Design','/services'],['Digital Solutions','/services']]}/>
  <div><h4>Contact Us</h4><a href={'tel:'+c.phone}><Icon n="phone" s={15}/> {c.phone}</a><a href={'mailto:'+c.email}><Icon n="mail" s={15}/> {c.email}</a><span><Icon n="pin" s={15}/> {c.address}</span><Link to="/contact" className="btn green">Get In Touch →</Link></div></div>
  <div className="copy">© 2024 Oryen Dynamics. All Rights Reserved.</div></footer>;
}
