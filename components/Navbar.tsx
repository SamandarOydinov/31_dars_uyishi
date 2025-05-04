const Navbar = () => (
  <header className="bg-white shadow p-4 flex justify-between items-center">
    <h1 className="text-xl font-semibold">School Dashboard</h1>
    <div className="flex items-center space-x-4">
      <span>User Name</span>
      <img src="/profile.jpg" alt="User" className="w-8 h-8 rounded-full" />
    </div>
  </header>
);

export default Navbar;
