import React from 'react'

const Footer = () => {
  return (

    <footer data-aos="fade-up" data-aos-duration="2000" 
    class=" text-gray-300 bg-green-300/30 shadow-lg shadow-white rounded-md px-5 pt-30 pb-20">
  <div class="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">

```
{/* <!-- About --> */}
<div>
  <h2 class="text-xl font-semibold text-white mb-3">About Me</h2>
  <p class="text-sm leading-relaxed">
    I’m a passionate web developer focused on building modern, responsive,
    and user-friendly applications. I enjoy solving real-world problems
    through clean and efficient code.
  </p>
</div>

{/* <!-- Quick Links --> */}
<div>
  <h2 class="text-xl font-semibold text-white mb-3">Quick Links</h2>
  <ul class="space-y-2 text-sm">
    <li><a href="#home" class="hover:text-white transition">Home</a></li>
    <li><a href="#aboutme" class="hover:text-white transition">About</a></li>
    <li><a href="#projects" class="hover:text-white transition">Projects</a></li>
    <li><a href="#contacts" class="hover:text-white transition">Contact</a></li>
  </ul>
</div>

{/* <!-- Contact --> */}
<div>
  <h2 class="text-xl font-semibold text-white mb-3">Contact</h2>
  <p class="text-sm">Email: helalskr77@gmail.com</p>
  <p class="text-sm">Location: Bangladesh</p>

  <div class="flex gap-4 mt-4">
    <a href="https://github.com/helal366" target="_blank" class="hover:text-white transition">GitHub</a>
    <a href="https://www.linkedin.com/in/helal-sarker/" target="_blank" class="hover:text-white transition">LinkedIn</a>
    <a href="https://x.com/Helal568768" target="_blank" class="hover:text-white transition">Twitter</a>
  </div>
</div>
```

  </div>

  {/* <!-- Bottom --> */}

  <div class="border-t border-gray-700 mt-8 pt-6 text-center text-sm">
    <p>© 2026 All Rights Reserved. Built with ❤️ by Md Al Helal Sarker</p>
  </div>
</footer>

  )
}



export default Footer