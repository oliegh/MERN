import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../context/AuthContext"
import { useHttp } from "../hooks/http.hoock"
import {useHistory} from 'react-router-dom'

export default () => {
  const history = useHistory()
  const auth = useContext(AuthContext)
  const {request} = useHttp()
  const [link, setLink] = useState('')

  useEffect(() => {
    window.M.updateTextFields()
  })

  const pressHandler = async event => {
    if ( event.key === 'Enter') {
      try {
      const data = await request('/api/link/generate', 'POST', {from: link}, {
        Authorization: `Bearer ${auth.token}`
      })
      history.push(`/detail/${data.link._id}`)
      } catch (e) {}
    }
  }


  return (
    <div className="row">
      <div className="col s8 offset-s2 mt-2">
        <div className="input-field">
          <input
            placeholder="Вставьте ссылку"
            id="link"
            type="text"
            value={link}
            onChange={e => setLink(e.target.value)}
            onKeyPress={pressHandler}
          />
          <label htmlFor="email">Email</label>
        </div>
      </div>
    </div>
  )
}