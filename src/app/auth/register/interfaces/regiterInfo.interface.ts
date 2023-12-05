export interface RegisterInfo {
  tel: number,
  userdata: userData,
  terms: boolean
}

export interface userData {
  documentTypeId: number,
  documentNumber: number,
  expirationDate: string,
  birthDate: string,
  genderId: number,
  email: string,
  confirmEmail: string,
  securityPin: string,
  confirmSecurityPin: string
}