import { Link } from 'react-router-dom';


function Header() {
  return (
    <section>
    <nav className="flex justify-between border-b-2">
      <div>
        <h1 className="text-2xl p-8 pl-14 font-semibold">mini mail</h1>
      </div>
      <div>
        <ul className="flex gap-10 text-xl p-8 pr-14">
          <li><Link to="/">Dashboard</Link></li>
          <li><Link to="/new">New Domain</Link></li>
        </ul>
      </div>
    </nav>
  </section>
  )
}

export default Header