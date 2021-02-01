import React, { useState } from "react";
import "react-responsive-modal/styles.css";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { SketchPicker } from "react-color";
import { Modal } from "react-responsive-modal";
import {
  CButton,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CRow,
  CForm,
  CFormGroup,
  CLabel,
  CFormText,
  CInput,
  CTextarea,
  CSelect,
  CSwitch,
  CInputRadio,
  CInputCheckbox,
  CInputFile,
  CCard,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";

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

const Dashboard = () => {
  const [open, setOpen] = useState(false);

  const [ar_name, setar_name] = useState("");
  const [tr_name, settr_name] = useState("");
  const [en_name, seten_name] = useState("");
  const [fr_name, setfr_name] = useState("");
  const [SKU_code, setSKU_code] = useState("");
  const [ar_description, setar_description] = useState("");
  const [tr_description, settr_description] = useState("");
  const [en_description, seten_description] = useState("");
  const [fr_description, setfr_description] = useState("");
  const [isNew, setisNew] = useState("");
  const [isHomeScreenProduct, setisHomeScreenProduct] = useState("");
  const [price, setprice] = useState("");
  const [discount_percentage, setdiscount_percentage] = useState("");
  const [color_ar_name, setcolor_ar_name] = useState("");
  const [color_en_name, setcolor_en_name] = useState("");
  const [color_tr_name, setcolor_tr_name] = useState("");
  const [color_fr_name, setcolor_fr_name] = useState("");
  const [color_code, setcolor_code] = useState("");
  const [main_image_URL, setmain_image_URL] = useState("");
  const [video_Url, setvideo_Url] = useState("");

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  console.log(
    ar_name,
    tr_name,
    en_name,
    fr_name,
    SKU_code,
    ar_description,
    tr_description,
    en_description,
    fr_description,
    isNew,
    isHomeScreenProduct,
    price,
    discount_percentage,
    color_ar_name,
    color_en_name,
    color_tr_name,
    color_fr_name,
    color_code,
    main_image_URL,
    video_Url
  );
  const handleChangeComplete = (color) => {
    setcolor_code(color.hex);
  };

  return (
    <>
      <div>
        <CButton onClick={onOpenModal} variant="outline" color="primary">
          {" "}
          إضافة منتج جديد
        </CButton>
        <Modal
          open={open}
          onClose={onCloseModal}
          center
          classNames={{ modal: "customModal" }}
        >
          <CRow>
            <CCol>
              <CCard>
                <CCardHeader>إضافة منتج</CCardHeader>
                <CCardBody>
                  <CForm
                    encType="multipart/form-data"
                    className="form-horizontal"
                  >
                    <CFormGroup row>
                      <CCol md="3">
                        <CLabel htmlFor="text-input">اسم المنتج</CLabel>
                      </CCol>
                      <CCol xs="12" md="9">
                        <CInput
                          required
                          type="text"
                          onChange={(e) => setar_name(e.target.value)}
                          value={ar_name}
                          placeholder="اسم المنتج"
                        />
                      </CCol>
                    </CFormGroup>
                    <CFormGroup row>
                      <CCol md="3">
                        <CLabel htmlFor="text-input">ürün adı</CLabel>
                      </CCol>
                      <CCol xs="12" md="9">
                        <CInput
                          required
                          onChange={(e) => settr_name(e.target.value)}
                          type="text"
                          value={tr_name}
                          placeholder="ürün adı"
                        />
                      </CCol>
                    </CFormGroup>
                    <CFormGroup row>
                      <CCol md="3">
                        <CLabel htmlFor="text-input">Product Name</CLabel>
                      </CCol>
                      <CCol xs="12" md="9">
                        <CInput
                          onChange={(e) => seten_name(e.target.value)}
                          required
                          type="text"
                          value={en_name}
                          placeholder="Product Name"
                        />
                      </CCol>
                    </CFormGroup>
                    <CFormGroup row>
                      <CCol md="3">
                        <CLabel htmlFor="text-input">nom du produit</CLabel>
                      </CCol>
                      <CCol xs="12" md="9">
                        <CInput
                          required
                          onChange={(e) => setfr_name(e.target.value)}
                          type="text"
                          value={fr_name}
                          placeholder="nom du produit"
                        />
                      </CCol>
                    </CFormGroup>
                    <CFormGroup row>
                      <CCol md="3">
                        <CLabel htmlFor="text-input">رمز المنتج</CLabel>
                      </CCol>
                      <CCol xs="12" md="9">
                        <CInput
                          required
                          onChange={(e) => setSKU_code(e.target.value)}
                          type="number"
                          value={SKU_code}
                          placeholder="رمز المنتج"
                        />
                      </CCol>
                    </CFormGroup>
                    <CFormGroup row>
                      <CCol md="3">
                        <CLabel htmlFor="textarea-input">وصف المنتج</CLabel>
                      </CCol>
                      <CCol xs="12" md="9">
                        <CKEditor
                          onChange={(event, ar_description) => {
                            setar_description(ar_description.getData());
                          }}
                          // onChange={(e)=>setar_description(e.target.value)}
                          required
                          config={editorConfiguration}
                          editor={ClassicEditor}
                          placeholder="وصف المنتج"
                          data={ar_description}
                        />
                      </CCol>
                    </CFormGroup>
                    <CFormGroup row>
                      <CCol md="3">
                        <CLabel htmlFor="textarea-input">ürün açıklama</CLabel>
                      </CCol>
                      <CCol xs="12" md="9">
                        <CKEditor
                          onChange={(event, tr_description) => {
                            settr_description(tr_description.getData());
                          }}
                          required
                          config={editorConfiguration}
                          editor={ClassicEditor}
                          placeholder="tr_description"
                          data={tr_description}
                        />
                      </CCol>
                    </CFormGroup>
                    <CFormGroup row>
                      <CCol md="3">
                        <CLabel htmlFor="textarea-input">
                          product description
                        </CLabel>
                      </CCol>
                      <CCol xs="12" md="9">
                        <CKEditor
                          onChange={(event, en_description) => {
                            seten_description(en_description.getData());
                          }}
                          required
                          config={editorConfiguration}
                          editor={ClassicEditor}
                          placeholder="en_description"
                          data={en_description}
                        />
                      </CCol>
                    </CFormGroup>
                    <CFormGroup row>
                      <CCol md="3">
                        <CLabel htmlFor="textarea-input">
                          Description du produit
                        </CLabel>
                      </CCol>
                      <CCol xs="12" md="9">
                        <CKEditor
                          required
                          onChange={(event, fr_description) => {
                            setfr_description(fr_description.getData());
                          }}
                          config={editorConfiguration}
                          editor={ClassicEditor}
                          placeholder="fr_description"
                          data={fr_description}
                        />
                      </CCol>
                    </CFormGroup>
                    <CFormGroup row>
                      <CCol md="3">
                        <CLabel htmlFor="textarea-input">
                          علامة منتج جديد
                        </CLabel>
                      </CCol>
                      <CCol xs="12" md="9">
                        <CSwitch
                          required
                          value={isNew}
                          onChange={(e) => setisNew(e.target.value)}
                          name="isNew"
                          className="mr-1"
                          color="success"
                          defaultChecked
                          shape="pill"
                          variant="opposite"
                        />
                      </CCol>
                    </CFormGroup>

                    <CFormGroup row>
                      <CCol md="3">
                        <CLabel htmlFor="textarea-input">
                          ظهور في الشاشة الرئيسية
                        </CLabel>
                      </CCol>
                      <CCol xs="12" md="9">
                        <CSwitch
                          required
                          onChange={(e) =>
                            setisHomeScreenProduct(e.target.value)
                          }
                          value={isHomeScreenProduct}
                          name="isHomeScreenProduct"
                          className="mr-1"
                          color="success"
                          defaultChecked
                          shape="pill"
                          variant="opposite"
                        />
                      </CCol>
                    </CFormGroup>

                    <CFormGroup row>
                      <CCol md="3">
                        <CLabel htmlFor="text-input">السعر</CLabel>
                      </CCol>
                      <CCol xs="12" md="9">
                        <CInput
                          required
                          value={price}
                          onChange={(e) => setprice(e.target.value)}
                          type="number"
                          name="price"
                          placeholder="السعر"
                        />
                      </CCol>
                    </CFormGroup>
                    <CFormGroup row>
                      <CCol md="3">
                        <CLabel htmlFor="text-input">نسبة الخصم</CLabel>
                      </CCol>
                      <CCol xs="12" md="9">
                        <CInput
                          value={discount_percentage}
                          onChange={(e) =>
                            setdiscount_percentage(e.target.value)
                          }
                          required
                          type="number"
                          name="discount_percentage"
                          placeholder="نسبة الخصم"
                        />
                      </CCol>
                    </CFormGroup>

                    <CFormGroup row>
                      <CCol md="3">
                        <CLabel htmlFor="text-input">اللون الرئيسي</CLabel>
                      </CCol>
                      <CCol xs="12" md="9">
                        <CInput
                          required
                          value={color_ar_name}
                          onChange={(e) => setcolor_ar_name(e.target.value)}
                          type="text"
                          name="color_ar_name"
                          placeholder="اللون الرئيسي"
                        />
                      </CCol>
                    </CFormGroup>
                    <CFormGroup row>
                      <CCol md="3">
                        <CLabel htmlFor="text-input">ana renk</CLabel>
                      </CCol>
                      <CCol xs="12" md="9">
                        <CInput
                          required
                          value={color_en_name}
                          onChange={(e) => setcolor_en_name(e.target.value)}
                          type="text"
                          name="color_en_name"
                          placeholder="ana renk"
                        />
                      </CCol>
                    </CFormGroup>
                    <CFormGroup row>
                      <CCol md="3">
                        <CLabel htmlFor="text-input">main color</CLabel>
                      </CCol>
                      <CCol xs="12" md="9">
                        <CInput
                          value={color_tr_name}
                          onChange={(e) => setcolor_tr_name(e.target.value)}
                          required
                          type="text"
                          name="color_tr_name"
                          placeholder="main color"
                        />
                      </CCol>
                    </CFormGroup>
                    <CFormGroup row>
                      <CCol md="3">
                        <CLabel htmlFor="text-input">couleur principale</CLabel>
                      </CCol>
                      <CCol xs="12" md="9">
                        <CInput
                          required
                          value={color_fr_name}
                          onChange={(e) => setcolor_fr_name(e.target.value)}
                          type="text"
                          name="color_fr_name"
                          placeholder="couleur principale"
                        />
                      </CCol>
                    </CFormGroup>

                    <CFormGroup row>
                      <CCol md="3">
                        <CLabel htmlFor="text-input">اختر اللون</CLabel>
                      </CCol>
                      <CCol xs="12" md="9" style={{ direction: "ltr" }}>
                        <SketchPicker
                          required
                          color={color_code}
                          onChangeComplete={handleChangeComplete}
                        />
                      </CCol>
                    </CFormGroup>

                    <CFormGroup row>
                      <CLabel col md={3}>
                        الصورة الرئيسية
                      </CLabel>
                      <CCol xs="12" md="9">
                        <CInputFile
                          required
                          value={main_image_URL}
                          onChange={(e) => setmain_image_URL(e.target.value)}
                          name="main_image_URL"
                          custom
                          id="custom-file-input"
                        />
                        <CLabel
                          htmlFor="custom-file-input"
                          variant="custom-file"
                        >
                          select the color main image
                        </CLabel>
                      </CCol>
                    </CFormGroup>

                    <CFormGroup row>
                      <CLabel col md={3}>
                        الفيديو
                      </CLabel>
                      <CCol xs="12" md="9">
                        <CInputFile
                          value={video_Url}
                          onChange={(e) => setvideo_Url(e.target.value)}
                          required
                          name="video_Url"
                          custom
                          id="custom-file-input"
                        />
                        <CLabel
                          htmlFor="custom-file-input"
                          variant="custom-file"
                        >
                          select the color main video
                        </CLabel>
                      </CCol>
                    </CFormGroup>
                  </CForm>
                </CCardBody>
                <CCardFooter>
                  <CButton type="submit" size="sm" color="primary">
                    <i className="fas fa-plus"></i> إضافة
                  </CButton>
                </CCardFooter>
              </CCard>
            </CCol>
          </CRow>
        </Modal>
      </div>
    </>
  );
};

export default Dashboard;
