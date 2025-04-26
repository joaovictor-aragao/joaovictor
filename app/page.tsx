import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

import { Github, Linkedin, Mail, Phone, ExternalLink } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          
          <Link href="/" className="flex items-center gap-2 text-xl font-bold">
            <span className="text-white">JOÃO VICTOR</span>
          </Link>
          <div className="flex items-center gap-6">
            <nav className="hidden md:flex items-center gap-6">
              <a href="#home" className="hover:text-green-400 transition-colors">
                Home
              </a>
              <a href="#about" className="hover:text-green-400 transition-colors">
                About me
              </a>
              <a href="#projects" className="hover:text-green-400 transition-colors">
                Study projects
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-24 min-h-screen flex items-center">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            
            <div className="flex-1 space-y-6">
              <div className="space-y-2">
                {/* <h2 className="text-sm md:text-base uppercase tracking-wider">WELCOME TO MY WORLD</h2> */}
                <h1 className="text-4xl md:text-6xl font-bold">
                  Hi, I'm João <span className="text-green-400">Victor</span>
                </h1>
                <h2 className="text-2xl md:text-3xl mt-2 text-justify">
                  a <span className="text-green-400">Statistician</span> based in sunny Piauí, Brazil.
                </h2>
              </div>

              <p className="text-gray-300 max-w-xl text-justify">
                Statistician graduated from UFPI, with extensive experience in creating and implementing analytical
                solutions for complex business challenges, ranging from large-scale data storage to statistical
                modeling, risk analysis and machine learning.
              </p>

              <div className="pt-6">
                <h3 className="text-sm tracking-wider mb-4">Contact me</h3>
                <div className="flex gap-3">
                  <Link
                    href="https://github.com"
                    target="_blank"
                    className="p-3 rounded-md hover:text-green-400 transition-colors"
                  >
                    <Github className="h-5 w-5" />
                  </Link>
                  <Link
                    href="https://linkedin.com"
                    target="_blank"
                    className="p-3 rounded-md hover:text-green-400 transition-colors"
                  >
                    <Linkedin className="h-5 w-5" />
                  </Link>
                  <Link
                    href="mailto:contact@example.com"
                    className="p-3 rounded-md hover:text-green-400 transition-colors"
                  >
                    <Mail className="h-5 w-5" />
                  </Link>
                  <Link
                    href="https://wa.me/5586994929482"
                    target="_blank"
                    className="p-3 rounded-md hover:text-green-400 transition-colors"
                  >
                    <Phone className="h-5 w-5" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="flex-1 relative">
              <div className="relative w-full max-w-[400px] aspect-[3/5]">
                <Image
                  src="/profile.jpg"
                  alt="João Victor"
                  fill
                  className="object-cover object-center rounded-lg rounded"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-black/50">
        <div className="container mx-auto px-5">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">About me</h2>
          <p className="text-gray-300 mb-12">A resume about my abilities and progress in my career.</p>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <p className="text-gray-300 text-justify">
                Statistician graduated from UFPI, with extensive experience in creating and implementing analytical
                solutions for complex business challenges, ranging from large-scale data storage to statistical
                modeling, risk analysis, and machine learning. I have a profile focused on results, with the ability to
                translate data into insights through detailed and well-structured reports. My expertise includes mastery
                of languages such as R, Python, SQL, and Elasticsearch, combined with the ability to manage internal and
                external analyses.<br></br>

                Outside of work, I'm always curious and eager to learn new things. 
                I've started to enjoy drawing on iPad — and it's one of my hobbies and way to have fun!
                I also like to watch tv shows, movies: Star Wars, LOTR, Harry Potter and sometimes play music with my guittar.<br></br>
                <br></br>
                May the force be with you!
              </p>

              <div>
                <h3 className="text-sm tracking-wider mb-4">Skills</h3>
                {/* <div className="grid grid-cols-1 sm:grid-cols-2 gap-4"> */}
                <div className="flex items-center gap-4">
                  <svg viewBox="0 0 128 128" className="skill-icons">
                    <linearGradient id="python-original-a" gradientUnits="userSpaceOnUse" x1="70.252" y1="1237.476" x2="170.659" y2="1151.089" gradientTransform="matrix(.563 0 0 -.568 -29.215 707.817)"><stop offset="0" stopColor="#5A9FD4"></stop><stop offset="1" stopColor="#306998"></stop></linearGradient><linearGradient id="python-original-b" gradientUnits="userSpaceOnUse" x1="209.474" y1="1098.811" x2="173.62" y2="1149.537" gradientTransform="matrix(.563 0 0 -.568 -29.215 707.817)"><stop offset="0" stopColor="#FFD43B"></stop><stop offset="1" stopColor="#FFE873"></stop></linearGradient><path fill="url(#python-original-a)" d="M63.391 1.988c-4.222.02-8.252.379-11.8 1.007-10.45 1.846-12.346 5.71-12.346 12.837v9.411h24.693v3.137H29.977c-7.176 0-13.46 4.313-15.426 12.521-2.268 9.405-2.368 15.275 0 25.096 1.755 7.311 5.947 12.519 13.124 12.519h8.491V67.234c0-8.151 7.051-15.34 15.426-15.34h24.665c6.866 0 12.346-5.654 12.346-12.548V15.833c0-6.693-5.646-11.72-12.346-12.837-4.244-.706-8.645-1.027-12.866-1.008zM50.037 9.557c2.55 0 4.634 2.117 4.634 4.721 0 2.593-2.083 4.69-4.634 4.69-2.56 0-4.633-2.097-4.633-4.69-.001-2.604 2.073-4.721 4.633-4.721z" transform="translate(0 10.26)"></path><path fill="url(#python-original-b)" d="M91.682 28.38v10.966c0 8.5-7.208 15.655-15.426 15.655H51.591c-6.756 0-12.346 5.783-12.346 12.549v23.515c0 6.691 5.818 10.628 12.346 12.547 7.816 2.297 15.312 2.713 24.665 0 6.216-1.801 12.346-5.423 12.346-12.547v-9.412H63.938v-3.138h37.012c7.176 0 9.852-5.005 12.348-12.519 2.578-7.735 2.467-15.174 0-25.096-1.774-7.145-5.161-12.521-12.348-12.521h-9.268zM77.809 87.927c2.561 0 4.634 2.097 4.634 4.692 0 2.602-2.074 4.719-4.634 4.719-2.55 0-4.633-2.117-4.633-4.719 0-2.595 2.083-4.692 4.633-4.692z" transform="translate(0 10.26)"></path><radialGradient id="python-original-c" cx="1825.678" cy="444.45" r="26.743" gradientTransform="matrix(0 -.24 -1.055 0 532.979 557.576)" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#B8B8B8" stopOpacity=".498"></stop><stop offset="1" stopColor="#7F7F7F" stopOpacity="0"></stop></radialGradient><path opacity=".444" fill="url(#python-original-c)" d="M97.309 119.597c0 3.543-14.816 6.416-33.091 6.416-18.276 0-33.092-2.873-33.092-6.416 0-3.544 14.815-6.417 33.092-6.417 18.275 0 33.091 2.872 33.091 6.417z"></path>
                  </svg>

                  <svg viewBox="0 0 128 128" className="skill-icons">
                    <path fill="#343741" d="M4 64c0 5.535.777 10.879 2.098 16H84c8.836 0 16-7.164 16-16s-7.164-16-16-16H6.098A63.738 63.738 0 0 0 4 64"></path>
                    <path fill="#fec514" d="M111.695 30.648A61.485 61.485 0 0 0 117.922 24C106.188 9.379 88.199 0 68 0 42.715 0 20.957 14.71 10.574 36H98.04a20.123 20.123 0 0 0 13.652-5.352"></path>
                    <path fill="#00bfb3" d="M98.04 92H10.577C20.961 113.29 42.715 128 68 128c20.2 0 38.188-9.383 49.922-24a61.1 61.1 0 0 0-6.227-6.648A20.133 20.133 0 0 0 98.04 92"></path>
                  </svg>
                  
                  <svg viewBox="0 0 128 128" className="skill-icons">
                    <path fill="#00618A" d="M117.688 98.242c-6.973-.191-12.297.461-16.852 2.379-1.293.547-3.355.559-3.566 2.18.711.746.82 1.859 1.387 2.777 1.086 1.754 2.922 4.113 4.559 5.352 1.789 1.348 3.633 2.793 5.551 3.961 3.414 2.082 7.223 3.27 10.504 5.352 1.938 1.23 3.859 2.777 5.75 4.164.934.684 1.563 1.75 2.773 2.18v-.195c-.637-.812-.801-1.93-1.387-2.777l-2.578-2.578c-2.52-3.344-5.719-6.281-9.117-8.719-2.711-1.949-8.781-4.578-9.91-7.73l-.199-.199c1.922-.219 4.172-.914 5.949-1.391 2.98-.797 5.645-.59 8.719-1.387l4.164-1.187v-.793c-1.555-1.594-2.664-3.707-4.359-5.152-4.441-3.781-9.285-7.555-14.273-10.703-2.766-1.746-6.184-2.883-9.117-4.363-.988-.496-2.719-.758-3.371-1.586-1.539-1.961-2.379-4.449-3.566-6.738-2.488-4.793-4.93-10.023-7.137-15.066-1.504-3.437-2.484-6.828-4.359-9.91-9-14.797-18.687-23.73-33.695-32.508-3.195-1.867-7.039-2.605-11.102-3.57l-6.543-.395c-1.332-.555-2.715-2.184-3.965-2.977C16.977 3.52 4.223-3.312.539 5.672-1.785 11.34 4.016 16.871 6.09 19.746c1.457 2.012 3.32 4.273 4.359 6.539.688 1.492.805 2.984 1.391 4.559 1.438 3.883 2.695 8.109 4.559 11.695.941 1.816 1.98 3.727 3.172 5.352.727.996 1.98 1.438 2.18 2.973-1.227 1.715-1.297 4.375-1.984 6.543-3.098 9.77-1.926 21.91 2.578 29.137 1.383 2.223 4.641 6.98 9.117 5.156 3.918-1.598 3.043-6.539 4.164-10.902.254-.988.098-1.715.594-2.379v.199l3.57 7.133c2.641 4.254 7.324 8.699 11.297 11.699 2.059 1.555 3.68 4.242 6.344 5.152v-.199h-.199c-.516-.805-1.324-1.137-1.98-1.781-1.551-1.523-3.277-3.414-4.559-5.156-3.613-4.902-6.805-10.27-9.711-15.855-1.391-2.668-2.598-5.609-3.77-8.324-.453-1.047-.445-2.633-1.387-3.172-1.281 1.988-3.172 3.598-4.164 5.945-1.582 3.754-1.789 8.336-2.375 13.082-.348.125-.195.039-.398.199-2.762-.668-3.73-3.508-4.758-5.949-2.594-6.164-3.078-16.09-.793-23.191.59-1.836 3.262-7.617 2.18-9.316-.516-1.691-2.219-2.672-3.172-3.965-1.18-1.598-2.355-3.703-3.172-5.551-2.125-4.805-3.113-10.203-5.352-15.062-1.07-2.324-2.875-4.676-4.359-6.738-1.645-2.289-3.484-3.977-4.758-6.742-.453-.984-1.066-2.559-.398-3.566.215-.684.516-.969 1.191-1.191 1.148-.887 4.352.297 5.547.793 3.18 1.32 5.832 2.578 8.527 4.363 1.289.855 2.598 2.512 4.16 2.973h1.785c2.789.641 5.914.195 8.523.988 4.609 1.402 8.738 3.582 12.488 5.949 11.422 7.215 20.766 17.48 27.156 29.734 1.027 1.973 1.473 3.852 2.379 5.945 1.824 4.219 4.125 8.559 5.941 12.688 1.816 4.113 3.582 8.27 6.148 11.695 1.348 1.801 6.551 2.766 8.918 3.766 1.66.699 4.379 1.43 5.949 2.379 3 1.809 5.906 3.965 8.723 5.945 1.402.992 5.73 3.168 5.945 4.957zm-88.605-75.52c-1.453-.027-2.48.156-3.566.395v.199h.195c.695 1.422 1.918 2.34 2.777 3.566l1.98 4.164.199-.195c1.227-.867 1.789-2.25 1.781-4.363-.492-.52-.562-1.164-.992-1.785-.562-.824-1.66-1.289-2.375-1.98zm0 0"></path>
                  </svg>
                                  
                  <svg viewBox="0 0 128 128" className="skill-icons">
                    <path fill="#e15919" d="M117.085 64.337c-.109-.237-.16-.357-.22-.47-1.604-3.049-3.203-6.102-4.826-9.152-.16-.308-.14-.489.08-.753 2.553-2.978 5.074-5.98 7.63-8.944a.777.777 0 0 0 .205-.405 839.8 839.8 0 0 0-2.232.58c-3.078.818-6.184 1.632-9.233 2.461-.289.076-.417-.008-.561-.248a1047.83 1047.83 0 0 0-5.278-8.74 1.222 1.222 0 0 0-.384-.425c-.14.782-.285 1.555-.425 2.332-.49 2.753-.982 5.486-1.467 8.247-.052.297-.124.598-.152.894-.024.28-.168.389-.429.469-3.63 1.142-7.257 2.292-10.884 3.442-.16.052-.316.116-.489.273 2.97 1.178 5.94 2.356 8.949 3.558-.109.084-.18.152-.26.204-1.856 1.199-3.716 2.4-5.567 3.603-.224.148-.4.168-.65.056-2.22-.998-4.451-1.98-6.68-2.97-.997-.444-1.89-1.037-2.588-1.895-1.579-1.927-1.266-4.123.838-5.482.689-.44 1.47-.765 2.252-1.022 3.558-1.158 7.133-2.276 10.68-3.398.296-.096.436-.228.492-.553.477-2.753.97-5.526 1.467-8.247.268-1.47.408-2.977 1.122-4.328.276-.52.6-1.03.997-1.462 1.42-1.575 3.395-1.631 4.91-.132.504.504.937 1.098 1.314 1.715a976.243 976.243 0 0 1 4.905 8.122c.192.321.364.385.717.293 3.98-1.07 7.959-2.12 11.958-3.174.825-.216 1.655-.296 2.5-.136 1.836.34 2.637 1.74 2.016 3.518-.28.806-.77 1.487-1.318 2.132-2.781 3.27-5.567 6.56-8.332 9.814-.224.269-.228.46-.072.761 1.667 3.138 3.314 6.268 4.99 9.442.396.749.7 1.534.709 2.396.02 1.964-1.419 3.57-3.37 3.859-1.09.16-2.108-.072-3.134-.389a824.96 824.96 0 0 0-7.506-2.284c-.228-.072-.32-.164-.36-.413-.289-1.759-.602-3.514-.906-5.277-.008-.048.004-.1.012-.209 2.85.79 5.69 1.563 8.62 2.377"></path><path fill="#3a383d" d="M57.648 54.455c-2.095 0-3.855 1.764-3.855 3.856 0 1.639 1.094 2.945 2.838 2.945a3.62 3.62 0 0 0 1.49-.342h.004l.186-1.566c-.381.305-.944.529-1.526.529-.949 0-1.549-.75-1.549-1.707 0-1.254 1.07-2.342 2.268-2.342.577 0 1.047.226 1.336.547l.195-1.58a2.891 2.891 0 0 0-1.387-.34zm15.245.068-1.16 6.59h3.652l.232-1.33h-2.275l.23-1.326h2.092l.23-1.324h-2.087l.23-1.28h2.277l.233-1.33h-3.654zm-1.16 6.59h-.003v.01l.002-.01zm-4.247-6.58-.465 2.612h-2.865l.461-2.61h-1.379l-1.162 6.6h1.375l.465-2.653h2.869l-.46 2.653h1.378l1.162-6.602h-1.379zm-35.515.002-3.528 6.6h1.6l.717-1.406h2.256l.216 1.406h1.479l-1.201-6.6h-1.54zm16.365 0-3.527 6.6h1.6l.716-1.406h2.256l.213 1.406h1.482l-1.203-6.6h-1.537zm-9.197.012-1.162 6.596h1.378l.428-2.413h.91c1.434 0 2.442-.957 2.442-2.384 0-1.13-.77-1.787-1.875-1.787h-2.114l-.007-.012zm1.15 1.338h.805l-.004.002c.36 0 .601.203.601.6 0 .601-.38.921-.869.921h-.802l.27-1.523zm-7.81.46.32 2.057h-1.354l1.034-2.056zm16.37 0 .32 2.057h-1.355l1.036-2.056zm-33.07.887c-4.048.123-7.145 2.042-9.32 5.565-.933 1.5-1.293 3.19-1.041 4.99.229 1.631.949 3.057 2.012 4.287 1.522 1.795 3.165 3.488 4.74 5.239.66.73 1.335 1.462 1.877 2.279.94 1.419.7 2.995-.57 4.125a5.678 5.678 0 0 1-1.415.916c-1.955.886-3.905.342-5.115-1.45-.4-.604-.673-1.302-1.002-1.96-.06-.128-.108-.26-.172-.42C3.85 81.829 1.951 82.85 0 83.893c.316.782.588 1.554.941 2.283.997 2.044 2.55 3.51 4.782 4.164 1.675.497 3.39.548 5.113.271 3.92-.62 6.863-2.66 8.738-6.142 1.014-1.9 1.443-3.919 1.09-6.063-.296-1.823-1.257-3.299-2.455-4.617-1.319-1.463-2.71-2.844-4.045-4.287-.8-.874-1.585-1.763-2.303-2.701-.649-.853-.558-1.932.135-2.686.782-.845 1.765-1.22 2.91-1.14 1.38.092 2.325.889 3.09 1.955.297.416.55.865.83 1.31 1.744-1.301 3.484-2.597 5.287-3.937-.469-.628-.903-1.228-1.369-1.809-1.567-1.98-3.598-3.17-6.142-3.262a14.075 14.075 0 0 0-.823 0zm8.334 5.07.01.014.025-.039c-.011.01-.023.017-.035.026zm74.782-4.064c-.104.032-.148.031-.176.051-2.036 1.31-4.072 2.62-6.104 3.947-.1.064-.185.226-.2.35-.562 4.205-1.11 8.41-1.663 12.613-.577 4.412-1.158 8.785-1.732 13.197-.072.553-.132 1.11-.2 1.682h5.897c.565-4.288 1.13-8.574 1.703-12.947.152.217.24.343.324.47 2.64 4.044 5.337 8.107 8.002 12.167.164.252.333.336.629.336 2.262-.008 4.501 0 6.748.003v-.048c-.077-.08-.172-.153-.236-.24l-10.635-14.967c-.069-.095-.124-.197-.19-.301.102-.112.19-.213.278-.309 2.063-2.184 4.117-4.352 6.181-6.512.181-.193.254-.357.206-.625-.244-1.33-.465-2.668-.694-4.003-.08-.465-.164-.929-.256-1.475-3.258 3.587-6.452 7.142-9.65 10.68l-.072-.051c.613-4.657 1.227-9.318 1.84-14.018zm13.228 31.87v.03l.018-.03h-.018zm-48.42-24.583c-.471.011-.95.046-1.437.106-6.676.825-12.25 6.72-12.536 13.44-.117 2.89.693 5.51 2.633 7.714 3.586 4.096 9.362 4.38 13.774 2.344.092-.04.175-.189.191-.3.29-2.145.568-4.292.865-6.556l.018-.033c-.914.95-1.874 1.66-3.004 2.11-2.228.878-4.39.872-6.43-.487-2.096-1.402-2.994-3.921-2.425-6.554.826-3.967 4.693-6.776 8.74-6.348 1.96.205 3.442 1.158 4.332 2.95.834 1.686.967 3.496.758 5.32-.332 2.925-.754 5.86-1.135 8.78-.076.57-.14 1.138-.207 1.72h5.236c.02-.114.04-.206.053-.293.332-2.512.682-5.053.998-7.586.221-1.78.504-3.563.584-5.362.125-2.72-.708-5.193-2.508-7.256-2.307-2.65-5.2-3.786-8.5-3.709zm-26.678.153c-.957.004-1.932.12-2.92.334-5.442 1.194-10.11 5.895-11.046 11.38-.533 3.095-.859 6.204-1.276 9.317-.364 2.725-.72 5.448-1.078 8.168-.1.774-.197 1.553-.297 2.326.088.024.124.045.164.045 1.623.004 3.246.004 4.866.008.204.005.265-.084.289-.272a553.527 553.527 0 0 1 .636-4.949c.164-1.238.328-2.473.504-3.783l.037.064c.16.1.265.16.358.223 2.556 1.792 5.414 2.299 8.45 1.842 2.93-.445 5.495-1.756 7.63-3.824 3.238-3.174 4.925-6.97 4.412-11.545-.372-3.214-1.946-5.815-4.7-7.586-1.897-1.226-3.922-1.758-6.029-1.748zm48.965.582c-.378.004-.756.011-1.133.027-3.154.124-6.27 2.932-6.763 6.065-.365 2.349-.645 4.704-.953 7.048-.361 2.681-.718 5.41-1.075 8.123-.1.781-.195 1.559-.3 2.364h5.486c.137-1.07.271-2.128.408-3.182l1.65-12.533c.045-.341.084-.688.184-1.008.27-.826 1.075-1.398 1.957-1.402 1.09-.008 2.175-.004 3.29-.004l.716-5.442-.023-.037c-1.167 0-2.31-.03-3.444-.02zm-49.736 4.752c2.655-.012 5.006 1.567 5.842 4.136.205.633.27 1.307.357 1.768h.027c-.176 3.233-1.562 5.515-4.123 7.049-1.935 1.158-4.023 1.486-6.183.705-2.681-.95-4.124-3.548-3.852-6.229.33-3.638 2.884-6.43 6.434-7.255a6.867 6.867 0 0 1 1.498-.174zm77.142 16.33v.369h.87v2.396h.453v-2.396l.004.002h.867v-.371h-2.194zm2.754.002v2.763h.454v-2.306h.015l.904 2.306h.29l.91-2.306h.011v2.306h.461v-2.763h-.7l-.813 2.103-.827-2.103h-.705z"></path>
                  </svg>
  
                  <svg viewBox="0 0 128 128" className="skill-icons">
                    <path fill="#F34F29" d="M124.737 58.378L69.621 3.264c-3.172-3.174-8.32-3.174-11.497 0L46.68 14.71l14.518 14.518c3.375-1.139 7.243-.375 9.932 2.314 2.703 2.706 3.461 6.607 2.294 9.993l13.992 13.993c3.385-1.167 7.292-.413 9.994 2.295 3.78 3.777 3.78 9.9 0 13.679a9.673 9.673 0 01-13.683 0 9.677 9.677 0 01-2.105-10.521L68.574 47.933l-.002 34.341a9.708 9.708 0 012.559 1.828c3.778 3.777 3.778 9.898 0 13.683-3.779 3.777-9.904 3.777-13.679 0-3.778-3.784-3.778-9.905 0-13.683a9.65 9.65 0 013.167-2.11V47.333a9.581 9.581 0 01-3.167-2.111c-2.862-2.86-3.551-7.06-2.083-10.576L41.056 20.333 3.264 58.123a8.133 8.133 0 000 11.5l55.117 55.114c3.174 3.174 8.32 3.174 11.499 0l54.858-54.858a8.135 8.135 0 00-.001-11.501z"></path>
                  </svg>
                                  
                  <svg viewBox="0 0 128 128" className="skill-icons">
                    <defs><linearGradient id="a" x1=".741" x2="590.86" y1="3.666" y2="593.79" gradientTransform="matrix(.2169 0 0 .14527 -.16 14.112)" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#cbced0"></stop><stop offset="1" stopColor="#84838b"></stop></linearGradient><linearGradient id="b" x1="301.03" x2="703.07" y1="151.4" y2="553.44" gradientTransform="matrix(.17572 0 0 .17931 -.16 14.112)" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#276dc3"></stop><stop offset="1" stopColor="#165caa"></stop></linearGradient></defs><path fill="url(#a)" fillRule="evenodd" d="M64 100.38c-35.346 0-64-19.19-64-42.863 0-23.672 28.654-42.863 64-42.863s64 19.19 64 42.863c0 23.672-28.654 42.863-64 42.863zm9.796-68.967c-26.866 0-48.646 13.119-48.646 29.303 0 16.183 21.78 29.303 48.646 29.303s46.693-8.97 46.693-29.303c0-20.327-19.827-29.303-46.693-29.303z"></path><path fill="url(#b)" fillRule="evenodd" d="M97.469 81.033s3.874 1.169 6.124 2.308c.78.395 2.132 1.183 3.106 2.219a8.388 8.388 0 0 1 1.42 2.04l15.266 25.74-24.674.01-11.537-21.666s-2.363-4.06-3.817-5.237c-1.213-.982-1.73-1.331-2.929-1.331h-5.862l.004 28.219-21.833.009V41.26h43.844s19.97.36 19.97 19.359c0 18.999-19.082 20.413-19.082 20.413zm-9.497-24.137-13.218-.009-.006 12.258 13.224-.005s6.124-.019 6.124-6.235c0-6.34-6.124-6.009-6.124-6.009z"></path>
                  </svg>

                  <svg viewBox="0 0 128 128" className="skill-icons">
                    <path fill="#75aadb" d="M71.4 38.8c-1.5-.6-3.9-1-6.9-1.1-4.2-.1-9 .4-9.2.5v20c13.3.6 15.5-1.7 15.5-1.7 11.6-5.9 4.3-16.2.6-17.7z"></path><path fill="#75aadb" d="M64 0C28.6 0 0 28.6 0 64s28.6 64 64 64 64-28.6 64-64S99.3 0 64 0zm28.6 89.8H82L64.4 63.5h-9V84h9v5.8H41.5v-5.7l7.6-.1-.1-45.9c-.8-.2-7.5-.8-7.5-.8V32c1 1 7.9 1.2 7.9 1.2 1.6.1 3.9.2 5.2-.1 9.3-1.7 16.4-.4 16.4-.4 14 3.2 14.2 15.8 10.3 22.6-3.5 5.8-10.3 7.2-10.3 7.2l14.4 21.8 7.2-.1v5.6z"></path><path d="M41.595 87.073v-2.726l1.82-.141a59.125 59.125 0 013.752-.144h1.931V37.996l-.938-.127c-.516-.07-2.204-.248-3.752-.397l-2.813-.27v-2.51c0-2.332.027-2.495.39-2.3 1.583.847 10.7 1.07 15.83.388 4.202-.558 11.495-.425 14.035.257 5.483 1.472 9.11 4.646 10.824 9.473.717 2.018.817 5.847.216 8.224-.903 3.572-2.39 6.048-4.865 8.101-1.482 1.23-4.847 3.03-6.145 3.29-.397.079-.772.224-.832.321-.06.098 3.123 5.072 7.075 11.054l7.184 10.876 3.633-.068 3.634-.068V89.8l-5.242-.008-5.24-.007-8.82-13.234-8.817-13.234h-9.178V84.061h9.049V89.8H41.595zm25.158-29.162c3.476-.55 7.265-2.774 8.973-5.263 2.511-3.663 1.537-8.99-2.294-12.547-1.357-1.26-2.205-1.63-4.794-2.1-2.124-.386-8.66-.454-11.706-.122l-1.544.168-.058 10.083-.057 10.082.72.106c1.366.2 8.67-.075 10.76-.407z" fill="#fff" stroke="#fff" strokeWidth=".788"></path>
                  </svg>
  
                  <svg viewBox="0 0 128 128" className="skill-icons">
                    <path fill="#E44D26" d="M19.037 113.876L9.032 1.661h109.936l-10.016 112.198-45.019 12.48z"></path><path fill="#F16529" d="M64 116.8l36.378-10.086 8.559-95.878H64z"></path><path fill="#EBEBEB" d="M64 52.455H45.788L44.53 38.361H64V24.599H29.489l.33 3.692 3.382 37.927H64zm0 35.743l-.061.017-15.327-4.14-.979-10.975H33.816l1.928 21.609 28.193 7.826.063-.017z"></path><path fill="#fff" d="M63.952 52.455v13.763h16.947l-1.597 17.849-15.35 4.143v14.319l28.215-7.82.207-2.325 3.234-36.233.335-3.696h-3.708zm0-27.856v13.762h33.244l.276-3.092.628-6.978.329-3.692z"></path>
                  </svg>
                
                  <svg viewBox="0 0 128 128" className="skill-icons">
                    <path d="M64.004 25.602c-17.067 0-27.73 8.53-32 25.597 6.398-8.531 13.867-11.73 22.398-9.597 4.871 1.214 8.352 4.746 12.207 8.66C72.883 56.629 80.145 64 96.004 64c17.066 0 27.73-8.531 32-25.602-6.399 8.536-13.867 11.735-22.399 9.602-4.87-1.215-8.347-4.746-12.207-8.66-6.27-6.367-13.53-13.738-29.394-13.738zM32.004 64c-17.066 0-27.73 8.531-32 25.602C6.402 81.066 13.87 77.867 22.402 80c4.871 1.215 8.352 4.746 12.207 8.66 6.274 6.367 13.536 13.738 29.395 13.738 17.066 0 27.73-8.53 32-25.597-6.399 8.531-13.867 11.73-22.399 9.597-4.87-1.214-8.347-4.746-12.207-8.66C55.128 71.371 47.868 64 32.004 64zm0 0" fill="#38bdf8"></path>
                  </svg>

                  <svg viewBox="0 0 128 128" className="skill-icons">
                    <path fill="#F0DB4F" d="M1.408 1.408h125.184v125.185H1.408z"></path><path fill="#323330" d="M116.347 96.736c-.917-5.711-4.641-10.508-15.672-14.981-3.832-1.761-8.104-3.022-9.377-5.926-.452-1.69-.512-2.642-.226-3.665.821-3.32 4.784-4.355 7.925-3.403 2.023.678 3.938 2.237 5.093 4.724 5.402-3.498 5.391-3.475 9.163-5.879-1.381-2.141-2.118-3.129-3.022-4.045-3.249-3.629-7.676-5.498-14.756-5.355l-3.688.477c-3.534.893-6.902 2.748-8.877 5.235-5.926 6.724-4.236 18.492 2.975 23.335 7.104 5.332 17.54 6.545 18.873 11.531 1.297 6.104-4.486 8.08-10.234 7.378-4.236-.881-6.592-3.034-9.139-6.949-4.688 2.713-4.688 2.713-9.508 5.485 1.143 2.499 2.344 3.63 4.26 5.795 9.068 9.198 31.76 8.746 35.83-5.176.165-.478 1.261-3.666.38-8.581zM69.462 58.943H57.753l-.048 30.272c0 6.438.333 12.34-.714 14.149-1.713 3.558-6.152 3.117-8.175 2.427-2.059-1.012-3.106-2.451-4.319-4.485-.333-.584-.583-1.036-.667-1.071l-9.52 5.83c1.583 3.249 3.915 6.069 6.902 7.901 4.462 2.678 10.459 3.499 16.731 2.059 4.082-1.189 7.604-3.652 9.448-7.401 2.666-4.915 2.094-10.864 2.07-17.444.06-10.735.001-21.468.001-32.237z"></path>
                  </svg>
                </div>  
              </div>
            </div>

            
            
            <div className="grid grid-cols-2 sm:grid-cols-1 lg:grid-cols-2 gap-4 p-4">
              <div className="hidden lg:block col-span-1">
                <div className="w-full aspect-square overflow-hidden rounded-lg">
                  <img src="/arts/art1.png" alt="Image 1" className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="hidden lg:block col-span-1">
                <div className="w-full aspect-square overflow-hidden rounded-lg">
                  <img src="/arts/art2.png" alt="Image 2" className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="hidden lg:block col-span-1">
                <div className="w-full aspect-square overflow-hidden rounded-lg">
                  <img src="/arts/art5.png" alt="Image 5" className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="col-span-1 hidden md:block">
                <div className="w-full aspect-square overflow-hidden rounded-lg">
                  <img src="/arts/art3.png" alt="Image 3" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>







          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Study Projects</h2>
          <p className="text-gray-300 mb-12">A collection of my recent work and research projects.</p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group relative overflow-hidden rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
              >
                <div className="relative h-[200px] w-full">
                  <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <Link
                    href={project.link}
                    className="inline-flex items-center gap-2 text-green-400 hover:text-green-200"
                  >
                    View Code <ExternalLink className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/10">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">© {new Date().getFullYear()} João Victor. All rights reserved.</p>
        </div>
      </footer>    
    </div>
  );
}

