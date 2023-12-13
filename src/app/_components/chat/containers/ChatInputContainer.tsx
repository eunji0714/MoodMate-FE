'use client'

import { ChangeEvent, useState } from 'react'
import Icons from '@/_components/common/Icons'
import { send } from '@/_ui/IconsPath'
import { useRecoilState } from 'recoil'
import useWebsocket from '@/_hooks/useWebSocket'
import { realTimeMessagesState } from '@/_atom/chat'
import Input from '../../common/Input'

interface ChatInputContainerProps {
  roomId: number
  userId: number
}

const ChatInputContainer = ({ roomId, userId }: ChatInputContainerProps) => {
  const [inputVal, setInputVal] = useState<string>('')
  const [realTimeMessages, setRealTimeMessages] = useRecoilState(
    realTimeMessagesState,
  )
  const { sendMessage } = useWebsocket(roomId)

  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setInputVal(() => e.target.value)
  }

  const handleSendMessage = () => {
    const messageTosend = {
      userId,
      roomId,
      content: inputVal.trim(),
    }

    if (inputVal.trim() === '') {
      alert('메시지를 입력해주세요.')
      return
    }
    const messageToStore = {
      messageId: String(new Date()),
      content: inputVal.trim(),
      userId,
      createdAt: String(new Date()),
      isRead: true,
    }

    setRealTimeMessages((prev) => [...prev, messageToStore])
    sendMessage(messageTosend)
    setInputVal('')
  }

  return (
    <div className="relative flex w-full justify-center h-10">
      <Input
        sort="chat"
        onClick={() => {}}
        className="bg-onepink rounded-3xl px-3 text-darkgray border-none outline-none"
        onFocus={() => {}}
        onChange={(e) => onChangeInput(e)}
        onEnterPress={handleSendMessage}
        textValue={inputVal || ''}
        placeholder="메시지를 입력하세요."
      />
      <div className="absolute flex justify-center items-center right-[12%] top-[12%] bg-threepink h-[34px] w-[34px] rounded-full cursor-pointer">
        <Icons name={send} onClick={handleSendMessage} />
      </div>
    </div>
  )
}

export default ChatInputContainer
