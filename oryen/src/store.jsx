import {createContext,useContext,useEffect,useState} from 'react';
const KEY='oryen-site-data-v2';
const sp=(id,name,cat,sub,price,img)=>({id,name,cat,sub,price,img});
export const defaults={
 hero:{a:'Engineering',ah:'Ideas.',b:'Building',bh:'Impact.',text:'Oryen Dynamics develops advanced biomedical technologies and intelligent systems that improve lives and power a better tomorrow.'},
 trusted:[{id:1,t:'NITI Aayog'},{id:2,t:'DFOC'},{id:3,t:'DRDO'},{id:4,t:'MeitY'}],
 stats:[{id:1,n:'80+',l:'Products Developed'},{id:2,n:'120+',l:'Enterprise Clients'},{id:3,n:'25+',l:'Countries Served'},{id:4,n:'15+',l:'Patents Filed'},{id:5,n:'$12M+',l:'Funding Raised'}],
 why:[{id:1,t:'Innovation',d:'We ideate future-ready solutions.'},{id:2,t:'Quality',d:'Built with precision. Tested for excellence.'},{id:3,t:'Impact',d:'Creating value for people & communities.'},{id:4,t:'Collaboration',d:'We grow and win together.'},{id:5,t:'Sustainability',d:'Engineering a cleaner, smarter tomorrow.'},{id:6,t:'Excellence',d:'We never stop improving.'}],
 homeProducts:[
  {id:1,name:'NeuroTrac™ EEG Monitor',price:'$1,249.00',img:'p1'},{id:2,name:'BioSense™ Vital Sign Monitor',price:'$899.00',img:'p2'},{id:3,name:'RehabFlex™ Smart Glove',price:'$699.00',img:'p3'},
  {id:4,name:'Oryen IoT Health Gateway',price:'$549.00',img:'p4'},{id:5,name:'OmniSense™ ECG Patch',price:'$199.00',img:'p5'},{id:6,name:'Oryen ThermoSense™ Thermometer',price:'$75.00',img:'p6'}],
 investor:[{id:1,n:'$12M+',l:'Total Funding Raised'},{id:2,n:'3',l:'Funding Rounds'},{id:3,n:'28%',l:'YoY Revenue Growth'},{id:4,n:'50+',l:'Strategic Partners'}],
 certs:[{id:1,t:'ISO 13485:2016'},{id:2,t:'ISO 9001:2015'},{id:3,t:'CE Certified'},{id:4,t:'RoHS Compliant'},{id:5,t:'IEC Approved'}],
 testimonials:[{id:1,text:'Oryen Dynamics is a force of innovation. Their commitment to quality and impact is truly inspiring.',name:'Dr. R. Sharma',role:'CTO, Leading Healthcare Institute'}],
 contactHome:{phone:'+1 (469) 555-1298',email:'hello@oryendynamics.com',address:'San Jose, California, USA'},
 contact:{phone:'+91 98765 43210',email:'info@oryendynamics.com',address:'New Delhi, India',pin:'110019',hours:'Mon - Sat: 9:00 AM - 6:00 PM',sunday:'Sunday: Closed'},
 team:[
  {id:1,name:'Gaurang Verma',role:'Founder',bio:'Visionary leader driving innovation and building impact-driven solutions.',photo:'team1'},
  {id:2,name:'Rohan Mehta',role:'Co-Founder & CTO',bio:'Tech enthusiast leading product and digital innovation.',photo:'team2'},
  {id:3,name:'Priya Sharma',role:'Co-Founder & COO',bio:'Operations strategist ensuring excellence in delivery and client success.',photo:'team3'}],
 consultants:[],
 storeProducts:[
  sp(1,'Oryen BioGrow','Wellness','Advanced Bio-nutrient Formula','₹1,299','s1'),sp(2,'Oryen Immunity Booster','Healthcare','Herbal Immunity Support','₹899','s2'),
  sp(3,'Oryen Neuro Headband','Wearables','Brain Wellness & Relaxation','₹4,999','s3'),sp(4,'Oryen Comfort Wheelchair','Mobility Aids','Lightweight & Foldable','₹12,999','s4'),
  sp(5,'Oryen Pain Relief Gel','Personal Care','Herbal Pain Relief','₹599','s5')],
 digital:[
  sp(1,'Website Development','Web Development','Responsive & Modern Websites','Starting at ₹9,999','d1'),sp(2,'App Development','App Development','Android & iOS Applications','Starting at ₹24,999','d2'),
  sp(3,'UI/UX Design','UI/UX Design','Beautiful & User-Centric Design','Starting at ₹7,999','d3'),sp(4,'E-Commerce Solutions','Digital Solutions','Powerful Online Stores','Starting at ₹14,999','d4'),
  sp(5,'Custom Software','Digital Solutions','Tailored for Your Business','Starting at ₹29,999','d5')]
};
const Ctx=createContext();
export const useData=()=>useContext(Ctx);
export function DataProvider({children}){
 const [data,setData]=useState(()=>{try{return {...defaults,...JSON.parse(localStorage.getItem(KEY))}}catch{return defaults}});
 useEffect(()=>{try{localStorage.setItem(KEY,JSON.stringify(data))}catch{alert('Storage full: use smaller photos.')}},[data]);
 return <Ctx.Provider value={{data,set:(k,v)=>setData(d=>({...d,[k]:v})),reset:()=>setData(defaults)}}>{children}</Ctx.Provider>;
}
