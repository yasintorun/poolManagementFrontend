import Swal from "sweetalert2"

export function DeleteAlert(header, text, callBack) {
  Swal.fire({
    title: header + ' silinecektir. Onaylıyor musun?',
    text: text,
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Evet, Sil!',
    cancelButtonText: "Vazgeç"
  }).then((result) => {
    if (result.isConfirmed) {
      if (!!callBack) {
        callBack().then(result => {
          Swal.fire(
            'Silindi!',
            result?.data?.message,
            'success'
          )
        })
      } else {
        return true
      }

    } else if (result.dismiss === Swal.DismissReason.cancel) {
      Swal.fire(
        'İptal Edildi',
        header + ' silinmedi',
        'error'
      )
    }
  })
}

export function InfoAlert(header, text, callBack) {
  Swal.fire({
    title: header,
    text: text,
    icon: 'info',
    confirmButtonText: 'Anladım',
  }).then((result) => {
    if (result.isConfirmed) {
      callBack && callBack()
    }
  })
}