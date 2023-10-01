import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {fetchData} from '../../utilities/api';
import {McqDataType} from '../../modules/home/interfaces';

const initialState = {
  isLoading: false,
  isError: false,
  data: {} as McqDataType | undefined,
};

export const fetchMcq = createAsyncThunk('fetchMcq', async () => {
  const res = await fetchData(
    'https://cross-platform.rp.devfactory.com/for_you',
  );
  return res.data;
});

export const fetchMcqAnswer = createAsyncThunk(
  'fetchMcqAnswer',
  async (id: number) => {
    const res = await fetchData(
      `https://cross-platform.rp.devfactory.com/reveal?id=${id}`,
    );
    return res.data;
  },
);

const homeSlice = createSlice({
  name: 'home',
  initialState: initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchMcq.pending, state => {
      state.isLoading = true;
      state.data = undefined;
    });
    builder.addCase(fetchMcq.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload as McqDataType;
    });
    builder.addCase(fetchMcq.rejected, state => {
      state.isLoading = false;
      state.isError = true;
      state.data = undefined;
    });

    builder.addCase(fetchMcqAnswer.fulfilled, (state, action) => {
      const {correct_options} = action.payload;
      if (correct_options && state.data) {
        state.data.correctOptionId = correct_options[0].id as string;
      }
    });
  },
});

export default homeSlice.reducer;

export type HomeState = {
  isLoading: boolean;
  isError: boolean;
  data: McqDataType | undefined;
};
