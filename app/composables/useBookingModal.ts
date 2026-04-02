export const useBookingModal = () => {
  const isOpen = useState<boolean>('bookingModalState', () => false)

  const openModal = () => {
    isOpen.value = true
    // Prevent background scrolling when modal is open
    if (typeof document !== 'undefined') {
      document.body.style.overflow = 'hidden'
    }
  }

  const closeModal = () => {
    isOpen.value = false
    // Restore background scrolling
    if (typeof document !== 'undefined') {
      document.body.style.overflow = ''
    }
  }

  return {
    isOpen,
    openModal,
    closeModal
  }
}
