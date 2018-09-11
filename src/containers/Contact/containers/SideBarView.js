import React from 'react'

import MessageListView from './MessageListView'
import SideBarHeader from './SideBarHeader'

export default () => {
  return (
        <div className='contact-sidebar-container'>
            <SideBarHeader />
            <MessageListView />
        </div>
  )
}
