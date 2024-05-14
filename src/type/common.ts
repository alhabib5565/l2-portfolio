export type TOptions = {
    value: string;
    label: string;
}

export type TSkills = {
    name: string;
    expertiseLavel: string;
};

export type TBlog = {
    _id: string
    blogTitle: string;
    description: string;
    blogImage: string;
}

export type TProject = {
    name: string;
    categroy: string;
    liveUrl: string;
    clientCode: string;
    serverCode: string;
    technologies: string[];
    description: string;
    image: string;
};