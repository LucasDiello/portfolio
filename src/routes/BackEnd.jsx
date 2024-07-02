import React from "react";
import "../styles/backend.css"

const BackEnd = () => {
  return (
    <section className="bg-[#181818]" id="backend">
      <section class="flex justify-center">
        <div class=" w-full font-sans">
          <section class="container-projects !bg-[#181818]">
            <div class="z-50">
              <p class="text-7xl mb-10 font-bold tracking-wide">Backend</p>
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 24 24"
                class="text-teal-400"
                height="25px"
                width="25px"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M6 4h12v2H6zm6 16.414 6.707-6.707-1.414-1.414L13 16.586V8h-2v8.586l-4.293-4.293-1.414 1.414z"></path>
              </svg>
            </div>
          </section>
          <div class="boxes backend-content text-[#d8d8d8]">
            <div class="box !p-[10px] lg:w-[30vw] mb-14 lg:items-start lg:justify-start  flex  flex-col  justify-center  items-center ">
              <p class="icon">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 640 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M18.32 255.78L192 223.96l-91.28 68.69c-10.08 10.08-2.94 27.31 11.31 27.31h222.7c-9.44-26.4-14.73-54.47-14.73-83.38v-42.27l-119.73-87.6c-23.82-15.88-55.29-14.01-77.06 4.59L5.81 227.64c-12.38 10.33-3.45 30.42 12.51 28.14zm556.87 34.1l-100.66-50.31A47.992 47.992 0 0 1 448 196.65v-36.69h64l28.09 22.63c6 6 14.14 9.37 22.63 9.37h30.97a32 32 0 0 0 28.62-17.69l14.31-28.62a32.005 32.005 0 0 0-3.02-33.51l-74.53-99.38C553.02 4.7 543.54 0 533.47 0H296.02c-7.13 0-10.7 8.57-5.66 13.61L352 63.96 292.42 88.8c-5.9 2.95-5.9 11.36 0 14.31L352 127.96v108.62c0 72.08 36.03 139.39 96 179.38-195.59 6.81-344.56 41.01-434.1 60.91C5.78 478.67 0 485.88 0 494.2 0 504 7.95 512 17.76 512h499.08c63.29.01 119.61-47.56 122.99-110.76 2.52-47.28-22.73-90.4-64.64-111.36zM489.18 66.25l45.65 11.41c-2.75 10.91-12.47 18.89-24.13 18.26-12.96-.71-25.85-12.53-21.52-29.67z"></path>
                </svg>
              </p>
              <h2>D&amp;D Game</h2>
              <p class="piece-count">POO</p>
              <p class="description mr-2 mb-10 text-center lg:text-start">
                API RESTful para um jogo de RPG de mesa. Utilizando o paradigma
                de programação orientada a objetos, foi possível criar um
                sistema de personagens, itens, monstros e magias.
              </p>
              <a
                href="https://github.com/LucasDiello/trybers-and-dragons"
                class="text-[#93b0c6] font-light"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ver mais
              </a>
            </div>
            <div class="box !p-[10px] lg:w-[30vw] mb-14 lg:items-start lg:justify-start  flex  flex-col  justify-center  items-center ">
              <p class="icon">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  role="img"
                  viewBox="0 0 24 24"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title></title>
                  <path d="M1.63.47a.393.393 0 0 0-.39.39v2.417c0 .212.177.39.39.39h20.74c.213 0 .39-.178.39-.39V.859a.393.393 0 0 0-.39-.39zm-.045 4.126a.41.41 0 0 0-.407.337l-1.17 6.314C0 11.274 0 11.3 0 11.327v2.117c0 .23.186.416.416.416h23.168c.23 0 .416-.186.416-.416v-2.126c0-.027 0-.053-.009-.08l-1.169-6.305a.41.41 0 0 0-.407-.337zM1.7 14.781a.457.457 0 0 0-.46.46v7.829c0 .257.203.46.46.46h14.108c.257 0 .46-.203.46-.46v-6.589c0-.257.204-.46.461-.46h4.02c.258 0 .461.203.461.46v6.589c0 .257.204.46.46.46h.62a.456.456 0 0 0 .461-.46v-7.829a.458.458 0 0 0-.46-.46zm1.842 1.55h7.847c.212 0 .39.177.39.39V21.6c0 .212-.178.39-.39.39H3.542a.393.393 0 0 1-.39-.39v-4.88c0-.221.178-.39.39-.39Z"></path>
                </svg>
              </p>
              <h2>Store Manager</h2>
              <p class="piece-count">CRUD</p>
              <p class="description mr-2 mb-10 text-center lg:text-start">
                Esta é uma API RESTful desenvolvida para gerenciar operações em
                um sistema de estoque e sales, utilizando o banco de dados MySQL
                para a gestão de dados.
              </p>
              <a
                href="https://github.com/LucasDiello/store-manager"
                class="text-[#93b0c6] font-light"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ver mais
              </a>
            </div>
            <div class="box !p-[10px] lg:w-[30vw] mb-14 lg:items-start lg:justify-start  flex  flex-col  justify-center  items-center ">
              <p class="icon">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 24 24"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="Microphone_On">
                    <g>
                      <path d="M11.989,2.065a4.507,4.507,0,0,0-4.5,4.5v5.76a4.5,4.5,0,0,0,9,0V6.565A4.507,4.507,0,0,0,11.989,2.065Zm0,13.76a3.5,3.5,0,0,1-3.5-3.5V6.565a3.5,3.5,0,0,1,6.94-.62h-1.87a.5.5,0,0,0-.5.5.5.5,0,0,0,.5.5h1.93v2h-1.93a.5.5,0,0,0-.5.5.508.508,0,0,0,.5.5h1.93v2h-1.94a.508.508,0,0,0-.5.5.515.515,0,0,0,.5.5h1.88A3.492,3.492,0,0,1,11.989,15.825Z"></path>
                      <path d="M12.489,18.925v2.01h3.5a.5.5,0,0,1,0,1h-8a.5.5,0,0,1,0-1h3.5v-1.99a6.055,6.055,0,0,1-2.74-.88,6.291,6.291,0,0,1-2.97-5.14c-.03-1.04,0-2.09,0-3.13a.5.5,0,0,1,1,0c0,1.04-.03,2.09,0,3.13A5.212,5.212,0,0,0,17.2,12.7c.01-.96,0-1.93,0-2.9a.5.5,0,0,1,1,0,26.322,26.322,0,0,1-.08,3.97A6.235,6.235,0,0,1,12.489,18.925Z"></path>
                    </g>
                  </g>
                </svg>
              </p>
              <h2>JWT SMITH</h2>
              <p class="piece-count">CRUD & JWT</p>
              <p class="description mr-2 mb-10 text-center lg:text-start">
                Sistema de gerenciamento de pedidos e produtos, com
                funcionalidades como cadastro e listagem de produtos, listagem
                de pedidos, login de usuários, validações de produtos e até
                mesmo a possibilidade de cadastro de pedidos com validação de
                token JWT.
              </p>
              <a
                href="https://github.com/LucasDiello/JWT-Smith"
                class="text-[#93b0c6] font-light"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ver mais
              </a>
            </div>
            <div class="box !p-[10px] lg:w-[30vw] mb-14 lg:items-start lg:justify-start  flex  flex-col  justify-center  items-center ">
              <p class="icon">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  role="img"
                  viewBox="0 0 24 24"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title></title>
                  <path d="M12.526 11.695c1.84-.382 3.367-2.044 3.367-4.478 0-2.604-1.9-4.97-5.615-4.97H0v19.506h10.6c3.75 0 5.683-2.341 5.683-5.292-.009-2.426-1.646-4.444-3.757-4.766zm-8.37-5.793h5.207c1.407 0 2.28.849 2.28 2.044 0 1.255-.881 2.044-2.28 2.044H4.155zM9.54 18.098H4.155v-4.444h5.386c1.61 0 2.484.992 2.484 2.222.009 1.399-.932 2.222-2.484 2.222zM21.396 2.28c-1.255 0-2.315 1.052-2.315 2.307s.882 2.103 1.993 2.103c.238 0 .467-.025.56-.085-.238 1.052-1.315 2.282-2.256 2.782l1.611 1.314C22.796 9.422 24 7.462 24 5.266c0-1.9-1.23-2.985-2.604-2.985Z"></path>
                </svg>
              </p>
              <h2>Blog API</h2>
              <p class="piece-count">CRUD</p>
              <p class="description mr-2 mb-10 text-center lg:text-start">
                API RESTful para um blog, com funcionalidades como cadastro e
                listagem de posts, listagem de categorias, login de usuários,
                validação de Token JWT e até mesmo a possibilidade de cadastro
                de posts com validação de token JWT.
              </p>
              <a
                href="https://github.com/LucasDiello/blogs-api"
                class="text-[#93b0c6] font-light"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ver mais
              </a>
            </div>
            <div class="box !p-[10px] lg:w-[30vw] mb-14 lg:items-start lg:justify-start  flex  flex-col  justify-center  items-center ">
              <p class="icon">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 512 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M256 48C141.1 48 48 141.1 48 256c0 114.7 93.3 208 208 208 114.9 0 208-93.1 208-208 0-114.7-93.3-208-208-208zm127.3 80.7c8.5 8.5 16.1 17.7 22.6 27.5.7 1 .9 2.4.4 3.5L391.9 201c-.4 1-1.1 1.9-2.1 2.3l-57.5 26.2c-1.4.6-3 .4-4.2-.6l-56.6-47.6a4.1 4.1 0 0 1-1.4-3.1v-63.1c0-1.3.7-2.6 1.8-3.3l38.4-26.1c1-.7 2.3-.9 3.5-.5 25.8 8.9 49.6 23.6 69.5 43.5zm-73.9 297.6c-.4 1.2-1.4 2.1-2.6 2.4-16.3 4.8-33.4 7.2-50.8 7.2-17.5 0-34.5-2.5-50.8-7.2-1.2-.4-2.2-1.3-2.6-2.4l-16.4-43c-.4-1.1-.3-2.3.2-3.3l22.3-42.3c.7-1.3 2.1-2.1 3.5-2.1h87.5c1.5 0 2.8.8 3.5 2.1l22.3 42.3c.5 1 .6 2.2.2 3.3l-16.3 43zm-67.4-311v63.1c0 1.2-.5 2.3-1.4 3.1L183.9 229c-1.2 1-2.8 1.2-4.2.6l-57.5-26.2c-1-.5-1.8-1.3-2.1-2.3l-14.4-41.2c-.4-1.2-.3-2.5.4-3.5 6.5-9.8 14.1-19 22.6-27.5 19.9-19.9 43.7-34.6 69.6-43.3 1.2-.4 2.5-.2 3.5.5l38.4 26.1c1.1.5 1.8 1.7 1.8 3.1zM77.7 264.1l36.1-31.2c1.2-1 2.9-1.3 4.3-.6l52.4 23.8c1.1.5 1.9 1.5 2.2 2.7l14.6 57.3c.2 1 .1 2-.3 2.9l-23.2 43.9c-.7 1.3-2.1 2.2-3.6 2.1l-46-.6c-1.2 0-2.4-.6-3.2-1.6-20.5-27.7-32.5-60.6-34.7-95.4 0-1.3.5-2.5 1.4-3.3zm270.4 98.7L325 319c-.5-.9-.6-1.9-.3-2.9l14.6-57.3c.3-1.2 1.1-2.2 2.2-2.7l52.4-23.8c1.4-.6 3.1-.4 4.3.6l36.1 31.2c.9.8 1.5 2 1.4 3.3-2.1 34.8-14.2 67.6-34.7 95.4-.7 1-1.9 1.6-3.2 1.6l-46.1.6c-1.5-.1-2.9-.9-3.6-2.2z"></path>
                </svg>
              </p>
              <h2>App de Futebol</h2>
              <p class="piece-count">Full Stack</p>
              <p class="description mr-2 mb-10 text-center lg:text-start">
                Aplicação Full Stack para gerenciamento de jogos de futebol, com
                funcionalidades como cadastro e listagem de jogos, listagem de
                times, login de usuários, validação de Token JWT e até mesmo a
                possibilidade de cadastro de jogos com validação de token JWT.{" "}
              </p>
              <a
                href="https://github.com/LucasDiello/app-futebol-clube"
                class="text-[#93b0c6] font-light"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ver mais
              </a>
            </div>
            <div class="box !p-[10px] lg:w-[30vw] mb-14 lg:items-start lg:justify-start  flex  flex-col  justify-center  items-center ">
              <p class="icon">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 640 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M349.9 236.3h-66.1v-59.4h66.1v59.4zm0-204.3h-66.1v60.7h66.1V32zm78.2 144.8H362v59.4h66.1v-59.4zm-156.3-72.1h-66.1v60.1h66.1v-60.1zm78.1 0h-66.1v60.1h66.1v-60.1zm276.8 100c-14.4-9.7-47.6-13.2-73.1-8.4-3.3-24-16.7-44.9-41.1-63.7l-14-9.3-9.3 14c-18.4 27.8-23.4 73.6-3.7 103.8-8.7 4.7-25.8 11.1-48.4 10.7H2.4c-8.7 50.8 5.8 116.8 44 162.1 37.1 43.9 92.7 66.2 165.4 66.2 157.4 0 273.9-72.5 328.4-204.2 21.4.4 67.6.1 91.3-45.2 1.5-2.5 6.6-13.2 8.5-17.1l-13.3-8.9zm-511.1-27.9h-66v59.4h66.1v-59.4zm78.1 0h-66.1v59.4h66.1v-59.4zm78.1 0h-66.1v59.4h66.1v-59.4zm-78.1-72.1h-66.1v60.1h66.1v-60.1z"></path>
                </svg>
              </p>
              <h2>Docker todo list</h2>
              <p class="piece-count">Docker</p>
              <p class="description mr-2 mb-10 text-center lg:text-start">
                Aplicação Full Stack utilizando Docker para gerenciamento de
                tarefas, com funcionalidades como cadastro e listagem de
                tarefas...
              </p>
              <a
                href="https://github.com/LucasDiello/docker-todo-list"
                class="text-[#93b0c6] font-light"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ver mais
              </a>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default BackEnd;
