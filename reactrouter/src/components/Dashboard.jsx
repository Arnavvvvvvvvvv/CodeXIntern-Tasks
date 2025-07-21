import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div>
      Dashboard: <br />
      <ul>
        <li>
          <NavLink to='/dashboard/courses'>
          Courses
          </NavLink>
        </li>
        <li>
          <NavLink to='/dashboard/mock-test'>
          Mock Tests
          </NavLink>
        </li>
        <li>
          <NavLink to='/dashboard/reports'>
          Reports
          </NavLink>
        </li>
      </ul>
      
      <Outlet/>
    </div>
  )
}

export default Dashboard
