import { AiOutlineConsoleSql } from "react-icons/ai";
import { BiLogoSpringBoot } from "react-icons/bi";
import { FaCss3, FaDocker, FaGitAlt, FaGithub, FaHtml5, FaJava, FaNodeJs, FaPython, FaReact } from "react-icons/fa";
import { FaP } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiExpress, SiJest, SiMysql, SiNextdotjs, SiRedux, SiTestinglibrary, SiTypescript } from "react-icons/si";

export const skills = [
    {
        id:1,
        name: "java",
        description: "Java é uma linguagem de alto nível, orientada a objetos e independente de plataforma. Java é uma das linguagens de programação mais populares do mundo e é usada em uma variedade de aplicativos.",
        path: FaJava()
    },
    {
        id:2,
        name: "javascript",
        description: "JavaScript é uma linguagem de programação que permite a você implementar itens complexos em páginas web — toda vez que uma página da web faz mais do que apenas sentar ali e exibir informações estáticas para você.",
        path: IoLogoJavascript()
    },
    {
        id:3,
        name: "python",
        description: "Python é uma linguagem de programação que permite trabalhar rapidamente e integrar sistemas com mais eficácia. Criado por Guido van Rossum, Python é uma linguagem relativamente fácil de aprender e é conhecida por sua clareza e legibilidade.",
        path: FaPython()
    },
    {
        id:4,
        name: "nodejs",
        description: "Node.js é uma plataforma construída sobre o motor JavaScript do Google Chrome para facilmente construir aplicações de rede rápidas e escaláveis. Node.js usa um modelo de I/O direcionada por eventos não bloqueante que o torna leve e eficiente.",
        path: FaNodeJs()
    },
    {
        id:5,
        name: "typescript",
        description: "TypeScript é um superconjunto de JavaScript desenvolvido pela Microsoft que adiciona tipagem estática opcional à linguagem. TypeScript foi projetado para o desenvolvimento de aplicativos em larga escala e transcompila para JavaScript.",
        path: SiTypescript()
    },
    {
        id:6,
        name: "react",
        description: "React é uma biblioteca JavaScript para criar interfaces de usuário. É mantido pelo Facebook e por uma comunidade de empresas e indivíduos. React pode ser usado como base no desenvolvimento de aplicações de página única ou móveis.",
        path: FaReact() 
    },
    {
        id:7,
        name: "next",
        description: "Next.js é um framework de desenvolvimento web front-end que permite funcionalidades como renderização do lado do servidor e geração de sites estáticos para aplicativos da web baseados em React.",
        path: SiNextdotjs() 
    },
    {
        id:8,
        name: "html",
        description: "HTML é a linguagem de marcação padrão para documentos projetados para serem exibidos em um navegador da web. Pode ser ajudado por tecnologias como folhas de estilo CSS e linguagens de script como JavaScript.",
        path: FaHtml5() 
    },
    {
        id:9,
        name: "css",
        description: "CSS é uma linguagem de estilo usada para descrever a apresentação de um documento escrito em HTML ou XML, incluindo cores, layout e fontes. Ele permite a adaptação do layout para diferentes tipos de dispositivos, como impressoras ou telas.",
        path: FaCss3() 
    },
    {
        id:10,
        name: "tailwind",
        description: "Tailwind CSS é um framework CSS que permite a criação de designs personalizados sem sair do HTML. Ele fornece classes utilitárias para ajudar a criar designs complexos de maneira rápida e fácil.",
        path: RiTailwindCssFill() 
    },
    {
        id:11,
        name: "redux",
        description: "Redux é uma biblioteca de gerenciamento de estado para aplicativos JavaScript. Ele ajuda a escrever aplicativos que se comportam consistentemente, executados em diferentes ambientes (cliente, servidor e nativo) e são fáceis de testar.",
        path: SiRedux() 
    },
    {
        id:12,
        name: "rtl",
        description: "RTL é uma biblioteca de testes para React que permite testar componentes de forma isolada, simulando interações do usuário e verificando o resultado.",
        path: SiTestinglibrary() 
    },
    {
        id:13,
        name: "sql",
        description: "SQL é uma linguagem de programação usada para se comunicar com bancos de dados. Ele fornece uma maneira de manipular e consultar dados armazenados em um banco de dados relacional.",
        path: AiOutlineConsoleSql() 
    },
    {
        id:14,
        name: "express",
        description: "Express é um framework de aplicativo da web para Node.js. Ele é projetado para criar aplicativos da web e APIs.",
        path: SiExpress() 
    },
    {
        id:15,
        name:"docker",
        description:"Docker é uma plataforma de código aberto para desenvolver, enviar e executar aplicativos. Ele permite que você separe seus aplicativos de sua infraestrutura para que você possa entregar software rapidamente.",
        path: FaDocker() 
    },
    {
        id:16,
        name:"jest",
        description:"Jest é um framework de teste de JavaScript mantido pelo Facebook. Ele é amplamente utilizado para testar aplicativos React e Node.js.",
        path: SiJest() 
    },
    {
        id:17,
        name:"mysql",
        description:"MySQL é um sistema de gerenciamento de banco de dados relacional de código aberto. Ele é amplamente utilizado em aplicativos da web para armazenar e recuperar dados.",
        path: SiMysql() 
    },
    {
        id:18,
        name:"git",
        description:"Git é um sistema de controle de versão distribuído de código aberto. Ele é amplamente utilizado para rastrear alterações no código fonte durante o desenvolvimento de software.",
        path: FaGitAlt() 
    },
    {
        id:19,
        name:"github",
        description:"GitHub é uma plataforma de hospedagem de código-fonte baseada em Git. Ele é amplamente utilizado para colaboração em código fonte e gerenciamento de projetos de software.",
        path: FaGithub() 
    },
    {
        id:20,
        name:"spring",
        description:"Spring é um framework de aplicativo Java de código aberto. Ele é amplamente utilizado para criar aplicativos corporativos Java.",
        path: BiLogoSpringBoot() 
    }
]