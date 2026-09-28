import {useState} from 'react';import {Link} from 'react-router-dom';import {useData} from '../store';import {src} from '../img';import Icon from '../components/Icon';
const wi=['bulb','shield','globe','users','leaf','award'],ci=['award','award','shield','leaf','check'];
export default function Home(){
 const {data:d}=useData();const h=d.hero;const [t,setT]=useState(0);const [em,setEm]=useState('');const [done,setDone]=useState(false);const n=d.testimonials.length;const q=d.testimonials[t%Math.max(n,1)]||{};
 return <main>
  <section className="hero wrap"><div><small className="tag">INNOVATE. EMPOWER. IMPACT.</small>
   <h1>{h.a} <em>{h.ah}</em><br/>{h.b} <em>{h.bh}</em></h1><p>{h.text}</p>
   <div className="row"><Link to="/store" className="btn dark">Explore Our Products</Link><Link to="/contact" className="btn line">Partner With Us</Link></div>
   <div className="trust"><small>Trusted by Innovators. Backed by Results.</small><div>{d.trusted.map(x=><b key={x.id}>{x.t}</b>)}</div></div></div>
   <img src={src('hero')} alt="Biomedical human figure" className="heroimg"/></section>
  <section className="wrap"><div className="stats">{d.stats.map(s=><div key={s.id}><b>{s.n}</b><span>{s.l}</span></div>)}</div></section>
  <section className="wrap split"><div><small className="tag">WHY CHOOSE US</small><h2>Smart Solutions for a Smarter <em>World</em></h2><p>From hardware to AI-powered software, we build secure, scalable and sustainable solutions that solve real-world challenges.</p><Link to="/about" className="btn dark">Know More About Us →</Link></div>
   <div className="cards3">{d.why.map((w,i)=><div className="card" key={w.id}><span className="ic"><Icon n={wi[i%6]}/></span><h4>{w.t}</h4><p>{w.d}</p></div>)}</div></section>
  <section className="wrap"><div className="shead"><div><small className="tag">OUR PRODUCTS</small><h2>Technology That Empowers</h2></div><Link to="/store">View All Products →</Link></div>
   <div className="scroller">{d.homeProducts.map(p=><Link to="/store" className="pcard" key={p.id}><img src={src(p.img)} alt={p.name}/><h5>{p.name}</h5><div className="pr"><span><i className="star">★★★★★</i><b>{p.price}</b></span><span className="cartb"><Icon n="cart" s={14}/></span></div></Link>)}</div></section>
  <section className="wrap"><div className="invest"><h2>Let's Build the Future, Together.</h2><p>We partner with forward-thinking investors, institutions and distributors to accelerate innovation and global impact.</p>
   <div className="istats">{d.investor.map(s=><div key={s.id}><b>{s.n}</b><span>{s.l}</span></div>)}</div>
   <div className="row"><Link to="/p/investor-relations" className="btn green">View Investor Deck →</Link><Link to="/contact" className="btn ghost">Partner With Us →</Link></div></div></section>
  <section className="wrap split2"><div><small className="tag">CERTIFICATIONS</small><h2>Quality You Can Trust</h2><div className="certs">{d.certs.map((c,i)=><div key={c.id}><span className="ic"><Icon n={ci[i%5]}/></span><small>{c.t}</small></div>)}</div></div>
   <div><small className="tag">WHAT THEY SAY</small><h2>Trusted by Leaders</h2><div className="card quote"><p>{q.text}</p><b>– {q.name}</b><span>{q.role}</span>
    <div className="qnav"><span>{d.testimonials.map((_,i)=><i key={i} className={i===t%n?'on':''}/>)}</span><span><button aria-label="Previous" onClick={()=>setT((t-1+n)%n)}><Icon n="left" s={16}/></button><button aria-label="Next" onClick={()=>setT((t+1)%n)}><Icon n="right" s={16}/></button></span></div></div></div></section>
  <section className="wrap"><div className="news"><div><h3>Stay Ahead with Oryen Dynamics</h3><p>Get the latest updates on our innovations, products and achievements.</p></div><input type="email" placeholder="Enter your email" value={em} onChange={e=>setEm(e.target.value)}/><button type="button" className="btn green" onClick={()=>{if(em.includes('@')){setDone(true);setEm('')}}}>{done?'Subscribed ✓':'Subscribe ✈'}</button></div></section>
 </main>;
}
