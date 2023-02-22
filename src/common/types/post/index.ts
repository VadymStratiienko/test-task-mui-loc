export interface IPostState {
  data: IPost[];
  isLoading: boolean;
  error: string | null;
  nextPage: number;
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
  loading: boolean;
}
export interface IDeletePostPayload {
  id: number;
}
