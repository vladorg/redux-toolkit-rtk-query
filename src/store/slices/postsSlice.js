import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import p1 from './../../img/posts/post1.jpg' // relative path to image
import p2 from './../../img/posts/post2.jpg' // relative path to image
import p3 from './../../img/posts/post3.jpg' // relative path to image
import p4 from './../../img/posts/post4.jpg' // relative path to image
import p5 from './../../img/posts/post5.jpg' // relative path to image
import p6 from './../../img/posts/post6.jpg' // relative path to image

const delay = async (ms) => {
  return new Promise(res => {
    setTimeout(res, ms);
  })
};

const initialState = {
  isLoading: false,
  isError: false,
  list: []
}

const defaultPosts = [
  { title: 'Lorem ipsum dolor 1', subtitle: 'April 24, 2022 - 5 min read',
    description: 'Nunc non posuere consectetur, justo erat semper enim, non hendrerit dui odio id enim.', img: p1
  },
  { title: 'Lorem ipsum dolor 2', subtitle: 'April 03, 2022 - 4 min read',
    description: 'Nunc non posuere consectetur, justo erat semper enim, non hendrerit dui odio id enim.', img: p2
  },
  { title: 'Lorem ipsum dolor 3', subtitle: 'March 12, 2022 - 6 min read',
    description: 'Nunc non posuere consectetur, justo erat semper enim, non hendrerit dui odio id enim.', img: p3
  },
  { title: 'Lorem ipsum dolor 4', subtitle: 'April 24, 2022 - 5 min read',
    description: 'Nunc non posuere consectetur, justo erat semper enim, non hendrerit dui odio id enim.', img: p4
  },
  { title: 'Lorem ipsum dolor 5', subtitle: 'April 03, 2022 - 4 min read',
    description: 'Nunc non posuere consectetur, justo erat semper enim, non hendrerit dui odio id enim.', img: p5
  },
  { title: 'Lorem ipsum dolor 6', subtitle: 'March 12, 2022 - 6 min read',
    description: 'Nunc non posuere consectetur, justo erat semper enim, non hendrerit dui odio id enim.', img: p6
  },
];

export const fetchPosts = createAsyncThunk(
  'fetchPosts',
  async (payload, thunkAPI) => {
    try {
      const response = await fetch('http://w99762ln.beget.tech/api/posts.php');

      if (!response.ok) {
        throw 'response is not OK'
      }

      const data = await response.json();

      return data
    } catch(err) {
      return thunkAPI.rejectWithValue(err)
    }
  }
);

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.isLoading = true;  
        state.isError = false;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => { 
        state.isLoading = false;
        state.isError = false;
        state.list = action.payload;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
})

// export const counterSlice = createSlice({
//   name: 'counter',
//   initialState,
//   reducers: {
//     increment: (state) => {
//       state.value += 1
//     },
//     decrement: (state) => {
//       state.value -= 1
//     },
//   },
// })

export default postsSlice.reducer

