import React from "react";
import { useInfiniteQuery } from "react-query";
import { fetchCards } from "../api/pokemon";
import CardItem from "./CardItem";
import { Grid, CircularProgress } from "@mui/material";
import InfiniteScroll from "react-infinite-scroll-component";

const CardList: React.FC = () => {
  const { data, fetchNextPage, hasNextPage, isFetching } = useInfiniteQuery(
    "cards",
    ({ pageParam = 1 }) => fetchCards(pageParam, 10),
    {
      getNextPageParam: (lastPage, pages) => lastPage.page + 1,
    }
  );

  return (
    <div style={{ padding: "20px" }}>
      <InfiniteScroll
        dataLength={data?.pages.length || 0}
        next={fetchNextPage}
        hasMore={!!hasNextPage}
        loader={
          <div style={{ textAlign: "center", margin: "20px 0" }}>
            <CircularProgress />
          </div>
        }
        style={{ overflow: "hidden" }}
      >
        <Grid container spacing={2}>
          {data?.pages.map((page) =>
            page.data.map(
              (card: {
                id: string;
                name: string;
                images: { small: string; large: string };
              }) => (
                <Grid item xs={12} sm={6} md={4} lg={3} key={card.id}>
                  <CardItem
                    id={card.id}
                    name={card.name}
                    imageUrl={card.images.large}
                  />
                </Grid>
              )
            )
          )}
        </Grid>
      </InfiniteScroll>
    </div>
  );
};

export default CardList;
