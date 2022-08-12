import Swal from 'sweetalert2'

export function useSweetAlert() {
  const success = async (title: string, message: string) => {
    await Swal.fire({
      title,
      text: message,
      icon: 'success',
      confirmButtonColor: '#151515'
    })
  }

  return { success }
}