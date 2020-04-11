import swal from 'sweetalert';

export function DeleteFunctionContext(e){
    swal({
        title: "Emin Misiniz?",
        text: "Seçtiğiniz içeriğe ait tüm veriler silinecek!",
        icon: "warning",
        closeOnClickOutside: true,
        buttons: ["Hayır!", "Evet"],
        //dangerMode: true,
    })
    .then(willDelete=>{
        if (willDelete) {
            swal("Silindi!", "Silme İşlemi Başarılı", "success");
            
        }
    });   
}

export function onDeleteUser(dispatch,e)
{
    //const {id} id yide alıp göndereceğiz
    dispatch({type:"DELETE_USER"})
}