import React from 'react';
import { Switch,Route} from 'react-router-dom';

import './App.css';
import Homepage from './Page/homepage/homepage.component';
import ShopPage from './Page/shop/shop.component';
import Header from './component/header/header.component';

import {connect} from 'react-redux';
import SignInAndSignUp from './Page/sign-in-and-sign-up/sign-in-and-sign-up.component'
import {auth,createUserProfileDocument } from './firebase/firebase.utils';
import {setCurrentUser } from './redux/user/user.action';

class App extends React.Component {
  
  unsubscribeFromAuth = null

  componentDidMount() {
    const {setCurrentUser} = this.props;

      this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth=> {
        if(userAuth){
          const userRef = await createUserProfileDocument(userAuth);

          userRef.onSnapshot(snapShot=>{
            
            setCurrentUser( {
                id: snapShot.id,
                ...snapShot.data()
            });
           
          } );
    
        }
        else{
          setCurrentUser(userAuth);
        }
        
        
      } );

  }
  componentWillUnmount(){
    this.unsubscribeFromAuth();

  }  
 
  render() {
      return (
      <div>  
        <Header />

        <Switch >
          <Route exact path = '/' component = {Homepage} />
          <Route  path = '/shop' component = {ShopPage} />
          <Route  path = '/signin' component = {SignInAndSignUp} />
        </Switch>
      </div>
    );
  }
  
};
const mpaDispatcthToProps = dispatcth => ({
  setCurrentUser: user => dispatcth(setCurrentUser (user))
});

export default connect(null,mpaDispatcthToProps) (App);
