import React, { useState, useEffect } from 'react';
import './App.css';



const App = () => {

  const fetchUserIds = async () => {
    return ["john.smith", "sara.lee", "jack.ma"];
  };

  const checkStatus = async (userId) => {
    return Math.random() > 0.8
      ? { status: "offline", id: userId }
      : { status: "online", id: userId };
  };

  const sendEmail = async (userId) => {
    // return if it was sucessfull or not
    return Math.random() > 0.1 ? true : false;
  };

  const [userNickname, setUserNickname] = useState([]);

  /*
    Question 1: 
    Find all online users and send them emails. Render the users for which the emails were successfully sent

    Step 1: Load users OK
    Step 2: Check users online OK
    Step 3: Send email for whom are online OK
    Step 4: Render those which the email was successfully sent
  
  */

  useEffect(() => {
    console.log("oi")
    LoadList()
  }, [])

  function LoadList() {

    var newNickname = []

    const manageOnlineUsers = async () => {
      //Load all users
      const nicknames = await fetchUserIds()

      for (let i = 0; i < nicknames.length; i++) {
        //Set online/offline
        const statusMode = await checkStatus(i)

        //Check the status mode
        if (statusMode.status === 'online') {

          const emailWasSend = await sendEmail(i)

          //Check if the email has been sended to online users
          if (emailWasSend === true) {
            userNickname.push(nicknames[i])
            renderItens()
          }
          else {
            //alert(`Despite ${nicknames[i]} is online. by a error, the email has not been sended to the user. We apologize.`)
          }

        }
      }
    }
    manageOnlineUsers();

    const renderItens = () => {
      console.log(userNickname)
      console.log("Tamanho do array: ", userNickname.length)

      for (let i = 0; i < userNickname.length; i++) {
        console.log(`Posição ${i}: ${userNickname[i]}`)
        return 'oi'
      }

    }

    return <li>{renderItens()}</li>

  }

  return (
    <div className="App">
      <div className="App-header">
        <div>
          All online users that introductions were sucessfully sent
          <ul>
            <li>Student 1</li>
            <li>Student 2</li>
            <li>Student 3</li>
            {console.log("NA PRINCIPAL", userNickname)}
            {userNickname && userNickname.map((username) => <li>{username}</li>)}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
