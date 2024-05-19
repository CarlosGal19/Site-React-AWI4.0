const Body = () => {
  return (
    <>
      <div className="p-8">
        <h1 className="font-bold text-6xl text-center">Hi, I am Carlos Galindo</h1>
      </div>
      <div className="flex flex-col lg:flex-row items-center justify-center">
        <div className="flex flex-col py-10 justify-center items-center lg:w-1/2 w-full order-1">
            <img src="./me.jpeg" alt="Me" className="text-center rounded-3xl py-3"  width="150px"/>
            <h3 className="py-3 text-lg"><span className="font-bold text-xl">Name: </span>Carlos Alejandro Galindo Islas</h3>
            <h3 className="py-3 text-lg"><span className="font-bold text-xl">Major: </span>IT Software Development</h3>
            <h3 className="py-3 text-lg"><span className="font-bold text-xl">Level: </span>6 term</h3>
            <h3 className="py-3 text-lg"><span className="font-bold text-xl">ID: </span>UTM22030587</h3>
            <h3 className="py-3 text-lg"><span className="font-bold text-xl">Email: </span>utm22030587@utma.edu.mx</h3>
        </div>
        <div className="flex flex-col py-10 justify-center items-center lg:w-1/2 w-full order-2">
          <h1 className="font-bold text-4xl text-center">My current stack</h1>
          <div className="text-center w-full">
            <div className="flex w-full">
              <img src="" alt=""/>
              <img src="" alt=""/>
              1
            </div>
            <div className="flex w-full">
              2
              <img src="" alt=""/>
              <img src="" alt=""/>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Body
