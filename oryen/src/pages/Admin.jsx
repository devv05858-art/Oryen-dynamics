import {useState} from 'react';import {Link} from 'react-router-dom';import {useData} from '../store';import {src} from '../img';
const PASS='g-_ap_gau_69';
let mem=false;const ss={get:()=>{try{return sessionStorage.getItem('adm')==='1'}catch{return mem}},set:v=>{mem=v;try{v?sessionStorage.setItem('adm','1'):sessionStorage.removeItem('adm')}catch{}}};
const read=(f,cb)=>{const r=new FileReader();r.onload=()=>cb(r.result);r.readAsDataURL(f)};
const L={
 team:['Team / Hiring',[['name','Name'],['role','Role'],['bio','Bio']],'photo',{name:'',role:'',bio:'',photo:'team2'}],
 consultants:['Consultants',[['name','Name'],['role','Role'],['bio','Bio']],'photo',{name:'',role:'',bio:'',photo:'team2'}],
 homeProducts:['Home Products',[['name','Name'],['price','Price']],'img',{name:'New product',price:'$0.00',img:'p1'}],
 storeProducts:['Store Products',[['name','Name'],['cat','Category'],['sub','Subtitle'],['price','Price']],'img',{name:'New product',cat:'Wellness',sub:'',price:'₹0',img:'s1'}],
 digital:['Digital Services',[['name','Name'],['cat','Category'],['sub','Subtitle'],['price','Price']],'img',{name:'New service',cat:'Web Development',sub:'',price:'Starting at ₹0',img:'d1'}],
 stats:['Stats',[['n','Number'],['l','Label']],null,{n:'0',l:'New stat'}],investor:['Investor Stats',[['n','Number'],['l','Label']],null,{n:'0',l:'New stat'}],
 why:['Why Choose Us',[['t','Title'],['d','Text']],null,{t:'',d:''}],certs:['Certifications',[['t','Name']],null,{t:''}],trusted:['Trusted By',[['t','Name']],null,{t:''}],
 testimonials:['Testimonials',[['text','Quote'],['name','Name'],['role','Role']],null,{text:'',name:'',role:''}]};
const O={hero:['Home Hero',[['a','Line 1'],['ah','Line 1 (green)'],['b','Line 2'],['bh','Line 2 (green)'],['text','Description']]],
 contact:['Contact & Inner Footer',[['phone','Phone'],['email','Email'],['address','Address'],['pin','PIN code'],['hours','Business hours'],['sunday','Sunday']]],
 contactHome:['Home Footer Contact',[['phone','Phone'],['email','Email'],['address','Address']]]};
export default function Admin(){
 const [ok,setOk]=useState(ss.get());const [pw,setPw]=useState('');const [bad,setBad]=useState(false);
 const {data,set,reset}=useData();const [tab,setTab]=useState('team');
 const go=()=>{if(pw===PASS){ss.set(true);setOk(true)}else setBad(true)};
 if(!ok)return <div className="login"><div className="card" onKeyDown={e=>e.key==='Enter'&&go()}>
  <h2>Admin Login</h2><input type="password" placeholder="Password" value={pw} onChange={e=>setPw(e.target.value)} autoFocus/>{bad&&<p className="err">Wrong password.</p>}<button type="button" className="btn dark" onClick={go}>Log in</button><Link to="/">← Back to site</Link></div></div>;
 const l=L[tab],o=O[tab],items=l&&data[tab],up=(i,k,v)=>set(tab,items.map((x,j)=>j===i?{...x,[k]:v}:x));
 return <div className="admin"><header><h2>Oryen Admin</h2><div className="tabs">{[...Object.keys(L),...Object.keys(O)].map(t=><button key={t} className={tab===t?'on':''} onClick={()=>setTab(t)}>{(L[t]||O[t])[0]}</button>)}</div>
  <div><Link to="/" className="btn line">View site</Link> <button className="btn line" onClick={()=>{ss.set(false);setOk(false)}}>Log out</button></div></header>
  <div className="apanel"><h3>{(l||o)[0]}</h3>
  {o&&<div className="afields">{o[1].map(([k,n])=><label key={k}>{n}<input value={data[tab][k]||''} onChange={e=>set(tab,{...data[tab],[k]:e.target.value})}/></label>)}</div>}
  {l&&<>{items.map((it,i)=><div className="arow" key={it.id}>{l[2]&&<div><img src={src(it[l[2]])} alt="" className="thumb"/><input type="file" accept="image/*" onChange={e=>e.target.files[0]&&read(e.target.files[0],v=>up(i,l[2],v))}/></div>}
   <div className="afields">{l[1].map(([k,n])=><label key={k}>{n}<input value={it[k]||''} onChange={e=>up(i,k,e.target.value)}/></label>)}</div>
   <button className="btn line" onClick={()=>confirm('Remove?')&&set(tab,items.filter((_,j)=>j!==i))}>Remove</button></div>)}
   <button className="btn green" onClick={()=>set(tab,[...items,{...l[3],id:Date.now()}])}>+ Add new</button></>}
  <hr/><button className="btn line" onClick={()=>confirm('Reset everything to defaults?')&&reset()}>Reset all to defaults</button></div></div>;
}
