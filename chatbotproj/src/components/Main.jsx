import ChatBot from 'react-simple-chatbot';
import React from 'react';


const Main = () => {
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