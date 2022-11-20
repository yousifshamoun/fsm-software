import React from 'react'

const Login = () => {
  return (
    <div className="justify-center items-center flex">
  <form className="px-80 mx-20 mt-4 w-full">
    <div className="mb-4">
      <label className="text-left	block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
        Username
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username"/>
    </div>
    <div className="mb-2">
      <label className="text-left	block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
        Password
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************"/>
    </div>
    <div className="flex items-center justify-between">
      <a className="text-left text-sm text-sky-900 hover:text-sky-700" href="#">
        Forgot Password?
      </a>
    </div>
      <button className="w-full mt-4 bg-sky-900 hover:bg-sky-700 text-white font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
        Sign In
      </button>
  </form>
</div>
  )
}

export default Login    