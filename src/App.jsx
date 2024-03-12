import { Route, Routes } from 'react-router-dom'

import DashLayout from './components/DashLayout'
import EditNote from './features/notes/EditNote'
import EditUser from './features/users/EditUser'
import Layout from './components/Layout'
import Login from './features/auth/Login'
import NewNote from './features/notes/NewNote'
import NewUserForm from './features/users/NewUserForm'
import NotesList from './features/notes/NotesList'
import Public from './components/Public'
import UsersList from './features/users/UsersList'
import Welcome from './features/auth/Welcome'

function App() {

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Public />} />
        <Route path="login" element={<Login />} />

        <Route path="dash" element={<DashLayout />}>
          <Route index element={<Welcome />} />

          <Route path="users">
            <Route index element={<UsersList />} />
            <Route path=":id" element={<EditUser />} />
            <Route path="new" element={<NewUserForm />} />
          </Route>

          <Route path="notes">
            <Route index element={<NotesList />} />
            <Route path=":id" element={<EditNote />} />
            <Route path="new" element={<NewNote />} />
          </Route>


        </Route>


      </Route>{/* End Dash */}


    </Routes>

  )
}

export default App
