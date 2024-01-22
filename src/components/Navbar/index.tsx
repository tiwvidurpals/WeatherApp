const Navbar = () => {
  return (
    <div className="flex flex-wrap justify-evenly bg-blue-400 p-1">
      <button className="text-center text-lg text-yellow-200 h-10 w-32 bg-slate-400 rounded-md shadow-md hover:bg-slate-500 m-2">
        Today
      </button>
      <button className="text-center text-lg text-yellow-200 h-10 w-32 bg-slate-400 rounded-md shadow-md hover:bg-slate-500 m-2">
        Tomorrow
      </button>
      <button className="text-center text-lg text-yellow-200 h-10 w-32 bg-slate-400 rounded-md shadow-md hover:bg-slate-500 m-2">
        Day
      </button>
    </div>
  );
};

export default Navbar;
