import { NavLink } from "react-router-dom"
import { useState } from "react"
import { Disclosure } from "@headlessui/react"
import { useLocation } from "react-router-dom"

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ")
}

export const Header = () => {
  const [selected, setSelected] = useState(useLocation().pathname)

  return (
    <Disclosure as="nav" className="bg-white shadow">
      {({ open, close }) => (
        <>
          <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex items-center ">
                <div className="flex-shrink-0 flex items-center h-14 px-3 rounded">
                  <svg
                    id="logo-37"
                    width="42"
                    height="38"
                    viewBox="0 0 42 38"
                    fill="none"
                    className="fill-rose-500 h-6"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.74661 28.7259C7.28678 29.8002 9.78389 29.8002 11.3241 28.7259C12.8642 27.6516 12.8642 25.9098 11.3241 24.8355C9.78389 23.7612 7.28678 23.7612 5.74661 24.8355C4.20644 25.9098 4.20644 27.6516 5.74661 28.7259Z"
                      className="ccustom"
                    ></path>
                    <path
                      d="M21.7322 14.1371C24.0425 15.7485 27.7881 15.7485 30.0984 14.1371C32.4086 12.5256 32.4086 9.91298 30.0984 8.30155C27.7881 6.69011 24.0425 6.69011 21.7322 8.30155C19.422 9.91298 19.422 12.5256 21.7322 14.1371Z"
                      className="ccustom"
                    ></path>
                    <path
                      d="M13.2464 21.4315C15.1716 22.7743 18.293 22.7743 20.2182 21.4315C22.1434 20.0886 22.1434 17.9114 20.2182 16.5685C18.293 15.2257 15.1716 15.2257 13.2464 16.5685C11.3212 17.9114 11.3212 20.0886 13.2464 21.4315Z"
                      className="ccustom"
                    ></path>
                    <path
                      d="M0.866345 20.4589C2.02147 21.2646 3.8943 21.2646 5.04943 20.4589C6.20455 19.6532 6.20455 18.3469 5.04943 17.5411C3.8943 16.7354 2.02147 16.7354 0.866345 17.5411C-0.288782 18.3469 -0.288781 19.6532 0.866345 20.4589Z"
                      className="ccustom"
                    ></path>
                    <path
                      d="M13.2464 5.87008C15.1716 7.21294 18.293 7.21294 20.2182 5.87008C22.1434 4.52722 22.1434 2.35001 20.2182 1.00715C18.293 -0.335715 15.1716 -0.335716 13.2464 1.00715C11.3212 2.35001 11.3212 4.52722 13.2464 5.87008Z"
                      className="ccustom"
                    ></path>
                    <path
                      d="M5.74661 13.1645C7.28678 14.2388 9.78389 14.2388 11.3241 13.1645C12.8642 12.0902 12.8642 10.3484 11.3241 9.27415C9.78389 8.19986 7.28678 8.19986 5.74661 9.27415C4.20644 10.3484 4.20645 12.0902 5.74661 13.1645Z"
                      className="ccustom"
                    ></path>
                    <path
                      d="M13.2464 36.9929C15.1716 38.3357 18.293 38.3357 20.2182 36.9929C22.1434 35.65 22.1434 33.4728 20.2182 32.1299C18.293 30.7871 15.1716 30.7871 13.2464 32.1299C11.3212 33.4728 11.3212 35.65 13.2464 36.9929Z"
                      className="ccustom"
                    ></path>
                    <path
                      d="M31.9011 21.9178C34.2114 23.5292 37.9571 23.5292 40.2673 21.9178C42.5776 20.3064 42.5776 17.6937 40.2673 16.0823C37.9571 14.4708 34.2114 14.4708 31.9011 16.0823C29.5909 17.6937 29.5909 20.3064 31.9011 21.9178Z"
                      className="ccustom"
                    ></path>
                    <path
                      d="M21.7322 29.6984C24.0425 31.3099 27.7881 31.3099 30.0984 29.6984C32.4086 28.087 32.4086 25.4744 30.0984 23.8629C27.7881 22.2515 24.0425 22.2515 21.7322 23.8629C19.422 25.4744 19.422 28.087 21.7322 29.6984Z"
                      className="ccustom"
                    ></path>
                  </svg>
                  <span className="h-8 w-auto text-rose-500 ml-1 text-xl font-inter font-black mt-1">
                    professor.ai
                  </span>
                </div>
                <div className="hidden sm:ml-6 sm:flex sm:space-x-8"></div>
              </div>
              <div className="hidden sm:ml-6 sm:flex sm:items-center">
                <ul className="flex flex-wrap -mb-px">
                  <li className="mr-2">
                    <NavLink
                      onClick={() => setSelected("/")}
                      to={`/`}
                      className={
                        selected === "/"
                          ? "inline-block p-5 text-rose-600 rounded-t-lg border-b-2 border-rose-600 active"
                          : "inline-block p-5 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300"
                      }
                    >
                      Learning
                    </NavLink>
                  </li>
                  <li className="mr-2">
                    <NavLink
                      onClick={() => setSelected("/upload")}
                      to={`/upload`}
                      className={
                        selected === "/upload"
                          ? "inline-block p-5 text-rose-600 rounded-t-lg border-b-2 border-rose-600 active"
                          : "inline-block p-5 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300"
                      }
                    >
                      My Files
                    </NavLink>
                  </li>
                </ul>
              </div>

              <div className="flex items-center sm:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
                    />
                  </svg>
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="pt-2 pb-3 space-y-1">
              <Disclosure.Button as="div">
                <NavLink
                  to={`/`}
                  onClick={() => {
                    setSelected("/")
                    close()
                  }}
                  className={
                    selected === "/"
                      ? "bg-gray-100 cursor-pointer border-rose-500 text-rose-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
                      : "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-200 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
                  }
                >
                  Learning
                </NavLink>
              </Disclosure.Button>
              <Disclosure.Button as="div">
                <NavLink
                  to={`/upload`}
                  onClick={() => {
                    setSelected("/upload")
                    close()
                  }}
                  className={
                    selected === "/upload"
                      ? "bg-gray-100 cursor-pointer border-rose-500 text-rose-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
                      : "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-200 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
                  }
                >
                  My Files
                </NavLink>
              </Disclosure.Button>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
