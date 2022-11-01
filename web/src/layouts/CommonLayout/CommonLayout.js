import { Link, routes } from "@redwoodjs/router"
import { useEffect, useState } from "react"

const CommonLayout = ({ children }) => {
  // dropdown only appear in portrait screen
  const [dropdown, setDropdown] = useState(false)

  // check is desktop or laptop screen
  const [isDesktop, setIsDesktop] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 767) {
        setIsDesktop(false);
        // keep dropdown not being buggy when resizing browser
        setDropdown(false);
      }
      else if (window.innerWidth > 768) {
        setIsDesktop(true);
      }
    };

    window.addEventListener('resize', handleResize);

    // call handler so state gets updated with inital window size
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [])

  const menuItems = [
    { id: "1", title: "Dashboard", style: "bi bi-clipboard-data mx-2", to: "" },
    { id: "2", title: "Shop", style: "bi bi-shop mx-2", to: "" },
    { id: "3", title: "Product", style: "bi bi-box-seam mx-2", to: "" },
    { id: "4", title: "User Management", style: "bi bi-person-lines-fill mx-2", to: "" }
  ]

  return (
    <div className="mx-4">
      <header className="items-center justify-between border-b py-2 flex">
        {isDesktop ? (
            <Link to={routes.home()}>
              <h1 className="text-xl font-normal leading-none md:py-3">
                Simple Backend
              </h1>
            </Link>
          ) : (
            <div id="hide-btn">
              <div className="flex items-center justify-between py-1 md:py-3 md:block">
                <div className="md:hidden">
                  <button
                    className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                    onClick={() => setDropdown(!dropdown)}
                  >
                    {dropdown ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                      </svg>
                    )}
                  </button>
                </div>
              </div>
            </div>
          )}
      </header>
      <main className="mt-2 md:flex px-2 pb-0">
        <aside className={`md:block md:w-72 vh ${dropdown ? "sidebar-open" : "sidebar-closed"}`}>
          <nav>
            <ul>
              {menuItems.map((item) => (
                <li className="mt-6">
                  <Link
                    to={item.to}
                    className="font-normal text-emerald-500 hover:text-emerald-400"
                  >
                    <span className="text-start flex w-72 items-center focus:text-accent">
                      <i className={item.style}></i>{item.title}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </aside>
        <section className={`md:mt-6 md:flex-1 ${dropdown ? "fixed" : ""}`}>
          {children}
        </section>
      </main>
    </div>
  )
}

export default CommonLayout
