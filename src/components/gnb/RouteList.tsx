import { navRoutes } from 'consts/route'
import { Link } from 'react-router-dom'

export default function RouteList() {
  return (
    <ul style={navUlStyle}>
      {navRoutes.map((route) => {
        return (
          <li key={route.name} style={liStyle}>
            <Link to={route.path} style={linkStyle}>
              {route.name}
            </Link>
          </li>
        )
      })}
    </ul>
  )
}

const navUlStyle = {
  display: 'flex'
}
const liStyle = {
  listStyle: 'none',
  margin: '0 20px'
}
const linkStyle = {
  textDecoration: 'none',
  color: 'rgb(240,240,240)',
  fontSize: '20px',
  fontWeight: 'bold'
}
