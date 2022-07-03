import { useState } from 'react'
import { Dialog } from '@reach/dialog'

const ContactModal = ({}) => {
  const [showDialog, setShowDialog] = useState(false)
  const open = () => setShowDialog(true)
  const close = () => setShowDialog(false)

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
      <Dialog aria-label="Contact" isOpen={showDialog} onDismiss={close}>
        <div className="flex justify-end">
          <button className="close-button" onClick={close}>
            x
          </button>
        </div>
        <div className="pb-6">
          Get in touch with us to make your first deposit!
        </div>
        <div className="text-center">
          <a
            className="h-10 rounded border border-slate-400 px-4 py-2 flex items-center justify-center"
            href={`https://wa.me/5491156217620`}
            rel="noreferrer"
            target="_blank"
          >
            <span className="pr-2">
              <img className="w-6 h-6" src="/logowhatsapp.svg" />
            </span>
            <span>11-3210-2415</span>
          </a>
        </div>
      </Dialog>
    </>
  )
}

export default ContactModal
