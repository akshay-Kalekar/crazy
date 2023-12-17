import React from 'react'

const Form = () => {
  const questionair = [{title : "DOMAIN", lable : "Choose maximum 3"},{title:"CATEGORY", lable:"Choose the Profile Categories which describes you the best :"},{title:"JOB ROLE",lable:""},{title:"SKILLS" , lable:""}]
    const FormInput = ({title,lable})=>{
      return <label className="form-control w-fit">
      <div className="label">
        <span className="label-text text-green-800 font-bold">{title} *</span>
        <span className="pl-8 label-text-alt">{lable}</span>
      </div>
      <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs"  required/>
    </label>
        
    }
  return (
    <>
    <div>Please help us understand you better  :</div>
    <div className='flex gap-8 flex-col'>
    {
      questionair.map(({ title, lable }) => (
        <FormInput key={title} title={title} lable={lable} />
        ))
      }
      </div>
      <div className='flex justify-between my-10'>
      <button class="bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 px-4 border border-blue-700 rounded w-48">
      Previous
    </button>
    <button class="bg-green-400 hover:bg-green-500 text-white font-bold py-2 px-4 border border-green-700 rounded w-48">
  Next
</button>
      </div>
    </>
  )
}

export default Form