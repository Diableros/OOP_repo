import React from 'react'
import { Modal, ModalProps } from 'antd'

type ModalState = ModalProps & {
  content?: string
}

interface ModalContext {
  showModal: (content: React.ReactNode, props?: ModalProps) => Promise<void>
  hideModal: () => void
}

const ModalContext = React.createContext<ModalContext | null>(null)

export const useModal = () => React.useContext(ModalContext)

export const ModalProvider = ({ children }: { children: React.ReactNode }) => {
  const [modalProps, setModalProps] = React.useState<ModalState>(null)
  const [isVisible, setIsVisible] = React.useState<boolean>(false)
  const refResolve = React.useRef<(value?: void | PromiseLike<void>) => void>(
    () => null
  )

  const refReject = React.useRef<() => void>(() => null)

  const showModal = (content, props = {}): Promise<void> => {
    refReject.current()

    setModalProps({ ...props, content })
    setIsVisible(true)

    return new Promise<void>((resolve, reject) => {
      refResolve.current = resolve
      refReject.current = reject
    })
  }

  const hideModal = () => {
    setIsVisible(false)
    setModalProps(null)
  }

  const onCancel = () => {
    hideModal()
    refReject.current()
  }

  const onConfirm = () => {
    hideModal()
    refResolve.current()
  }

  const modalContent = modalProps?.content ?? null

  return (
    <ModalContext.Provider value={{ showModal, hideModal }}>
      {children}
      <Modal
        open={isVisible}
        onCancel={onCancel}
        onOk={onConfirm}
        {...modalProps}
        cancelText='destroy'
      >
        {modalContent}
      </Modal>
    </ModalContext.Provider>
  )
}
