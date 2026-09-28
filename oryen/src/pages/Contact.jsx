import {useState,useRef} from 'react';import {Link} from 'react-router-dom';import {useData} from '../store';import {src} from '../img';import Icon from '../components/Icon';
export default function Contact(){
 const {data:{contact:c}}=useData();const [sent,setSent]=useState(false);const [msg,setMsg]=useState('');const r=useRef();
 const send=()=>{const f=[...r.current.querySelectorAll('input,textarea')];const [n,e,,m]=f;if(!n.value||!e.value.includes('@')||!m.value){setSent(false);setMsg('Please fill in your name, a valid email and a message.');return}f.forEach(x=>x.value='');setSent(true);setMsg("Message sent. We'll reply within 24 hours.")};
 const rows=[['phone','Phone',c.phone,c.hours],['mail','Email',c.email,"We'll reply as soon as possible"],['pin','Address',c.address,c.pin],['clock','Business Hours',c.hours,c.sunday]];
 const F=({i,p,...r})=><div className="fld"><Icon n={i} s={16}/><input placeholder={p} {...r}/></div>;
 return <main><section className="phero"><div className="wrap split"><div><small className="tag"><Link to="/">HOME</Link> / CONTACT US</small><h1>Let's Build Something <em>Amazing Together</em></h1><p>Have a question, idea, or project in mind? We'd love to hear from you. Reach out to us and let's create impact together.</p>
   <div className="row"><div className="feat"><span className="ic"><Icon n="headset"/></span><div><h5>Quick Response</h5><small>We reply within 24 hours</small></div></div><div className="feat"><span className="ic"><Icon n="shield"/></span><div><h5>100% Confidential</h5><small>Your information is safe with us</small></div></div></div></div><img src={src('contact')} alt="" className="pimg"/></div></section>
  <section className="wrap cgrid"><div><h2>Get in <em>Touch</em></h2>{rows.map(([i,t,a,b])=><div className="crow" key={t}><span className="ic dk"><Icon n={i}/></span><div><b>{t}</b><br/>{a}<br/><small>{b}</small></div></div>)}</div>
   <div className="form" ref={r}><h2>Send Us a <em>Message</em></h2><div className="grid2"><F i="user" p="Your Name" required/><F i="mail" p="Your Email" type="email" required/></div><F i="file" p="Subject"/>
    <div className="fld"><Icon n="pen" s={16}/><textarea rows="5" required placeholder="Your Message"/></div><button type="button" className="btn dark wide" onClick={send}>Send Message →</button>{msg&&<p className={sent?'ok':'err'}>{msg}</p>}</div></section>
  <section className="wrap"><div className="map"><img src={src('map')} alt="Map: New Delhi"/></div></section></main>;
}
