import React from 'react'
import { useState } from 'react'
import { useRef } from 'react'

const Contact = () => {
  const formRef = useRef(null)
  const [form,setForm] = useState({
    name: '',
    email: '',
    message: '',
  })
  const[isLoading,setIsLoading] = useState(false)

  const handleChange = () =>{

  }

  const onFocus = () =>{

  }

  const onBlur = () =>{

  }

  const handleSubmit = () =>{

  }

  return (
    <section className='relative flex lg:flex-row
    flex-col max-container'>
      <div className='flex-1 min-w-[50%] flex flex-col'>
        <h1 className='head-text'>
          Get in Touch
        </h1>

        <form
        onSubmit={handleSubmit}
        className="w-full flex flex-col gap-7
        mt-14">
          <label htmlFor="" className='text-black-500 font-semibold'>
          Name
          <input
          type='text'
          name='name'
          className='input'
          placeholder='Jhon'
          required
          value={form.name}
          onChange={handleChange}
          onFocus={onFocus}
          onBlur={onBlur}
          />
          </label>

          <label htmlFor="" className='text-black-500 font-semibold'>
          Email
          <input
          type='text'
          name='email'
          className='input'
          placeholder='jhon@gmail.com'
          required
          value={form.email}
          onChange={handleChange}
          onFocus={onFocus}
          onBlur={onBlur}
          />
          </label>

          <label htmlFor="" className='text-black-500 font-semibold'>
          Your Message
          <textarea
          name='email'
          className='textarea'
          placeholder='Let me know how I can help you'
          required
          value={form.message}
          rows={4}
          onChange={handleChange}
          onFocus={onFocus}
          onBlur={onBlur}
          />
          </label>

          <button type='submit'
          className='btn'
          disabled={isLoading}
          onFocus={onFocus}
          onBlur={onBlur}
          >
            {isLoading ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact
