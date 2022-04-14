import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/header-and-footer/header/header.component';
import Footer from './components/header-and-footer/footer/footer.component';
import UserLogin from './components/users/users-login/users-login.component';
import About from './components/about-and-contact-us/about/about.component';
import ContactUs from './components/about-and-contact-us/contact-us/contact-us.component';
import UserRegister from './components/users/users-register/users-register.component';
import UserDashboard from './components/users/user-dashboard/user-dashboard.component';
import ListOfBooks from './components/books/books-list/books-list.component';
import BorrowedBooks from './components/books/borrowed-books/borrowed-books.component';
import UserInbox from './components/inbox/user-inbox/user-inbox.component';
import AdminLogin from './components/admin/admin-login/admin-login.component';
import AdminDashboard from './components/admin/admin-dashboard/admin-dashboard.component';
import BooksManagement from './components/books/books-management/books-management.component';
import UserManagement from './components/users/users-management/users-management.component';
import AdminInbox from './components/inbox/admin-inbox/admin-inbox.component';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />

       <Router>
          <Switch>
            <Route exact path="/" component={UserLogin} />
            <Route path="/about" component={About} />
            <Route path="/contact-us" component={ContactUs} />
            <Route path="/admin-login" component={AdminLogin} />
            <Route path="/user-register" component={UserRegister} />
            <Route path="/user-dashboard" component={UserDashboard} />
            <Route path="/user-dashboard/list-of-books" component={ListOfBooks} />
            <Route path="/user-dashboard/borrowed-books" component={BorrowedBooks} />
            <Route path="/user-dashboard/user-inbox" component={UserInbox} />
            <Route path="/admin-dashboard" component={AdminDashboard} />
            <Route path="/admin-dashboard/books-management" component={BooksManagement} />
            <Route path="/admin-dashboard/user-management" component={UserManagement} />
            <Route path="/admin-dashboard/admin-inbox" component={AdminInbox} />
          </Switch>
        </Router>

    <Footer />
    </div>
  );
}

export default App;
