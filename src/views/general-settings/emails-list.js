import React, {useState,useEffect} from "react"; 
import "react-responsive-modal/styles.css";
import { deleteEmailList,getemailsList } from "../../actions/generalSettingsAction";
import { useSelector, useDispatch } from "react-redux";
import Loader from "src/views/notifications/alerts/Loader";
import Message from "src/views/notifications/alerts/Message";
import { CForm,CButton, CFormGroup, CCol, CLabel, CRow, CModal,CModalBody,CModalFooter, CModalHeader} from "@coreui/react";


const EmailLists = ()=> {

  const listEmails = useSelector((state) => state.emailsLists);
  const { loading, error, emailsList } = listEmails;
  let emailsListId = emailsList.map((emailsList)=> emailsList.id);
  console.log(emailsListId)

  const ListEmailsDelete = useSelector(state => state.emailsListDelete);
  const {success:deleteSuccess, error:deleteError} = ListEmailsDelete;

  const [emailId, setEmailId] = useState(0);

  const dispatch = useDispatch();

//   const refreshPage = ()=>{
//     window.location.reload();
//  }
//  const [emails, setEmails]= useState("");

const [showForm, setShowForm] = useState(false);
  
  const openForm = () => {
    setShowForm(!showForm);
  }
  
 console.log(loading, error, emailsList);

 useEffect(()=>{
    if(deleteSuccess){
     dispatch(getemailsList())
     setShowForm(false)
      window.location.reload();
    }
  },[dispatch,deleteSuccess])
  
  
  const deleteRequest=(id)=>{
   
   dispatch(deleteEmailList(id))

  }
  
  
return(<>

   <CRow> 
   <CForm style={{padding:20}}>      
  <CFormGroup row md="3" sm="3" xs="3">
    <CCol>
    {deleteError && <Message variant='danger'>{deleteError}</Message>}
               {deleteSuccess && <Message variant='success'>تم الحذف بنجاح</Message>}
               {loading && <Loader />}
    </CCol>
  </CFormGroup>
  { emailsList.map((list, index)=>(
      <CFormGroup row key={index}>   
          <CCol md="3" sm="3" xs="3">
           <CButton type="button" onClick={()=>{openForm(); setEmailId(list.id)}} size="sm" color="danger" >
                <i className="fas fa-trash"></i> حذف </CButton>
        </CCol>
         <CCol md="3" sm="3" xs="3">
          <CLabel htmlFor="text-input" dir="rtl" style={{padding:5 ,margin:5}}> {list.email}</CLabel>
         </CCol>
       </CFormGroup>
       ))}

       <CModal show={showForm} onClose={openForm}>
           <CModalHeader closeButton>تأكيد الحذف</CModalHeader>
            <CModalBody>هل انت متأكد من الحذف بشكل نهائي؟</CModalBody>
            <CModalFooter>
            <CButton type="button" size="sm" color="danger"  onClick={()=>deleteRequest(emailId)}>
              <i className="fas fa-trash"></i>حذف</CButton>
           <CButton color="secondary" onClick={openForm}>الغاء</CButton>
             </CModalFooter>
        </CModal> 
  </CForm>
</CRow>

</>)
;
}
export default EmailLists;