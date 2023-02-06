import LogoutButton from './LogoutButton'
import RouteList from './RouteList'

const headerStyle = {
  width: '100%',
  backgroundColor: 'rgb(71,206,247)'
}
const navStyle = {
  display: 'flex',
  margin: '0 auto',
  width: '500px',
  justifyContent: 'center',
  alignItems: 'center'
}

export default function NvaigationBar() {
  return (
    <header style={headerStyle}>
      <nav style={navStyle}>
        <RouteList />
        <LogoutButton />
      </nav>
    </header>
  )
}
