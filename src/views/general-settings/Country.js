import "react-responsive-modal/styles.css";
import React, {useState,useEffect} from "react"; 
import "react-responsive-modal/styles.css";
import {
    getCountry,
    postCountry,
    updateCountry,
    deleteCountry,
  } from "../../actions/generalSettingsAction";
  import { useSelector, useDispatch } from "react-redux";
  // import Alerts from 'src/views/notifications/alerts/Alerts'
  import Loader from "src/views/notifications/alerts/Loader";
  import Message from "src/views/notifications/alerts/Message";
  import {
    CForm,
    CButton,
    CFormGroup,
    CCol,
    CLabel,
    CInput,
    CRow,
    CModal,
    CModalHeader,CModalBody,CModalFooter
  } from "@coreui/react";
export const Country = ()=>{
    const listCountry = useSelector((state) => state.countryList);
    const { loading, error, country } = listCountry;
    let countryListId = country.map((country) => country.id);
    console.log(countryListId);
  
    const addCountry = useSelector((state) => state.countryCreate);
    const { success, err } = addCountry;
  
    const editCountry = useSelector((state) => state.countryUpdate);
    const { success: editSuccess, error: editError } = editCountry;
  
    const CountryDelete = useSelector((state) => state.countryDelete);
    const { success: deleteSuccess, error: deleteError } = CountryDelete;
  
    const dispatch = useDispatch();
  
    const [showFormCreate, setShowFormCreate] = useState(false);
  
    const openFormCreate = () => {
      setShowFormCreate(!showFormCreate);
    };
    const [showFormEdit, setShowFormEdit] = useState(false);
  
    const openFormEdit = () => {
      setShowFormEdit(!showFormEdit);
    };
    const [showFormDelete, setShowFormDelete] = useState(false);
  
    const openFormDelete = () => {
      setShowFormDelete(!showFormDelete);
    };
  
  //   const refreshPage = () => {
  //     window.location.reload();
  //   };
    const [countryId, setCountryId]= useState(0)
    const [country_name_AR,setCountry_name_AR]= useState("");
    const [country_name_FR,  setCountry_name_FR] = useState("");
    const [ country_name_TR,setCountry_name_TR] = useState("");
    const [country_name_EN,  setCountry_name_EN] = useState("");
    const [shipping_price,  setshipping_price] = useState("");
    
   
    console.log(loading, error, country);
  
    useEffect(() => {
      if (editSuccess) {
        setCountry_name_AR("")
        setCountry_name_FR("")
        setCountry_name_TR("")
        setCountry_name_EN("")
        setshipping_price(0)
        
      }
    }, [editSuccess]);
  
    useEffect(() => {
      if (success || editSuccess || deleteSuccess) {
        dispatch(getCountry());
        setShowFormCreate(false);
        setShowFormEdit(false);
        setShowFormDelete(false);
        window.location.reload();
      }
    }, [dispatch, success, editSuccess, deleteSuccess]);
  
    const submitCreateHandler = (e) => {
      if (
        country_name_AR &&
        country_name_FR &&
        country_name_TR &&
        country_name_EN&&
        shipping_price
        
      ) {
        dispatch(
            postCountry(
                country_name_AR,
                 country_name_EN,
                country_name_FR,
                country_name_TR ,
                shipping_price,
                
          )
        );
        window.location.reload();
      } else {
        alert("Please fill the fields");
      }
    };
  
    const submitUpdateHandler = (id,e) => {
      if (
        country_name_AR &&
        country_name_FR &&
        country_name_TR &&
        country_name_EN&&
        shipping_price
        
     
      ) {
        dispatch(
            updateCountry(id, {
                country_name_AR,
                country_name_EN,
               country_name_FR,
               country_name_TR ,
               shipping_price,
                
           
          })
        );
      } else {
        alert("Please fill the fields");
      }
    };
  
    const deleteRequest = (id) => {
       
      dispatch(deleteCountry(id));
    };
return(
<>

 <CRow> 
   <CForm style={{padding:20}} >      
  <CFormGroup row md="3">
    <CCol>
    {deleteError && <Message variant='danger'>{deleteError}</Message>}
    {deleteSuccess && <Message variant='success'>Delete it Succcessfully</Message>}
    {editError && <Message variant='danger'>{editError}</Message>}
    {editSuccess && <Message variant='success'>Country Updated</Message>}
     {loading && <Loader />}
    </CCol>
  </CFormGroup>
  { country.map((list, index)=>(

     
      <CFormGroup row style={{borderBottom:"1px solid red"}} key={index}>
         
         <CCol md="1">
           <CButton type="button" onClick={()=>{openFormDelete(); setCountryId(list.id)}} size="sm" color="danger" >
                <i className="fas fa-trash"></i> Delete </CButton>
        </CCol>
        
       
        <CCol md="1" >
           <CButton type="button" onClick={()=>{openFormEdit(); setCountryId(list.id)}} size="sm" color="secondary" >
                <i className="fas fa-edit"></i> Edit </CButton>
        </CCol>
     
       
         <CCol md="2">
          <CLabel htmlFor="text-input" dir="rtl"> {list.country_name_AR}</CLabel>
         </CCol>
         
        
         <CCol md="2">
          <CLabel htmlFor="text-input"> {list.country_name_FR}</CLabel>
         </CCol>
         
        
         <CCol md="2">
          <CLabel htmlFor="text-input"> {list.country_name_TR}</CLabel>
         </CCol>
         
        
         <CCol md="2">
          <CLabel htmlFor="text-input"> {list.country_name_EN}</CLabel>
         </CCol>
         
        
         <CCol md="1">
          <CLabel htmlFor="text-input"> {list.shipping_price}</CLabel>
         </CCol>
       </CFormGroup>
      
       ))} 
       <CModal show={showFormDelete} onClose={openFormDelete}>
           <CModalHeader closeButton>Delete Confirmation</CModalHeader>
            <CModalBody>Are you sure to delete permanently?</CModalBody>
            <CModalFooter>
            <CButton type="button" size="sm" color="danger"  onClick={()=>deleteRequest(countryId)} >
              <i className="fas fa-trash"></i>Delete</CButton>
           
           <CButton color="secondary" onClick={openFormDelete}>Cancel</CButton>
             </CModalFooter>
        </CModal>

        <CModal show={showFormEdit} onClose={openFormEdit}>
           <CModalHeader closeButton>Edit</CModalHeader>
            <CModalBody>
           
                <CFormGroup row>
                <CCol md="3" >
          <CLabel htmlFor="text-input" dir="rtl"> اسم البلد باللغة العربية </CLabel>
         </CCol>
         <CCol xs="12" md="9">
                      <CInput
                        onChange={(e) => setCountry_name_AR(e.target.value)}
                        type="text"
                        value={country_name_AR}
                        placeholder="اسم البلد باللغة العربية"
                      />
                    </CCol>
                </CFormGroup>
                <CFormGroup row>
                <CCol md="3" >
          <CLabel htmlFor="text-input"> le nom de la pays en français </CLabel>
         </CCol>
         <CCol xs="12" md="9">
                      <CInput
                        onChange={(e) => setCountry_name_FR(e.target.value)}
                        type="text"
                        value={country_name_FR}
                        placeholder="le nom de la pays en français"
                      />
                    </CCol>
                </CFormGroup>
                <CFormGroup row>
                <CCol md="3" >
          <CLabel htmlFor="text-input"> Türkçede ülke birimi adı </CLabel>
         </CCol>
         <CCol xs="12" md="9">
                      <CInput
                        onChange={(e) => setCountry_name_TR(e.target.value)}
                        type="text"
                        value={country_name_TR}
                        placeholder="Türkçede ülke birimi adı"
                      />
                    </CCol>
                </CFormGroup>
                <CFormGroup row>
                <CCol md="3" >
          <CLabel htmlFor="text-input"> The Country name in English </CLabel>
         </CCol>
         <CCol xs="12" md="9">
                      <CInput
                        onChange={(e) => setCountry_name_EN(e.target.value)}
                        type="text"
                        value={country_name_EN}
                        placeholder="The Country name in English"
                      />
                    </CCol>
                </CFormGroup>
                <CFormGroup row>
                <CCol md="3" >
          <CLabel htmlFor="text-input"> The Shipping Price </CLabel>
         </CCol>
         <CCol xs="12" md="9">
                      <CInput
                        onChange={(e) => setshipping_price(e.target.value)}
                        type="text"
                        value={shipping_price}
                        placeholder="The Shipping Price"
                      />
                    </CCol>
                </CFormGroup>
             </CModalBody>
            <CModalFooter>
            <CButton type="button" size="sm" color="primary"  onClick={()=>submitUpdateHandler(countryId)} >
              <i className="fas fa-plus"></i>Edit</CButton>
           
           <CButton color="secondary" onClick={openFormEdit}>Cancel</CButton>
             </CModalFooter>
        </CModal>
  </CForm>
</CRow>

<CRow>
<CCol>
    {err && <Message variant='danger'>{err}</Message>}
    {success && <Message variant='success'>Create it successfully</Message>}
     {loading && <Loader />}
    </CCol>
<CCol md="12" >
           <CButton type="button" onClick={openFormCreate} size="sm" color="primary" >
                Create </CButton>
         <CModal show={showFormCreate} onClose={openFormCreate}>
         <CForm> 
           <CModalHeader closeButton>Create a Country</CModalHeader>
            <CModalBody>
                <CFormGroup row>
                <CCol md="3">
          <CLabel htmlFor="text-input" dir="rtl">  اسم البلد باللغة العربية</CLabel>
         </CCol>
         <CCol xs="12" md="9">
                      <CInput
                        onChange={(e) => setCountry_name_AR(e.target.value)}
                        type="text"
                        value={country_name_AR}
                        placeholder=" اسم البلد باللغة العربية"
                      />
                    </CCol>
                </CFormGroup>
                <CFormGroup row>
                <CCol md="3">
          <CLabel htmlFor="text-input"> le nom de la pays en français </CLabel>
         </CCol>
         <CCol xs="12" md="9">
                      <CInput
                        onChange={(e) => setCountry_name_FR(e.target.value)}
                        type="text"
                        value={country_name_FR}
                        placeholder="le nom de la pays en français"
                      />
                    </CCol>
                </CFormGroup>
                <CFormGroup row>
                <CCol md="3">
          <CLabel htmlFor="text-input"> Türkçede ülke birimi adı </CLabel>
         </CCol>
         <CCol xs="12" md="9">
                      <CInput
                        onChange={(e) => setCountry_name_TR(e.target.value)}
                        type="text"
                        value={country_name_TR}
                        placeholder="Türkçede ülke birimi adı"
                      />
                    </CCol>
                </CFormGroup>
                <CFormGroup row>
                <CCol md="3">
          <CLabel htmlFor="text-input"> The Country name in English </CLabel>
         </CCol>
         <CCol xs="12" md="9">
                      <CInput
                        onChange={(e) => setCountry_name_EN(e.target.value)}
                        type="text"
                        value={country_name_EN}
                        placeholder="The Country name in English"
                      />
                    </CCol>
                </CFormGroup>
                <CFormGroup row>
                <CCol md="3">
          <CLabel htmlFor="text-input"> The Shipping Price </CLabel>
         </CCol>
         <CCol xs="12" md="9">
                      <CInput
                        onChange={(e) => setshipping_price(e.target.value)}
                        type="text"
                        value={shipping_price}
                        placeholder="The Shipping Price"
                      />
                    </CCol>
                </CFormGroup>         
             </CModalBody>
            <CModalFooter>
            <CButton type="button" size="sm" color="primary"  onClick={submitCreateHandler}>
              <i className="fas fa-plus"></i>ADD</CButton>
           <CButton color="secondary" onClick={openFormCreate}>Cancel</CButton>
             </CModalFooter>
             </CForm> 
        </CModal>
        </CCol>
</CRow>
</>)}     

export default Country