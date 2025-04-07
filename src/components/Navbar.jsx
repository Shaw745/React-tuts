const Navbar = () => {
  return (
    <nav className=" shadow-lg sticky top-0   bg-white z-10">
      <div className="container flex items-center justify-between px-2.5 h-[80px]">
        <h1 className="text-2xl italic font-bond font-serif">Carxx</h1>
        <div className="flex gap-5 text-sm md:text-lg font-semibold">
          <a href="#">Home</a>
          <a href="#">Shop</a>
          <button className="bg-black text-white rounded-sm h-[40px] w-[120px] cursor-pointer">
            Shop Now
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
