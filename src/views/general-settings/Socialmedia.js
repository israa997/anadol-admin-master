import "react-responsive-modal/styles.css";
import React, { useState, useEffect } from "react";
import "react-responsive-modal/styles.css";
import {
  getSocialAccountList,
  postSocialAccountList,
  updateSocialAccount,
  deleteSocialAccount,
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
  CModalHeader
} from "@coreui/react";
const SocialMedia = () => {
  const listSocialMedia = useSelector((state) => state.socialList);
  const { loading, error, social } = listSocialMedia;
  let socialId = social.map((social) => social.id);
  console.log(socialId);

  const addSocialMedia = useSelector((state) => state.socialCreate);
  const { success, err } = addSocialMedia;

  const editSocialMedia = useSelector((state) => state.socialUpdate);
  const { success: editSuccess, error: editError } = editSocialMedia;

  const SocialMediaDelete = useSelector((state) => state.socialDelete);
  const { success: deleteSuccess, error: deleteError } = SocialMediaDelete;

  const dispatch = useDispatch();

  const [showForm, setShowForm] = useState(false);

  const openForm = () => {
    setShowForm(!showForm);
  };

//   const refreshPage = () => {
//     window.location.reload();
//   };

  const [phoneNum, setphoneNum] = useState("");
  const [facebook_URL, setfacebook_URL] = useState("");
  const [youtube_URL, setyoutube_URL] = useState("");
  const [tumblr_URL, settumblr_URL] = useState("");
  const [instagram_URL, setinstagram_URL] = useState("");
  const [twitter_URL, settwitter_URL] = useState("");
  const [pintrest_URL, setpintrest_URL] = useState("");
  const [telegram_URL, settelegram_URL] = useState("");

  console.log(loading, error, social);

  useEffect(() => {
    if (editSuccess) {
      setphoneNum("");
      setfacebook_URL("");
      setyoutube_URL("");
      settumblr_URL("");
      setinstagram_URL("");
      settwitter_URL("");
      setpintrest_URL("");
      settelegram_URL("");
    }
  }, [editSuccess]);

  useEffect(() => {
    if (success || editSuccess || deleteSuccess) {
      dispatch(getSocialAccountList());
      setShowForm(false);
      window.location.reload();
    }
  }, [dispatch, success, editSuccess, deleteSuccess]);

  const submitCreateHandler = (e) => {
    if (
      phoneNum &&
      instagram_URL &&
      facebook_URL &&
      twitter_URL &&
      youtube_URL &&
      pintrest_URL &&
      tumblr_URL &&
      telegram_URL
    ) {
      dispatch(
        postSocialAccountList(
          phoneNum,
          instagram_URL,
          facebook_URL,
          twitter_URL,
          youtube_URL,
          pintrest_URL,
          tumblr_URL,
          telegram_URL
        )
      );
      window.location.reload();
    } else {
      alert("Please fill the fields");
    }
  };

  const submitUpdateHandler = (e) => {
    if (
      phoneNum &&
      instagram_URL &&
      facebook_URL &&
      twitter_URL &&
      youtube_URL &&
      pintrest_URL &&
      tumblr_URL &&
      telegram_URL
    ) {
      dispatch(
        updateSocialAccount(socialId, {
          phoneNum,
          instagram_URL,
          facebook_URL,
          twitter_URL,
          youtube_URL,
          pintrest_URL,
          tumblr_URL,
          telegram_URL,
        })
      );
    } else {
      alert("Please fill the fields");
    }
  };

  const deleteRequest = (e) => {
    dispatch(deleteSocialAccount(socialId));
  };

  return (
    <>
      <CRow>
        <CCol>
          {social.length !== 0 ? (
            <>
              <CRow>
                <CCol sm="6" md="6">
                  <h4>
                    Reading and Deleting the current{" "}
                    <em style={{ fontWeight: "bold" }}>Social Media</em>
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
                              Delete it Succcessfully
                            </Message>
                          )}
                          {loading && <Loader />}
                        </td>
                      </tr>
                    </thead>
                  </table>
                  <CRow>
                    {social.map((social, index) => (
                      <CCol key={index} sm="6" md="6">
                        
                            
                              <h3 dir="rtl">{social.phoneNum}</h3>
                              <hr></hr>
                              <h3> 
                               {social.instagram_URL}</h3>
                               <hr></hr>
                              <h3>{social.facebook_URL}</h3>
                              <hr></hr>
                              <h3>{social.twitter_URL}</h3>
                              <hr></hr>
                         
                              <h3>{social.youtube_URL}</h3>
                              <hr></hr>
                              <h3>{social.pintrest_URL}</h3>
                              <hr></hr>

                           
                              <h3>{social.tumblr_URL}</h3>
                              <hr></hr>
                              <h3>{ social.telegram_URL}</h3>
                           
                        
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
                      <i className="fas fa-trash"></i>Delete
                    </CButton>
                  </CForm>
                </CCol>
              </CRow>
              <hr></hr>
              <CRow>
                <CCol>
                  <h3>Editing</h3>
                  {editError && <Message variant="danger">{editError}</Message>}
                  {editSuccess && (
                    <Message variant="success">About Updated</Message>
                  )}
                  {loading && <Loader />}
                  <CForm onSubmit={submitUpdateHandler} style={{ padding: 20 }}>
                    <CFormGroup row>
                      <CCol md="3">
                        <CLabel htmlFor="text-input" dir="rtl">
                          Phone Number
                        </CLabel>
                      </CCol>
                      <CCol xs="12" md="9">
                        <CInput
                          onChange={(e) => setphoneNum(e.target.value)}
                          type="text"
                          value={phoneNum}
                          placeholder="Phone Number"
                          dir="rtl"
                        />
                      </CCol>
                    </CFormGroup>
                    <CFormGroup row>
                      <CCol md="3">
                        <CLabel htmlFor="text-input">Instagram URL</CLabel>
                      </CCol>
                      <CCol xs="12" md="9">
                        <CInput
                          onChange={(e) => setinstagram_URL(e.target.value)}
                          type="text"
                          value={instagram_URL}
                          placeholder="Instagram URL"
                        />
                      </CCol>
                    </CFormGroup>
                    <CFormGroup row>
                      <CCol md="3">
                        <CLabel htmlFor="text-input">Facebook URL</CLabel>
                      </CCol>
                      <CCol xs="12" md="9">
                        <CInput
                          onChange={(e) => setfacebook_URL(e.target.value)}
                          type="text"
                          value={facebook_URL}
                          placeholder="Facebook URL"
                        />
                      </CCol>
                    </CFormGroup>
                    <CFormGroup row>
                      <CCol md="3">
                        <CLabel htmlFor="text-input">Twitter URL</CLabel>
                      </CCol>
                      <CCol xs="12" md="9">
                        <CInput
                          onChange={(e) => settwitter_URL(e.target.value)}
                          type="text"
                          value={twitter_URL}
                          placeholder="Twitter URL"
                        />
                      </CCol>
                    </CFormGroup>
                    <CFormGroup row>
                      <CCol md="3">
                        <CLabel htmlFor="text-input">Youtube URL</CLabel>
                      </CCol>
                      <CCol xs="12" md="9">
                        <CInput
                          onChange={(e) => setyoutube_URL(e.target.value)}
                          type="text"
                          value={youtube_URL}
                          placeholder="Youtube URL"
                        />
                      </CCol>
                    </CFormGroup>
                    <CFormGroup row>
                      <CCol md="3">
                        <CLabel htmlFor="text-input">Pintrest URL</CLabel>
                      </CCol>
                      <CCol xs="12" md="9">
                        <CInput
                          onChange={(e) => setpintrest_URL(e.target.value)}
                          type="text"
                          value={pintrest_URL}
                          placeholder="Pintrest URL"
                        />
                      </CCol>
                    </CFormGroup>
                    <CFormGroup row>
                      <CCol md="3">
                        <CLabel htmlFor="text-input">Tumblr URL</CLabel>
                      </CCol>
                      <CCol xs="12" md="9">
                        <CInput
                          onChange={(e) => settumblr_URL(e.target.value)}
                          type="text"
                          value={tumblr_URL}
                          placeholder="Tumblr URL"
                        />
                      </CCol>
                    </CFormGroup>
                    <CFormGroup row>
                      <CCol md="3">
                        <CLabel htmlFor="text-input">Telegram URL</CLabel>
                      </CCol>
                      <CCol xs="12" md="9">
                        <CInput
                          onChange={(e) => settelegram_URL(e.target.value)}
                          type="text"
                          value={telegram_URL}
                          placeholder="Telegram URL"
                        />
                      </CCol>
                    </CFormGroup>
                    <CButton
                      type="submit"
                      size="sm"
                      color="primary"
                      style={{ padding: 5, margin: 5 }}
                    >
                      <i className="fas fa-plus"></i> Add
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
                <i className="fas fa-plus"></i> Create{" "}
              </CButton>
            </CForm>
          )}

          {showForm && (
            <CModal show={showForm} onClose={openForm}>
              {" "}
              <CModalHeader closeButton> </CModalHeader>
              {success ? (
                <Message variant="success">Add it successfully</Message>
              ) : err ? (
                <Message variant="danger">{err}</Message>
              ) : loading ? (
                <Loader />
              ) : (
                <CForm onSubmit={submitCreateHandler} style={{ padding: 20 }}>
                  <CFormGroup row>
                    <CCol md="3">
                      <CLabel htmlFor="text-input" dir="rtl">
                        Phone Number
                      </CLabel>
                    </CCol>
                    <CCol xs="12" md="9">
                      <CInput
                        onChange={(e) => setphoneNum(e.target.value)}
                        type="text"
                        value={phoneNum}
                        placeholder="Phone Number"
                        dir="rtl"
                      />
                    </CCol>
                  </CFormGroup>
                  <CFormGroup row>
                      <CCol md="3">
                        <CLabel htmlFor="text-input">Instagram URL</CLabel>
                      </CCol>
                      <CCol xs="12" md="9">
                        <CInput
                          onChange={(e) => setinstagram_URL(e.target.value)}
                          type="text"
                          value={instagram_URL}
                          placeholder="Instagram URL"
                        />
                      </CCol>
                    </CFormGroup>
                  <CFormGroup row>
                    <CCol md="3">
                      <CLabel htmlFor="text-input">Facebook URL</CLabel>
                    </CCol>
                    <CCol xs="12" md="9">
                      <CInput
                        onChange={(e) => setfacebook_URL(e.target.value)}
                        type="text"
                        value={facebook_URL}
                        placeholder="Facebook URL"
                      />
                    </CCol>
                  </CFormGroup>
                  <CFormGroup row>
                    <CCol md="3">
                      <CLabel htmlFor="text-input">Twitter URL</CLabel>
                    </CCol>
                    <CCol xs="12" md="9">
                      <CInput
                        onChange={(e) => settwitter_URL(e.target.value)}
                        type="text"
                        value={twitter_URL}
                        placeholder="Twitter URL"
                      />
                    </CCol>
                  </CFormGroup>
                  <CFormGroup row>
                    <CCol md="3">
                      <CLabel htmlFor="text-input">Youtube URL</CLabel>
                    </CCol>
                    <CCol xs="12" md="9">
                      <CInput
                        onChange={(e) => setyoutube_URL(e.target.value)}
                        type="text"
                        value={youtube_URL}
                        placeholder="Youtube URL"
                      />
                    </CCol>
                  </CFormGroup>
                  <CFormGroup row>
                    <CCol md="3">
                      <CLabel htmlFor="text-input">Pintrest URL</CLabel>
                    </CCol>
                    <CCol xs="12" md="9">
                      <CInput
                        onChange={(e) => setpintrest_URL(e.target.value)}
                        type="text"
                        value={pintrest_URL}
                        placeholder="Pintrest URL"
                      />
                    </CCol>
                  </CFormGroup>
                  <CFormGroup row>
                    <CCol md="3">
                      <CLabel htmlFor="text-input">Tumblr URL</CLabel>
                    </CCol>
                    <CCol xs="12" md="9">
                      <CInput
                        onChange={(e) => settumblr_URL(e.target.value)}
                        type="text"
                        value={tumblr_URL}
                        placeholder="Tumblr URL"
                      />
                    </CCol>
                  </CFormGroup>
                  <CFormGroup row>
                    <CCol md="3">
                      <CLabel htmlFor="text-input">Telegram URL</CLabel>
                    </CCol>
                    <CCol xs="12" md="9">
                      <CInput
                        onChange={(e) => settelegram_URL(e.target.value)}
                        type="text"
                        value={telegram_URL}
                        placeholder="Telegram URL"
                      />
                    </CCol>
                  </CFormGroup>
                  <CButton type="submit" size="sm" color="primary">
                    <i className="fas fa-plus"></i> Add
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

export default SocialMedia;
