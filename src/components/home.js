import React from "react"
import { Link } from "react-router-dom"

const home = () => {
    return (
        <>
          <div className="bg-white">
  <main>
    
    <div className="pt-8 overflow-hidden sm:pt-12 lg:relative lg:py-48">
      <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl lg:grid lg:grid-cols-2 lg:gap-24">
        <div>
          
          <div className="mt-20">
            
            <div className="mt-6 sm:max-w-xl">
              <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">
                Compra arte emergente.
              </h1>
              <p className="mt-6 text-xl text-gray-500">
                Encuentra artístas emergentes, conóce y adquiere sus piezas únicas.
              </p>
            </div>
            
            <form action="#" className="mt-12 sm:max-w-lg sm:w-full sm:flex">
          
              <div className="mt-4 sm:mt-0 sm:ml-3">
               <Link to='/articulos'>
                <button className="block w-full rounded-md border border-transparent px-5 py-3 bg-rose-500 text-base font-medium text-white shadow hover:bg-rose-600 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2 sm:px-10">Visitar Galería</button>
                </Link>
              </div>
            </form>

            
          </div>
        </div>
      </div>

      <div className="sm:mx-auto sm:max-w-3xl sm:px-6">
        <div className="py-12 sm:relative sm:mt-12 sm:py-16 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <div className="hidden sm:block">
            <div className="absolute inset-y-0 left-1/2 w-screen bg-gray-50 rounded-l-3xl lg:left-80 lg:right-0 lg:w-full"></div>
            <svg className="absolute top-8 right-1/2 -mr-3 lg:m-0 lg:left-0" width="404" height="392" fill="none" viewBox="0 0 404 392">
              <defs>
                <pattern id="837c3e70-6c3a-44e6-8854-cc48c737b659" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                  <rect x="0" y="0" width="4" height="4" className="text-gray-200" fill="currentColor" />
                </pattern>
              </defs>
              <rect width="404" height="392" fill="url(#837c3e70-6c3a-44e6-8854-cc48c737b659)" />
            </svg>
          </div>
          <div className="relative pl-4 -mr-40 sm:mx-auto sm:max-w-3xl sm:px-0 lg:max-w-none lg:h-full lg:pl-12">
            <img className="w-full rounded-md shadow-xl ring-1 ring-black ring-opacity-5 lg:h-full lg:w-auto lg:max-w-none" src="https://i.ibb.co/ggzTPpq/art-Portada.png" alt=""/>
          </div>
        </div>
      </div>
    </div>

 
    <div className="relative mt-20">
      <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-24 lg:items-start">
        <div className="relative sm:py-16 lg:py-0">
          <div aria-hidden="true" className="hidden sm:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-screen">
            <div className="absolute inset-y-0 right-1/2 w-full bg-gray-50 rounded-r-3xl lg:right-72"></div>
            <svg className="absolute top-8 left-1/2 -ml-3 lg:-right-8 lg:left-auto lg:top-12" width="404" height="392" fill="none" viewBox="0 0 404 392">
              <defs>
                <pattern id="02f20b47-fd69-4224-a62a-4c9de5c763f7" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                  <rect x="0" y="0" width="4" height="4" className="text-gray-200" fill="currentColor" />
                </pattern>
              </defs>
              <rect width="404" height="392" fill="url(#02f20b47-fd69-4224-a62a-4c9de5c763f7)" />
            </svg>
          </div>
          <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0 lg:max-w-none lg:py-20">
        
            <div className="relative pt-64 pb-10 rounded-2xl shadow-xl overflow-hidden">
              <img className="absolute inset-0 h-full w-full object-cover" src="https://images.squarespace-cdn.com/content/v1/6075b283247679192461db8d/1618863221429-NNRRI08NBF238J93KLNO/iStock-1136415038.jpg" alt=""/>
              {/* <div className="absolute inset-0 bg-rose-500 mix-blend-multiply"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-rose-600 via-rose-600 opacity-90"></div> */}
              <div className="relative px-8">
                
                <blockquote className="mt-8">
                  {/* <div className="relative text-lg font-medium text-white md:flex-grow">
                    <svg className="absolute top-0 left-0 transform -translate-x-3 -translate-y-2 h-8 w-8 text-rose-400" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                      <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                    </svg>
                    <p className="relative">
                      Tincidunt integer commodo, cursus etiam aliquam neque, et. Consectetur pretium in volutpat, diam. Montes, magna cursus nulla feugiat dignissim id lobortis amet.
                    </p>
                  </div> */}

                  
                </blockquote>
              </div>
            </div>
          </div>
        </div>

        <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0">
         
          <div className="pt-12 sm:pt-16 lg:pt-20">
            <h2 className="text-3xl text-gray-900 font-extrabold tracking-tight sm:text-4xl">
             Conoce artistas únicos y síguelos
            </h2>
            <div className="mt-6 text-gray-500 space-y-6">
              <p className="text-lg">
              Las redes sociales se han vuelto el mas grande semillero de talento creativo que ha existido en la historia de la humanidad.
              </p>
              <p className="text-base leading-7">
                Desde el nacimiento de influencers, bailarines de tiktok o hasta talentos artísticos como cantantes, actores o creadores multimedia, 
                el alcance de las redes sociales esta en las posibilidades de creación multimedia.

              </p>
              <p className="text-base leading-7">
               Este sitio web busca impulsar el talento independiente, el que crece en las redes sociales, el que se abre paso con sus propias manos 
               y con su ingenio y creatividad. En esta plataforma pueden crear sus propios artículos y venderlos a sus anchas,
               así como promover sus redes sociales e interactuar con nuevos y mas talentos artísticos!
             </p>
            </div>
          </div>

          {/* <div className="mt-10">
            <dl className="grid grid-cols-2 gap-x-4 gap-y-8">
              <div className="border-t-2 border-gray-100 pt-6">
                <dt className="text-base font-medium text-gray-500">Founded</dt>
                <dd className="text-3xl font-extrabold tracking-tight text-gray-900">2021</dd>
              </div>

              <div className="border-t-2 border-gray-100 pt-6">
                <dt className="text-base font-medium text-gray-500">Employees</dt>
                <dd className="text-3xl font-extrabold tracking-tight text-gray-900">5</dd>
              </div>

              <div className="border-t-2 border-gray-100 pt-6">
                <dt className="text-base font-medium text-gray-500">Beta Users</dt>
                <dd className="text-3xl font-extrabold tracking-tight text-gray-900">521</dd>
              </div>

              <div className="border-t-2 border-gray-100 pt-6">
                <dt className="text-base font-medium text-gray-500">Raised</dt>
                <dd className="text-3xl font-extrabold tracking-tight text-gray-900">$25M</dd>
              </div>
            </dl>
            <div className="mt-10">
              <a href="#" className="text-base font-medium text-rose-500">
                Learn more about how we're changing the world
              </a>
            </div>
          </div> */}
        </div>
      </div>
    </div>


    {/* <div className="mt-32">
      <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
        <div className="lg:grid lg:grid-cols-2 lg:gap-24 lg:items-center">
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
              Backed by world-renowned investors
            </h2>
            <p className="mt-6 max-w-3xl text-lg leading-7 text-gray-500">
              Sagittis scelerisque nulla cursus in enim consectetur quam. Dictum urna sed consectetur neque tristique pellentesque. Blandit amet, sed aenean erat arcu morbi. Cursus faucibus nunc nisl netus morbi vel porttitor vitae ut. Amet vitae fames senectus vitae.
            </p>
            <div className="mt-6">
              <a href="#" className="text-base font-medium text-rose-500">
                Meet our investors and advisors
              </a>
            </div>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-0 lg:grid-cols-2">
            <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
              <img className="max-h-12" src="https://tailwindui.com/img/logos/transistor-logo-gray-400.svg" alt="Transistor"/>
            </div>

            <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
              <img className="max-h-12" src="https://tailwindui.com/img/logos/mirage-logo-gray-400.svg" alt="Mirage"/>
            </div>

            <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
              <img className="max-h-12" src="https://tailwindui.com/img/logos/tuple-logo-gray-400.svg" alt="Tuple"/>
            </div>

            <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
              <img className="max-h-12" src="https://tailwindui.com/img/logos/laravel-logo-gray-400.svg" alt="Laravel"/>
            </div>

            <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
              <img className="max-h-12" src="https://tailwindui.com/img/logos/statickit-logo-gray-400.svg" alt="StaticKit"/>
            </div>

            <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
              <img className="max-h-12" src="https://tailwindui.com/img/logos/workcation-logo-gray-400.svg" alt="Workcation"/>
            </div>
          </div>
        </div>
      </div>
    </div> */}

  
    {/* <div className="relative mt-24 sm:mt-32 sm:py-16">
      <div aria-hidden="true" className="hidden sm:block">
        <div className="absolute inset-y-0 left-0 w-1/2 bg-gray-50 rounded-r-3xl"></div>
        <svg className="absolute top-8 left-1/2 -ml-3" width="404" height="392" fill="none" viewBox="0 0 404 392">
          <defs>
            <pattern id="8228f071-bcee-4ec8-905a-2a059a2cc4fb" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <rect x="0" y="0" width="4" height="4" className="text-gray-200" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="404" height="392" fill="url(#8228f071-bcee-4ec8-905a-2a059a2cc4fb)" />
        </svg>
      </div>
      <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="relative rounded-2xl px-6 py-10 bg-rose-500 overflow-hidden shadow-xl sm:px-12 sm:py-20">
          <div aria-hidden="true" className="absolute inset-0 -mt-72 sm:-mt-32 md:mt-0">
            <svg className="absolute inset-0 h-full w-full" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 1463 360">
              <path className="text-rose-400 text-opacity-40" fill="currentColor" d="M-82.673 72l1761.849 472.086-134.327 501.315-1761.85-472.086z" />
              <path className="text-rose-600 text-opacity-40" fill="currentColor" d="M-217.088 544.086L1544.761 72l134.327 501.316-1761.849 472.086z" />
            </svg>
          </div>
          <div className="relative">
            <div className="sm:text-center">
              <h2 className="text-3xl font-extrabold text-white tracking-tight sm:text-4xl">
                Get notified when we&rsquo;re launching.
              </h2>
              <p className="mt-6 mx-auto max-w-2xl text-lg text-rose-100">
                Sagittis scelerisque nulla cursus in enim consectetur quam. Dictum urna sed consectetur neque tristique pellentesque.
              </p>
            </div>
            <form action="#" className="mt-12 sm:mx-auto sm:max-w-lg sm:flex">
              <div className="min-w-0 flex-1">
                <label for="cta-email" className="sr-only">Email address</label>
                <input id="cta-email" type="email" className="block w-full border border-transparent rounded-md px-5 py-3 text-base text-gray-900 placeholder-gray-500 shadow-sm focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-rose-500" placeholder="Enter your email"/>
              </div>
              <div className="mt-4 sm:mt-0 sm:ml-3">
                <button type="submit" className="block w-full rounded-md border border-transparent px-5 py-3 bg-gray-900 text-base font-medium text-white shadow hover:bg-black focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-rose-500 sm:px-10">Notify me</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div> */}
  </main>


  
</div>
        </>
    )
}

export default home
