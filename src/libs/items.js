import API from "./index";

export async function getItems(queryParams) {
  const result = await API.get(
    `/volumes?q=${queryParams.search}&startIndex=${
      queryParams.page - 1
    }&maxResults=${
      queryParams.pageSize
    }&filter=paid-ebooks`
  );

  return result.data;
}
export async function getItemsByCategoryName(queryParams) {
  const result = await API.get(
    `/volumes?q=${queryParams.search}+subject:${
      queryParams.search
    }&startIndex=${queryParams.page - 1}&maxResults=${
      queryParams.pageSize
    }&filter=paid-ebooks`
  );

  return result.data;
}

export async function getSortItems(queryParams) {
  const result = await API.get(
    `/volumes?q=${queryParams.search}&orderBy=${
      queryParams.orderBy
    }&startIndex=${queryParams.page - 1}&maxResults=${
      queryParams.pageSize
    }&filter=paid-ebooks`
  );

  return result.data;
}

export async function getItemById(itemId) {
  const result = await API.get(`/volumes/${itemId}`);
  return result.data;
}

export async function getCurrentPageItem(payload) {
  const result = await API.get(
    `/volumes?q=${payload.querySearch}&startIndex=${
      payload.p - 1
    }&maxResults=20&filter=paid-ebooks`
  );

  return result.data;
}
