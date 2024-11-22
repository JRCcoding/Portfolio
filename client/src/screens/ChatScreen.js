import React from 'react'
import Chat from '../components/Chat'

const ChatScreen = () => {
  return (
    <div
      style={{
        margin: '5% 5% 15% 5%',
        paddingTop: 15,
        paddingBottom: 25,
        border: '1px solid #007bff',
        borderRadius: '5%',
      }}
    >
      <h1 style={{ textAlign: 'center' }}>Chat</h1>
      <Chat />
    </div>
  )
}

export default ChatScreen
