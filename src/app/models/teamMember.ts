import { SocialAccount } from './socialAccount';

export interface TeamMember {
  firstName: string;
  lastName: string;
  title: string;
  imgUrl: string;
  cvLink?: string;
  socialAccounts?: Array<SocialAccount>;
}
