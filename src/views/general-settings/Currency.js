import "react-responsive-modal/styles.css";
import React, {useState,useEffect} from "react"; 
import "react-responsive-modal/styles.css";
import {
    getCurrency,
    postCurrency,
    updateCurrency,
    deleteCurrency,
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
export const Currency = ()=>{
    const listCurrency = useSelector((state) => state.currencyList);
    const { loading, error, currency } = listCurrency;
    let currencyListId = currency.map((currency) => currency.id);
    console.log(currencyListId);
  
    const addCurrency = useSelector((state) => state.currencyCreate);
    const { success, err } = addCurrency;
  
    const editCurrency = useSelector((state) => state.currencyUpdate);
    const { success: editSuccess, error: editError } = editCurrency;
  
    const CurrencyDelete = useSelector((state) => state.currencyDelete);
    const { success: deleteSuccess, error: deleteError } = CurrencyDelete;
  
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
    const [currencyId, setCurrencyId]=useState(0);
    const [currency_name_AR,setCurrency_name_AR]= useState("");
    const [currency_name_FR,  setCurrency_name_FR] = useState("");
    const [ currency_name_TR,setCurrency_name_TR] = useState("");
    const [currency_name_EN,  setCurrency_name_EN] = useState("");
    const [currency_code,  setCurrency_code] = useState("");
    const [ exchange_rate, setExchange_rate] = useState(0.00);
   
    console.log(loading, error, currency);
  
    useEffect(() => {
      if (editSuccess) {
        setCurrency_name_AR("")
        setCurrency_name_FR("")
        setCurrency_name_TR("")
        setCurrency_name_EN("")
        setCurrency_code("")
        setExchange_rate(0.00)
      }
    }, [editSuccess]);
  
    useEffect(() => {
      if (success || editSuccess || deleteSuccess) {
        dispatch(getCurrency());
        setShowFormCreate(false);
        setShowFormEdit(false);
        setShowFormDelete(false);
        window.location.reload();
      }
    }, [dispatch, success, editSuccess, deleteSuccess]);
  
    const submitCreateHandler = (e) => {
      if (
        currency_name_AR &&
        currency_name_FR &&
        currency_name_TR &&
        currency_name_EN&&
        currency_code&&
        exchange_rate
      ) {
        dispatch(
            postCurrency(
                currency_name_AR,
                currency_name_FR ,
                currency_name_TR ,
                currency_name_EN,
                currency_code,
                exchange_rate
          )
        );
        window.location.reload();
      } else {
        alert("الرجاء ملئ الحقول الفارغة");
      }
    };
  
    const submitUpdateHandler = (id,e) => {
      if (
        currency_name_AR &&
        currency_name_FR &&
        currency_name_TR &&
        currency_name_EN&&
        currency_code&&
        exchange_rate
     
      ) {
        dispatch(
            updateCurrency(id, {
                currency_name_AR,
                currency_name_FR ,
                currency_name_TR ,
                currency_name_EN,
                currency_code,
                exchange_rate
           
          })
        );
      } else {
        alert("الرجاء ملئ الحقول الفارغة");
      }
    };
  
    const deleteRequest = (id) => {
       
      dispatch(deleteCurrency(id));
    };
return(
<>

 <CRow> 
   <CForm style={{padding:20}} >      
  <CFormGroup row md="2">
    <CCol>
    {deleteError && <Message variant='danger'>{deleteError}</Message>}
    {deleteSuccess && <Message variant='success'>تم الحذف بنجاح</Message>}
    {editError && <Message variant='danger'>{editError}</Message>}
    {editSuccess && <Message variant='success'>تم التحديث العملة بنجاح</Message>}
     {loading && <Loader />}
    </CCol>
  </CFormGroup>
  { currency.map((list, index)=>(
      <CFormGroup row key={index} style={{borderBottom:"0.5px solid darkGrey"}}>   
          <CCol md="3">
           <CButton type="button" onClick={()=>{openFormDelete(); setCurrencyId(list.id)}} size="sm" color="danger" >
                <i className="fas fa-trash"></i> حذف </CButton>
         
        </CCol>
        <CCol md="3" >
           <CButton type="button" onClick={()=>{openFormEdit(); setCurrencyId(list.id)}} size="sm" color="secondary" >
                <i className="fas fa-edit"></i> تعديل </CButton>
        </CCol>
      
         <CCol md="1">
          <CLabel htmlFor="text-input" dir="rtl"> {list.currency_name_AR}</CLabel>
         </CCol>
        
        
         <CCol md="1">
          <CLabel htmlFor="text-input"> {list.currency_name_FR}</CLabel>
         </CCol>
        
        
         <CCol md="1">
          <CLabel htmlFor="text-input"> {list.currency_name_TR}</CLabel>
         </CCol>
        
        
         <CCol md="1">
          <CLabel htmlFor="text-input"> {list.currency_name_EN}</CLabel>
         </CCol>
        
        
         <CCol md="1">
          <CLabel htmlFor="text-input"> {list.currency_code}</CLabel>
         </CCol>
        
        
         <CCol md="1">
          <CLabel htmlFor="text-input"> {list.exchange_rate}</CLabel>
         </CCol>
     
       </CFormGroup>
       ))} 
       <CModal show={showFormDelete} onClose={openFormDelete}>
           <CModalHeader closeButton>تأكيد الحذف</CModalHeader>
            <CModalBody>هل انت متأكد من الحذف بشكل نهائي؟</CModalBody>
            <CModalFooter>
            <CButton type="button" size="sm" color="danger"  onClick={()=>deleteRequest(currencyId)} >
              <i className="fas fa-trash"></i>حذف</CButton>
           
           <CButton color="secondary" onClick={openFormDelete}>الغاء</CButton>
             </CModalFooter>
        </CModal>

        <CModal show={showFormEdit} onClose={openFormEdit}>
           <CModalHeader closeButton>تعديل</CModalHeader>
            <CModalBody>
           
                <CFormGroup row>
                <CCol md="3" >
          <CLabel htmlFor="text-input" dir="rtl"> اسم العملة باللغة العربية </CLabel>
         </CCol>
         <CCol xs="12" md="9">
                      <CInput
                        onChange={(e) => setCurrency_name_AR(e.target.value)}
                        type="text"
                        value={currency_name_AR}
                        placeholder="اسم العملة باللغة العربية"
                      />
                    </CCol>
                </CFormGroup>
                <CFormGroup row>
                <CCol md="3" >
          <CLabel htmlFor="text-input"> le nom de la devise en français </CLabel>
         </CCol>
         <CCol xs="12" md="9">
                      <CInput
                        onChange={(e) => setCurrency_name_FR(e.target.value)}
                        type="text"
                        value={currency_name_FR}
                        placeholder="le nom de la devise en français"
                      />
                    </CCol>
                </CFormGroup>
                <CFormGroup row>
                <CCol md="3" >
          <CLabel htmlFor="text-input"> Türkçede para birimi adı </CLabel>
         </CCol>
         <CCol xs="12" md="9">
                      <CInput
                        onChange={(e) => setCurrency_name_TR(e.target.value)}
                        type="text"
                        value={currency_name_TR}
                        placeholder="Türkçede para birimi adı"
                      />
                    </CCol>
                </CFormGroup>
                <CFormGroup row>
                <CCol md="3" >
          <CLabel htmlFor="text-input"> The Currency name in English </CLabel>
         </CCol>
         <CCol xs="12" md="9">
                      <CInput
                        onChange={(e) => setCurrency_name_EN(e.target.value)}
                        type="text"
                        value={currency_name_EN}
                        placeholder="The Currency name in English"
                      />
                    </CCol>
                </CFormGroup>
                <CFormGroup row>
                <CCol md="3" >
          <CLabel htmlFor="text-input"> The Currency Code </CLabel>
         </CCol>
         <CCol xs="12" md="9">
                      <CInput
                        onChange={(e) => setCurrency_code(e.target.value)}
                        type="text"
                        value={currency_code}
                        placeholder="The Currency Code"
                      />
                    </CCol>
                </CFormGroup>
                <CFormGroup row>
                <CCol md="3" >
          <CLabel htmlFor="number-input"> Exchange Rate</CLabel>
         </CCol>
         <CCol xs="12" md="9">
                      <CInput
                        onChange={(e) => setExchange_rate(e.target.value)}
                        type="number"
                        value={exchange_rate}
                        placeholder="Exchange Rate"
                      />
                    </CCol>
                </CFormGroup>  
             </CModalBody>
            <CModalFooter>
            <CButton type="button" size="sm" color="primary" onClick={()=>submitUpdateHandler(currencyId)} >
              <i className="fas fa-plus"></i>تعديل</CButton>
           <CButton color="secondary" onClick={openFormEdit}>الغاء</CButton>
             </CModalFooter>
        </CModal>
  </CForm>
</CRow>

<CRow>
<CCol>
    {err && <Message variant='danger'>{err}</Message>}
    {success && <Message variant='success'>تم الانشاء بنجاح</Message>}
     {loading && <Loader />}
    </CCol>
<CCol md="12" >
           <CButton type="button" onClick={openFormCreate} size="sm" color="primary" >
                انشاء عملة </CButton>
         <CModal show={showFormCreate} onClose={openFormCreate}>
         <CForm> 
           <CModalHeader closeButton>انشاء عملة</CModalHeader>
            <CModalBody>
                <CFormGroup row>
                <CCol md="3">
          <CLabel htmlFor="text-input" dir="rtl">  اسم العملة باللغة العربية</CLabel>
         </CCol>
         <CCol xs="12" md="9">
                      <CInput
                        onChange={(e) => setCurrency_name_AR(e.target.value)}
                        type="text"
                        value={currency_name_AR}
                        placeholder=" اسم العملة باللغة العربية"
                      />
                    </CCol>
                </CFormGroup>
                <CFormGroup row>
                <CCol md="3">
          <CLabel htmlFor="text-input"> le nom de la devise en français </CLabel>
         </CCol>
         <CCol xs="12" md="9">
                      <CInput
                        onChange={(e) => setCurrency_name_FR(e.target.value)}
                        type="text"
                        value={currency_name_FR}
                        placeholder="le nom de la devise en français"
                      />
                    </CCol>
                </CFormGroup>
                <CFormGroup row>
                <CCol md="3">
          <CLabel htmlFor="text-input"> Türkçede para birimi adı </CLabel>
         </CCol>
         <CCol xs="12" md="9">
                      <CInput
                        onChange={(e) => setCurrency_name_TR(e.target.value)}
                        type="text"
                        value={currency_name_TR}
                        placeholder="Türkçede para birimi adı"
                      />
                    </CCol>
                </CFormGroup>
                <CFormGroup row>
                <CCol md="3">
          <CLabel htmlFor="text-input"> The Currency name in English </CLabel>
         </CCol>
         <CCol xs="12" md="9">
                      <CInput
                        onChange={(e) => setCurrency_name_EN(e.target.value)}
                        type="text"
                        value={currency_name_EN}
                        placeholder="The Currency name in English"
                      />
                    </CCol>
                </CFormGroup>
                <CFormGroup row>
                <CCol md="3">
          <CLabel htmlFor="text-input"> The Currency Code </CLabel>
         </CCol>
         <CCol xs="12" md="9">
                      <CInput
                        onChange={(e) => setCurrency_code(e.target.value)}
                        type="text"
                        value={currency_code}
                        placeholder="The Currency Code"
                      />
                    </CCol>
                </CFormGroup>
                <CFormGroup row>
                <CCol md="3">
          <CLabel htmlFor="number-input"> Exchange Rate</CLabel>
         </CCol>
         <CCol xs="12" md="9">
                      <CInput
                        onChange={(e) => setExchange_rate(e.target.value)}
                        type="number"
                        value={exchange_rate}
                        placeholder="Exchange Rate"
                      />
                    </CCol>
                </CFormGroup>
               
             </CModalBody>
            <CModalFooter>
            <CButton type="button" size="sm" color="primary"  onClick={submitCreateHandler}>
              <i className="fas fa-plus"></i>اضافة</CButton>
           <CButton color="secondary" onClick={openFormCreate}>الغاء</CButton>
             </CModalFooter>
             </CForm> 
        </CModal>
        </CCol>
</CRow>
</>)}     

export default Currency