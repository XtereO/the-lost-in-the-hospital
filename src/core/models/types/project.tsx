export type Project = {
  genre: string;
  products: Product[];
};

export type Product = {
  title: string;
  to: string;
  topics: Topic[];
};

export type Topic = {
  title: string;
  hash: string;
  description?: React.ReactNode;
  subTopics: SubTopic[];
};

export type SubTopic = {
  title: string;
  hash: string;
  description: React.ReactNode;
};
