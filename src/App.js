import './App.css';

function App() {
  return (
    <main className='p-8 max-w-full m-4'>
      <header className='flex justify-between mb-6'>
        <a href="/" className="font-logo text-lg">aimee atelier</a>
        <nav className="flex gap-10 text-sm">
          <a href="/" className="login">Login</a>
          <a href="/" className="register">Register</a>
        </nav>
      </header>

      <div className='grid md:grid-cols-3 gap-4 lg:mx-16'>
        <div id="post1" className="p-6 lg:p-14">
          <div className="rounded-lg overflow-hidden mb-4">
            <img src="https://oblotzky.industries/cdn/shop/products/gmk_umka_keyboard_bauer_persp_right_close.jpg?v=1612530718" alt="broken" className='w-full h-auto object-cover' style={{ aspectRatio: '4/5' }}/>
          </div>
          <div>
            <time className='text-[0.8rem] text-[#e6e3d2]'>August 23, 2023 4:00pm</time>
            <h2 className="font-bold font-sans py-2 text-xl">The world's first double function key Bluetooth keyboard!</h2>
            <p className="text-sm">Majestouch MINILA Air is the MINI LAyout version of Majestouch and we've made it as compact as possible.</p>
            
          </div>
        </div>

        <div id="post2" className="p-6 lg:p-14">
          <div className="rounded-lg overflow-hidden mb-4">
            <img src="https://assets.catawiki.com/image/pr:cw_ldp_l/plain/assets/catawiki/assets/2017/10/11/0/b/9/0b9ca923-1ff0-4795-9edf-fd0c1c479b39.jpg" alt="broken" className='w-full h-auto object-cover' style={{ aspectRatio: '4/5' }}/>
          </div>
          <div>
            <time className='text-[0.8rem] text-[#e6e3d2]'>August 23, 2023 4:00pm</time>
            <h2 className="font-bold font-sans py-2 text-xl">Dorothee Maurer Becker: Uten.silo wall organizer</h2>
            <p className="text-sm">Read in White Chicks tone: Let’s go (grocery) shopping! Read in White Chicks tone: Let’s go (grocery) shopping!</p>
          </div>
        </div>

        <div id="post3" className="p-6 lg:p-14">
          <div className="rounded-lg overflow-hidden mb-4">
            <img src="https://www.cashmerism.com.au/media/catalog/product/cache/1/small_image/508x705/9df78eab33525d08d6e5fb8d27136e95/8/t/8tp0230_oatmeal_6.jpg" alt="broken" className='w-full h-auto object-cover' style={{ aspectRatio: '4/5' }}/>
          </div>
          <div>
            <time className='text-[0.8rem] text-[#e6e3d2]'>August 23, 2023 4:00pm</time>
            <h2 className="font-bold font-sans py-2 text-xl">Club Monaco Emma sweater - 100% cashmere</h2>
            <p className="text-sm">After 10 years Ida has risen from the ashes of her blog to share something with you once again..</p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
