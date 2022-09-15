export type Project = {
  genre: string;
  products: Product[];
};

type Product = {
  title: string;
  to: string;
  topics: Topic[];
};

type Topic = {
  title: string;
  hash: string;
  description?: React.ReactNode;
  subTopics: SubTopic[];
};

type SubTopic = {
  title: string;
  hash: string;
  description: React.ReactNode;
};
