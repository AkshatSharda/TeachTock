export interface McqDataOptionType {
  id: string;
  answer: string;
}

export interface McqDataType {
  type: 'mcq';
  id: number;
  playlist: string;
  description: string;
  image: string;
  question: string;
  options: McqDataOptionType[];
  user: {
    name: string;
    avatar: string;
  };
  correctOptionId?: string;
}
