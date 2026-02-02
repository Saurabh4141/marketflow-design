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
  address: "Empire State Building",
  city: "NYC",
  state: "NY",
  zip: "10001",
  country: "USA",
  fullAddress: "Empire State Building, NYC New York, NY 10001, USA",
});

export const companyInfo: CompanyInfo = {
  headquarter: createOffice("Headquarters"),
  globalOffices: [
    createOffice("New York Office"),
    createOffice("Global Office 2"),
  ],
  phone: "+1 (234) 567-890",
  email: "info@coremarketresearch.com",
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
