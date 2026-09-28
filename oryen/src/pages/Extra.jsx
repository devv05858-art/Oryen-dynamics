import {Link} from 'react-router-dom';import {useData} from '../store';import {src} from '../img';
const Hero=({t,h,p})=><section className="phero"><div className="wrap"><small className="tag"><Link to="/">HOME</Link> / {t.toUpperCase()}</small><h1>{h}</h1><p>{p}</p></div></section>;
export function Achievements(){const {data:d}=useData();return <main><Hero t="Achievements" h={<>Our <em>Achievements</em></>} p="Milestones and certifications we're proud of."/>
 <section className="wrap"><div className="stats">{d.stats.map(s=><div key={s.id}><b>{s.n}</b><span>{s.l}</span></div>)}</div></section>
 <section className="wrap"><div className="certs plain">{d.certs.map(c=><span key={c.id}>{c.t}</span>)}</div></section></main>}
export function Gallery(){const {data:d}=useData();const all=[...d.homeProducts,...d.storeProducts,...d.digital];return <main><Hero t="Gig Gallery" h={<>Gig <em>Gallery</em></>} p="A look at our products and projects."/>
 <section className="wrap"><div className="pgrid">{all.map((p,i)=><div className="card pcard" key={i}><img src={src(p.img)} alt={p.name}/><h5>{p.name}</h5></div>)}</div></section></main>}
export function Consultants(){const {data:d}=useData();return <main><Hero t="Consultants" h={<>Our <em>Consultants</em></>} p="Experts who help you build with confidence."/>
 <section className="wrap">{d.consultants.length?<div className="team">{d.consultants.map(m=><div className="card tcard" key={m.id}><img src={src(m.photo)} alt={m.name}/><h4>{m.name}</h4><b>{m.role}</b><p>{m.bio}</p></div>)}</div>:<p>Consultants will appear here once they are added from the admin panel.</p>}</section></main>}
