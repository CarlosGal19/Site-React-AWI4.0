import '../App.css'

const Footer = () => {
  return (
    <>
      {/* Contact me section */}
      <div className="py-10 bg-indigo-700 text-center text-white lg:flex lg:justify-center lg:items-center">
        <div className="lg:w-1/2 w-full lg:order-1">
          <h1 className="text-7xl font-bold">Contact me</h1>
        </div>
        <div className="lg:w-1/2 w-full lg:order-2">
          <div className="h-1/3 py-8 flex justify-center items-center">
            <h1 className="text-2xl px-2 font-bold">Github</h1> <a href=""><img src="./github.svg" alt="Github" width="50px" /></a>
          </div>
          <div className="h-1/3 py-8 flex justify-center items-center">
            <h2 className="text-2xl px-2 font-bold">Discord</h2> <a href=""><img src="./discord.svg" alt="Discord" width="50px" /></a>
          </div>
          <div className="h-1/3 py-8 flex justify-center items-center">
            <h3 className="text-2xl px-2 font-bold">LinkedIn</h3> <a href=""><img src="./linkedin.svg" alt="LinkedIn" width="50px" /></a>
          </div>
        </div>
      </div>

      {/* Another people from academy section */}
      <div className="py-10 bg-indigo-700 text-center text-white lg:flex lg:justify-center lg:items-center">
        <div className="lg:w-1/2 w-full lg:order-2">
          <h1 className="text-7xl font-bold">Another people from academy</h1>
        </div>
        <div className="lg:w-1/2 w-full lg:order-1">
          <div className="h-1/3 py-8 flex justify-center items-center">
            <h1 className="text-2xl px-2 font-bold">Gerardo Orduña Alvarez</h1> <a href=""><img src="https://img.icons8.com/officexs/16/000000/external-link.png"/></a>
          </div>
          <div className="h-1/3 py-8 flex justify-center items-center">
            <h2 className="text-2xl px-2 font-bold">Jose de Jesus Cabrera Castro</h2> <a href=""><img src="https://img.icons8.com/officexs/16/000000/external-link.png"/></a>
          </div>
          <div className="h-1/3 py-8 flex justify-center items-center">
            <h3 className="text-2xl px-2 font-bold">Luis Guillermo</h3> <a href=""><img src="https://img.icons8.com/officexs/16/000000/external-link.png"/></a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
