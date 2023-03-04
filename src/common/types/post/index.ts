export interface IPostState {
  data: IPost[];
  isLoading: boolean;
  error: string | null;
  nextPage: number;
  hasNextPage: boolean;
}

export interface IPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface IPostCard {
  id: number;
  title: string;
  body: string;
  handleDeletePost: (id: number) => void;
}
export interface IDeletePostPayload {
  id: number;
}
