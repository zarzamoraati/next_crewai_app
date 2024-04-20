"use client"

import InputSection from "@/components/InputSection";
import { useState } from "react";

export default function Home() {

  const [companies,setCompanies]=useState<string[]>([])
  const [positions,setPositions]=useState<string[]>([])

   // console.log(companies)
   // console.log(positions)
  return (
   <div className="bg-white min-h-screen text-black">
      <div className="flex">
         <div className="w-1/2 p-4">
           
            <InputSection
            companies={companies}
            positions={positions}
            title="Companies"
            data={companies}
            setData={setCompanies}
            placeholder="Add a Company"
          />
            
           
             <InputSection
          companies={companies}
          positions={positions}
          title="Positions"
          data={positions}
          setData={setPositions}
          placeholder="Add a Position"
          />
         </div>
         <div>
          
         </div>
      </div>
   </div>
  );
}
