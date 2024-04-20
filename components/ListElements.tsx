import { Input } from 'postcss'
import React from 'react'

export interface ListSectionProps{
    data:string[],
    removeElement:(idx:number)=>void
  }

const ListElements = ({data,removeElement}:ListSectionProps) => {
  return (
    <div>
           <ul style={{listStyle:"none"}}>
               {data.map((data,idx)=>(
                 <div className="flex gap-3 my-2"
                    style={{alignItems:"center"}}
                 >
                   <li 
                   className='border-b flex items-center justify-between'
                   key={idx}>{data}</li>
                   <button 
                   onClick={()=>removeElement(idx)}
                   className="bg-rose-800 text-white font-bold w-1/6 p-2 rounded" >Remove</button>
                 </div>
               ))}
      </ul>
    </div>
  )
}

export default ListElements