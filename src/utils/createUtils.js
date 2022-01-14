import moment from "moment";
export const mapCreateProfileToRequest = (values) => {
  return {
    birthDay: moment(values.birthDay).format("DD/MM/YYYY"),
    companyName: values.companyName,
    district: values.district,
    districtCompany: values.districtCompany,
    idCard: values.idCard,
    imgProfileBase64: values.imgProfileBase64,
    nameEN: values.nameEN,
    nameTH: values.nameTH,
    phone: values.phone,
    province: values.province,
    provinceCompany: values.provinceCompany,
    subDistrict: values.subDistrict,
    subDistrictCompany: values.subDistrictCompany,
    surnameEN: values.surnameEN,
    surnameTH: values.surnameTH,
  };
};
