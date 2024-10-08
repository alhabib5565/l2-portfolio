export type TOptions = {
  value: string;
  label: string;
};

export type TSkills = {
  name: string;
  expertiseLavel: string;
  skillAvater: string;
};

export type TBlog = {
  _id: string;
  blogTitle: string;
  description: string;
  blogImage: string;
};

export type TTechnology = {
  label: string;
  value: string;
};

export type TProject = {
  _id?: string;
  name: string;
  category: string;
  liveUrl: string;
  clientCode: string;
  serverCode: string;
  technologies: TTechnology[];
  description: string;
  image: string;
};
