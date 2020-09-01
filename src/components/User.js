import React from 'react';

import '../App.css';

class User extends React.Component {
  state = {
    user: []
  }

  componentDidMount() {
    const id = this.props.location.state.user;
    fetch(`http://127.0.0.1:8000/api/users/${id}`)
    .then(res => res.json())
    .then((data) => {
      this.setState({ user: data })
    })
    .catch(console.log)
  }
  
  render() {
    // const isObject = function(val){
    //   if(val === null){
    //     return false;
    //   }
    //   return (typeof val === 'object');
    // }

    // const objProps = function(obj) {
    //   for (let val in obj){
    //     if (isObject(obj[val])){
    //       objProps(obj[val]);
    //     } else {
    //       console.log(val, obj[val]);
    //     }
    //   }
    // }
    // console.log(this.state.user);
    // console.log(objProps(this.state.user.userData));
  
    let user = {
      notifications: []
    };
    if(this.state.user.userData){
      user = this.state.user.userData; 
    }

    let notifications = [
      data => {}
    ];

    if(user.notifications){
      notifications = user.notifications
    }

    // if (!this.state.notifications) return null;
  //   user.notifications.forEach(obj => {
  //     Object.entries(obj).forEach(([key, value]) => {
  //         console.log(value);
  //     });
  //     console.log('-------------------');
  // });



  const notifArray = [];

  for (let { id, type, notifiable_type, notifiable_id, data: { name, company, user_id, note }, read_at, created_at, updated_at} of user.notifications) {
    notifArray.push([id, type, notifiable_type, notifiable_id, name, company, user_id, note, read_at, created_at, updated_at])
  }

  console.log(notifArray);

    let t = String(user.email_verified_at).split(/[- :]/);



    // const sampleState = {
    //   name: 'Michael',
    //   age: 36,
    //   location: {
    //     state: 'OK',
    //     city: 'Edmond',
    //     postal: '73012'
    //   },
    //   relatives: {
    //     wife: {
    //     name: 'Shelley'
    //     }
    //   }
    //  }

    //  const { age, location: { city, state }, relatives: { wife: { name } } } = sampleState
    //  console.log(age);


     const notif = {
      id: "f50c7b34-aaaf-48e4-99dc-f1704f89dbe3",
      type: "App\\Notifications\\ReferralCreated",
      notifiable_type: "App\\User",
      notifiable_id: 1,
      data: {
      name: "Jimmer Fredette",
      company: "Sacramento Kngs",
      user_id: 1,
      note: "Bench Player"
      },
      read_at: null,
      created_at: "2020-09-01T12:29:36.000000Z",
      updated_at: "2020-09-01T12:29:36.000000Z"
      }

     const { id, type, notifiable_type, notifiable_id, data: { name, company, user_id, note }, read_at, created_at, updated_at} = notif;
     console.log(note);


    return (
      <div className="container"> 
        <header className="App-header">
          <h1 className="App-title">{user.name}</h1>
        </header>
       <p>Email: {user.email}</p>
    <p>Member Since: {t[1]} - {t[0]}</p>

    <p>All Notifications: {this.state.user.notifications_count}</p>
    <p>Unread Notifications: {this.state.user.unread_notifications_count}</p>
    <p>Read Notifications: {this.state.user.read_notifications_count}</p>


    { notifArray.map((notif, index) => (
        <div key={index} className="card">
          <div className="card-body">
            <h5 className="card-title">{notif[4]}</h5>
            <h6 className="card-subtitle mb-2 text-muted">{ notif[1] }</h6>
            <p className="card-text">{notif[7]}</p>
            <button>Mark as read</button>
          </div>
        </div>
      )) } 
      
      </div>
    )
  }
}

export default User;