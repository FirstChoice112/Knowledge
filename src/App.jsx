function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-300 rounded-lg shadow">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <MainContent />
      </div>
    </div>
  );
}

export default App;

function Header() {
  return (
    <header>
      <h1 className="flex text-3xl font-bold items-center justify-center h-16 border-b-2 border-gray-500 bg-gray-400 text-white rounded-t-lg shadow">
        Knowledge
      </h1>
    </header>
  );
}

function Sidebar() {
  return (
    <aside className="w-64 bg-gray-700 text-white p-4 rounded-lg shadow">
      <nav>
        <ul>
          <li className="mb-2">
            <a href="#home">JavaScript</a>
          </li>
          <li className="mb-2">
            <a href="#about">React</a>
          </li>
          <li className="mb-2">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
function MainContent() {
  return (
    <main className="flex-1 p-4 rounded-lg shadow bg-gray-200">
      <h2 className="text-2xl font-semibold items-center ">
        Main Content Area
      </h2>
      <p>This is where the main content goes.</p>
    </main>
  );
}
