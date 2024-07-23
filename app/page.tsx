import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h2>Hello This application running through Docker</h2>
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">

        <div class="navbar">
        <div class="logo">
        <img src="images/image 158.png" alt="Hasper" class="Hasper"/>
        <p>Hasper BrandLabs</p>
        </div>
        <div class="links">
            <a href="#">Home</a>
            <a href="#">About Us</a>
            <a href="#">Our Process</a>
            <a href="#">Products</a>
            <a href="#">Gallery</a>
            <a href="#"><button>Contact Us</button></a>
        </div>
    </div>
    <div class="hero">
        <div class="content">
            <h1>Fresh From the Farm</h1> 
            <p>We deliver premium frozen seafood, fruits & <br/>
                 vegetables fresh from our fields to your doorstep.</p>
            <a href="#"><button class="contact">Contact Us</button></a>
            <a href="#" class="View">View Products
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 25 12" stroke-width="1" stroke="currentColor" class="size-6"><path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" /></svg>
            </a>
        </div>
        <img src="images/9372013 1.png" alt="image1" class="image1">
        
          
    </div>
      
      </div>
    </main>
  );
}
