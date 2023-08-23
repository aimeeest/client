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
            <img src="https://www.keyboardco.com/product-images/filco_minila_air_bluetooth_cream_and_green_keyboard_us_large_7.jpg" alt="broken" className='w-full h-auto object-cover' style={{ aspectRatio: '4/5' }}/>
          </div>
          <div>
            <time className='text-[0.8rem] text-[#d2bcb6]'>August 23, 2023 4:00pm</time>
            <h2 className="font-bold font-sans py-2">The world's first double function key Bluetooth keyboard!</h2>
            <p className="text-sm">Majestouch MINILA Air is the MINI LAyout version of Majestouch and we've made it as compact as possible.</p>
            
          </div>
        </div>

        <div id="post2" className="p-6 lg:p-14">
          <div className="rounded-lg overflow-hidden mb-4">
            <img src="https://img.vntg.com/16057259957997/uten-silo-i-wall-organizer-by-dorothee-becker-for-design-m-1969.jpg" alt="broken" className='w-full h-auto object-cover' style={{ aspectRatio: '4/5' }}/>
          </div>
          <div>
            <time className='text-[0.8rem] text-[#d2bcb6]'>August 23, 2023 4:00pm</time>
            <h2 className="font-bold font-sans py-2">Dorothee Maurer Becker: Uten.silo wall organizer</h2>
            <p className="text-sm">Read in White Chicks tone: Let’s go (grocery) shopping! Read in White Chicks tone: Let’s go (grocery) shopping!</p>
          </div>
        </div>

        <div id="post3" className="p-6 lg:p-14">
          <div className="rounded-lg overflow-hidden mb-4">
            <img src="https://www.clubmonaco.com/dw/image/v2/BGJB_PRD/on/demandware.static/-/Sites-masterCatalog_ClubMonaco/default/dw1675e482/hi-res/cm-1432245_lifestyle.jpg?sw=1068&sh=1436&sfrm=jpg" alt="broken" className='w-full h-auto object-cover' style={{ aspectRatio: '4/5' }}/>
          </div>
          <div>
            <time className='text-[0.8rem] text-[#d2bcb6]'>August 23, 2023 4:00pm</time>
            <h2 className="font-bold font-sans py-2">Club Monaco Emma sweater - 100% cashmere</h2>
            <p className="text-sm">After 10 years Ida has risen from the ashes of her blog to share something with you once again..</p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
