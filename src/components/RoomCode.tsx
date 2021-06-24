
import { Toaster } from 'react-hot-toast';

import copyImg from '../assets/images/copy.svg'
import { SuccessNotification } from '../components/notifications/SuccessNotification'
import '../styles/room-code.scss'

type RoomCodeProps = {
  code: string;
}

export function RoomCode(props: RoomCodeProps) {
  function copyRoomCodeToClipBoard() {
    navigator.clipboard.writeText(props.code)
    SuccessNotification('Copiado com sucesso')

  }
  return (

    <>
      <Toaster />
      <button className="room-code" onClick={copyRoomCodeToClipBoard}>
        <div>
          <img src={copyImg} alt="Copy room code" />
        </div>
        <span>Sala # {props.code}</span>
      </button>
    </>
  )
}