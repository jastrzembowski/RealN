import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
  isAnyOf,
} from "@reduxjs/toolkit";
import { RootState } from "../../store/configureStore";
import { Offer } from "../../models/offer";
import router from "../../../Routes";
const Parse = require("parse/dist/parse.min.js");

interface CatalogState {
  offers: any[];
  status: string;
  offersLoaded: boolean;
  offerLoaded: boolean;
  data: any;
  offerAdding: boolean;
  dispPage: number;
  displayLimit: number;
  count: number;
}

const offersAdapter = createEntityAdapter<any>({
  selectId: (offer) => offer[0],
});

export const fetchOfferLength = createAsyncThunk<any>(
  "catalog/fetchOfferLength",
  async (_, thunkAPI) => {
    try {
      const query = new Parse.Query("Offers");
      const length = await query.find().then(function (results: any) {
        return results.length;
      });
      return length;
    } catch (error: any) {
      thunkAPI.rejectWithValue({ error: error.data });
    }
  }
);

export const createOfferAsync = createAsyncThunk<any, { offerData: Offer }>(
  "catalog/createOfferAsync",
  async ({ offerData }, thunkAPI) => {
    try {
      const agentParse = Parse.Object.extend("Agents");
      const query = new Parse.Query(agentParse);
      query.equalTo("user", Parse.User.current());
      const agent = await query.find();
      let offer = new Parse.Object("Offers");
      offer.set(offerData);
      offer.set("agent", agent.length > 0 ? agent[0] : null);
      offer.save();

      return true;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.data });
    }
  }
);

export const updateOfferAsync = createAsyncThunk<
  any,
  { offerData: Offer; id: String | undefined }
>("catalog/updateOfferAsync", async ({ offerData, id }, thunkAPI) => {
  const query = Parse.Query("Offers");
  const item = await query.get(id);
  try {
    item.set(offerData);
    item.save();
    router.navigate("/catalog");
    return true;
  } catch (error: any) {
    return thunkAPI.rejectWithValue({ error: error.data });
  }
});

export const fetchOffersAsync = createAsyncThunk<
  any,
  { dispPage: number; displayLimit: number }
>("catalog/fetchOffersAsync", async ({ dispPage, displayLimit }, thunkAPI) => {
  try {
    const query = new Parse.Query("Offers");
    query.descending("updatedAt");
    query.limit(displayLimit);
    query.skip((dispPage - 1) * displayLimit);
    const allOffersGet = await query.find();
    const allOffers = allOffersGet.map((item: any) => {
      return [item.id, item.toJSON()];
    });
    return allOffers;
  } catch (error: any) {
    return thunkAPI.rejectWithValue({ error: error.data });
  }
});

export const fetchOfferAsync = createAsyncThunk<any, string>(
  "catalog/fetchOfferAsync",
  async (offerId, thunkAPI) => {
    try {
      const query = new Parse.Query("Offers");
      const item = await query.get(offerId);
      const offer = [item.id, item.toJSON()];
      return offer;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.data });
    }
  }
);

export const deleteOfferAsync = createAsyncThunk<any, any>(
  "catalog/deleteOfferAsync",
  async (offerId, thunkAPI) => {
    const query = new Parse.Query("Offers");
    const item = await query.get(offerId);
    try {
      await item.destroy();
      alert("Usunięto");
      fetchOfferLength();
      window.location.reload();
      router.navigate("/catalog");
      return true;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.data });
    }
  }
);

export const catalogSlice = createSlice({
  name: "catalog",
  initialState: offersAdapter.getInitialState<CatalogState>({
    offers: [],
    status: "idle",
    offersLoaded: false,
    offerLoaded: false,
    data: [],
    offerAdding: false,
    dispPage: 1,
    displayLimit: 2,
    count: 0,
  }),
  reducers: {
    setPageNumber: (state, action) => {
      state.offersLoaded = false;
      state.dispPage = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchOffersAsync.fulfilled, (state, action) => {
      offersAdapter.setAll(state, action.payload);
      state.status = "idle";
      state.offersLoaded = true;
    });
    builder.addCase(fetchOfferLength.fulfilled, (state, action) => {
      state.status = "idle";
      state.count = action.payload;
    });
    builder.addCase(fetchOfferAsync.pending, (state) => {
      state.status = "pendingFetchProduct";
      state.offerAdding = true;
    });
    builder.addCase(fetchOfferAsync.fulfilled, (state, action) => {
      offersAdapter.setOne(state, action.payload);
      state.status = "idle";
      state.offerLoaded = true;
    });
    builder.addCase(createOfferAsync.pending, (state) => {
      state.status = "pendingAddOffer";
      state.offerAdding = true;
    });
    builder.addCase(createOfferAsync.fulfilled, (state) => {
      state.status = "idle";
      state.offerAdding = false;
      state.offerLoaded = false;
    });
    builder.addCase(updateOfferAsync.fulfilled, (state) => {
      state.status = "idle";
      state.offerLoaded = false;
    });
    builder.addCase(createOfferAsync.rejected, (state) => {
      state.status = "idle";
      state.offerAdding = false;
    });
    builder.addCase(deleteOfferAsync.pending, (state) => {
      state.status = "pendingDeleteOffer";
    });
    builder.addCase(updateOfferAsync.pending, (state) => {
      state.status = "pendingUpdateOffer";
    });
    builder.addMatcher(
      isAnyOf(fetchOffersAsync.pending, fetchOfferLength.pending),
      (state) => {
        state.status = "pendingFetchProducts";
      }
    );
    builder.addMatcher(
      isAnyOf(
        fetchOffersAsync.rejected,
        fetchOfferAsync.rejected,
        fetchOfferLength.rejected,
        deleteOfferAsync.rejected,
        updateOfferAsync.rejected
      ),
      (state, action) => {
        state.status = "idle";
      }
    );
    
  },
});

export const offersSelectors = offersAdapter.getSelectors(
  (state: RootState) => state.catalog
);

export const { setPageNumber } = catalogSlice.actions;
