import axios from 'axios'
import React, { useState } from 'react'
import { FloatingLabel, Form } from 'react-bootstrap'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import { useNavigate } from 'react-router-dom'
import ImageUpload from '../components/ImageUpload'
import profimage from '../images/face2.png'

const NewBlogpostScreen = ({ history }) => {
  const [submitId, setSubmitId] = useState('jrccode')
  const [submitUser, setSubmitUser] = useState('Josh Claxton')
  const submitUserImage = profimage
  const [title, setTitle] = useState('')
  const today = new Date()
  const splitToday = JSON.stringify(today).split('-')
  const year = splitToday[0]
  const month = splitToday[1]
  const day = splitToday[2].substring(0, 2)
  const submitDate = month + '-' + day + '-' + year.substring(1, 5)
  const [date, setDate] = useState(submitDate)
  const [body, setBody] = useState('')
  const [description, setDescription] = useState('')
  const [uploadedImageUrl, setUploadedImageUrl] = useState('')
  const [uploadedDescription, setUploadedDescription] = useState('')

  const handleImageUpload = (imageUrl) => {
    setUploadedImageUrl(imageUrl)
  }

  const navigate = useNavigate()

  const submitHandler = async (e) => {
    e.preventDefault()
    const blogEntry = {
      submitUser,
      submitUserImage,
      submitId,
      title,
      date,
      body,
      uploadedImageUrl,
      uploadedDescription,
    }
    await axios.post(`/api/blogposts`, blogEntry).then(navigate('/blogs'))
  }
  const EditorModules = {
    toolbar: [
      [{ header: 1 }, { header: 2 }, { size: [] }],
      ['bold', 'italic', 'underline', 'strike', 'code-block', 'blockquote'],
      [{ list: 'ordered' }, { list: 'bullet' }],
      ['link', 'video'],
      ['clean'],
    ],
    clipboard: {
      // toggle to add extra line breaks when pasting HTML:
      matchVisual: false,
    },
  }
  /*
   * Quill editor formats
   * See https://quilljs.com/docs/formats/
   */
  const EditorFormats = [
    'headers',
    'size',
    'bold',
    'italic',
    'underline',
    'strike',
    'code-block',
    'blockquote',
    'list',
    'bullet',
    'link',
    'video',
  ]

  return (
    <div className='mt-20 min-h-screen'>
      <Form
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '15px',
          marginLeft: '10%',
          marginRight: '10%',
        }}
        encType='multipart/form-data'
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-around',
          }}
        >
          <input
            type='text'
            name='title'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder='Title'
            style={{ width: '100%' }}
          />{' '}
        </div>
        <div>
          {/* <textarea
            type='text'
            name='body'
            rows='150'
            style={{ height: '50vh', width: '100%' }}
            value={body}
            onChange={(e) => setBody(e.target.value)}
            placeholder='Content...'
          /> */}
          <ReactQuill
            theme='snow'
            value={body}
            onChange={setBody}
            format={EditorFormats}
            modules={EditorModules}
            style={{ color: 'white' }}
          />
        </div>
        <ImageUpload onImageUpload={handleImageUpload} />
        {uploadedImageUrl && (
          <>
            <FloatingLabel label='Caption'>
              <input
                type='text'
                value={uploadedDescription}
                onChange={(e) => setUploadedDescription(e.target.value)}
                placeholder='Caption'
                style={{ width: '100%' }}
              ></input>
            </FloatingLabel>
          </>
        )}

        <button onClick={submitHandler} style={{ color: 'white' }}>
          Submit
        </button>
      </Form>
    </div>
  )
}

export default NewBlogpostScreen
