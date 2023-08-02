import type {Container} from '../types'
const KEY='hivehush.containers'
export function sampleContainers():Container[]{return[{id:'inspection-night',name:'Dawn Apiary',place:'Sunward Apiary',city:'Faiyum',startDate:'2026-11-06',endDate:'2026-11-07',items:[
{id:'m1',name:'Queen wing check',category:'queen',number:1,done:true,priority:true,notes:'Warm wall near the lamp.'},
{id:'m2',name:'Worker warmth check',category:'worker',number:2,done:false,priority:false,notes:'Check the fig trees.'},
{id:'m3',name:'Brood frame note',category:'brood',number:3,done:false,priority:true,notes:'Photograph the wing edge.'},
{id:'m4',name:'Honey harvest visit',category:'honey',number:4,done:false,priority:false,notes:'Log temperature with sighting.'},
{id:'m5',name:'Wax capping note',category:'wax',number:5,done:true,priority:false,notes:'Use the macro lens.'}]},{id:'inspection-lantern',name:'Lantern Count',place:'Garden Edge',city:'Giza',startDate:'2026-11-13',endDate:'2026-11-14',items:[]}]}
export function loadContainers(){try{const raw=localStorage.getItem(KEY);if(!raw)return sampleContainers();const x:unknown=JSON.parse(raw);if(!Array.isArray(x))throw Error();return x as Container[]}catch{return sampleContainers()}}
export function saveContainers(x:Container[]){localStorage.setItem(KEY,JSON.stringify(x))}

