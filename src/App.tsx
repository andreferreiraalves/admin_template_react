import { useState } from "react";

function App() {
  const [open, setOpen] = useState(true)
  const menus = [
    { title: 'Dashboard', src: 'chart_fill' },
    { title: 'Inbox', src: 'chart' },
    { title: 'Accounts', src: 'User', gap: true },
    { title: 'Schedure', src: 'Calendar' },
    { title: 'Search', src: 'search' },
    { title: 'Analytics', src: 'Chart' },
    { title: 'Files', src: 'Folder', gap: true },
    { title: 'Settings', src: 'Setting' },
  ]

  return (
    <div className="flex">
      <div
        className={`${open ? "w-72" : "w-20"} duration-300 w-72 h-screen p-5 pt-8 bg-dark-purple relative`}>
        <img
          onClick={() => setOpen(!open)}
          src="./src/assets/control.png"
          className={`absolute cursor-pointer rounded-full -right-3 top-9 w-7 border-2 border-dark-purple ${!open && "rotate-180"}`} />

        <div className="flex gap-x-4 items-center">
          <img src="./src/assets/logo.png"
            className={`cursor-pointer duration-500 ${open && "rotate-[360deg]"}`} />
          <h1
            className={`text-white origin-left font-medium text-xl duration-300 ${!open && "scale-0"}`}>
            Designer
          </h1>
        </div>

        <ul className="pt-6">
          {menus.map((menu, index) =>
            <li key={index}
              className={`text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md ${menu.gap ? "mt-9" : "mt-2"} ${index === 0 && "bg-light-white"}`}>
              <img src={`./src/assets/${menu.src}.png`} />
              <span className={`${!open && "hidden"} origin-left duration-200`} >{menu.title}</span>
            </li>
          )}
        </ul>
      </div>
      <div className="p-7 font-semibold text-2xl flex-1 h-screen">
        <h1>Home Page</h1>
      </div>
    </div>
  )
}

export default App
