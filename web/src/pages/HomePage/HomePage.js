import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const HomePage = () => {
  const logo = "https://cdn.filestackcontent.com/lZ8wP3RTPKN4Kq9Uih6N"
  return (
    <>
      <MetaTags title="Home" description="Home page" />

      <div className="max-w-md transition-all duration-300 mt-6 mx-auto w-full">
        <div className="bg-white py-8 shadow sm:rounded-lg sm:px-10">
          <div className="flex justify-center text-2xl font-medium max-h-8 max-w-sm mx-auto w-full h-full mb-3">
            <img src={logo} alt="RedwoodJS" className="object-scale-down max-w-full max-h-full w-auto h-10 mx-auto" />
          </div>
          <h1 class="mt-4 text-center text-xl font-extrabold text-gray-900">
              Redwood Responsive Sidebar Demo
          </h1>
          <p class="mt-2 text-center text-sm text-gray-600">
            Check different size of screen in Chrome by clicking F12
          </p>
        </div>
      </div>
    </>
  )
}

export default HomePage
