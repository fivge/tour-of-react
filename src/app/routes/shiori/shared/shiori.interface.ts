export interface Tag {
  id: number;
  name: string;
  nBookmarks: number;
}

export interface IBookmark {
  id: number;
  url: string;
  title: string;
  excerpt: string;
  author: string;
  public: number;
  modified: string;
  imageURL: string;
  hasContent: boolean;
  hasArchive: boolean;
  tags: Tag[];
  createArchive: boolean;
}
