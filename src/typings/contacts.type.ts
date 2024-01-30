export interface IContact {
  company: string;
  department: string;
  displayName: string;
  emailAddresses: {email: string; id: string; label: string}[];
  familyName: string;
  givenName: string;
  hasThumbnail: boolean;
  isStarred: false;
  jobTitle: string;
  middleName: string;
  note: string;
  phoneNumbers: {id: string; label: string; number: string}[];
  postalAddresses?: {[key: string]: any}[]; // Unknown keys, represented with index signature
  urlAddresses?: {[key: string]: any}[]; // Same for urlAddresses
  imAddresses?: {[key: string]: any}[]; // And for imAddresses
  prefix: undefined;
  rawContactId: string;
  recordID: string;
  suffix: undefined;
  thumbnailPath: string;
}
