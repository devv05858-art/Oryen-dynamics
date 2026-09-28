import {useData} from '../store';
export default function Achievements(){
 const {data:{stats,products}}=useData();
 return <main><section className="phero"><div className="wrap"><small className="tag">HOME / GALLERY & ACHIEVEMENTS</small><h1>Gallery & <em>Achievements</em></h1><p>Milestones, certifications and the products we're proud of.</p></div></section>
  <section className="wrap"><div className="stats">{stats.map(s=><div key={s.l}><b>{s.n}</b><span>{s.l}</span></div>)}</div></section>
  <section className="wrap"><h2>Gallery</h2><div className="scroller wrapit">{products.map(p=><div className="pcard" key={p.id}><img src={p.img} alt={p.name}/><h5>{p.name}</h5></div>)}</div></section></main>;
}
