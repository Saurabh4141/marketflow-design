export interface OfficeLocation {
  name: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  country: string;
  fullAddress: string;
}

export interface CompanyInfo {
  headquarter: OfficeLocation;
  globalOffices: OfficeLocation[];
  phone: string;
  email: string;
  supportTime: string;
  businessHours: {
    days: string;
    hours: string;
  };
}

const createOffice = (name: string): OfficeLocation => ({
  name,
  address: "Ganesh Vandan",
  city: "Pune",
  state: "Maharashtra",
  zip: "411041",
  country: "India",
  fullAddress: "Ganesh Vandan, Ambegaon Bk, Pune 411041, India",
});

export const companyInfo: CompanyInfo = {
  headquarter: createOffice("Headquarters"),
  globalOffices: [
    createOffice("New York Office"),
    createOffice("Global Office 2"),
  ],
  phone: "+91 76201 23288",
  email: "contact@coremarketresearch.com",
  supportTime: "24/7 Support Available",
  businessHours: {
    days: "Monday - Friday",
    hours: "9:00 AM - 6:00 PM EST",
  },
};

// Convenience getters for common use cases
export const getHeadquarterAddress = () => companyInfo.headquarter.fullAddress;
export const getPhone = () => companyInfo.phone;
export const getEmail = () => companyInfo.email;
export const getSupportTime = () => companyInfo.supportTime;
export const getBusinessHours = () => `${companyInfo.businessHours.days} ${companyInfo.businessHours.hours}`;
