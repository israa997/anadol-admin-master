import React, {useState, useEffect} from "react";
import "react-responsive-modal/styles.css";
import { deleteEmailList,getemailsList } from "../../actions/generalSettingsAction";
import { useSelector, useDispatch } from "react-redux";
// import Alerts from 'src/views/notifications/alerts/Alerts'
import Loader from "src/views/notifications/alerts/Loader";
import Message from "src/views/notifications/alerts/Message";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { CForm,CButton, CFormGroup, CCol, CLabel, CInput, CRow, CModal,CModalHeader, CCard} from "@coreui/react";

const EmailsList = ()=> {

  const listEmails = useSelector((state) => state.emailsList());
  const { loading, error, emailsList } = listEmails;
  let emailsListId = emailsList.map((emailsList)=> emailsList.id);
  console.log(emailsListId)

  const ListEmailsDelete = useSelector(state => state.emailsListDelete);
  const {success:deleteSuccess, error:deleteError} = ListEmailsDelete;

  const dispatch = useDispatch();

  const refreshPage = ()=>{
    window.location.reload();
 }
 const [emails, setEmails]= useState("");
  
 console.log(loading, error, emailsList);

 useEffect(()=>{
    if(deleteSuccess){
     dispatch(getemailsList())
    }
  },[dispatch,deleteSuccess])
  
  const deleteRequestOfPrivacyPolicy=(e)=>{
    dispatch(deleteEmailList(emailsListId))
    
  }
  
  
return(<><h1>Emails List</h1></>)
;
}
export default EmailsList;