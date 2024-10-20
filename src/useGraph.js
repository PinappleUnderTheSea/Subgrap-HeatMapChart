import { gql, useQuery } from '@apollo/client';

// 定义 GraphQL 查询
const GET_TOKENS = gql`
  query {
    swaps {
      id
      timestamp
      amount0
      amount1
      transaction {
        id
      }
    }
  }
`;

// 自定义 hook 用于获取 GraphQL 数据
const useGraphData = () => {
  // 使用 Apollo Client 提供的 useQuery hook 来执行查询
  const { loading, error, data } = useQuery(GET_TOKENS);

  // 打印数据以进行调试
  if (loading) {
    console.log("Loading data...");
  }
  if (error) {
    console.error("Error fetching data: ", error);
  }
  if (data) {
    console.log("Subgraph data: ", data);
  }

  // 返回状态、错误和数据
  return { loading, error, data };
};

export default useGraphData;
