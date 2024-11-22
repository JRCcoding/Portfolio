'use client'

import React, { useState, useEffect, useRef, Suspense } from 'react'
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth'
import { initializeApp } from 'firebase/app'
import { firebaseConfig } from '../firebase'

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)

export default function Chat() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ChatContent />
    </Suspense>
  )
}

function ChatContent() {
  const [userName, setUserName] = useState('')
  const [messages, setMessages] = useState([])
  const [inputMessage, setInputMessage] = useState('')
  const [selectedRoom, setSelectedRoom] = useState('general')
  const [filteredMessages, setFilteredMessages] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const ws = useRef(null)

  useEffect(() => {
    const connectToWebSocket = (room) => {
      if (ws.current) {
        ws.current.close()
      }
      ws.current = new WebSocket('wss://portfolio-ngtb.onrender.com')
      // ws.current = new WebSocket('ws://localhost:8080')

      ws.current.onopen = () => {
        console.log(`WebSocket connection opened for room: ${room}`)
        setIsLoading(false)
        ws.current.send(JSON.stringify({ type: 'joinRoom', chatroom: room }))
      }

      ws.current.onmessage = (event) => {
        const messageData = JSON.parse(event.data)

        if (messageData.type === 'pastMessages') {
          setMessages(messageData.messages)
          setSelectedRoom(messageData.chatroom)
        } else {
          if (messageData.chatroom === selectedRoom) {
            setMessages((prevMessages) => [...prevMessages, messageData])
          }
        }
      }

      ws.current.onclose = () => {
        console.log(`WebSocket connection closed for room: ${room}`)
        setIsLoading(true)
      }

      return () => {
        if (ws.current) {
          ws.current.close()
        }
      }
    }

    if (selectedRoom) {
      connectToWebSocket(selectedRoom)
    }
  }, [selectedRoom])

  useEffect(() => {
    const filtered = messages.filter(
      (messageData) => messageData.chatroom === selectedRoom
    )
    setFilteredMessages(filtered)
  }, [messages, selectedRoom])

  const handleSubmit = (event) => {
    event.preventDefault()

    if (ws.current.readyState === WebSocket.OPEN) {
      ws.current.send(
        JSON.stringify({ userName, message: inputMessage, selectedRoom })
      )
      setInputMessage('')
    } else {
      console.error('WebSocket connection not open yet.')
    }
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserName(user.displayName || user.email)
      } else {
        console.error('Error: User not found')
      }
    })

    return () => unsubscribe()
  }, [])

  const handleSignOut = async () => {
    try {
      await signOut(auth)
    } catch (error) {
      console.error(`Error signing out: ${error}`)
    }
  }

  return (
    <div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
        }}
      >
        {' '}
        <select
          value={selectedRoom}
          onChange={(e) => setSelectedRoom(e.target.value)}
          style={{
            width: '15vw',
            fontFamily: 'monospace',
            color: 'black',
            textAlign: 'center',
          }}
        >
          <option value='general'>General</option>
          <option value='music'>Music</option>
          <option value='misc'>Misc</option>
        </select>
        <button onClick={handleSignOut} style={{ marginLeft: 50 }}>
          Sign Out
        </button>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '80vh',
          width: '100vw',
        }}
      >
        <ul
          style={{
            listStyle: 'none',
            marginTop: 'auto',
            width: '50vw',
            fontFamily: 'monospace',
            fontSize: '20px',
          }}
        >
          {filteredMessages.map((messageData, index) => {
            const { userName: senderName, message } = messageData
            return (
              <li key={index} style={{ margin: 15, marginBottom: 45 }}>
                {isLoading && <div>Loading chat...</div>}{' '}
                {/* Show loading indicator */}
                {!isLoading && (
                  <strong style={{ fontSize: 25 }}>
                    {senderName.replace(/\+/g, ' ')}:{' '}
                  </strong>
                )}
                {message}
              </li>
            )
          })}
        </ul>

        <form
          onSubmit={handleSubmit}
          style={{
            display: 'flex',
            width: '50vw',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        >
          <input
            type='text'
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            style={{
              flexGrow: 1,
              color: 'black',
              fontWeight: 'bold',
              fontFamily: 'monospace',
            }}
          />
          <button type='submit'>Send</button>
        </form>
      </div>
    </div>
  )
}
