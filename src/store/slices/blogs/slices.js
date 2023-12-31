import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../utils/api.instance";
import Toast from "react-hot-toast";

export const getArticles = createAsyncThunk("blogs/getArticles", async (payload, { rejectWithValue }) => {
  try {
    // @generate parameter
    const { id_cat, page, sort } = payload;
    // const PARAMETER = `id_cat=${id_cat}&sort=${sort}&page=${page}`;
    const PARAMETER = `page=${page}`;

    // @request to get articles
    const { data } = await api.get("/blog?" + encodeURI(PARAMETER));
    // const { data } = await api.get("/blog");
    // console.log(data);
    // @return data
    return data;
  } catch (error) {
    console.error(error);
    Toast.error("Error : something went wrong.");
    return rejectWithValue(error.response.data);
  }
});

export const likeArticle = createAsyncThunk("blogs/likeArticle", async (payload, { rejectWithValue }) => {
  try {
    await api.post("/blog/like", payload);

    Toast.success("Success : like article success.");
    return;
  } catch (error) {
    return rejectWithValue(error.response ? error.response.data : error);
  }
});

//! GET CATEGORY
// export const getCategory = createAsyncThunk("blog/allCategory", async (payload, { rejectWithValue }) => {
//   try {
//     const { data } = await api.get("/blog/allCategory");
//     console.log("ini" + data);
//     return data;
//   } catch (error) {
//     console.error(error);
//     return rejectWithValue(error.response.data);
//   }
// });
