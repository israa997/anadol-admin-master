import React, {useState, useEffect} from "react";
import "react-responsive-modal/styles.css";
import { getAboutList, postAboutList } from "../../actions/generalSettingsAction";
import { useSelector, useDispatch } from "react-redux";
//import Alerts from 'src/views/notifications/alerts/Alerts'
import Loader from "src/views/notifications/alerts/Loader";
import Message from "src/views/notifications/alerts/Message";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { CForm,CButton, CFormGroup, CCol, CLabel, CInput, CRow } from "@coreui/react";
const About = () => {
  const listAbout = useSelector((state) => state.aboutList);
  const { loading, error, about } = listAbout;

  const addAbout = useSelector(state => state.aboutCreate)
  const {success, err} = addAbout;
  const dispatch = useDispatch();
  const editorConfiguration = {
    toolbar: [
      "bold",
      "italic",
      "bulletedList",
      "numberedList",
      "blockQuote",
      "|",
      "heading",
    ],
  };
  const [header_ar, setHeader_ar]= useState("");
  const [header_fr, setHeader_fr]= useState("");
  const [header_tr, setHeader_tr]= useState("");
  const [header_en, setHeader_en]= useState("");
  const [content_ar, setContent_ar]= useState("");
  const [content_fr, setContent_fr]= useState("");
  const [content_tr, setContent_tr]= useState("");
  const [content_en, setContent_en]= useState("");
  

  useEffect(() => {
 
    dispatch(getAboutList());
 
  }, [dispatch]);

  console.log(loading, error, about);

  const submitHandler = (e) => {
    e.preventDefault();
    
     dispatch(postAboutList(header_ar,content_ar , header_fr, content_fr, header_tr,content_tr, header_en, content_en));
    
  }

  
  return <>
  <CRow>
    <CCol>
       {success && <Message variant='success'>Add it successfully</Message>}
      {err && <Message variant='danger'>{err}</Message>}
      {loading && <Loader />} 
        <CForm onSubmit={submitHandler}>
         <CFormGroup row>
           <CCol md="3">
           <CLabel htmlFor="text-input">العنوان</CLabel>
             </CCol>
            <CCol xs="12" md="9">
           <CInput
            onChange={(e) => setHeader_ar(e.target.value)}
           type="text"
           value={header_ar}
           placeholder="عنوان حول الشركة"
   />
      </CCol>
     </CFormGroup>
     <CFormGroup row>
       <CCol md="3">
         <CLabel htmlFor="textarea-input">
            الوصف
        </CLabel>
       </CCol>
      <CCol xs="12" md="9">
         <CKEditor
         onChange={(e, content_ar) => {
              setContent_ar(content_ar.getData());
           }}
           required
           config={editorConfiguration}
           editor={ClassicEditor}
           placeholder="الوصف"
           data={content_ar}
       />
       </CCol>
     </CFormGroup>

     <CFormGroup row>
           <CCol md="3">
           <CLabel htmlFor="text-input">Frensh Header</CLabel>
             </CCol>
            <CCol xs="12" md="9">
           <CInput
            
            onChange={(e) => setHeader_fr(e.target.value)}
           type="text"
           value={header_fr}
           placeholder="Fensh Header"
   />
      </CCol>
     </CFormGroup>
     <CFormGroup row>
       <CCol md="3">
         <CLabel htmlFor="textarea-input">
            Description
         </CLabel>
       </CCol>
      <CCol xs="12" md="9">
         <CKEditor
         onChange={(e, content_fr) => {
              setContent_fr(content_fr.getData());
           }}
           required
           config={editorConfiguration}
           editor={ClassicEditor}
           placeholder="Frensh Description"
           data={content_fr}
       />
       </CCol>
     </CFormGroup>
     <CFormGroup row>
           <CCol md="3">
           <CLabel htmlFor="text-input">Kuno</CLabel>
             </CCol>
            <CCol xs="12" md="9">
           <CInput
           
            onChange={(e) => setHeader_tr(e.target.value)}
           type="text"
           value={header_tr}
           placeholder="Kuno"
   />
      </CCol>
     </CFormGroup>
     <CFormGroup row>
       <CCol md="3">
         <CLabel htmlFor="textarea-input">
         açıklama
        </CLabel>
       </CCol>
      <CCol xs="12" md="9">
         <CKEditor
         onChange={(e, content_tr) => {
              setContent_tr(content_tr.getData());
           }}
           required
           config={editorConfiguration}
           editor={ClassicEditor}
           placeholder="açıklama"
           data={content_tr}
       />
       </CCol>
     </CFormGroup>
     <CFormGroup row>
           <CCol md="3">
           <CLabel htmlFor="text-input">Header</CLabel>
             </CCol>
            <CCol xs="12" md="9">
           <CInput
            
            onChange={(e) => setHeader_en(e.target.value)}
           type="text"
           value={header_en}
           placeholder="Header About The Company"
   />
      </CCol>
     </CFormGroup>
     <CFormGroup row>
       <CCol md="3">
         <CLabel htmlFor="textarea-input">
            Description
        </CLabel>
       </CCol>
      <CCol xs="12" md="9">
         <CKEditor
         onChange={(e, content_en) => {
              setContent_en(content_en.getData());
           }}
           required
           config={editorConfiguration}
           editor={ClassicEditor}
           placeholder="الوصف"
           data={content_en}
       />
       </CCol>
     </CFormGroup>
     { about.length !== 0? 
    ( <CButton type="submit" size="sm" color="primary" disabled>
    <i className="fas fa-plus"></i> Add </CButton>) 
    :
  ( <CButton type="submit" size="sm" color="primary">
  <i className="fas fa-plus"></i> Add </CButton>)
     }
 </CForm>
 </CCol>
 <CCol>
 <table>
         {
           about.map((a) => (
             <tbody>
           <tr>
             <td><h1>{a.header_ar}</h1>
            <p>{a.content_ar}</p></td>
            </tr>
            <tr>
            <td><h1>{a.header_fr}</h1>
            <p>{a.content_fr}</p></td>
            </tr>
            <tr>
            <td><h1>{a.header_tr}</h1>
            <p>{a.content_tr}</p></td>
            </tr>
            <tr>
            <td><h1>{a.header_en}</h1>
            <p>{a.content_en}</p></td>
            </tr> 
            </tbody>
            ))
         }
        </table>
   </CCol>      
</CRow>
</>;
  
};
export default About;
