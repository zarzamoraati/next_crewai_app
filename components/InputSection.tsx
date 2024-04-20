import React, { useState } from 'react'
import ListElements from './ListElements';

export interface InputSectionProps{
  title:string,
  placeholder:string,
  data:string[],
  companies:string[],
  positions:string[],
  setData:React.Dispatch<React.SetStateAction<string[]>>;
}

const InputSection = ({title,setData,data,placeholder,companies,positions}:InputSectionProps) => {
  const [inputValue,setValue]=useState("")

  const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
    const {value}=e.target
    if(value){
      setValue(value)
    }
  }
  const handleAddClick=(e:React.MouseEvent<HTMLButtonElement>)=>{
    e.preventDefault()
    if(inputValue.trim()!==""){
      setData(prevData=>[...prevData,inputValue])
      setValue("")
    }
  }

  const removeElement=(idx:number)=>{
    setData(prevData=>(prevData.filter((_,i)=>i!=idx)))
  }
  // console.log(inputValue)
  return (
    <div 
    className='flex flex-col gap-2'>
      <h1 className='text-2xl font-bold'>{title}</h1>
      <div className='flex gap-2 my-2'>
        <button 
        style={{borderRadius:"5px"}}
        onClick={(e)=>handleAddClick(e)}
        className='bg-black p-3 text-white font-bold w-1/5'>
          Add
        </button>
        <input type="text"
        style={{backgroundColor:"grey"}}
        className='p-3 w-2/3 text-white'
        value={inputValue}
        name={title}
        placeholder={placeholder}
        onChange={(e)=>handleChange(e)}
        />
      </div>
      {title=="Companies" ? 
      <>
        <ListElements 
        data={companies}
        removeElement={removeElement}
      />
      </>
      :
      <>
            <ListElements 
        data={positions}
        removeElement={removeElement}
      />
      </>}
   
    </div>
  )
}

export default InputSection