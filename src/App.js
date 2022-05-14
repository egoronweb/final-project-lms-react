import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './components/homepage/homepage.component';
import UserLogin from './components/users/users-login/users-login.component';
import About from './components/about-and-contact-us/about/about.component';
import ContactUs from './components/about-and-contact-us/contact-us/contact-us.component';
import UserRegister from './components/users/users-register/users-register.component';
import UserDashboard from './components/users/user-dashboard/user-dashboard.component';
import ListOfBooks from './components/books/books-list/books-list.component';
import BorrowedBooks from './components/books/borrowed-books/borrowed-books.component';
import UserInbox from './components/inbox/user-inbox/user-inbox/user-inbox.component';
import UserCreateMessage from './components/inbox/user-inbox/user-create-message/user-create-message.component';
import AdminLogin from './components/admin/admin-login/admin-login.component';
import AdminDashboard from './components/admin/admin-dashboard/admin-dashboard.component';
import BooksManagement from './components/books/books-management/books-management.component';
import UserManagement from './components/users/users-management/users-management.component';
import EditUser from './components/users/users-management/edit-user.component';
import AdminInbox from './components/inbox/admin-inbox/admin-inbox.component';

import './App.css';

function App() {
  return (
    <div className="App">
    

       <Router>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact-us" component={ContactUs} />
            <Route exact path="/user-login" component={UserLogin} />
            <Route exact path="/admin-login" component={AdminLogin} />
            <Route exact path="/user-register" component={UserRegister} />
            <Route exact path="/user-dashboard" component={UserDashboard} />
            <Route exact path="/user-dashboard/list-of-books" component={ListOfBooks} />
            <Route exact path="/user-dashboard/borrowed-books" component={BorrowedBooks} />
            <Route exact path="/user-dashboard/user-inbox" component={UserInbox} />
            <Route exact path="/user-dashboard/create-message" component={UserCreateMessage} />
            <Route exact path="/admin-dashboard" component={AdminDashboard} />
            <Route exact path="/admin-dashboard/books-management" component={BooksManagement} />
            <Route exact path="/admin-dashboard/users-management" component={UserManagement} />
            <Route exact path="/admin-dashboard/users-management/edit/:id" component={EditUser} />
            <Route exact path="/admin-dashboard/admin-inbox" component={AdminInbox} />
          </Switch>
        </Router>

    </div>
  );
}

export default App;
