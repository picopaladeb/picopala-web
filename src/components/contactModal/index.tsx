import { useEffect, useState } from 'react'
import { Dialog } from '@reach/dialog'
// Styles
import styles from './index.module.css'
// Utils
import { useAuth } from 'src/contexts/auth'

declare global {
  interface Window {
    HubSpotConversations: any
  }
}

const ContactModal = ({}) => {
  const [textCopiedToClipboard, setTextCopiedToClipboard] = useState(false)
  const [showDialog, setShowDialog] = useState(false)

  const open = () => setShowDialog(true)
  const close = () => setShowDialog(false)
  const address = '1Ngr6bLXmABP2vUxKHZGAYJTkK8sSZFfcc'

  const user = useAuth()

  const onCopyAddress = () => {
    setTextCopiedToClipboard(true)
    navigator.clipboard.writeText(address)
  }

  useEffect(() => {
    if (textCopiedToClipboard) {
      setTimeout(() => {
        setTextCopiedToClipboard(false)
      }, 3000)
    }
  }, [textCopiedToClipboard])

  const onOpenchat = () => {
    if (window) {
      window.HubSpotConversations.widget.open()
    }
  }

  return (
    <>
      <div className="w-40 mx-auto">
        <button
          onClick={open}
          className=" w-full h-10 rounded bg-orange-500 shadow-sm"
        >
          <span className="font-bold text-white">Deposit funds</span>
        </button>
      </div>
      <Dialog
        aria-label="Contact"
        isOpen={showDialog}
        onDismiss={close}
        className={styles.modalWidth}
      >
        <div className="flex justify-end">
          <button className="close-button" onClick={close}>
            <img className="w-4 h-4" src="/close_icon.png" />
          </button>
        </div>
        <div className="pb-6 text-center text-lg">
          Make your BTC deposit to ths address
        </div>
        <div className="flex justify-center items-center pb-10">
          <span className="pr-4 font-bold">{address}</span>
          <button
            className="border p-2 border-slate-400 rounded-lg"
            onClick={onCopyAddress}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"
              />
            </svg>
          </button>
        </div>
        {textCopiedToClipboard && (
          <div className="text-lg text-green-500 pb-10 text-center">
            Address copied to clipboard!
          </div>
        )}
        <div className="text-center text-lg pb-6">
          {`Once you made it, send us the tx and the email you used to signed up (${user?.email})
          using the chat`}
        </div>
        <div className="w-40 mx-auto">
          <button
            onClick={onOpenchat}
            className=" w-full h-10 rounded bg-orange-500 shadow-sm"
          >
            <span className="font-bold text-white">Open chat</span>
          </button>
        </div>
      </Dialog>
    </>
  )
}

export default ContactModal
