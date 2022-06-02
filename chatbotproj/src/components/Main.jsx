import ChatBot from 'react-simple-chatbot';
import React from 'react';


const Main = () => {
    let saveData = () =>{
        localStorage.setItem('Object 1', "test object");
      }

    
    return (
    <ChatBot
      steps={[
        {
          id: 'hello-world',
          message: 'Hello World!',
          end: true,
        },
      ]}
      />

    );
}
export default Main;