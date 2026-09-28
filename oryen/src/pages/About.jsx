import {Link} from 'react-router-dom';import {useData} from '../store';import {src} from '../img';import Icon from '../components/Icon';
const vals=[['target','Our Vision','To be a global leader in biotech innovation and digital transformation.'],['rocket','Our Mission','To create sustainable, effective and affordable solutions through science and technology.'],['gem','Our Values','Integrity, Innovation, Quality and Commitment drive everything we do.'],['users','Our Commitment','We are committed to delivering value to our customers, partners and society.']];
export const Crumb=({a,b})=><small className="tag"><Link to="/">HOME</Link> / {b}</small>;
export default function About(){
 const {data:{stats,team}}=useData();
 return <main><section className="phero"><div className="wrap split"><div><Crumb b="ABOUT US"/><h1>About <em>Oryen Dynamics</em></h1><p>We are a team of innovators, scientists, and problem solvers dedicated to developing biotech products and digital solutions that create real impact.</p><p><b className="ink">Innovation is in our DNA. Impact is our promise.</b></p><Link to="/contact" className="btn dark">Get to Know Us →</Link></div><img src={src('about')} alt="" className="pimg"/></div></section>
  <section className="wrap mission"><div><small className="tag">OUR MISSION</small><h2>Building Tomorrow with <em>Science & Technology</em></h2><p>We aim to bridge science and technology to deliver high-quality biotech products and digital solutions that empower lives and accelerate business growth.</p></div>
   {vals.map(([i,t,d])=><div key={t} className="mcol"><span className="ic"><Icon n={i}/></span><h4>{t}</h4><p>{d}</p></div>)}</section>
  <section className="wrap"><div className="stats">{stats.map(s=><div key={s.id}><b>{s.n}</b><span>{s.l}</span></div>)}</div></section>
  <section className="wrap center"><small className="tag">OUR TEAM</small><h2>Meet the People Behind Our Mission</h2><p>A passionate team of experts working every day to build innovative solutions and create a better tomorrow.</p>
   <div className="team">{team.map(m=><div className="card tcard" key={m.id}><img src={src(m.photo)} alt={m.name}/><h4>{m.name}</h4><b>{m.role}</b><p>{m.bio}</p><div className="tsoc">in · tw · ✉</div></div>)}</div></section></main>;
}