const projects = [
  {
    id: 1,
    title: "Sample and Margin Calculator",
    description: "An Web App built to allows users to calculate samples and errors.",
    image: "/projects/margin-calculator.png?height=300&width=400",
    link: "https://github.com/joaovictor-aragao/calculadora-amostral",
  },
  {
    id: 2,
    title: "Differentiated Cancer Recurrence - EDA",
    description: "Analyze the Differentiated Thyroid Cancer Recurrence dataset using EDA and build PREDICT interface models to classify whether cancer.",
    image: "/projects/thyroid-card.png?height=300&width=400",
    link: "https://github.com/joaovictor-aragao/thyroid-cancer-recurrence",
  },
  {
    id: 3,
    title: "Jira Sprint Dashboard",
    description: "Retrieve all the tasks associated with the current sprint from the Jira Atlassian API, ensuring to include relevant details such as task status, assignee, priority, and estimated completion time.",
    image: "/projects/dashboard-jira.png?height=300&width=400",
    link: "https://github.com/joaovictor-aragao/jira-team-dashboard",
  },
  {
    id: 4,
    title: "Compare KPI's from Binary ML Models",
    description: "Predicting Stock Market Close Prices with Streamlit and Binary ML Models.",
    image: "/projects/kpis-binary.png?height=300&width=400",
    link: "https://github.com/joaovictor-aragao/stock-market-predict",
  },
  {
    id: 5,
    title: "Fogo Cruzado's Dashboard",
    description: "Visualization Fogo Cruzado API by using shiny in R for each state.",
    image: "/projects/fogo-cruzado.png?height=300&width=400",
    link: "https://github.com/joaovictor-aragao/fogocruzado-dash",
  },
  {
    id: 6,
    title: "Portfolio",
    description: "A repository of the projects I worked on or currently working on.",
    image: "/projects/portfolio.png?height=300&width=400",
    link: "https://github.com/joaovictor-aragao/joaovictor",
  },
]