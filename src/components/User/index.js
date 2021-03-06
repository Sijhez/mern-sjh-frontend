//aqui pondremos los perfiles de los artistas, todos
import React,  {useEffect, useContext} from 'react'
import PerfilContext from '../../context/UserPerfil/PerfilContext'
import { Link } from 'react-router-dom'
export default function GetProfiles() {
  //ESTADO GLOBAL
  const ctx = useContext(PerfilContext)
  const {perfiles, getAllProfiles} = ctx

  useEffect(()=>{
    getAllProfiles()
},[])
     
    return (
      <div class="bg-white">
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <div class="md:flex md:items-center md:justify-between">
            <h2 class="text-2xl font-extrabold tracking-tight text-gray-900">
              Perfiles de artístas
            </h2>
            {/* <a href="#" class="hidden text-sm font-medium text-indigo-600 hover:text-indigo-500 md:block">Shop the collection<span aria-hidden="true"> &rarr;</span></a> */}
          </div>
          

          <ul
            role="list"
            class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
          >
            {perfiles.map((perfil) => {
            return (
              <>
              <Link to={`/perfilesArt/${perfil._id}`}>
              
                <li class="col-span-1 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200">
              <div class="flex-1 flex flex-col p-8">
                <img
                  class="w-32 h-32 flex-shrink-0 mx-auto rounded-full"
                  src={perfil.foto}
                  alt=""
                />
                <h3 class="mt-6 text-gray-900 text-sm font-medium">
                {perfil.nombre}
                </h3>
                <dl class="mt-1 flex-grow flex flex-col justify-between">
                  {/* <dt class="sr-only">Title</dt> */}
                  <dd class="text-gray-500 text-sm">{perfil.nickName}</dd>
                  {/* <dt class="sr-only">Role</dt>
                  <dd class="mt-3">
                    <span class="px-2 py-1 text-green-800 text-xs font-medium bg-green-100 rounded-full">
                      Admin
                    </span>
                  </dd> */}
                </dl>
              </div>
              <div>
                <div class="-mt-px flex divide-x divide-gray-200">
                  <div class="w-0 flex-1 flex">
                    <a
                      href="mailto:janecooper@example.com"
                      class="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-bl-lg hover:text-gray-500"
                    >
                      <svg
                        class="w-5 h-5 text-gray-400"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                      <span class="ml-3">Email</span>
                    </a>
                  </div>
                  <div class="-ml-px w-0 flex-1 flex">
                    <a
                      href="tel:+1-202-555-0170"
                      class="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-br-lg hover:text-gray-500"
                    >
                      <svg
                        class="w-5 h-5 text-gray-400"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                      <span class="ml-3">Call</span>
                    </a>
                  </div>
                </div>
              </div>
            </li>
            </Link>
              

              </>
            );
          })}

            
            
          </ul>
        </div>
      </div>
    );
}
