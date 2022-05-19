const OrderIndex = ({ orders }) => {
  if (!orders) {
    return <h1>No orders on our bucket right now</h1>;
  }
  return (
    <ul>
      {orders?.map((order) => {
        return (
          <li key={order.id}>
            {order.ticket.title} - {order.status}
          </li>
        );
      })}
    </ul>
  );
};

OrderIndex.getInitialProps = async (context, client) => {
  const { data } = await client.get('/api/orders');

  return {
    orders: data,
  };
};

export default OrderIndex;
