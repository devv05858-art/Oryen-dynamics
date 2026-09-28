import {useParams,Link} from 'react-router-dom';
export default function Info(){
 const {slug}=useParams();const t=(slug||'Page not found').replace(/-/g,' ').replace(/\b\w/g,c=>c.toUpperCase());
 return <main className="phero"><div className="wrap"><h1>{t}</h1><p>{slug?'This page is coming soon. Contact us for more information.':'The page you are looking for does not exist.'}</p><Link to="/contact" className="btn dark">Contact Us</Link></div></main>;
}
