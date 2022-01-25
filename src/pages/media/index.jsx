import React, { useState, useEffect } from 'react';
import img from '../../static/img-1.jpg'
import myAjax from '../../utils/ajax'
function Media() {
  const [list, setList] = useState([
    {
      url: img,
      text: 'test'
    }
  ]);
  useEffect(() => {
    getList()
  })
  function getList() {
    myAjax(url).then((res) => {
      setList(res.data)
    }).catch((error) => {
      throw (error)
    })
  }
  return (<div className='media'>
    {
      list.map(item => {
        <div className='container'>
          <img src={item.url} alt="" className='textImg' />
          <p className='testText'>{item.text}</p>
        </div>
      })
    }
  </div>);
}


export default Media;
