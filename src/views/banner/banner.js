import "react-responsive-modal/styles.css";
import React, {useState,useEffect} from "react";
import "react-responsive-modal/styles.css";
import {
    getBannerList,
    postBannerList,
    updateBanner,
    deleteBanner,
  } from "../../actions/BannerAction";
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
    CModalHeader
  } from "@coreui/react";
  export  const Banner = () => {
    const listBanner = useSelector((state) => state.bannerList);
    const { loading, error, banner } = listBanner;
    let BannerId = banner.map((banner) => banner.id);
    console.log(BannerId);
  
    const addBanner = useSelector((state) => state.bannerCreate);
    const { success, err } = addBanner;
  
    const editBanner = useSelector((state) => state.bannerUpdate);
    const { success: editSuccess, error: editError } = editBanner;
  
    const BannerDelete = useSelector((state) => state.bannerDelete);
    const { success: deleteSuccess, error: deleteError } = BannerDelete;
  
    const dispatch = useDispatch();
  
    const [showForm, setShowForm] = useState(false);
  
    const openForm = () => {
      setShowForm(!showForm);
    };
  
  //   const refreshPage = () => {
  //     window.location.reload();
  //   };
  
    const [banner_text_AR, setbanner_text_AR] = useState("");
    const [banner_text_EN, setbanner_text_EN] = useState("");
    const [banner_text_FR, setbanner_text_FR] = useState("");
    const [banner_text_TR, setbanner_text_TR] = useState("");
   
    console.log(loading, error, banner);
  
    useEffect(() => {
      if (editSuccess) {
        setbanner_text_AR("");
        setbanner_text_EN("");
        setbanner_text_FR("");
        setbanner_text_TR("");
      }
    }, [editSuccess]);
  
    useEffect(() => {
      if (success || editSuccess || deleteSuccess) {
        dispatch(getBannerList());
        setShowForm(false);
        // window.location.reload();
      }
    }, [dispatch, success, editSuccess, deleteSuccess]);
  
    const submitCreateHandler = (e) => {
      if (
        banner_text_AR &&
        banner_text_EN &&
        banner_text_FR &&
        banner_text_TR
      ) {
        dispatch(
            postBannerList(
            banner_text_AR,
            banner_text_EN,
            banner_text_FR,
            banner_text_TR
          )
        );
        // window.location.reload();
      } else {
        alert("Please fill the fields");
      }
    };
  
    const submitUpdateHandler = (e) => {
      if (
        banner_text_AR &&
        banner_text_EN &&
        banner_text_FR &&   
        banner_text_TR 
     
      ) {
        dispatch(
            updateBanner(BannerId, {
            banner_text_AR,
            banner_text_EN,
            banner_text_FR,
            banner_text_TR
           
          })
        );
      } else {
        alert("Please fill the fields");
      }
    };
  
    const deleteRequest = (e) => {
      dispatch(deleteBanner(BannerId));
    };
  
    return (
      <>
        <CRow>
          <CCol>
            {banner.length !== 0 ? (
              <>
                <CRow>
                  <CCol sm="6" md="6">
                    <h4>
                     قراءة وحذف{" "}
                      <em style={{ fontWeight: "bold" }}>الشريط الاعلاني </em>
                    </h4>
                    <table>
                      <thead>
                        <tr>
                          <td>
                            {deleteError && (
                              <Message variant="danger">{deleteError}</Message>
                            )}
                            {deleteSuccess && (
                              <Message variant="success">
                                نم الحذف بنجاح
                              </Message>
                            )}
                            {loading && <Loader />}
                          </td>
                        </tr>
                      </thead>
                    </table>
                    <CRow>
                      {banner.map((banner, index) => (
                        <CCol key={index} sm="6" md="6">
                          
                              
                                <h3 dir="rtl">{banner.banner_text_AR}</h3>
                                <hr></hr>
                                <h3>{banner.banner_text_EN}</h3>
                                <hr></hr>
                                <h3>{banner.banner_text_FR}</h3>
                                <hr></hr>
                                <h3>{banner.banner_text_TR}</h3>
                                <hr></hr>
                        </CCol>
                      ))}
                    </CRow>
  
                    <CForm onSubmit={deleteRequest}>
                      <CButton
                        type="submit"
                        size="sm"
                        color="danger"
                        style={{ padding: 5, margin: 5 }}
                      >
                        <i className="fas fa-trash"></i>حذف
                      </CButton>
                    </CForm>
                  </CCol>
                </CRow>
                <hr></hr>
                <CRow>
                  <CCol>
                    <h3>التعديل</h3>
                    {editError && <Message variant="danger">{editError}</Message>}
                    {editSuccess && (
                      <Message variant="success">Banner Updated</Message>
                    )}
                    {loading && <Loader />}
                    <CForm onSubmit={submitUpdateHandler} style={{ padding: 20 }}>
                      <CFormGroup row>
                        <CCol md="3">
                          <CLabel htmlFor="text-input" dir="rtl">
                            النص العربي
                          </CLabel>
                        </CCol>
                        <CCol xs="12" md="9">
                          <CInput
                            onChange={(e) => setbanner_text_AR(e.target.value)}
                            type="text"
                            value={banner_text_AR}
                            placeholder="النص العربي"
                            dir="rtl"
                          />
                        </CCol>
                      </CFormGroup>
                      
                      <CFormGroup row>
                        <CCol md="3">
                          <CLabel htmlFor="text-input">English Text</CLabel>
                        </CCol>
                        <CCol xs="12" md="9">
                          <CInput
                            onChange={(e) => setbanner_text_EN(e.target.value)}
                            type="text"
                            value={banner_text_EN}
                            placeholder="English Text"
                          />
                        </CCol>
                      </CFormGroup>
                      <CFormGroup row>
                        <CCol md="3">
                          <CLabel htmlFor="text-input">Texte français</CLabel>
                        </CCol>
                        <CCol xs="12" md="9">
                          <CInput
                            onChange={(e) => setbanner_text_FR(e.target.value)}
                            type="text"
                            value={banner_text_FR}
                            placeholder="Texte français"
                          />
                        </CCol>
                      </CFormGroup>
                      <CFormGroup row>
                        <CCol md="3">
                          <CLabel htmlFor="text-input">türkçe metin</CLabel>
                        </CCol>
                        <CCol xs="12" md="9">
                          <CInput
                            onChange={(e) => setbanner_text_TR(e.target.value)}
                            type="text"
                            value={banner_text_TR}
                            placeholder="türkçe metin"
                          />
                        </CCol>
                      </CFormGroup>
                      <CButton
                        type="submit"
                        size="sm"
                        color="primary"
                        style={{ padding: 5, margin: 5 }}
                      >
                        <i className="fas fa-plus"></i> اضافة
                      </CButton>
                    </CForm>
                  </CCol>
                </CRow>
              </>
            ) : (
              <CForm>
                <CButton
                  type="button"
                  onClick={openForm}
                  size="sm"
                  color="primary"
                >
                  <i className="fas fa-plus"></i> انشاء{" "}
                </CButton>
              </CForm>
            )}
  
            {showForm && (
              <CModal show={showForm} onClose={openForm}>
                {" "}
                <CModalHeader closeButton> </CModalHeader>
                {success ? (
                  <Message variant="success">تم الانشاء بنجاح</Message>
                ) : err ? (
                  <Message variant="danger">{err}</Message>
                ) : loading ? (
                  <Loader />
                ) : (
                  <CForm onSubmit={submitCreateHandler} style={{ padding: 20 }}>
                       <CFormGroup row>
                        <CCol md="3">
                          <CLabel htmlFor="text-input" dir="rtl">
                            النص العربي
                          </CLabel>
                        </CCol>
                        <CCol xs="12" md="9">
                          <CInput
                            onChange={(e) => setbanner_text_AR(e.target.value)}
                            type="text"
                            value={banner_text_AR}
                            placeholder="النص العربي"
                            dir="rtl"
                          />
                        </CCol>
                      </CFormGroup>
                      
                      <CFormGroup row>
                        <CCol md="3">
                          <CLabel htmlFor="text-input">English Text</CLabel>
                        </CCol>
                        <CCol xs="12" md="9">
                          <CInput
                            onChange={(e) => setbanner_text_EN(e.target.value)}
                            type="text"
                            value={banner_text_EN}
                            placeholder="English Text"
                          />
                        </CCol>
                      </CFormGroup>
                      <CFormGroup row>
                        <CCol md="3">
                          <CLabel htmlFor="text-input">Texte français</CLabel>
                        </CCol>
                        <CCol xs="12" md="9">
                          <CInput
                            onChange={(e) => setbanner_text_FR(e.target.value)}
                            type="text"
                            value={banner_text_FR}
                            placeholder="Texte français"
                          />
                        </CCol>
                      </CFormGroup>
                      <CFormGroup row>
                        <CCol md="3">
                          <CLabel htmlFor="text-input">türkçe metin</CLabel>
                        </CCol>
                        <CCol xs="12" md="9">
                          <CInput
                            onChange={(e) => setbanner_text_TR(e.target.value)}
                            type="text"
                            value={banner_text_TR}
                            placeholder="türkçe metin"
                          />
                        </CCol>
                      </CFormGroup>
                    <CButton type="submit" size="sm" color="primary">
                      <i className="fas fa-plus"></i> اضافة
                    </CButton>
                  </CForm>
                )}
              </CModal>
            )}
          </CCol>
        </CRow>
      </>
    );
  };

export default Banner;
