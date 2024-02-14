import React from 'react'
import { Avatar } from '@mui/material'
export default function AvatarUi({img}) {
  return (
    <div className="Avarat__body">
      <Avatar src={img}/>
    </div>
  )
}
