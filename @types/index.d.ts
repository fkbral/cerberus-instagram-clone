type ProfileData = {
  user: User;
  followersNumber: number;
  followingNumber: number;
  followers?: User[];
  following?: User[];
  posts?: ProfilePost[];
  bio?: string;
};

type User = {
  name: string;
  username: string;
  avatarUrl?: string;
};

type ProfileStories = {};

type ProfilePost = {
  user?: User;
  assetUrl: string;
  locationTag?: string;
  likesCount: number;
  description?: string;
  comments?: Comment[];
};

type Comment = {
  content: string;
  likesCount: number;
  thread?: Comment[];
};
