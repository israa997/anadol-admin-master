import React, {useState, useEffect} from "react";
import "react-responsive-modal/styles.css";
import { getAboutList, postAboutList, updateAbout, deleteAbout } from "../../actions/generalSettingsAction";
import { useSelector, useDispatch } from "react-redux";
// import Alerts from 'src/views/notifications/alerts/Alerts'
import Loader from "src/views/notifications/alerts/Loader";
import Message from "src/views/notifications/alerts/Message";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { CForm,CButton, CFormGroup, CCol, CLabel, CInput, CRow, CModal,CModalHeader, CCard} from "@coreui/react";
const About = () => {
  
  const listAbout = useSelector((state) => state.aboutList);
  const { loading, error, about } = listAbout;
  let aboutId = about.map((about)=> about.id);
  console.log(aboutId)
  
  const addAbout = useSelector(state => state.aboutCreate)
  const {success, err} = addAbout;
 
  const editAbout = useSelector(state => state.aboutUpdate);
  const {success:editSuccess, error:editError} = editAbout;

 const AboutDelete = useSelector(state => state.aboutDelete);
 const {success:deleteSuccess, error:deleteError} = AboutDelete;
  
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

  const [showForm, setShowForm] = useState(false);
  
  const openForm = () => {
    setShowForm(!showForm);
  }

//   const refreshPage = ()=>{
//     window.location.reload();
//  }

  const [header_ar, setHeader_ar]= useState("");
  const [header_fr, setHeader_fr]= useState("");
  const [header_tr, setHeader_tr]= useState("");
  const [header_en, setHeader_en]= useState("");
  const [content_ar, setContent_ar]= useState("");
  const [content_fr, setContent_fr]= useState("");
  const [content_tr, setContent_tr]= useState("");
  const [content_en, setContent_en]= useState("");
  

  console.log(loading, error, about);

 useEffect(() => {
  if(editSuccess){
    setHeader_ar("")
    setHeader_fr("")
    setHeader_tr("")
    setHeader_en("")
    setContent_ar("")
    setContent_fr("")
    setContent_tr("")
    setContent_en("")
  }
  
 }, [editSuccess])


useEffect(()=>{
  if(success ||editSuccess || deleteSuccess){
   dispatch(getAboutList())
   window.location.reload();
   setShowForm(false)
  }
},[dispatch, success,editSuccess, deleteSuccess])


 const submitCreateHandler = (e) => {
  
  if(header_ar && content_ar  &&  header_fr &&  content_fr &&  header_tr && content_tr &&  header_en &&  content_en){
   dispatch(postAboutList(header_ar,content_ar , header_fr, content_fr, header_tr,content_tr, header_en, content_en));
   window.location.reload();
  }
  else{
    alert("Please fill the fields")
  }
}

  const submitUpdateHandler = (e) => {
    if(header_ar && content_ar  &&  header_fr &&  content_fr &&  header_tr && content_tr &&  header_en &&  content_en){
     dispatch(updateAbout(aboutId, {header_ar,content_ar , header_fr, content_fr, header_tr,content_tr, header_en, content_en}));
    }
    else{
      alert("Please fill the fields")
    }
  }
 

  const deleteRequestOfAbout=(e)=>{
    dispatch(deleteAbout(aboutId))
    
  }
  
  
  return (
  <>
   <CRow>
    <CCol> 
    { about.length !== 0? 
    (<>
      <CRow>
          <CCol sm="6" md="6">
          <h3>Reading and Deleting the current <em style={{ fontWeight:"bold"}}>About</em></h3>
          <table>
            <thead>
              <tr><td>{deleteError && <Message variant='danger'>{deleteError}</Message>}
               {deleteSuccess && <Message variant='success'>Delete it Succcessfully</Message>}
               {loading && <Loader />}</td></tr>
            </thead>
            </table> 
            <CRow>
                   {
                    about.map((a, index) => (
                     
                    <CCol key={index}>
                      <CRow>
                      <CCol sm="6" md="6">
                      <CCard style={{border: "1px solid black",
                      minWidth: 500,
                      maxWidth: 1000,
                      minHeight: 500,
                      maxHeight: 1000,
                      margin:5,
                    padding:10,
                    }}><h1 dir="rtl">{a.header_ar}</h1>
                    <hr></hr>
                     <p dangerouslySetInnerHTML={{__html:a.content_ar}} dir="rtl"></p></CCard>
                     
                     <CCard style={{border: "1px solid black",
                      minWidth: 500,
                      maxWidth: 1000,
                      minHeight: 500,
                      maxHeight: 1000,
                      margin:5,
                    padding:10,
                    }}><h1>{a.header_fr}</h1>
                    <hr></hr>
                     <p dangerouslySetInnerHTML={{__html:a.content_fr}}></p></CCard>
                     </CCol>
                     </CRow>
                     <CRow>
                    <CCol sm="6" md="6">
                    <CCard style={{border: "1px solid black",
                      minWidth: 500,
                      maxWidth: 1000,
                      minHeight: 500,
                      maxHeight: 1000,
                      margin:5,
                    padding:10,
                    }}><h1>{a.header_tr}</h1>
                    <hr></hr>
                     <p dangerouslySetInnerHTML={{__html:a.content_tr}}></p></CCard>
                     
                    
                     <CCard style={{border: "1px solid black",
                      minWidth: 500,
                      maxWidth: 1000,
                      minHeight: 500,
                      maxHeight: 1000,
                      margin:5,
                    padding:10,
                    }}><h1>{a.header_en}</h1>
                    <hr></hr>
                     <p dangerouslySetInnerHTML={{__html:a.content_en}}></p></CCard>
                     </CCol>
                     </CRow>
                    </CCol> 
                    
                     ))
                  }
                   </CRow>
                 
      
              <CForm onSubmit={deleteRequestOfAbout}>
              <CButton type="submit" size="sm" color="danger" style={{padding:5 ,margin:5}}>
              <i className="fas fa-trash"></i>Delete</CButton>
              </CForm>
            </CCol>
            </CRow> 
         <hr></hr>
            <CRow > 
           <CCol>
               <h3>Editing</h3>
               {editError && <Message variant='danger'>{editError}</Message>}
               {editSuccess && <Message variant='success'>About Updated</Message>}
               {loading && <Loader />}
               <CForm onSubmit={submitUpdateHandler} style={{padding:20}}>
                     <CFormGroup row>
                       <CCol md="3">
                       <CLabel htmlFor="text-input" dir="rtl"> العنوان</CLabel>
                         </CCol>
                        <CCol xs="12" md="9">
                       <CInput
                        onChange={(e) => setHeader_ar(e.target.value)}
                       type="text"
                       value={header_ar}
                       placeholder="عنوان حول الشركة"
                       dir="rtl"
               />
                  </CCol>
                 </CFormGroup>
                 <CFormGroup row>
                   <CCol md="3">
                     <CLabel htmlFor="textarea-input" dir="rtl">
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
                       dir="rtl"
                      
                   />
                   </CCol>
                 </CFormGroup>
            
                 <CFormGroup row>
                       <CCol md="3">
                       <CLabel htmlFor="text-input">entête</CLabel>
                         </CCol>
                        <CCol xs="12" md="9">
                       <CInput
                        
                        onChange={(e) => setHeader_fr(e.target.value)}
                       type="text"
                       value={header_fr}
                       placeholder="entête"
               />
                  </CCol>
                 </CFormGroup>
                 <CFormGroup row>
                   <CCol md="3">
                     <CLabel htmlFor="textarea-input">
                     la description
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
                       placeholder="la description"
                       data={content_fr}
                   />
                   </CCol>
                 </CFormGroup>
                 <CFormGroup row>
                       <CCol md="3">
                       <CLabel htmlFor="text-input">başlık</CLabel>
                         </CCol>
                        <CCol xs="12" md="9">
                       <CInput
                       
                        onChange={(e) => setHeader_tr(e.target.value)}
                       type="text"
                       value={header_tr}
                       placeholder="başlık"
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
                 <CButton type="submit" size="sm" color="primary" style={{padding:5, margin:5}}>
              <i className="fas fa-plus"></i> Add</CButton>
             </CForm>
           </CCol>
           </CRow>
           </>): 
  ( <CForm><CButton type="button" onClick={openForm} size="sm" color="primary" >
  <i className="fas fa-plus"></i> Create </CButton></CForm>)
  }
     
     
{showForm && <CModal
 show={showForm}
 onClose={openForm}> <CModalHeader closeButton> </CModalHeader>{
     
         success ?( <Message variant='success'>Add it successfully</Message> ):
         err ? (<Message variant='danger'>{err}</Message>):
         loading ?( <Loader />): 
     
         
         
           <CForm onSubmit={submitCreateHandler} style={{padding:20}}>
            <CFormGroup row>
              <CCol md="3">
              <CLabel htmlFor="text-input" dir="rtl">العنوان</CLabel>
                </CCol>
               <CCol xs="12" md="9">
              <CInput
               onChange={(e) => setHeader_ar(e.target.value)}
              type="text"
              value={header_ar}
              placeholder="عنوان حول الشركة"
              dir="rtl"
      />
         </CCol>
        </CFormGroup>
        <CFormGroup row>
          <CCol md="3">
            <CLabel htmlFor="textarea-input" dir="rtl">
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
              dir="rtl"
              
          />
          </CCol>
        </CFormGroup>
   
        <CFormGroup row>
              <CCol md="3">
              <CLabel htmlFor="text-input">entête</CLabel>
                </CCol>
               <CCol xs="12" md="9">
              <CInput
               
               onChange={(e) => setHeader_fr(e.target.value)}
              type="text"
              value={header_fr}
              placeholder="entête"
      />
         </CCol>
        </CFormGroup>
        <CFormGroup row>
          <CCol md="3">
            <CLabel htmlFor="textarea-input">
            la description
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
              placeholder="la description"
              data={content_fr}
          />
          </CCol>
        </CFormGroup>
        <CFormGroup row>
              <CCol md="3">
              <CLabel htmlFor="text-input">başlık</CLabel>
                </CCol>
               <CCol xs="12" md="9">
              <CInput
              
               onChange={(e) => setHeader_tr(e.target.value)}
              type="text"
              value={header_tr}
              placeholder="başlık"
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
        <CButton type="submit" size="sm" color="primary">
     <i className="fas fa-plus"></i> Add</CButton>
    </CForm>
     
    }</CModal>}
    
 </CCol>     
</CRow>

  </>)
  };
  

export default About;
